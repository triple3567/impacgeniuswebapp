import React from "react";
import "../css/Dashboard.css";
import Logo from "../res/imprint_genius_logo.png";
import OrderTable from "../components/OrderTable.js";
import StatisticsCarousel from "../components/StatisticsCarousel.js";
import { Layout } from "antd";
import ProductChart from "../components/ProductSales";
import VendorChart from "../components/VendorSales";
const { Header, Content, Footer } = Layout;

function Dashboard() {
  return (
    <div className="Dashboard">
          <div className="Dashboard-header">
            <img src={Logo} width="300%" className="Dashboard-logo"></img>
          </div>
          <div classNane="Dashboard-main">
            <div className="Dashboard-module1">
              <ProductChart />
            </div>
  
            <div className="Dashboard-module2">
              <VendorChart />
            </div>
  
            <div className="Dashboard-module3">
              <OrderTable />
            </div>
  
            <div className="Dashboard-module4">
              <StatisticsCarousel />
            </div>
          </div>
    </div>
  );
}
export default Dashboard;
