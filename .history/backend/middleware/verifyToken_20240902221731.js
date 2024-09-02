import jwt from "jsonwebtoken";

//VERIFY TOKEN:
//1. Get the token from the cookies
//2. Check if the token exists
//3. Verify the token: use "jwt.verify()" method
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

		// req.user = {
		// 	id: decoded.userId,
		// 	isAdmin: decoded.isAdmin,
		// };

    req.userId = decoded.userId;
    
		next();
	} 
  catch (error) {
		console.log("Error in verifyToken ", error);
		return res.status(500).json({ success: false, message: "Server error" });
	}
};


//VERIFY TOKEN AND AUTHORIZATION:
//1. Verify the token
//2. Check if the userId in the token is the same as the userId in the request params
//3. If the userId is the same or the user is an admin, call the next middleware
//4. If the userId is not the same and the user is not an admin, return an error

export const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } 
      else {
        res.status(403).json("You are not allowed to do that!");
      }
    });
  };


//VERIFY TOKEN AND ADMIN:  
//1. Verify the token
//2. Check if the user is an admin
//3. If the user is an admin, call the next middleware
//4. If the user is not an admin, return an error

export const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id && req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not allowed to do that!");
      }
    });
  };    