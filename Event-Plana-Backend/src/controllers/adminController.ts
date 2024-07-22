// controllers/adminController.ts
import { Request, Response } from 'express';
import { AdminService } from '../services/adminService'; // Import AdminService directly

const adminService = new AdminService(); // Instantiate AdminService here

export const adminController = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await adminService.getAllUsers();
      res.json(users);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  },

  updateUserRole: async (req: Request, res: Response) => {
    try {
      const { userId, role } = req.body;
      const updatedUser = await adminService.updateUserRole(Number(userId), role); // Ensure userId is converted to number
      res.json(updatedUser);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      await adminService.deleteUser(Number(userId)); // Ensure userId is converted to number
      res.status(204).send();
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  },

  getUserStatistics: async (req: Request, res: Response) => {
    try {
      const stats = await adminService.getUserStatistics();
      res.json(stats);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  },

  getEventStatistics: async (req: Request, res: Response) => {
    try {
      const stats = await adminService.getEventStatistics();
      res.json(stats);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  },

  generateReports: async (req: Request, res: Response) => {
    try {
      const reports = await adminService.generateReports();
      res.json(reports);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ message: err.message });
    }
  }
};
