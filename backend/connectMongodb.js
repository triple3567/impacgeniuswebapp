"use-strict";
import mongoose from "mongoose";
import config from "./config.js";

export default () => {
  //connect to mongodb atlas
  try {
    mongoose.connect(config.db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return mongoose.connection;
  } catch (error) {
    console.error(error);
  }
};
