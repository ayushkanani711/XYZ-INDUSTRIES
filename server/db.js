import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoURL = process.env.mongoURL;

const connetToMongo = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully.\n");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connetToMongo;
