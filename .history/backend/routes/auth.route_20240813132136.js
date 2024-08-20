import {Router} from 'express';
import {
    signup, 
    login, 
    logout
} from '../controllers/auth.controller.js';

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);