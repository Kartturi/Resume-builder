import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StateProvider } from "./state";
import Reducer from "./Reducers/index";
import initialState from "./initialState";
//components
import Dashboard from "./components/dashboard";
import Edit from "./components/Edit/edit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faPlus);
function App() {
  return (
    <Router>
      <StateProvider initialState={initialState} reducer={Reducer}>
        <div className="App">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/edit" component={Edit} />
        </div>
      </StateProvider>
    </Router>
  );
}

export default App;
