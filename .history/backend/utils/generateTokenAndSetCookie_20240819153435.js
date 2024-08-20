import jwt from "jsonwebtoken";

// Generate JWT token and set cookie
const generateTokenAndSetCookie = (res, userId, isAdmin) => {
	const token = jwt.sign(
		{ userId,
		  isAdmin		
		}, 
		process.env.JWT_SECRET, 
		{expiresIn: "7d"});

	console.log("token", token);	
	res.cookie("token", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: 7 * 24 * 60 * 60 * 1000,
	});

	return token;
};

export default generateTokenAndSetCookie;