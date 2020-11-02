import React from "react"
import '../css/Login.css'
import {Input, Button} from 'antd'

const LoginBox = (props) => {
    return(
        <div className='Login-box'>
            <div class='column' style={{width: "50%", margin:"auto"}}>
                <div class='row' style={{paddingTop: "15%"}}>
                    Username
                </div>
                <Input size='medium' placeholder="Username..."></Input>
                <div class='row' style={{paddingTop: "5%"}}>
                    Password
                </div>
                <Input size='medium' type='password' placeholder='Password...'></Input>
                
                <div style={{paddingTop: "10%"}} class='row' className="Center-text">
                     <Button type='primary' class='row' >
                     Log In
                     </Button>                   
                </div>

                <div style={{paddingTop: "5%"}} class='row' className="Center-text">
                <Button type='primary' class='row' >
                     Sign in with Google
                </Button>
                </div>

            </div>
        </div>
    )
}
export default LoginBox;