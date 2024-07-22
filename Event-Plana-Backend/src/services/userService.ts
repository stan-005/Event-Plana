import { PrismaClient, User as PrismaUser } from '@prisma/client';
import { User } from '../interfaces/user';

const prisma = new PrismaClient();

const mapPrismaUserToUser = (prismaUser: PrismaUser): User => {
  return {
    id: prismaUser.id,
    username: prismaUser.username,
    email: prismaUser.email,
    password: prismaUser.password,
    role: prismaUser.role as 'user' | 'organizer' | 'admin'
  };
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({
    where: { email }
  });
  return user ? mapPrismaUserToUser(user) : null;
};

export const createUser = async (user: User): Promise<User> => {
  const newUser = await prisma.user.create({
    data: {
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role
    }
  });
  return mapPrismaUserToUser(newUser);
};
