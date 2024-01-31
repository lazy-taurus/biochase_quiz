import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import submissionRouter from "./routes/submission.js";
import leaderboardRouter from "./routes/leaderboard.js";
import connectDB from "./db/connect.js";
import router from "./routes/routes.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

dotenv.config();

const app = express();
app.use(express.json()) // To get the req.body
app.use(cors());
// app.use(express.urlencoded({ extended: true }));







// -------Routes--------
app.use('/api/v1', router)
// app.use('/api/v1/', authenticateUser, submissionRouter)
// app.use('/api/v1/', authenticateUser, leaderboardRouter)

app.get("/ping", (req, res) => {
  res.status(200).json("pong");
});









app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

// -------Starting the server--------
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
