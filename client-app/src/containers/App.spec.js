import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

const setup = (path) => {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
};

describe("App", () => {
  it("displays adminhome when url is /admin/home", () => {
    const { container } = setup("/admin/home");

    const homePageDiv = container.querySelector("#adminhome");
    expect(homePageDiv).toBeInTheDocument();
  });

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

    const h1 = container.querySelector("h1");
    expect(h1).toHaveTextContent("Sign Up");
  });
});
