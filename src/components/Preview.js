import React, {useEffect} from "react";
import {getResumesLS} from "../utils/getSetResumes"
import { useStateValue } from "../state";

//components
import Resume1 from "./cvLayouts/resume1";

const Preview = (props) => {
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

      const donwloadResume = (e) => {
        console.log(e.target);
      }

    return (
        <div className="preview">
          <div className="preview__download">
          <button onClick={donwloadResume}>Download Pdf</button>
          </div>
            <div className="preview-container">
              
              <Resume1 />
            </div>
        </div>
    )
}


export default Preview;