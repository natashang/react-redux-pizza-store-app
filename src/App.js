import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'
import { Card } from 'react-bootstrap'

import links from './utils/links'
import centerStyle from './utils/centerStyle'

function App() {
  return (
    <div style={centerStyle}>
      <Card border="primary" style={{ width: '50rem'}}>
        <Card.Body>
          <Router>
            <Switch>
              {links.map(link => {
                return(
                  <Route 
                    exact
                    path = {link.path} 
                    component = {link.component}
                    key = {link.id}    
                    />
                )
              })}
            </Switch>
          </Router>
        </Card.Body>
      </Card>    
    </div>
  );
}

export default App;