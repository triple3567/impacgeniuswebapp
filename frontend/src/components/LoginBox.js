import React from "react"
import '../css/Login.css'

const LoginBox = (props) => {
    return(
        <div className='Login-box'>
            <div class='column'>
                <div class='row' style={{paddingTop: "15%"}}>
                    Username
                </div>
                <input class='row' placeholder='johnapples@gmail.com'></input>
                <div class='row'>
                    Password
                </div>
                <input class='row' placeholder='--------'></input>
                <div class='row'>
                    <button class='row'>
                    Log In
                    </button>
                </div>
            </div>
        </div>
    )
}
export default LoginBox;