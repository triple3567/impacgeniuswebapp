import React from 'react';
import '../css/Dashboard.css'
import Logo from '../res/imprint_genius_logo.png'
import OrderTable from '../components/OrderTable.js'
import StatisticsCarousel from '../components/StatisticsCarousel.js'
import {Layout} from 'antd'
const {Header, Content, Footer} = Layout

function Dashboard(){
    return(
        
        <div className='Dashboard'>
            <Layout>
                <Header className='fixed-header'>
                    <img src={Logo} width="300"></img>
                </Header>
                <Content>
                    <div className='Dashboard-module1'>
                        module 1
                    </div>
        
                    <div className='Dashboard-module2'>
                        module 2
                    </div>
        
                    <div className='Dashboard-module3'>
                        <OrderTable/>
                    </div>
        
                    <div className='Dashboard-module4'>
                        <StatisticsCarousel/>
                    </div>
                </Content>
            </Layout>
        </div>
        
    )
}
export default Dashboard;