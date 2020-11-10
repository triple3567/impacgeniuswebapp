import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import "../css/VendorSales.css"

class VendorChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Vendor1', 'Vendor2', 'Vendor3'],
                datasets:[
                    {
                        label:'Dollars',
                        data: [20000,5000,2500],
                        backgroundColor:["LightSalmon","Khaki","LightGreen","LightSkyBlue","Orchid"],
                        hoverBackgroundColor: ["LightSalmon","Khaki","LightGreen","LightSkyBlue","Orchid"]
                    }
                ]
            },
            optionData: {
                responsive:true,
                title: {
                    display: true,
                    text: 'Vendor Sales',
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

export default VendorChart;
