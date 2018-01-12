export default (state = { currentUser: "", isLoggedIn: false }, action) => {
  switch (action.type) {
    case "AUTHORIZE_USER":
      return {...state, currentUser: action.payload, isLoggedIn: true };
    default:
      return state;
  }
}
