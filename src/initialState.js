let initialState = {
  resumeName: "resume",
  name: "",
  title: "",
  personal: "Yksityiskohtaiset tiedot",
  phone: "",
  email: "",
  address: "",
  profileTitle: "Profiili",
  profile: "",
  linkTitle: "Linkit",
  link: [""],
  hobbiesTitle: "",
  hobbies: "",
  workTitle: "Työkokemus",
  work: [{ position: "", time: "", desc: "" }],
  educationTitle: "Koulutus",
  education: [
    {
      school: "",
      time: "",
      desc: ""
    }
  ],
  recommendsTitle: "Suositukset",
  recommends: [
    {
      nameRecommends: "",
      phoneRecommends: "",
      email: ""
    }
  ],
  projectsTitle: "Projektit",
  projects: [{ name: "", time: "", desc: "" }],
  languageTitle: "Kielet",
  language: [{ language: "", level: "" }],
  skillsTitle: "",
  skills: [{ name: "", level: 0 }]
};

export default initialState;
