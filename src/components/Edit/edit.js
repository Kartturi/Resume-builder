import React, { useState, useEffect } from "react";

//components
import EditInput from "./edit-input";
import EditPreview from "./edit-preview";

const Edit = () => {
  const [name, setName] = useState("");






  function handleInput(e) {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      default:
        console.log("error");
    }

  }

  return (
    <div className="edit-container">
      <EditInput getInput={handleInput} />
      <EditPreview setOutput={{ name }} />
    </div>
  );
};

export default Edit;
