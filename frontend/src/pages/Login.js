import React from 'react';
import '../css/Login.css'
import LoginBox from '../components/LoginBox.js'
import Logo from '../res/imprint_genius_logo.png'
import LoginMessage from '../components/LoginMessage.js'

function Login(){
    return(
        <div className='Login'>
            <header className='Login-header'>
                <img src={Logo} width="75%"/>
            </header>    
            <LoginBox/>
            {/* <LoginMessage/> */}
        </div>
    )
}

export default Login