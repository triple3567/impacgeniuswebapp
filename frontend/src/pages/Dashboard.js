import React from 'react';
import '../css/Dashboard.css'

function Dashboard(){
    return(
        <div className='Dashboard'>
            <header className='Dashboard-header'>
                <div className='Dashboard-title'>
                    COMPANY NAME HERE
                </div>
            </header>
            
            <div className='Dashboard-module1'>
                module 1
            </div>

            <div className='Dashboard-module2'>
                module 2
            </div>

            <div className='Dashboard-module3'>
                module 3
            </div>

            <div className='Dashboard-module4'>
                module 4
            </div>
        </div>
    )
}
export default Dashboard;