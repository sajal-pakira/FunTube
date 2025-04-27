import dotenv from "dotenv";
import connectToDB from "./db/index.js";
dotenv.config({
    path:'./env'
})
connectToDB();

/*
import express from "express";
const app = express();
//IIFE-immediately invoked function exprression
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR ", error);
    throw error;
  }
})();
*/
