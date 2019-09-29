import React from "react";
import { useStateValue } from "../../state";
import "./styles/resume3.css";
const Resume3 = props => {
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
        <h3>
          {item.position} <span>{item.time}</span>
        </h3>
        <h3> {item.company}</h3>
        <p className="resume3-text">{item.desc}</p>
      </li>
    );
  });

  const EducationListItem = state.education.map((item, index) => {
    return (
      <li key={index}>
        <h3>{item.school + " "}</h3>
        <p>{item.time}</p>
        <p className="resume3-text">{item.desc}</p>
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
        <h2>{item.nameRecommends}</h2>
        <p>{item.phoneRecommends}</p>
        <p>{item.email}</p>
      </li>
    );
  });
  const projectsListItem = state.projects.map((item, index) => {
    return (
      <li key={index}>
        <h3>
          {item.name} <span>{item.time}</span>
        </h3>

        <p className="resume3-text">{item.desc}</p>
      </li>
    );
  });

  const skillsListItem = state.skills.map((item, index) => {
    return (
      <li key={index}>
        <p>{item.name}</p>
      </li>
    );
  });
  return (
    <div className="cv resume3">
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Roboto:300i,400,700i&display=swap');
      </style>
      <div className="resume3__left"></div>
      <div className="resume3__right">
        <div className="resume3__right__name-title">
          <h1>{state.name}</h1>
          <h3>{state.title}</h3>
        </div>

        <div className="resume3__right__work-edu">
          <h2>{state.educationTitle}</h2>
          <ul>{EducationListItem}</ul>
        </div>

        <div className="resume3__right__work-edu">
          <h2>{state.workTitle}</h2>
          <ul>{WorkListItem}</ul>
        </div>

        <div className="resume3__right__skills">
          <h2>{state.skillsTitle}</h2>
          <ul>{skillsListItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Resume3;
