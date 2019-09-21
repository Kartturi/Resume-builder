import React, { useState, useEffect } from "react";
import Resume1 from "../cvLayouts/resume1";
import SelectLayout from "../../utils/selectLayout";
import { useStateValue } from "../../state";

const EditPreview = props => {
  const [state] = useStateValue();
  console.log(state, "from edit-preview");

  return (
    <div className="edit-preview">
      <div className="preview ">{SelectLayout(state.layout)}</div>
    </div>
  );
};

export default EditPreview;
