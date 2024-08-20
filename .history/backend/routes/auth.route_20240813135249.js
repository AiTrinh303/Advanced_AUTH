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
import { inputValidations } from '../middleware/userValidations.js';

const router = Router();

router.post("/signup", signup);
router.post("/login",inputValidations, loValidations login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);