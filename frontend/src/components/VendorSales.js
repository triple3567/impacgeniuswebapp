import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

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

export default VendorChart;
