export default (state = { currentUser: "", isLoggedIn: false }, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {...state, currentUser: action.payload, isLoggedIn: true };
    default:
      return state;
  }
}
