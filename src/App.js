import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//components
import Dashboard from "./components/dashboard";
import Edit from "./components/Edit/edit";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/edit" component={Edit} />
      </div>
    </Router>
  );
}

export default App;
