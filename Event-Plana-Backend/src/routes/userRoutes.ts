import { Router } from 'express';
import { userController } from '../controllers/userController';
import { authMiddleware } from '../middleware/authMiddleware';
import { upload } from '../middleware/uploadMiddleware'; // Import the upload middleware

const router = Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

// Profile management routes
router.put('/profile', authMiddleware, upload.single('profileImage'), userController.updateProfile);

// Password reset routes
router.post('/password-reset/request', userController.requestPasswordReset);
router.post('/password-reset/reset', userController.resetPassword);

export default router;
