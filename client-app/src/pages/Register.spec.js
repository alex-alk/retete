import React from "react";
import {
  render,
  fireEvent,
  waitForDomChange,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Register } from "./Register";

describe("Register page", () => {
  describe("Layout", () => {
    it("has header of Sign Up", () => {
      const { container } = render(<Register />);
      const header = container.querySelector("h1");
      expect(header).toHaveTextContent("Sign Up");
    });

    it("has input for display name", () => {
      const { queryByPlaceholderText } = render(<Register />);
      const displayNameInput = queryByPlaceholderText("Name");
      expect(displayNameInput).toBeInTheDocument();
    });

    it("has input for username", () => {
      const { queryByPlaceholderText } = render(<Register />);
      const usernameInput = queryByPlaceholderText("Email Address (Username)");
      expect(usernameInput).toBeInTheDocument();
    });

    it("has input for password", () => {
      const { queryByPlaceholderText } = render(<Register />);
      const passwordInput = queryByPlaceholderText("Password");
      expect(passwordInput).toBeInTheDocument();
    });

    it("has password type for password input", () => {
      const { queryByPlaceholderText } = render(<Register />);
      const passwordInput = queryByPlaceholderText("Password");
      expect(passwordInput.type).toBe("password");
    });

    it("has input for password repeat", () => {
      const { queryByPlaceholderText } = render(<Register />);
      const passwordRepeatInput = queryByPlaceholderText("Confirm Password");
      expect(passwordRepeatInput).toBeInTheDocument();
    });

    it("has password type for password input", () => {
      const { queryByPlaceholderText } = render(<Register />);
      const passwordRepeatInput = queryByPlaceholderText("Confirm Password");
      expect(passwordRepeatInput.type).toBe("password");
    });

    it("has submit button", () => {
      const { container } = render(<Register />);
      const button = container.querySelector("button");
      expect(button).toBeInTheDocument();
    });
  });

  describe("Interactions", () => {
    const changeEvent = (content) => {
      return {
        target: {
          value: content,
        },
      };
    };

    const mockAsyncDelayed = () => {
      return jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({});
          }, 300);
        });
      });
    };

    let button,
      displayNameInput,
      usernameInput,
      passwordInput,
      passwordConfirmInput;

    const setupForSubmit = (props) => {
      const rendered = render(<Register {...props} />);
      const { container, queryByPlaceholderText } = rendered;
      displayNameInput = queryByPlaceholderText("Name");
      usernameInput = queryByPlaceholderText("Email Address (Username)");
      passwordInput = queryByPlaceholderText("Password");
      passwordConfirmInput = queryByPlaceholderText("Confirm Password");

      fireEvent.change(displayNameInput, changeEvent("my display name"));
      fireEvent.change(usernameInput, changeEvent("my username"));
      fireEvent.change(passwordInput, changeEvent("my password"));
      fireEvent.change(passwordConfirmInput, changeEvent("my password"));

      button = container.querySelector("button");
      return rendered;
    };

    it("sets the name value into state", () => {
      const { queryByPlaceholderText } = render(<Register />);
      const displayNameInput = queryByPlaceholderText("Name");

      fireEvent.change(displayNameInput, changeEvent("my display name"));
      expect(displayNameInput).toHaveValue("my display name");
    });

    it("sets the username value into state", () => {
      const { queryByPlaceholderText } = render(<Register />);
      const usernameInput = queryByPlaceholderText("Email Address (Username)");

      fireEvent.change(usernameInput, changeEvent("my username"));
      expect(usernameInput).toHaveValue("my username");
    });

    it("sets the password value into state", () => {
      const { queryByPlaceholderText } = render(<Register />);
      const passwordInput = queryByPlaceholderText("Password");

      fireEvent.change(passwordInput, changeEvent("my password"));
      expect(passwordInput).toHaveValue("my password");
    });

    it("sets the password confirm value into state", () => {
      const { queryByPlaceholderText } = render(<Register />);
      const passwordConfirmInput = queryByPlaceholderText("Confirm Password");

      fireEvent.change(passwordConfirmInput, changeEvent("my password"));
      expect(passwordConfirmInput).toHaveValue("my password");
    });

    it("calls onSubmit when the fields are valid and the actions are provided in props", () => {
      const actions = {
        register: jest.fn().mockResolvedValueOnce({}),
      };
      setupForSubmit({ actions });
      fireEvent.click(button);
      expect(actions.register).toHaveBeenCalledTimes(1);
    });

    it("does not throw exception when clicking the button when actions not provided in props", () => {
      setupForSubmit();
      expect(() => fireEvent.click(button)).not.toThrow();
    });

    it("calls post with user body when the fields are valid", () => {
      const actions = {
        register: jest.fn().mockResolvedValueOnce({}),
      };
      setupForSubmit({ actions });
      fireEvent.click(button);
      const expectedUserObject = {
        username: "my username",
        displayName: "my display name",
        password: "my password",
      };
      expect(actions.register).toHaveBeenCalledWith(expectedUserObject);
    });

    it("does not allow user to click the Sign Up button when there is an ongoing api call", () => {
      const actions = {
        register: mockAsyncDelayed(),
      };
      setupForSubmit({ actions });
      fireEvent.click(button);
      fireEvent.click(button);
      expect(actions.register).toHaveBeenCalledTimes(1);
    });

    it("displays spinner when there is an ongoing api call", () => {
      const actions = {
        register: mockAsyncDelayed(),
      };
      const { queryByText } = setupForSubmit({ actions });
      fireEvent.click(button);
      const spinner = queryByText("Loading...");
      expect(spinner).toBeInTheDocument();
    });

    it("hides spinner after api call finishes successfully", async () => {
      const actions = {
        register: mockAsyncDelayed(),
      };
      const { queryByText } = setupForSubmit({ actions });
      fireEvent.click(button);
      const spinner = queryByText("Loading...");
      await waitFor(() => expect(spinner).not.toBeInTheDocument());
    });

    it("hides spinner after api call finishes with error", async () => {
      const actions = {
        register: jest.fn().mockImplementation(() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              reject({
                response: { data: {} },
              });
            }, 300);
          });
        }),
      };
      const { queryByText } = setupForSubmit({ actions });
      fireEvent.click(button);
      const spinner = queryByText("Loading...");
      await waitFor(() => expect(spinner).not.toBeInTheDocument());
    });
  });
});

console.error = () => {};
