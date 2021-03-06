import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Login } from "./Login";

describe("Login", () => {
  describe("Layout", () => {
    it("has header of Login", () => {
      const { container } = render(<Login />);
      const header = container.querySelector("h1");
      expect(header).toHaveTextContent("Log In");
    });

    it("has input for username", () => {
      const { queryByPlaceholderText } = render(<Login />);
      const usernameInput = queryByPlaceholderText("Email Address");
      expect(usernameInput).toBeInTheDocument();
    });

    it("has input for password", () => {
      const { queryByPlaceholderText } = render(<Login />);
      const passwordInput = queryByPlaceholderText("Password");
      expect(passwordInput).toBeInTheDocument();
    });

    it("has password type for password input", () => {
      const { queryByPlaceholderText } = render(<Login />);
      const passwordInput = queryByPlaceholderText("Password");
      expect(passwordInput.type).toBe("password");
    });

    it("has login button", () => {
      const { container } = render(<Login />);
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

    let usernameInput, passwordInput, button;

    const setupForSubmit = (props) => {
      const rendered = render(<Login {...props} />);

      const { container, queryByPlaceholderText } = rendered;

      usernameInput = queryByPlaceholderText("Email Address");
      fireEvent.change(usernameInput, changeEvent("my-username"));

      passwordInput = queryByPlaceholderText("Password");
      fireEvent.change(passwordInput, changeEvent("my-password"));

      button = container.querySelector("button");
      return rendered;
    };

    it("sets the username value into state", () => {
      const { queryByPlaceholderText } = render(<Login />);
      const usernameInput = queryByPlaceholderText("Email Address");
      fireEvent.change(usernameInput, changeEvent("my-username"));
      expect(usernameInput).toHaveValue("my-username");
    });

    it("sets the password value into state", () => {
      const { queryByPlaceholderText } = render(<Login />);
      const passwordInput = queryByPlaceholderText("Password");
      fireEvent.change(passwordInput, changeEvent("my-password"));
      expect(passwordInput).toHaveValue("my-password");
    });

    it("calls postLogin when the actions are provided in props and input fields have value", () => {
      const actions = {
        postLogin: jest.fn().mockResolvedValue({}),
      };

      setupForSubmit({ actions });
      fireEvent.click(button);
      expect(actions.postLogin).toHaveBeenCalledTimes(1);
    });

    it("does not throw exception when clicking the button when actions not provided in props", () => {
      setupForSubmit();

      expect(() => fireEvent.click(button)).not.toThrow();
    });

    it("calls postLogin with credentials in body", () => {
      const actions = {
        postLogin: jest.fn().mockResolvedValue({}),
      };

      setupForSubmit({ actions });
      fireEvent.click(button);

      const expectedUserObject = {
        username: "my-username",
        password: "my-password",
      };

      expect(actions.postLogin).toHaveBeenCalledWith(expectedUserObject);
    });

    it("enables the button when username and password is not empty", () => {
      setupForSubmit();
      expect(button).not.toBeDisabled();
    });

    it("disables the button when username is empty", () => {
      setupForSubmit();
      fireEvent.change(usernameInput, changeEvent(""));
      expect(button).toBeDisabled();
    });

    it("disables the button when password is empty", () => {
      setupForSubmit();
      fireEvent.change(passwordInput, changeEvent(""));
      expect(button).toBeDisabled();
    });

    it("displayes alert when login fails", async () => {
      const actions = {
        postLogin: jest.fn().mockRejectedValue({
          response: {
            data: {
              apiError: "Login failed",
            },
          },
        }),
      };

      const { queryByText } = setupForSubmit({ actions });
      fireEvent.click(button);
      await waitFor(() => queryByText("Login failed"));
      const alert = queryByText("Login failed");

      expect(alert).toBeInTheDocument();
    });

    it("clears alert when user changes username", async () => {
      const actions = {
        postLogin: jest.fn().mockRejectedValue({
          response: {
            data: {
              apiError: "Login failed",
            },
          },
        }),
      };

      const { queryByText } = setupForSubmit({ actions });
      fireEvent.click(button);
      await waitFor(() => queryByText("Login failed"));

      fireEvent.change(usernameInput, changeEvent("updated-username"));

      const alert = queryByText("Login failed");

      expect(alert).not.toBeInTheDocument();
    });

    it("clears alert when user changes password", async () => {
      const actions = {
        postLogin: jest.fn().mockRejectedValue({
          response: {
            data: {
              apiError: "Login failed",
            },
          },
        }),
      };

      const { queryByText } = setupForSubmit({ actions });
      fireEvent.click(button);
      await waitFor(() => queryByText("Login failed"));

      fireEvent.change(passwordInput, changeEvent("updated-password"));

      const alert = queryByText("Login failed");

      expect(alert).not.toBeInTheDocument();
    });

    it("does not allow user to click the Login button when there is an ongoing api call", () => {
      const actions = {
        postLogin: mockAsyncDelayed(),
      };
      setupForSubmit({ actions });
      fireEvent.click(button);
      fireEvent.click(button);
      expect(actions.postLogin).toHaveBeenCalledTimes(1);
    });

    it("displays spinner when there is an ongoing api call", () => {
      const actions = {
        postLogin: mockAsyncDelayed(),
      };
      const { queryByText } = setupForSubmit({ actions });
      fireEvent.click(button);
      const spinner = queryByText("Loading...");
      expect(spinner).toBeInTheDocument();
    });

    it("hides spinner after api call finishes successfully", async () => {
      const actions = {
        postLogin: mockAsyncDelayed(),
      };
      const { queryByText } = setupForSubmit({ actions });
      fireEvent.click(button);
      const spinner = queryByText("Loading...");
      await waitFor(() => expect(spinner).not.toBeInTheDocument());
    });

    it("hides spinner after api call finishes with error", async () => {
      const actions = {
        postLogin: jest.fn().mockImplementation(() => {
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

    it("redirects to homepage after successful login", async () => {
      const actions = {
        postLogin: jest.fn().mockResolvedValue({ data: { token: "123" } }),
      };

      const history = {
        push: jest.fn(),
      };

      setupForSubmit({ actions, history });
      fireEvent.click(button);

      await waitFor(() =>
        expect(history.push).toHaveBeenCalledWith("/admin/home")
      );
    });
  });
});
console.error = () => {};
