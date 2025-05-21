import React from "react";

import CustomButton from "./index";

import { render, screen, fireEvent } from "../../utils/ThemeTestUtils";

describe("Test CustomButton", () => {
  const mockSubmitFunct = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("render with correct button text", () => {
    render(
      <CustomButton
        buttonText="run"
        buttontype="primary"
        submitFunction={mockSubmitFunct}
      />
    );

    const buttonElement = screen.getByRole("button", { name: "run" });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("run");
  });

  it("render with correct button type", () => {
    const { rerender } = render(
      <CustomButton
        buttonText="run"
        buttontype="primary"
        submitFunction={mockSubmitFunct}
      />
    );

    const buttonElement = screen.getByRole("button", { name: "run" });
    expect(buttonElement).toHaveAttribute("buttontype", "primary");

    rerender(
      <CustomButton
        buttonText="run"
        buttontype="secondary"
        submitFunction={mockSubmitFunct}
      />
    );
    expect(buttonElement).toHaveAttribute("buttontype", "secondary");
  });

  it("call submit function on button click", () => {
    render(
      <CustomButton
        buttonText="run"
        buttontype="primary"
        submitFunction={mockSubmitFunct}
      />
    );
    
  });
});
