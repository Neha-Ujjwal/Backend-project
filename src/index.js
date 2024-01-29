import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

//2nd approach
//const app = express();
/*async function connectDB() {
  try {
    await mongoose.connext(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("ERROR: ", error);
      throw err;
    });

    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log(error);
  }
}

connectDB();*/
