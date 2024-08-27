import {Router} from 'express';
import {
    signup, 
    login, 
    logout,
    verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth,
    loginSuccess,

} from '../controllers/auth.controller.js';
import { signupValidations, loginValidations } from '../middleware/userValidations.js';
import { verifyToken } from '../middleware/verifyToken.js';

const authRoutes = Router();

authRoutes.get("/check-auth", verifyToken, checkAuth);



authRoutes.post("/signup", signupValidations, signup);

authRoutes.post("/login", loginValidations, login);
authRoutes.get("/login/success", loginSuccess);
authRoutes.get("/login/failure", loginFailuree;
authRoutes.get("/login/google", loginGoogle);
authRoutes.get("/login/google/callback", loginGoogleCallback);
authRoutes.get("/login/github", loginGithub);
authRoutes.get("/login/github/callback", loginGithubCallback);
authRoutes.get("/login/facebook", loginFacebook);
authRoutes.get("/login/facebook/callback", loginFacebookCallback);



authRoutes.post("/logout", logout);
authRoutes.post("/verify-email", verifyEmail);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/reset-password/:token", resetPassword);

export default authRoutes;