function getActionType(type) {
  switch (type) {
    case "name":
      return "CHANGE_NAME";

    case "title":
      return "CHANGE_TITLE";

    case "personal":
      return "CHANGE_PERSONAL";
    case "phone":
      return "CHANGE_PHONE";

    case "email":
      return "CHANGE_EMAIL";

    case "profileTitle":
      return "CHANGE_PROFILETITLE";
    case "profile":
      return "CHANGE_PROFILE";

    case "linkTitle":
      return "CHANGE_LINKTITLE";

    case "link":
      return "CHANGE_LINK";

    case "hobbiesTitle":
      return "CHANGE_HOBBIESTITLE";

    case "hobbies":
      return "CHANGE_HOBBIES";

    case "workTitle":
      return "CHANGE_WORKTITLE";

    case "educationTitle":
      return "CHANGE_EDUCATIONTITLE";

    default:
      return "";
  }
}

export default getActionType;
