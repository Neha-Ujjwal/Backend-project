import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed!!!!", err);
  });

export { app };
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
