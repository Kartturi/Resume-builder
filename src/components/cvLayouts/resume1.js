import React from "react";

const Resume1 = (props) => {

    console.log(props.setOutput.name, "from resume1");
    let output = props.setOutput;

    return (
        <div className="cv resume1">
            <div>
                <h1>Resume 1</h1>
                <p>{output.name}</p>
            </div>
        </div>
    )
}

export default Resume1;