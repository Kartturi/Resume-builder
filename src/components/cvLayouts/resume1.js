import React from "react";
import { useStateValue } from "../../state";
const Resume1 = props => {
  const [state] = useStateValue();
  console.log(state.link[0].length, "Store");

  const ListItem = state.link.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  const WorkListItem = state.work.map((item, index) => {
    return (
      <li key={index}>
        <h4>{item.position}</h4>
        <p>{item.time}</p>
        <p>{item.desc}</p>
      </li>
    );
  });

  const EducationListItem = state.education.map((item, index) => {
    return (
      <li key={index}>
        <h4>{item.school}</h4>
        <p>{item.time}</p>
        <p>{item.desc}</p>
      </li>
    );
  });

  return (
    <div className="cv resume1">
      <div className="resume1-profile">
        <h1>{state.name}</h1>
        <p>{state.title}</p>
      </div>
      <div className="resume1-lower-container">
        <div className="resume1-left">
          {state.profile ? (
            <div className="resume1-profile">
              <h2>{state.profileTitle}</h2>
              <p>{state.profile}</p>
            </div>
          ) : (
            ""
          )}

          <div className="resume1-experience ">
            <h2>{state.workTitle}</h2>
            <ul>{WorkListItem}</ul>
          </div>

          <div className="resume1-education ">
            <h2>{state.educationTitle}</h2>
            <ul>{EducationListItem}</ul>
          </div>
        </div>
        <div className="resume1-right">
          {state.email || state.phone ? (
            <div className="resume1-personalInfo">
              <h3>{state.personal}</h3>
              <p>{state.email}</p>
              <p>{state.phone}</p>
              <p></p>
            </div>
          ) : (
            ""
          )}
          {state.link[0].length > 0 ? (
            <div className="resume1-links">
              <h3>{state.linkTitle}</h3>
              <ul>{ListItem}</ul>
              <p></p>
            </div>
          ) : (
            ""
          )}
          <div className="resume1-hobbies">
            <h3>{state.hobbiesTitle}</h3>
            <ul>{state.hobbies}</ul>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume1;
