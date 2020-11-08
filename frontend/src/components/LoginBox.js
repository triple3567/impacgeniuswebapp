import React from "react"
import '../css/Login.css'
import { Form, Input, Button, Checkbox } from 'antd'
import { withRouter } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

var firebaseConfig = {
  apiKey: "AIzaSyCCJf2xvI5J6gVeET30oRD7ZG8yGhMGib4",
  authDomain: "igproject-5c36c.firebaseapp.com",
  databaseURL: "https://igproject-5c36c.firebaseio.com",
  projectId: "igproject-5c36c",
  storageBucket: "igproject-5c36c.appspot.com",
  messagingSenderId: "529386033730",
  appId: "1:529386033730:web:2093e22cb8d0b66c6993db",
  measurementId: "G-PYTZYX6Z2F"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
const uiConfig = {
signInFlow: "popup",
signInOptions: [
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
],
callbacks: {
    signInSuccessWithAuthResult: () => false
}
};

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const LoginBox = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
        console.log(values.username);
        onSubmit();
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      
      const onSubmit = withRouter(({ history }) => {
        console.log('shouldve chaged');
        history.push('/dashboard');
      })

    return(
        <div className='Login-box'>
            <div class='column' style={{width: "50%", margin:"auto"}}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" onSubmit={onSubmit}> 
                        Submit
                        </Button >
                    </Form.Item>
                </Form>

                <div style={{paddingTop: "5%"}} class='row' className="Center-text">
                <StyledFirebaseAuth  className ="googlebutton"
                    uiConfig={uiConfig} 
                    firebaseAuth={auth}
                />
                </div>

            </div>
        </div>
    )
}
export default LoginBox;