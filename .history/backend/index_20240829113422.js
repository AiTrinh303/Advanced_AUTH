import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';
import connectDB from './db/connectDB.js';
import errorHandler from './middleware/errorHandler.js';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import path from 'path';
import passport from 'passport';
// import cookieSession from 'cookie-session';
import session from 'express-session';


const app = express();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// MIDDLWARES
app.use(express.json());// allows us to parse incoming requests:req.body

app.use(
	cors({
		origin: process.env.CLIENT_URL, 
		credentials: true
	})
);// allows us to make requests from frontend to backend

app.use(cookieParser());// allows us to store user data in cookies

// app.use(
// 	cookieSession ({
// 		name: 'session',
// 		keys: [process.env.COOKIE_KEY],
// 		maxAge: 24 * 60 * 60 * 1000, // 24 hours
// 	})
// );

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 24 * 60 * 60 * 1000, // 24 hours
	}
}));

app.use(passport.initialize()); // initialize passport
app.use(passport.session()); // use passport session


if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/dist')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', '/frontend/dist', '/frontend/dist/index.html'));
	});
}

// ROUTES
app.use("/auth", authRoutes);
app.use("/user", userRoutes);


// ERROR HANDLER
app.use(errorHandler);


app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});