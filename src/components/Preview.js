import React, { useEffect } from "react";
import { getResumesLS } from "../utils/getSetResumes";
import { useStateValue } from "../state";
import SelectLayout from "../utils/selectLayout";
import getActionType from "../utils/getActionType";

//components

const Preview = props => {
  const search = props.history.location.search;
  const index = Number(search.charAt(search.length - 1));
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    //get the right resume from localstorage

    const resumes = JSON.parse(localStorage.getItem("resumes"));
    const resume = resumes[index];
    //add resume info to state
    dispatch({
      type: "CHANGE_RESUME",
      all: resume
    });
  }, []);

  const donwloadResume = e => {
    console.log(e.target);
  };

  const changeLayout = e => {
    const resumesLS = JSON.parse(localStorage.getItem("resumes"));

    resumesLS[index].layout = e.target.value;

    //save to localhost and component state
    localStorage.setItem("resumes", JSON.stringify(resumesLS));
    dispatch({
      type: getActionType(e.target.name),
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="preview">
      <div className="preview__download">
        <select name="layout" onChange={changeLayout} value={state.layout}>
          <option value="resume1">resume1</option>
          <option value="resume2">resume2</option>
        </select>
        <button onClick={donwloadResume}>Download Pdf</button>
      </div>
      <div className="preview-container">{SelectLayout(state.layout)}</div>
    </div>
  );
};

export default Preview;
