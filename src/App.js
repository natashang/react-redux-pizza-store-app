import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'
import { Card } from 'react-bootstrap'

import Home from './components/Home'
import Customer from './components/Customer'
import Crust from './components/Crust'
import Sauce from './components/Sauce'
import Toppings from './components/Toppings'
import Display from './components/Display'

import centerStyle from './utils/centerStyle'

function App() {
  return (
    <div style={centerStyle}>
      <Card border="primary" style={{ width: '50rem'}}>
        <Card.Body>

          <Router>
            <Switch>
              <Route exact path="/" component = {Home}/>
              <Route exact path="/addcustomer" component = {Customer}/>
              <Route exact path="/addcrust" component = {Crust}/>
              <Route exact path="/addsauce" component = {Sauce}/>
              <Route exact path="/addtoppings" component = {Toppings}/>
              <Route exact path="/display" component = {Display}/>
            </Switch>
          </Router>          
          
        </Card.Body>
      </Card>    
    </div>
  )
}

export default App;