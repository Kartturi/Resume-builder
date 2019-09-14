import React from "react";
import { useStateValue } from "../../state";

//util
import getActionType from "../../utils/getActionType";

//components
import Link from "./edit-input/link";
import Work from "./edit-input/work";
import Education from "./edit-input/education";
import Recommends from "./edit-input/recommends";
import Projects from "./edit-input/projects";
import Language from "./edit-input/language";
import Skills from "./edit-input/skills";

const EditInput = () => {
  const [state, dispatch] = useStateValue();

  function useDispatch(e) {
    dispatch({
      type: getActionType(e.target.name),
      [e.target.name]: e.target.value
    });
  }

  function saveResumeToLocalStorage() {
    localStorage.setItem("resume", JSON.stringify(state));
  }

  return (
    <div className="edit-input">
      <h2>Edit resume</h2>

      <Skills func={{ useDispatch, saveResumeToLocalStorage }} />

      <label>
        <h4>Name</h4>
        <input
          onChange={useDispatch}
          onBlur={saveResumeToLocalStorage}
          type="text"
          name="name"
          className=""
          value={state.name}
        />
      </label>

      <label>
        <input
          onChange={useDispatch}
          onBlur={saveResumeToLocalStorage}
          type="text"
          name="personal"
          className="edit-input__title"
          value={state.personal}
        />
      </label>
      <label>
        <h4>Phone</h4>
        <input
          onChange={useDispatch}
          onBlur={saveResumeToLocalStorage}
          type="phone"
          name="phone"
          className=""
          placeholder="phone"
          value={state.phone}
        />
      </label>

      <label>
        <h4>Email</h4>

        <input
          onChange={useDispatch}
          onBlur={saveResumeToLocalStorage}
          type="email"
          name="email"
          className=""
          placeholder="email"
          value={state.email}
        />
      </label>
      <label>
        <h4>Title</h4>
        <input
          onChange={useDispatch}
          onBlur={saveResumeToLocalStorage}
          type="text"
          name="title"
          className=""
          value={state.title}
        />
      </label>
      <label>
        <input
          className="edit-input__title"
          onChange={useDispatch}
          onBlur={saveResumeToLocalStorage}
          type="text"
          name="profileTitle"
          value={state.profileTitle}
        />
      </label>
      <label>
        <textarea
          rows="10"
          onChange={useDispatch}
          onBlur={saveResumeToLocalStorage}
          type="text"
          name="profile"
          value={state.profile}
        />
      </label>
      <Link func={{ useDispatch, saveResumeToLocalStorage }} />
      <Work func={{ useDispatch, saveResumeToLocalStorage }} />
      <Education func={{ useDispatch, saveResumeToLocalStorage }} />
      <Projects func={{ useDispatch, saveResumeToLocalStorage }} />
      <Language func={{ useDispatch, saveResumeToLocalStorage }} />

      <label>
        <input
          onChange={useDispatch}
          onBlur={saveResumeToLocalStorage}
          type="text"
          name="hobbiesTitle"
          className="edit-input__title"
          value={state.hobbiesTitle}
        />
      </label>
      <label>
        <textarea
          rows="2"
          onChange={useDispatch}
          onBlur={saveResumeToLocalStorage}
          type="text"
          name="hobbies"
          value={state.hobbies}
        />
      </label>
      <Recommends func={{ useDispatch, saveResumeToLocalStorage }} />
    </div>
  );
};

export default EditInput;
