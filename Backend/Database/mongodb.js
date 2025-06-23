import mongoose from "mongoose";
import { DB_URL, NODE_ENV } from "../Config/env.js";

if (!DB_URL) {
  throw new Error("Please add mongoDB URL in .env.<production>/<development>.local");
}

const connectToDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`Connected to Database in ${NODE_ENV} mode`);
  } catch (error) {
    console.log("Error connecting to Database: ", error);
    process.exit(1); // This kills the current process, if there is error connecting to database, no need to continue.
  }
};

export default connectToDB;

// Connecting database. First we check DB_URL because thats what connects monogdb atlas. Then we connect using mongoose.connect. Also catch any error happen when try to connect.

// If connection error, check for ip in mongodb atlas.
