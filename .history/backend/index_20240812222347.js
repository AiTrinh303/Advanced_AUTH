import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';


const app = express();

const PORT = process.env.PORT || 5000;

// MIDDLWARE
app.use(express.json());// allows us to parse incoming requests:req.body
app.use(cors());// allows us to make requests from frontend to backend
app.use(cookieParser());


app.listen(PORT, () => {
	
	console.log("Server is running on port: ", PORT);
});