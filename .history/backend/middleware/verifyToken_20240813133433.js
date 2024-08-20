import jwt from "jsonwebtoken";


//VERIFY TOKEN:
//1. Get the token from the cookies
//2. Check if the token exists
//3. Verify the token:
//  - If the token is invalid, return an error
//  - If the token is valid, set the userId in the request object
//4. Call the next middleware
//5. Handle errors

export const verifyToken = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) return res.status(401).json({ success: false, message: "Unauthorized - no token provided" });
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) return res.status(401).json({ success: false, message: "Unauthorized - invalid token" });

		req.userId = decoded.userId;
		next();
	} 
    catch (error) {
		console.log("Error in verifyToken ", error);
		return res.status(500).json({ success: false, message: "Server error" });
	}
};


//VERIFY TOKEN AND AUTHORIZATION:
//1. Get the token from the cookies
//2. Check if the token exists
