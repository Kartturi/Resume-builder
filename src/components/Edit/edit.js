import React, { useState, useEffect } from "react";

//components
import EditInput from "./edit-input";

const Edit = () => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");

  return (
    <div className="edit-container">
      <EditInput />
      <div className="edit-preview"></div>
    </div>
  );
};

export default Edit;
