import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

const setup = () => {
  return render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
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
  });
});
