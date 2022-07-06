import { SET_LOGIN, SET_LOGOUT } from "../types/login.type";

export const loginAction = (user) => ({
  type: SET_LOGIN,
  payload: user,
});

export const logoutAction = () => ({
  type: SET_LOGOUT,
});
