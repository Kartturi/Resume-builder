const reducer = (state, action) => {
  console.log(state, action.education, "reducer in aciton");
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.name
      };
    case "CHANGE_TITLE":
      return {
        ...state,
        title: action.title
      };

    case "CHANGE_PERSONAL":
      return {
        ...state,
        personal: action.personal
      };

    case "CHANGE_PHONE":
      return {
        ...state,
        phone: action.phone
      };

    case "CHANGE_EMAIL":
      return {
        ...state,
        email: action.email
      };
    case "CHANGE_PROFILETITLE":
      return {
        ...state,
        profileTitle: action.profileTitle
      };

    case "CHANGE_PROFILE":
      return {
        ...state,
        profile: action.profile
      };

    case "CHANGE_LINKTITLE":
      return {
        ...state,
        linkTitle: action.linkTitle
      };
    case "CHANGE_LINK":
      return {
        ...state,
        link: action.link
      };

    case "CHANGE_HOBBIESTITLE":
      return {
        ...state,
        hobbiesTitle: action.hobbiesTitle
      };

    case "CHANGE_HOBBIES":
      return {
        ...state,
        hobbies: action.hobbies
      };

    case "CHANGE_WORKTITLE":
      return {
        ...state,
        workTitle: action.workTitle
      };

    case "CHANGE_WORK":
      return {
        ...state,
        work: action.work
      };

    case "CHANGE_EDUCATIONTITLE":
      return {
        ...state,
        educationTitle: action.educationTitle
      };

    case "CHANGE_EDUCATION":
      return {
        ...state,
        education: action.education
      };

    default:
      return state;
  }
};

export default reducer;
