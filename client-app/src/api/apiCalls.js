import { SERVER_URL } from "../constants";
import axios from "axios";

export const register = (user) => {
  return axios.post(SERVER_URL + "/api/users", user);
};

export const login = (user) => {
  return axios.post(SERVER_URL + "/api/login", user);
};
