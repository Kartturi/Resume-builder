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
      name: "Artturi",
      title: "Web-kehittäjä",
      personal: "Yksityiskohtaiset tiedot",
      phone: "0406723633",
      email: "artturi_hamalainen@hotmail.com",
      profileTitle: "Profiili",
      profile: "Intohimoinen web-kehittäjä",
      linkTitle: "Linkit",
      link: ["Porftfolio: www.kartturi.eu", "github.com"],
      hobbiesTitle: "Harrastukset",
      hobbies: "Jalkapallo, pyöräily",
      workTitle: "Työkokemus",
      work: [{ position: "Myyjä", time: "5/5", desc: "perkele" }],
      educationTitle: "Koulutus",
      education: [
        {
          school: "Vamk",
          time: "syyskuu 2019 - joulukuu 2017",
          desc: "kansainvälinen kauppa"
        }
      ]
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
