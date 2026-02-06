import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

import { app } from "../app.js";

//db is another continent
const connectDB = async () => {
  try {
    app.on("error",(error)=>{
            console.log("ERROR: ", error);
            throw error
        })
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
