import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';

import connectDB from './db/connectDB.js';

const app = express();

const PORT = process.env.PORT || 5000;

// MIDDLWARE
app.use(express.json());// allows us to parse incoming requests:req.body
app.use(cors());// allows us to make requests from frontend to backend
app.use(cookieParser());// allows us to store user data in cookies


//

app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});