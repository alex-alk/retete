import { SERVER_URL } from "../constants";
import axios from "axios";

export const register = (user) => {
  return axios.post(SERVER_URL + "/api/users/register", user);
  // .then((res) => {
  //   this.login(
  //     user,
  //     () => {
  //       window.location.href = "/admin";
  //     },
  //     () => {
  //       console.log("error");
  //     }
  //   );
  // })
  // .catch((err) => console.error(err));
};
