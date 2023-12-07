import express from "express";
// import cors from 'cors';
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import submissionRouter from "./routes/submission.js";
import leaderboardRouter from "./routes/leaderboard.js";
import connectDB from "./db/connect.js";

dotenv.config();

const app = express();
app.use(express.json()) // To get the req.body







// -------Routes--------
app.use('/api/v1/auth', authRouter)
// app.use('/api/v1/', authenticateUser, submissionRouter)
// app.use('/api/v1/', authenticateUser, leaderboardRouter)

app.get("/ping", (_, res) => {
  res.status(200).json("pong");
});











const port = process.env.PORT || 3000;

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
