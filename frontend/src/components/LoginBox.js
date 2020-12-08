import React, { useState } from "react";
import "../css/Login.css";
import { Form, Input, Button, Checkbox } from "antd";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseConfig from "../firebaseConfig.js";
import SignInError from "../components/SignInError";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// for styling the username and password boxes
const layout = {
  labelCol: {
    span: 10,
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
  const [user] = useAuthState(auth);
  const [showError, setShowError] = useState(false);
  console.log("User Status: " + user);
  if (user != null) {
    // if user successfully signs in , set the show error hook to false
    setShowError(false);
    window.location.href = "/dashboard";
  }
  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(values.username);
    firebase
      .auth()
      .signInWithEmailAndPassword(values.username, values.password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        if (
          errorCode == "auth/user-not-found" ||
          errorCode == "auth/wrong-password"
        ) {
          console.log("The credentials you entered are invalid! Try again.");
          setShowError(true);
        }

        // ...
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="Login-box">
      <div
        class="column"
        style={{ position: "absolute", top: "15%", left: "15%" }}
      >
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
                message: "Please input your username!",
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
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>

        {/* use the showError Hook to determine if to display the sign in error component */}
        {showError && <SignInError />}
      </div>
    </div>
  );
};
export default LoginBox;
