import mongoose from "mongoose";
import app from "./app.js";
import config from "./config/index.js";
import { v2 as cloudinary } from "cloudinary";
//create a fn
// run a fn
// (async () => {})()

(async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(config.MONGODB_URL);
    console.log("DB CONNECTED");

    app.on("error", (err) => {
      console.log("ERROR: ", err);
      throw err;
    });

    // cloudinary.config({
    //   cloud_name: "dysvuuvmm",
    //   api_key: "643825173662588",
    //   api_secret: "VdUL13e5y4iOzAOwWwWyvQSNDIg",
    // });

    const onListening = () => {
      console.log(`Listening on ${config.PORT}`);
    };

    app.listen(config.PORT, onListening);
  } catch (err) {
    console.log("ERROR ", err);
    throw err;
  }
})();

// console.log(this.jwtService);
