import React, { useState, useEffect } from "react"
import {Carousel} from 'antd'
import "../css/StatisticsCarousel.css"

const axios = require('axios').default;

const contentStyle = {
    color: '#fff',
    lineHeight: '15vh',
    textAlign: 'center',
    background: '#364d79',
    opacity: '0.8',
  };

const StatisticsCarousel = (props) => {
    const [avg_order, set_avg_order] = useState([])
    const [total_sales, set_total_sales] = useState([])
    const [num_orders, set_num_orders] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const avg = await axios(
                'https://imprintgenius-webapp.herokuapp.com/api/average/'
            );

            const total = await axios(
                'https://imprintgenius-webapp.herokuapp.com/api/total/'
            );

            const numSales = await axios(
                'https://imprintgenius-webapp.herokuapp.com/api/numSales/'
            );
    
            set_avg_order(avg.data);
            set_total_sales(total.data);
            set_num_orders(numSales.data);
        }

        fetchData();
    }, []);

    return(
        <div className="carousel">
            <Carousel autoplay>
                <div>
                    <h1 style={contentStyle}>Average Order: ${avg_order}</h1>
                </div>
                <div>
                    <h1 style={contentStyle}>Total Sales: ${total_sales}</h1>
                </div>
                <div>
                    <h1 style={contentStyle}>Orders In Progress: {num_orders}</h1>
                </div>
            </Carousel>
        </div>
    );
}

export default StatisticsCarousel;