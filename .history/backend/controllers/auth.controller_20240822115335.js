import bcrypt from "bcrypt";
import crypto from "crypto";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import { User } from "../models/user.model.js";
import { 
	sendVerificationEmail,
	sendWelcomeEmail,
	sendPasswordResetEmail,
	sendResetSuccessEmail,
 } from "../nodemailer/sendEmail.js";

//1. SIGNUP: 
//- Check if all fields are provided
//- Check if user already exists
//- Hash the password
//- Generate a 6 digit random number as verification token
//- Set verification token expiry to 24 hours
//- Save the user
//- Generate a JWT token and set it in a cookie
//- Send a verification email
//- Send the user data in response with password removed
//- Handle errors

export const signup = async (req, res) => {
	const { email, password, name } = req.body;

	try {
		if (!email || !password || !name) {
			throw new Error("All fields are required");
		}

		const userAlreadyExists = await User.findOne({ email });

		if (userAlreadyExists) {
			return res.status(400).json({ success: false, message: "User already exists" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const verificationToken = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit random number
        const verificationTokenExpiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

		const user = new User({			
            name,
			password: hashedPassword,
			email,
			verificationToken,
			verificationTokenExpiresAt
		});

		await user.save();

		// jwt
		generateTokenAndSetCookie(res, user._id, user.isAdmin);

		await sendVerificationEmail(user.email, verificationToken);

		res.status(201).json({
			success: true,
			message: "User created successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} 
    catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};

//2. VERIFY EMAIL: 
//- Find the user with the verification token
//- If user not found, return an error
//- If user found, set isVerified to true
//- Remove the verification token and expiry
//- Save the user
//- Send a welcome email
//- Send the user data in response with password removed
//- Handle errors

export const verifyEmail = async (req, res) => {
	const { code } = req.body;
	try {
		const user = await User.findOne({
			verificationToken: code,
			verificationTokenExpiresAt: { $gt: Date.now() },
		});

		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid or expired verification code" });
		}

		user.isVerified = true;
		user.verificationToken = undefined;
		user.verificationTokenExpiresAt = undefined;
		await user.save();

		await sendWelcomeEmail(user.email, user.name);

		res.status(200).json({
			success: true,
			message: "Email verified successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} 
	catch (error) {
		console.log("error in verifyEmail ", error);
		res.status(500).json({ success: false, message: "Server error" });
	}
};

//3. LOGIN: 
//- Check if email and password are provided
//- Find the user with the email
//- If user not found, return an error
//- Compare the password
//- If password is incorrect, return an error
//- If password is correct, generate a JWT token and set it in a cookie
//- Update the lastLogin field
//- Send the user data in response with password removed
//- Handle errors

export const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}

        // jwt
		generateTokenAndSetCookie(res, user._id, user.isAdmin);
		
	
		user.lastLogin = new Date();
		await user.save();

		res.status(200).json({
			success: true,
			message: "Logged in successfully",
			user: {
				...user._doc,
				password: undefined,
				// isAdmin: undefined,
			},
		});
		console.log("User logged in successfully");
	
	} 
	catch (error) {
		console.log("Error in login ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};

//4. LOGOUT: 
//- Clear the token cookie
//- Send a success response

export const logout = async (req, res) => {
	res.clearCookie("token");
	res.status(200).json({ success: true, message: "Logged out successfully" });
};


//5. FORGOT PASSWORD: 
//- Find the user with the email
//- If user not found, return an error
//- Generate a random token
//- Set the token expiry to 1 hour
//- Save the token and expiry in the user
//- Send a reset password email with the token
//- Send a success response
//- Handle errors

export const forgotPassword = async (req, res) => {
	const { email } = req.body;
	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ success: false, message: "User not found" });
		}

		const resetToken = crypto.randomBytes(20).toString("hex"); // random token
		const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour

		user.resetPasswordToken = resetToken;
		user.resetPasswordExpiresAt = resetTokenExpiresAt;

		await user.save();

		await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);

		res.status(200).json({ success: true, message: "Password reset link sent to your email", resetToken });
	} 
    catch (error) {
		console.log("Error in forgotPassword ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};

//6. RESET PASSWORD: 
//- Find the user with the reset token
//- If user not found, return an error
//- Update the new password - hash it
//- Remove the reset token and expiry
//- Save the user with new password
//- Send a password reset success email
//- Send a success response
//- Handle errors

export const resetPassword = async (req, res) => {
	try {
		const { token } = req.params;
		const { password } = req.body;

		const user = await User.findOne({
			resetPasswordToken: token,
			resetPasswordExpiresAt: { $gt: Date.now() },
		});

		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid or expired reset token" });
		}

		// update password
		const hashedPassword = await bcrypt.hash(password, 10);

		user.password = hashedPassword;
		user.resetPasswordToken = undefined;
		user.resetPasswordExpiresAt = undefined;
		await user.save();

		await sendResetSuccessEmail(user.email);

		res.status(200).json({ success: true, message: "Password reset successful" });
	} 
    catch (error) {
		console.log("Error in resetPassword ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};

//7. CHECK AUTH - get user data
//- Find the user with the userId
//- If user not found, return an error
//- If user found, send the user data in response
//- Handle errors

export const checkAuth = async (req, res) => {
	try {
		const user = await User.findById(req.userId).select("-password");
		if (!user) {
			return res.status(400).json({ success: false, message: "User not found" });
		}
		res.status(200).json({ success: true, user });
	} 
    catch (error) {
		console.log("Error in checkAuth ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};

//
