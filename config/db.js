import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongoDb connected`);
  } catch (error) {
    console.log(`error:${error.message}`);
    process.exit(1);
  }
};
