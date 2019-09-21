import React from "react";
import { useStateValue } from "../../state";
const Resume2 = props => {
  const [state] = useStateValue();

  const ListItem = state.link.map((item, index) => {
    return (
      <li key={index}>
        <p>{item}</p>
      </li>
    );
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
      <div className="resume2__content">
        <div className="resume2__head">
          <div className="resume2__head__content">
            <div className="resume2__head__content_links">
              <ul>{ListItem}</ul>
            </div>
            <h1>{state.name}</h1>
          </div>
        </div>
        <div className="resume2__profile">
          <h4>{state.profileTitle}</h4>
          <p>{state.profile}</p>
        </div>
      </div>
    </div>
  );
};

export default Resume2;
