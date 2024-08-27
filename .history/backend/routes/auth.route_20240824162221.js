import {Router} from 'express';
import passport from 'passport';
import {
    signup, 
    login, 
    logout,
    verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth,
    loginSuccess,
    loginFailure,

} from '../controllers/auth.controller.js';
import { signupValidations, loginValidations } from '../middleware/userValidations.js';
import { verifyToken } from '../middleware/verifyToken.js';

const authRoutes = Router();

authRoutes.get("/check-auth", verifyToken, checkAuth);



authRoutes.post("/signup", signupValidations, signup);

authRoutes.post("/login", loginValidations, login);
authRoutes.get("/login/success", loginSuccess);
authRoutes.get("/login/failure", loginFailure);
authRoutes.get("/login/google", passport.authenticate("google", { scope: ["profile"] }));
authRoutes.get("/login/google/callback", 
    passport.authenticate(
      "google", 
      {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
authRoutes.get("/login/github", passport.authenticate("github", { scope: ["profile"] }));
authRoutes.get("/login/github/callback", 
    passport.authenticate("github", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
authRoutes.get("/login/facebook",  passport.authenticate("facebook", { scope: ["profile"] }));
authRoutes.get("/login/facebook/callback", 
    passport.authenticate("facebook", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


authRoutes.post("/logout", logout);
authRoutes.post("/verify-email", verifyEmail);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/reset-password/:token", resetPassword);

export default authRoutes;