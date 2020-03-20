import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

import AppRouter from "./AppRouter";
import centerStyle from "./utils/centerStyle";

function App() {
  return (
    <div style={centerStyle}>
      <Card border="primary" style={{ width: "50rem" }}>
        <Card.Body>
          <AppRouter />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
