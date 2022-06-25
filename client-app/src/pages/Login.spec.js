import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Login } from "./Login";

describe("Login", () => {
  describe("Layout", () => {
    it("has header of Login", () => {
      const { container } = render(<Login />);
      const header = container.querySelector("h1");
      expect(header).toHaveTextContent("Login");
    });
  });
});
