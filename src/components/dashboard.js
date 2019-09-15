import React, { useState, useEffect } from "react";
import { useStateValue } from "../state";
import { Link } from "react-router-dom";
import initialState from "../initialState";
const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  //localstorage resumes

  useEffect(() => {
    const resumesLS = JSON.parse(localStorage.getItem("resumes"));
    if (resumesLS) {
      setResumes(resumesLS);
    }
  }, []);

  const resumeListItem = resumes.map((item, index) => {
    return (
      <div className="dashboard-resumes__section">
        <p>{item.resumeName}</p>
        <Link to={`/edit?index=${index}`}>Edit</Link>
      </div>
    );
  });

  const createNewResume = () => {
    const resumesLS = JSON.parse(localStorage.getItem("resumes"));
    if (!resumesLS) {
      //create new resume storage to localhost
      const newResumeArr = [initialState];
      localStorage.setItem("resumes", JSON.stringify(newResumeArr));
    } else {
      const newResumeList = JSON.parse(localStorage.getItem("resumes"));
      newResumeList.unshift(initialState);
      localStorage.setItem("resumes", [JSON.stringify(newResumeList)]);
      setResumes(newResumeList);
    }
  };
  console.log(resumes);
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="dashboard-resumes">
        <div>
          <button onClick={createNewResume} className="dashboard-resumes__add">
            +
          </button>
        </div>
        {resumeListItem}
      </div>
    </div>
  );
};

export default Dashboard;
