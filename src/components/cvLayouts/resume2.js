import React from "react";
import { useStateValue } from "../../state";
const Resume2 = props => {
  const [state] = useStateValue();

  const ListItem = state.link.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  const WorkListItem = state.work.map((item, index) => {
    return (
      <li key={index}>
        <h4>{item.position}</h4>
        <p>{item.time}</p>
        <p className="resume2-text">{item.desc}</p>
      </li>
    );
  });

  const EducationListItem = state.education.map((item, index) => {
    return (
      <li key={index}>
        <h4>{item.school}</h4>
        <p>{item.time}</p>
        <p className="resume2-text">{item.desc}</p>
      </li>
    );
  });

  const LanguageListItem = state.language.map((item, index) => {
    return (
      <li key={index}>
        <p>
          {item.language} <span>{item.level}</span>
        </p>
      </li>
    );
  });

  const recommendsListItem = state.recommends.map((item, index) => {
    return (
      <li key={index}>
        <h4>{item.nameRecommends}</h4>
        <p>{item.phoneRecommends}</p>
        <p>{item.email}</p>
      </li>
    );
  });
  const projectsListItem = state.projects.map((item, index) => {
    return (
      <li key={index}>
        <h4>{item.name}</h4>
        <p>{item.time}</p>
        <p className="resume2-text">{item.desc}</p>
      </li>
    );
  });

  const skillsListItem = state.skills.map((item, index) => {
    return (
      <li key={index}>
        <h4>{item.name}</h4>
        <div className="resume2-bar">
          <div className={`resume2-bar-inner level-${item.level}`}></div>
        </div>
      </li>
    );
  });
  return (
    <div className="cv resume2">
      <div className="resume2-indent">
        <div className="resume2-head">
          <h1>{state.name}</h1>
          <p>{state.title}</p>
        </div>
        <div className="resume2-lower-container">
          <div className="resume2-left">
            {state.profile ? (
              <div className="resume2-profile">
                <h2>{state.profileTitle}</h2>
                <p>{state.profile}</p>
              </div>
            ) : (
              ""
            )}
            {state.work[0].position ? (
              <div className="resume2-experience ">
                <h2>{state.workTitle}</h2>
                <ul>{WorkListItem}</ul>
              </div>
            ) : (
              ""
            )}
            {state.education[0].school ? (
              <div className="resume2-education ">
                <h2>{state.educationTitle}</h2>
                <ul>{EducationListItem}</ul>
              </div>
            ) : (
              ""
            )}

            {state.projects[0].name ? (
              <div className="resume2-projects ">
                <h2>{state.projectsTitle}</h2>
                <ul>{projectsListItem}</ul>
              </div>
            ) : (
              ""
            )}

            {state.recommends[0].nameRecommends ? (
              <div className="resume2-recommends ">
                <h2>{state.recommendsTitle}</h2>
                <ul>{recommendsListItem}</ul>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="resume2-right">
            {state.email || state.phone ? (
              <div className="resume2-personalInfo">
                <h4>{state.personal}</h4>
                <p>{state.email}</p>
                <p>{state.phone}</p>
                <p>{state.address}</p>
                <p></p>
              </div>
            ) : (
              ""
            )}
            {state.link[0].length > 0 ? (
              <div className="resume2-links">
                <h4>{state.linkTitle}</h4>
                <ul>{ListItem}</ul>
                <p></p>
              </div>
            ) : (
              ""
            )}

            {state.skills[0].name ? (
              <div className="resume2-skills">
                <h4>{state.skillsTitle}</h4>
                <ul>{skillsListItem}</ul>
                <p></p>
              </div>
            ) : (
              ""
            )}
            {state.hobbies ? (
              <div className="resume2-hobbies">
                <h4>{state.hobbiesTitle}</h4>
                <ul>{state.hobbies}</ul>
                <p></p>
              </div>
            ) : (
              ""
            )}

            {state.language[0].language ? (
              <div className="resume2-language">
                <h4>{state.languageTitle}</h4>
                <ul>{LanguageListItem}</ul>
                <p></p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume2;
