"use-strict";
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  //the template for what each order should look like
  item: { type: String, required: true },
  count: { type: Number, required: true },
  date: { type: String, required: true },
});

export default mongoose.model("orders", orderSchema);
