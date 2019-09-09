import React, { useState, useEffect } from "react";

const EditInput = props => {
  let output = props.setOutput;
  let saveData = props.save;
  console.log(output, "from edit input");
  return (
    <div className="edit-input">
      <h2>Edit resume</h2>

      <label>
        <h4>Name</h4>
        <input
          onChange={props.getInput}
          type="text"
          name="name"
          className=""
          value={output.name}
        />
      </label>
      <label>
        <h4>Title</h4>
        <input
          onChange={props.getInput}
          type="text"
          name="title"
          className=""
          placeholder="title"
          value={output.title}
        />
      </label>
      <label>
        <input
          onChange={props.getInput}
          type="text"
          name="personalInfoTitle"
          className=""
          value={output.personalInfoTitle}
        />
      </label>
      <label>
        <h4>Phone</h4>
        <input
          onChange={props.getInput}
          type="text"
          name="phone"
          className=""
          placeholder="phone"
          value={output.phone}
        />
      </label>

      <label>
        <h4>Email</h4>

        <input
          onChange={props.getInput}
          type="email"
          name="email"
          className=""
          placeholder="email"
          value={output.email}
        />
      </label>

      <label>
        <input
          onChange={props.getInput}
          type="text"
          name="profileTitle"
          value={output.profileTitle}
        />
      </label>
      <label>
        <textarea
          onChange={props.getInput}
          type="text"
          name="profile"
          value={output.profile}
        />
      </label>

      <button onClick={saveData}>Save</button>
    </div>
  );
};

export default EditInput;
