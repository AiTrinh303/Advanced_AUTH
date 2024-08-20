import express from 'express';


const app = express();

app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});