"use-strict";
import order from "../models/orderModel.js";

export const getAllOrders = async (req, res) => {
  await order.find({}, (err, data) => {
    if (err)
      return res.status(200).send({
        message: err.message || "There was an unknown error",
      });
    res.json(data);
  });
};
