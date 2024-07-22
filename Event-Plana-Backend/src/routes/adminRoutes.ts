// routes/adminRoutes.ts
import { Router } from 'express';
import { adminController } from '../controllers/adminController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.get('/users', authMiddleware, adminController.getAllUsers);
router.put('/users/role', authMiddleware, adminController.updateUserRole);
router.delete('/users/:userId', authMiddleware, adminController.deleteUser);

router.get('/user-statistics', authMiddleware, adminController.getUserStatistics);
router.get('/event-statistics', authMiddleware, adminController.getEventStatistics);
router.get('/reports', authMiddleware, adminController.generateReports);

export default router; // Export router as default

