import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import '@babel/generatordot'

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});