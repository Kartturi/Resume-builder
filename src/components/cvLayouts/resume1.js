import React from "react";

const Resume1 = props => {
  let output = props.setOutput;

  return (
    <div className="cv resume1">
      <div className="resume1-profile">
        <h1>{output.name}</h1>
        <p>{output.title}</p>
      </div>
      <div className="resume1-lower-container">
        <div className="resume1-left">
          {output.profile ? (
            <div className="resume1-profile">
              <h2>{output.profileTitle}</h2>
              <p>{output.profile}</p>
            </div>
          ) : (
            ""
          )}

          <div className="resume1-experience">
            {/* <h2>Työkokemus</h2>
            <ul>
              <li>
                <h3>{output.experience[0].position}</h3>
                <p>{output.experience[0].tasks}</p>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="resume1-right">
          {output.email || output.phone ? (
            <div className="resume1-personalInfo">
              <h3>{output.personalInfoTitle}</h3>
              <p>{output.email}</p>
              <p>{output.phone}</p>
              <p></p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume1;
