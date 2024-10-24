import express from "express";
import { connectDb } from "./config/db.js";
import jobRoute from "./routes/job.route.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", jobRoute);

app.listen(5000, () => {
  connectDb();
  console.log("server running at port 5000");
});
