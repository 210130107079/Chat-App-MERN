import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://sohamtarabada2003:soham-130507@cluster0.8r2cw.mongodb.net/hat_db?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
