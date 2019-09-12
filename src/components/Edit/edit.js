import React from "react";

//components
import EditInput from "./edit-input";
import EditPreview from "./edit-preview";

const Edit = () => {
  return (
    <div className="edit-container">
      <EditInput />
      <EditPreview />
    </div>
  );
};

export default Edit;
