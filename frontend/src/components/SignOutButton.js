import React from "react";
import auth from "./LoginBox.js";
import firebase from "firebase/app";
import "firebase/auth";
import { Button } from "antd";

const SignOutButton = (props) => {
  const onSignOut = (props) => {
    firebase.auth().signOut();
    window.location.href = "/";
  };

  return (
    <div className="SignOutButton">
      <Button type="primary" onClick={onSignOut}>
        {" "}
        Sign Out{" "}
      </Button>
    </div>
  );
};
export default SignOutButton;
