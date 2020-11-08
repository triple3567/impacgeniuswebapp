"use-strict";
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  //the template for what each order should look like
  order_number: { type: Number, required: true },
  product_name: { type: String, required: true },
  count: { type: Number, required: true },
  date: { type: String, required: true },
  product_type: { type: String, required: true },
  cost: { type: Number, required: true },
  customer_name: { type: String, required: true },
});

export default mongoose.model("orders", orderSchema);
