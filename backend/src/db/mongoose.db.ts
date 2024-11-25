import mongoose from "mongoose";
import env from "../utils/env";

const connectDB = async () => {
  try {
    const mongoURI = env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("MongoDB connection string is missing in .env file.");
    }

    await mongoose.connect(mongoURI);

    console.log("MongoDB connected successfully.");
  } catch (error : any) {
    console.error("MongoDB connection failed:", error.message);
    setTimeout(connectDB, 1000 * 5)
  }

};

export default connectDB;
