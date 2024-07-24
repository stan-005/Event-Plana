import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { userService } from '../services/userService';
import { User } from '../interfaces/user';

export const userController = {
  register: async (req: Request, res: Response) => {
    try {
      const { username, email, password, role } = req.body;

      const existingUser = await userService.getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const user = await userService.registerUser(username, email, password);

      // Delay response by 2 seconds
      setTimeout(() => {
        return res.status(201).json({
          message: 'User registration successful',
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            role: user.role,
          },
        });
      }, 2000); // 2 seconds delay
    } catch (error) {
      console.error('Error during user registration:', error);
      return res.status(500).json({ message: error instanceof Error ? error.message : 'Internal Server Error' });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await userService.getUserByEmail(email);

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '4h' });

      // Delay response by 2 seconds
      setTimeout(() => {
        return res.status(200).json({ message: 'Login successful', user, token });
      }, 2000); // 2 seconds delay
    } catch (error) {
      console.error('Error during user login:', error);
      return res.status(500).json({ message: error instanceof Error ? error.message : 'Internal Server Error' });
    }
  },

  updateProfile: async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id as number;
      const updateData: Partial<User> = req.body;

      // Handle profile image upload
      if (req.file) {
        updateData.profileImage = req.file.path; // Path where the image is stored
      }

      if (updateData.email) {
        const existingUser = await userService.getUserByEmail(updateData.email);
        if (existingUser && existingUser.id !== userId) {
          return res.status(400).json({ message: 'Email already in use' });
        }
      }

      const updatedUser = await userService.updateProfile(userId, updateData);

      return res.status(200).json({
        message: 'Profile updated successfully',
        user: updatedUser,
      });
    } catch (error) {
      console.error('Error during profile update:', error);
      return res.status(500).json({ message: error instanceof Error ? error.message : 'Internal Server Error' });
    }
  },

  requestPasswordReset: async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
      const token = await userService.generatePasswordResetToken(email);
      if (!token) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
      console.error('Error during password reset request:', error);
      return res.status(500).json({ message: error instanceof Error ? error.message : 'Internal Server Error' });
    }
  },

  resetPassword: async (req: Request, res: Response) => {
    try {
      const { token, newPassword } = req.body;
      const success = await userService.resetPassword(token, newPassword);
      if (!success) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }

      return res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
      console.error('Error during password reset:', error);
      return res.status(500).json({ message: error instanceof Error ? error.message : 'Internal Server Error' });
    }
  },
};
