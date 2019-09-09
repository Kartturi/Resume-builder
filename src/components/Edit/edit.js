import React, { useState, useEffect } from "react";

//components
import EditInput from "./edit-input";
import EditPreview from "./edit-preview";

const Edit = () => {
  const [profileTitle, setProfileTitle] = useState("Profiili");
  const [personalInfoTitle, setPersonalInfoTitle] = useState(
    "Yksityiskohtaiset tiedot"
  );
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [experience, setExperience] = useState([
    { position: "kalkkunafarmari", tasks: "kanahäkkien siivoominen" }
  ]);

  useEffect(() => {
    PutLocalStorageDataToState();
  }, []);

  function handleInput(e) {
    console.log(e.target.value, "happened");
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "personalTitle":
        setPhone(e.target.value);
        break;
      case "personalInfoTitle":
        setPersonalInfoTitle(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "profileTitle":
        setProfileTitle(e.target.value);
        break;
      case "profile":
        setProfile(e.target.value);
        break;
      case "title":
        setTitle(e.target.value);
        break;

      default:
        console.log("error");
    }
  }

  function saveToLocalStorage() {
    const resume = {
      name,
      title,
      phone,
      email,
      profile,
      profileTitle
    };

    window.localStorage.setItem("resume", JSON.stringify(resume));
  }

  function PutLocalStorageDataToState() {
    const resumeData = JSON.parse(window.localStorage.getItem("resume"));
    setName(resumeData.name);
    setTitle(resumeData.title);
    setPhone(resumeData.phone);
    setProfile(resumeData.profile);
    setProfileTitle(resumeData.profileTitle);
    setPhone(resumeData.phone);
    setEmail(resumeData.email);
    console.log(resumeData, "from loadFromStorage");
  }

  return (
    <div className="edit-container">
      <EditInput
        getInput={handleInput}
        setOutput={{
          name,
          phone,
          email,
          experience,
          profile,
          profileTitle,
          title,
          personalInfoTitle
        }}
        save={saveToLocalStorage}
      />
      <EditPreview
        setOutput={{
          name,
          phone,
          email,
          experience,
          profile,
          profileTitle,
          title,
          personalInfoTitle
        }}
      />
    </div>
  );
};

export default Edit;
