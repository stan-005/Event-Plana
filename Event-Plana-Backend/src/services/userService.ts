import { PrismaClient, User as PrismaUser } from '@prisma/client';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { User } from '../interfaces/user';
import { notificationService } from './notificationService';
import { addHours } from 'date-fns';

const prisma = new PrismaClient();
const DEFAULT_AVATAR = '/uploads/avatar.jpg'; // Specify your default avatar path

const mapPrismaUserToUser = (prismaUser: PrismaUser): User => {
  return {
    id: prismaUser.id,
    username: prismaUser.username,
    email: prismaUser.email,
    password: prismaUser.password,
    role: prismaUser.role as 'user' | 'organizer' | 'admin',
    profileImage: prismaUser.profileImage ?? DEFAULT_AVATAR, // Set default value if null
  };
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  return user ? mapPrismaUserToUser(user) : null;
};

export const createUser = async (user: User): Promise<User> => {
  const newUser = await prisma.user.create({
    data: {
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
      profileImage: user.profileImage ?? DEFAULT_AVATAR, // Set default value if null
    },
  });
  return mapPrismaUserToUser(newUser);
};

class UserService {
  async getUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user ? mapPrismaUserToUser(user) : null;
  }

  async registerUser(username: string, email: string, password: string): Promise<PrismaUser> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role: 'user',
        profileImage: DEFAULT_AVATAR, // Set default value
      },
    });

    // Send welcome email
    await notificationService.sendWelcomeEmail(user.email, user.username);

    return user;
  }

  async updateProfile(userId: number, updateData: Partial<User>): Promise<User> {
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...updateData,
        profileImage: updateData.profileImage ?? DEFAULT_AVATAR, // Set default value if null
      },
    });

    return mapPrismaUserToUser(updatedUser);
  }

  async generatePasswordResetToken(email: string): Promise<string | null> {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return null;

    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetExpires = addHours(new Date(), 1);

    await prisma.user.update({
      where: { email },
      data: {
        passwordResetToken: resetToken,
        passwordResetTokenExpiry: resetExpires,
      },
    });

    // Send reset token via email
    await notificationService.sendPasswordResetEmail(user.email, resetToken);

    return resetToken;
  }

  async resetPassword(token: string, newPassword: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: {
        passwordResetToken: token,
        passwordResetTokenExpiry: {
          gt: new Date(),
        },
      },
    });

    if (!user) return false;

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        passwordResetToken: null,
        passwordResetTokenExpiry: null,
      },
    });

    return true;
  }

  // Other methods...
}

export const userService = new UserService();
