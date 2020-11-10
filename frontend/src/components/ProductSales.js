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
            },
            optionData: {
                responsive:true,
                title: {
                    display: true,
                    text: 'Product Sales',
                    fontColor: "white",
                    fontSize: 15,
                },
                legend:{
                    position: "right",
                    labels:{
                        fontColor: "white"
                    }
                },
                elements: {
                    arc: {
                        borderWidth: 0
                    }
                }
            }
        }
    }
    render(){
        return (
            <div className="chart">
                <Pie
                data ={this.state.chartData}
                options={this.state.optionData}
                />
            </div>
        )
    }
}

export default ProductChart;
