import { render } from "@testing-library/react";
import AdminHome from "./AdminHome";

describe("HomePage", () => {
  describe("Layout", () => {
    it("has root page div", () => {
      const { container } = render(<AdminHome />);
      const homePageDiv = container.querySelector("#adminhome");
      expect(homePageDiv).toBeInTheDocument();
    });
  });
});
