import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Customer from "./components/Customer";
import Crust from "./components/Crust";
import Sauce from "./components/Sauce";
import Toppings from "./components/Toppings";
import Display from "./components/Display";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addcustomer" component={Customer} />
        <Route exact path="/addcrust" component={Crust} />
        <Route exact path="/addsauce" component={Sauce} />
        <Route exact path="/addtoppings" component={Toppings} />
        <Route exact path="/display" component={Display} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
