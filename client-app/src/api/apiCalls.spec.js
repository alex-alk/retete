import axios from "axios";
import { SERVER_URL } from "../constants";
import * as apiCalls from "./apiCalls";

describe("apiCalls", () => {
  describe("register", () => {
    it("calls /api/users", () => {
      const mockSignup = jest.fn();
      axios.post = mockSignup;
      apiCalls.register();

      const path = mockSignup.mock.calls[0][0];
      expect(path).toBe(SERVER_URL + "/api/users");
    });
  });

  describe("login", () => {
    it("calls /api/login", () => {
      const mockLogin = jest.fn();
      axios.post = mockLogin;
      apiCalls.login({ username: "test-username", password: "test-password" });

      const path = mockLogin.mock.calls[0][0];
      expect(path).toBe(SERVER_URL + "/api/login");
    });
  });
});
