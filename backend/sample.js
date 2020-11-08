//this file will load in the sample orders from the sample.json file
//temporary until we can get promostandards working
import fs from "fs";
let samples = fs.readFileSync("./samples.json");
samples = JSON.parse(samples);
//

const getSampleData = () => {
  let sampleData = [];
  let id = 1;

  samples.forEach((element) => {
    element["id"] = id;
    sampleData.push(element);
    id++;
  });

  return sampleData;
};

export default getSampleData;
