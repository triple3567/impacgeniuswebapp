import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    // switch determines which component to return based on the path
    <div>
     <Switch>
       <Route exact path="/" component={Login}></Route>
       <Route exact path="/login" component={Login}></Route>
       <Route exact path="/dashboard" component={Dashboard}></Route>
     </Switch>
    </div>
  );
};

export default App;
