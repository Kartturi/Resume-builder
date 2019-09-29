import React from "react";

//components
import Resume1 from "../components/cvLayouts/resume1";
import Resume2 from "../components/cvLayouts/resume2";
import Resume3 from "../components/cvLayouts/resume3";

const SelectLayout = layout => {
  switch (layout) {
    case "Turku":
      return <Resume1 />;

    case "Vaasa":
      return <Resume2 />;

    case "Rauma":
      return <Resume3 />;

    default:
      return <Resume1 />;
  }
};

export default SelectLayout;
