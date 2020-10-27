import React from 'react';
import '../css/Login.css'
import LoginBox from '../components/LoginBox.js'

function Login(){
    return(
        <div className='Login'>
            <header className='Login-header'>
                Imprint Genius
            </header>    
            <LoginBox/>
        </div>
    )
}

export default Login