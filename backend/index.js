import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// application middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRoutes);
app.use(helmet());

// mongodb connection
connectDB();
app.post("/hello", (req, res) => {
  console.log(req.body.email);
  res.send(req.body);
});
// port
const port = 5000;

// server listening
app.listen(port, () => {
  console.log(`server runing on port : ${port}`);
});
