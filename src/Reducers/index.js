const reducer = (state, action) => {
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

    default:
      return state;
  }
};

export default reducer;
