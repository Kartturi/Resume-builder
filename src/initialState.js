let initialState = {
  layout: "resume1",
  resumeName: "new resume",
  name: "",
  title: "",
  personal: "Personal info",
  phone: "",
  email: "",
  address: "",
  profileTitle: "Profile",
  profile: "",
  linkTitle: "Links",
  link: [""],
  hobbiesTitle: "Hobbies",
  hobbies: "",
  workTitle: "Work experience",
  work: [{ position: "", time: "", desc: "" }],
  educationTitle: "Education",
  education: [
    {
      school: "",
      time: "",
      desc: ""
    }
  ],
  recommendsTitle: "Recommendations",
  recommends: [
    {
      nameRecommends: "",
      phoneRecommends: "",
      email: ""
    }
  ],
  projectsTitle: "Projects",
  projects: [{ name: "", time: "", desc: "" }],
  languageTitle: "Languages",
  language: [{ language: "", level: "" }],
  skillsTitle: "Skills",
  skills: [{ name: "", level: 0 }]
};

export default initialState;
