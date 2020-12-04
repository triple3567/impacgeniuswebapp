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

export const getAveragePrice = async (req, res) => {

  const data = getSampleData();

  var avg_price = 0.0

  
  data.forEach((element) => {
    avg_price = avg_price + parseFloat(element.cost)
  });
  

  avg_price = avg_price / data.length
 
  res.send([avg_price]);
  res.end()
};

export const getTotalSales = async (req, res) => {

  const data = getSampleData();

  var total_sales = 0.0

  
  data.forEach((element) => {
    total_sales = total_sales + parseFloat(element.cost)
  });
  
 
  res.send([total_sales]);
  res.end()
};

export const getNumOrders = async (req, res) => {

  const data = getSampleData();

  res.send([data.length]);
  res.end()
};
