import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

<<<<<<< HEAD
<<<<<<< Updated upstream
function App() {
=======

const App = () => {
>>>>>>> Stashed changes
=======
const App = () => {
>>>>>>> 6a543a9d858b85d459565b99087a2463f3c909b1
  return (
    // switch determines which component to return based on the path
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
    </Switch>
  );
};

export default App;
 