import {Router} from 'express';
import {
    signup, 
    login, 
    logout,
    verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth,
} from '../controllers/auth.controller.js';
import { signupValidations, loginValidations } from '../middleware/userValidations.js';

const authRoutes = Router();

authRoutes.get("/check-auth", verifyToken, checkAuth);

authRoutes.post("/signup", signupValidations, signup);
authRoutes.post("/login", loginValidations, login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;