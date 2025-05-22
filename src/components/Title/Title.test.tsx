import React from "react";

import { screen, render } from "../../utils/ThemeTestUtils";

import Title from "./index";

describe("Test Title", () => {
  it("render title with proper content", () => {
    render(<Title headingText="Heading" />);

    const headingElement = screen.getByText("Heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent("Heading");
  });
});
