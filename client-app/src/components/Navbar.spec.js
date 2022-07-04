import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import authReducer from "../redux/authReducer";

const loggedInState = {
  id: 1,
  username: "users",
  password: "password",
  isLoggedIn: true,
};

const defaultState = {
  id: 0,
  username: "",
  password: "",
  isLoggedIn: false,
};

const setup = (state = defaultState) => {
  const store = createStore(authReducer, state);
  return render(
    <Provider store={store}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </Provider>
  );
};

describe("Navbar", () => {
  describe("Layout", () => {
    it("has application logo", () => {
      const { container } = setup();
      const image = container.querySelector("#page-logo");
      expect(image).toBeInTheDocument();
    });

    it("has link to home from logo logo", () => {
      const { container } = setup();
      const image = container.querySelector("#page-logo");
      expect(image.parentElement.getAttribute("href")).toBe("/");
    });

    it("displays navbar when url is /admin/home", () => {
      const { container } = setup("/");
      const navigation = container.querySelector("nav");
      expect(navigation).toBeInTheDocument();
    });

    it("has link to logout when user logged in", () => {
      const { queryByText } = setup(loggedInState);
      const logoutLink = queryByText("Logout");
      expect(logoutLink).toBeInTheDocument();
    });
  });
});
