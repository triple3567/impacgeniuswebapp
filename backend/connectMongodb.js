"use-strict";
import mongoose from "mongoose";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

let config = null;
//only import config if not in production mode
//need to use "require" for conditional import
if (process.env.NODE_ENV !== "production") {
  config = require("./config.cjs");
}

export default () => {
  //connect to mongodb atlas
  try {
    mongoose.connect(process.env.MONGO_URI || config.db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return mongoose.connection;
  } catch (error) {
    console.error(error);
  }
};
