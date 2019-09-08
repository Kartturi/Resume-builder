import React, { useState, useEffect } from "react";

const EditInput = props => {
  return (
    <div className="edit-input">
      <h2>Edit resume</h2>

      <label>
        <h4>Name</h4>

        <input type="text" name="name" className="" placeholder="Name" />
      </label>
      <label>
        <h4>age</h4>

        <input type="text" name="age" className="" placeholder="age" />
      </label>
    </div>
  );
};

export default EditInput;
