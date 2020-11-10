import React from "react"
import {Carousel} from 'antd'
import "../css/StatisticsCarousel.css"

const contentStyle = {
    height: '259px',
    color: '#fff',
    lineHeight: '230px',
    textAlign: 'center',
    background: '#364d79',
  };

const StatisticsCarousel = (props) => {
    return(
        <div className="carousel">
            <Carousel autoplay>
                <div>
                    <h1 style={contentStyle}>Average Order: $3000</h1>
                </div>
                <div>
                    <h1 style={contentStyle}>Total Sales: $18000</h1>
                </div>
                <div>
                    <h1 style={contentStyle}>Orders In Progress: 6</h1>
                </div>
            </Carousel>
        </div>
    );
}

export default StatisticsCarousel;