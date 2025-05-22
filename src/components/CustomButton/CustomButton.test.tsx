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
    const primaryButtonElement = screen.getByRole("button", { name: "run" });

    expect(primaryButtonElement).toHaveAttribute("buttontype", "primary");

    rerender(
      <CustomButton
        buttonText="run"
        buttontype="secondary"
        submitFunction={mockSubmitFunct}
      />
    );
    const secondaryButtonElement = screen.getByRole("button", { name: "run" });

    expect(secondaryButtonElement).toHaveAttribute("buttontype", "secondary");
  });

  it("call submit function on button click", () => {
    render(
      <CustomButton
        buttonText="run"
        buttontype="primary"
        submitFunction={mockSubmitFunct}
      />
    );
    const buttonElement = screen.getByRole("button", { name: "run" });

    fireEvent.click(buttonElement);

    expect(mockSubmitFunct).toHaveBeenCalledTimes(1);
  });
});
