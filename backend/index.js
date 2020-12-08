"use-stict";
import express from "express";
import bodyParser from "body-parser";
import orderRouter from "./routes/orderRouter.js";
import connectToDatabase from "./connectMongodb.js";
import cors from "cors";

//make the express app
const app = express();

app.use(cors());

//body parsing middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// router middleware
app.use("/api", orderRouter);

//allow accessing information from foreign domains
//might need to use this so we can make requests
//app.use(cors()) would have to import cors from "cors";

//connect to MongoDB Atlas
const db = connectToDatabase();

db.on("error", (error) => {
  console.error("Failed to connect to MongoDB Atlas");
});
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");

  //serve static assets if in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));

    //index.html for the page routs
    app.get("*", (req, res) => {
      res.sendFile(
        path.resolve(__dirname, "../frontend", "build", "index.html")
      );
    });
  }

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`express app is now listening on port ${PORT}`);
  });
});
