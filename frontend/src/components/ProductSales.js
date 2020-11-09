import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

class ProductChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Product1', 'Product2', 'Product3','Product4', 'Product5','Product6','Product7'],
                datasets:[
                    {
                        label:'Dollars',
                        data: [751.59, 720.42, 215.92, 123.34, 666.66, 70.5, 60.6],
                        backgroundColor:["LightSalmon","Khaki","LightGreen","LightSkyBlue","Orchid"],
                        hoverBackgroundColor: ["LightSalmon","Khaki","LightGreen","LightSkyBlue","Orchid"]
                    }
                ]
            }
        }
    }
    render(){
        return (
            <div className="chart">
                <Pie
                data ={this.state.chartData}
                options={{
                    legend:{
                        position: "right",
                        labels: {
                            fontColor: "white"
                        }
                    },
                    elements: {
                        arc: {
                            borderWidth : 0
                        }
                    }
                }}
                />
            </div>
        )
    }
}



export default ProductChart;

/*var ctx1 = document.getElementById('product_chart');


function color_selector(length){
    var color_array = ["LightCoral","LightSalmon","Khaki","LightGreen","LightSkyBlue","Coral","Orchid"]
    var selected_array = []

    for(var i = 0; i<length; i++){
        selected_array.push(color_array[i])//Math.floor(Math.random() * color_array.length)]);
    }
    
    return color_array;
}

// =============================== SALES BY PRODUCT ========================================================== //


// for orders in database
    // for products in products_name
       // if the product name does not exist in product names:
            // add the product name to product names
       // find product name and add cost to corresponding cost value multiplied by count

    // sort product names


var product_sales = [751.59, 720.42, 215.92, 123.34, 666.66, 70.5, 60.6];
var product_names = ['Product1', 'Product2', 'Product3','Product4', 'Product5','Product6','Product7'];

var COLORS = color_selector(product_names.length)

// graph 1 : sales by product 
var product_chart = new Chart(ctx1, {
 type: 'pie',
 data: {
    labels: product_names,
    datasets: [{
        label: 'Sales By Product',
        data: product_sales,
        backgroundColor : [
            "LightCoral","LightSalmon","Khaki","LightGreen","LightSkyBlue","Orchid"
        ]
    }],
    options: {
        display: true,
        text: 'Sales by Product'
    }
 },
})*/