import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  waitForElement,
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

    it("displays validation error for displayName when error is received for the field", async () => {
      const actions = {
        register: jest.fn().mockRejectedValue({
          response: {
            data: {
              displayName: "Please enter your full name",
            },
          },
        }),
      };
      const { queryByText } = setupForSubmit({ actions });
      fireEvent.click(button);

      await waitFor(() =>
        expect(queryByText("Please enter your full name")).toBeInTheDocument()
      );
    });

    it("enables the signup button when password and repeat password have the same value", () => {
      setupForSubmit();
      expect(button).not.toBeDisabled();
    });
    it("disables the signup button when password repeat does not match the password", () => {
      setupForSubmit();
      fireEvent.change(passwordConfirmInput, changeEvent("new-pass"));
      expect(button).toBeDisabled();
    });
    it("disables the signup button when password does not match to password repeat", () => {
      setupForSubmit();
      fireEvent.change(passwordInput, changeEvent("new-pass"));
      expect(button).toBeDisabled();
    });
    it("displays error style for password repeat input when password repeat missmatch", () => {
      const { queryByText } = setupForSubmit();
      fireEvent.change(passwordConfirmInput, changeEvent("new-pass"));
      const missmatchWarning = queryByText("Does not match the password");
      expect(missmatchWarning).toBeInTheDocument();
    });
    it("displays error style for password repeat input when password repeat missmatch", () => {
      const { queryByText } = setupForSubmit();
      fireEvent.change(passwordInput, changeEvent("new-pass"));
      const missmatchWarning = queryByText("Does not match the password");
      expect(missmatchWarning).toBeInTheDocument();
    });

    it("hides the validation error when user changes the content of displayName", async () => {
      const actions = {
        register: jest.fn().mockRejectedValue({
          response: {
            data: {
              displayName: "Please enter your full name",
            },
          },
        }),
      };
      const { queryByText } = setupForSubmit({ actions });
      fireEvent.click(button);

      await waitFor(() => {
        queryByText("Please enter your full name");
      });
      fireEvent.change(displayNameInput, changeEvent("name updated"));
      const errorMessage = queryByText("Please enter your full name");
      expect(errorMessage).not.toBeInTheDocument();
    });

    it("hides the validation error when user changes the content of username", async () => {
      const actions = {
        register: jest.fn().mockRejectedValue({
          response: {
            data: {
              username: "Username is required",
            },
          },
        }),
      };
      const { queryByText } = setupForSubmit({ actions });
      fireEvent.click(button);

      await waitFor(() => {
        queryByText("Username is required");
      });
      fireEvent.change(usernameInput, changeEvent("username updated"));
      const errorMessage = queryByText("Username is required");
      expect(errorMessage).not.toBeInTheDocument();
    });

    it("hides the validation error when user changes the content of password", async () => {
      const actions = {
        register: jest.fn().mockRejectedValue({
          response: {
            data: {
              password: "Password is required",
            },
          },
        }),
      };
      const { queryByText } = setupForSubmit({ actions });
      fireEvent.click(button);

      await waitFor(() => {
        queryByText("Password is required");
      });
      fireEvent.change(passwordInput, changeEvent("password updated"));
      const errorMessage = queryByText("Password is required");
      expect(errorMessage).not.toBeInTheDocument();
    });
  });
});

console.error = () => {};
