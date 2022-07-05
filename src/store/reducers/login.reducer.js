const initilaState = {
  isLoggedin: Boolean(localStorage.getItem('isLoggedin')),
  loggedUser: JSON.parse(localStorage.getItem('loggedUser')),
};

const loginReducer = (state = initilaState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...state, isLoggedin: true, loggedUser: action.payload };

    case "SET_LOGOUT":
      return { ...state, isLoggedin: false, loggedUser: null };

    default:
      return state;
  }
};
export default loginReducer;
