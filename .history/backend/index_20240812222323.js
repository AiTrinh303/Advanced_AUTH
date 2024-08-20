import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';


const app = express();

const PORT = process.env.PORT || 5000;

// MIDDLWARES

app.listen(PORT, () => {
	
	console.log("Server is running on port: ", PORT);
});