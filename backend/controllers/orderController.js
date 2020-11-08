"use-strict";
import order from "../models/orderModel.js";
import getSampleData from "../sample.js";

export const getAllOrders = async (req, res) => {
  /*
  await order.find({}, (err, data) => {
    if (err)
      return res.status(200).send({
        message: err.message || "There was an unknown error",
      });
    res.json(data);
  });
  */
  // temporary just to send the sample data for now

  const data = getSampleData();
  res.json(data);
};
