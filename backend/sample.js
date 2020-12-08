//this file will load in the sample orders from the sample.json file
import fs from "fs";

let samples = fs.readFileSync("./backend/samples.json");
let shopify_data = fs.readFileSync("./backend/IG_Shopify_Sample_Data.json");
samples = JSON.parse(samples);
shopify_data = JSON.parse(shopify_data);
//

const getSampleData = () => {
  let sampleData = [];
  let id = 1;

  //add samples from our custom made samples.json file
  samples.forEach((element) => {
    element["id"] = id;
    sampleData.push(element);
    id++;
  });

  //add the orders given by imprintgenius from IG_Shopify_Sample_Data.json
  shopify_data.body["line_items"].forEach((element) => {
    //create a simplified version of the object with the properties that we need

    let tmp = {};

    tmp["id"] = shopify_data.body.id;
    tmp["count"] = element.quantity;
    tmp["order_number"] = shopify_data.body.order_number;
    tmp["product_name"] = element.title;
    tmp["cutomer_email"] = shopify_data.body.email;
    tmp["cost"] = element.price;
    tmp["product_type"] = "merchandise";
    tmp["date"] = shopify_data.body.created_at;
    tmp["customer_name"] =
      shopify_data.body.billing_address.first_name +
      " " +
      shopify_data.body.billing_address.last_name;

    sampleData.push(tmp);
  });

  return sampleData;
};

export default getSampleData;
