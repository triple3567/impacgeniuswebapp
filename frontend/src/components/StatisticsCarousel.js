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
                    <h1 style={contentStyle}>Average Order: $56.24</h1>
                </div>
                <div>
                    <h1 style={contentStyle}>Total Sales: $23451.52</h1>
                </div>
                <div>
                    <h1 style={contentStyle}>Orders In Progress: 7</h1>
                </div>
            </Carousel>
        </div>
    );
}

export default StatisticsCarousel;