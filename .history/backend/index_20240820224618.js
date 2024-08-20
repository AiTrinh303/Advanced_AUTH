import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';
import connectDB from './db/connectDB.js';
import errorHandler from './middleware/errorHandler.js';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 5000;

// MIDDLWARE
app.use(express.json());// allows us to parse incoming requests:req.body

app.use(cors({origin: 'http://localhost:5173', credentials: true}));// allows us to make requests from frontend to backend

app.use(cookieParser());// allows us to store user data in cookies


// ROUTES
app.use("/auth", authRoutes);
app.use("/user", userRoutes);


// ERROR HANDLER
app.use(errorHandler);


app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});