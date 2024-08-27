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
import { verifyToken } from '../middleware/verifyToken.js';

const authRoutes = Router();

authRoutes.get("/check-auth", verifyToken, checkAuth);



authRoutes.post("/signup", signupValidations, signup);

authRoutes.post("/login", loginValidations, login);
authRoutes.get("/login/success", loginSuccess);
authRoutes.get("/login/failure", loginFailure);
authRoutes.get("/login/google", loginGoogle);




authRoutes.post("/logout", logout);
authRoutes.post("/verify-email", verifyEmail);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/reset-password/:token", resetPassword);

export default authRoutes;