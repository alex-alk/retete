import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import axios from "axios";
import configureStore from "../redux/store";

beforeEach(() => {
  localStorage.clear();
});

const setup = (path) => {
  const store = configureStore(false);
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
};

const changeEvent = (content) => {
  return {
    target: {
      value: content,
    },
  };
};

describe("App", () => {
  it("displays login page when url is /admin/login", () => {
    const { container } = setup("/admin/login");

    const h1 = container.querySelector("h1");
    expect(h1).toHaveTextContent("Log In");
  });

  it("displays only login page when url is /admin/login", () => {
    const { container } = setup("/admin/login");

    const homePageDiv = container.querySelector("#adminhome");
    expect(homePageDiv).not.toBeInTheDocument();
  });

  it("displays signup page when url is /admin/register", () => {
    const { container } = setup("/admin/register");

    const h1 = container.querySelector("#sign-up");
    expect(h1).toHaveTextContent("Sign Up");
  });

  it("displays Logout on topbar after login success", async () => {
    const { queryByPlaceholderText, container, queryByText, findByText } =
      setup("/admin/login");

    const usernameInput = queryByPlaceholderText("Email Address");
    fireEvent.change(usernameInput, changeEvent("my-username"));

    const passwordInput = queryByPlaceholderText("Password");
    fireEvent.change(passwordInput, changeEvent("my-password"));

    const button = container.querySelector("#login-btn");

    axios.post = jest.fn().mockResolvedValue({
      data: {
        id: 1,
        username: "my-username",
        displayName: "display1",
        token: "123",
      },
    });
    fireEvent.click(button);

    const myProfileLink = await findByText("Logout");

    expect(myProfileLink).toBeInTheDocument();
  });

  it("displays Logout on topbar after signup success", async () => {
    const { queryByPlaceholderText, container, findByText } =
      setup("/admin/register");

    const displayNameInput = queryByPlaceholderText("Name");
    const usernameInput = queryByPlaceholderText("Email Address (Username)");
    const passwordInput = queryByPlaceholderText("Password");
    const passwordConfirmInput = queryByPlaceholderText("Confirm Password");

    fireEvent.change(displayNameInput, changeEvent("my display name"));
    fireEvent.change(usernameInput, changeEvent("my username"));
    fireEvent.change(passwordInput, changeEvent("my password"));
    fireEvent.change(passwordConfirmInput, changeEvent("my password"));

    const button = container.querySelector("#register-btn");

    axios.post = jest
      .fn()
      .mockResolvedValueOnce({
        data: {
          message: "User saved",
        },
      })
      .mockResolvedValueOnce({
        data: {
          id: 1,
          username: "user1",
          displayName: "display1",
          token: "123",
        },
      });

    fireEvent.click(button);

    const myProfileLink = await findByText("Logout");
    expect(myProfileLink).toBeInTheDocument();
  });

  it("saves jwt token to localStorage after login success", async () => {
    const { queryByPlaceholderText, container, findByText } =
      setup("/admin/login");

    const usernameInput = queryByPlaceholderText("Email Address");
    fireEvent.change(usernameInput, changeEvent("my-username"));

    const passwordInput = queryByPlaceholderText("Password");
    fireEvent.change(passwordInput, changeEvent("my-password"));

    const button = container.querySelector("#login-btn");

    axios.post = jest.fn().mockResolvedValue({
      data: {
        id: 1,
        username: "my-username",
        displayName: "display1",
        token: "123",
      },
    });
    fireEvent.click(button);

    await findByText("Logout");

    const dataInStorage = localStorage.getItem("jwt");

    expect(dataInStorage).toEqual("123");
  });
});
console.error = () => {};
