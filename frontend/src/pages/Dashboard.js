import React from 'react';
import '../css/Dashboard.css'
import ProductChart from '../components/ProductSales';
import VendorChart from '../components/VendorSales';


function Dashboard(){
    return(
        <div className='Dashboard'>
            <header className='Dashboard-header'>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
                <div className='Dashboard-title'>
                    COMPANY NAME HERE
                </div>
            </header>
            
            <div className='Dashboard-module1'>
                SALES BY PRODUCT
                <ProductChart/>
            </div>



            <div className='Dashboard-module2'>
                SALES BY VENDOR
                <VendorChart/>
            </div>

            <div className='Dashboard-module3'>
               
            </div>

            <div className='Dashboard-module4'>
               
            </div>
        </div>
    )
}
export default Dashboard;