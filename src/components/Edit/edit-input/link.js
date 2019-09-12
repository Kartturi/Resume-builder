import React from "react";
import { useStateValue } from "../../../state";

const Link = props => {
  const [state] = useStateValue();
  //   const { useDispatch, saveResumeToLocalStorage } = props.use;
  console.log(props);
  const { useDispatch, saveResumeToLocalStorage } = props.func;

  return (
    <div>
      <label>
        <input
          onChange={useDispatch}
          onBlur={saveResumeToLocalStorage}
          type="text"
          name="linkTitle"
          className="edit-input__title"
          value={state.linkTitle}
        />
      </label>

      <label>
        <input
          onChange={useDispatch}
          onBlur={saveResumeToLocalStorage}
          type="text"
          name="link"
          className=""
          placeholder="link"
          value={state.link}
        />
      </label>
    </div>
  );
};

export default Link;
