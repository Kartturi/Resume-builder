import React, { useState, useEffect } from "react";
import Resume1 from "../cvLayouts/resume1";

const EditPreview = props => {
  return (
    <div className="edit-preview">
      <div className="preview ">
        <Resume1 setOutput={props.setOutput} />
      </div>
    </div>
  );
};

export default EditPreview;
