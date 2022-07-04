const initialState = {
  // id: 0,
  // username: "",
  // password: "",
  // isLoggedIn: false,
};

const hasPayload = (payload) => {
  if (payload) {
    return true;
  }
  return false;
};

export default function authReducer(state = initialState, action) {
  if (action.type === "logout-success") {
    localStorage.removeItem("jwt");
    return { ...initialState };
  } else if (action.type === "login-success") {
    return {
      ...action.payload,
      validToken: hasPayload(action.payload),
      isLoggedIn: true,
    };
  }
  return state;
}
