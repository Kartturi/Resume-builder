import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { StateProvider } from "./state";
import Reducer from "./Reducers/index";

//components
import Dashboard from "./components/dashboard";
import Edit from "./components/Edit/edit";

function App() {
  const resume = JSON.parse(localStorage.getItem("resume"));
  let initialState;

  //check if we have saved version in localhost and use that one for init state
  if (resume) {
    initialState = resume;
  } else {
    initialState = {
      name: "",
      title: "",
      personal: "Yksityiskohtaiset tiedot",
      phone: "",
      email: "",
      profileTitle: "Profiili",
      profile: "",
      linkTitle: "Linkit",
      link: ""
    };
  }

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
