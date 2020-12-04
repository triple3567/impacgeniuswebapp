"use-strict";
import express from "express";
import * as orderController from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/", orderController.getAllOrders);

orderRouter.get("/average/", orderController.getAveragePrice);

orderRouter.get("/total/", orderController.getTotalSales);

orderRouter.get("/numSales/", orderController.getNumOrders);
export default orderRouter;
