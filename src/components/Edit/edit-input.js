import React from "react";
import { useStateValue } from "../../state";

//util
import getActionType from "../../utils/getActionType";
import Link from "./edit-input/link";

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
      <Link func={{ useDispatch, saveResumeToLocalStorage }} />

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
    </div>
  );
};

export default EditInput;
