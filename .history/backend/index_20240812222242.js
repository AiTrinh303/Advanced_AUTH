import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import 

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});