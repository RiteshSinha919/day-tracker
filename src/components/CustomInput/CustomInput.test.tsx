import React from "react";

import CustomInput from "./index";
import { inputStore } from "../../stores/InputStore";

import { render, screen, fireEvent } from "../../utils/ThemeTestUtils";

jest.mock("../../stores/InputStore", () => ({
  inputStore: {
    getInput: jest.fn(),
    setInput: jest.fn(),
    setError: jest.fn(),
  },
}));

describe("Test CustomInput", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (inputStore.getInput as jest.Mock).mockReturnValue("");
  });

  it("renders with correct props", () => {
    const props = {
      placeholderText: "Enter the Task Name",
      name: "task 1",
      type: "text",
    };

    render(<CustomInput {...props} />);

    const inputElement = screen.getByPlaceholderText("Enter the Task Name");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveAttribute("name", "task 1");
  });

  it("displays error message when provided", () => {
    const props = {
      placeholderText: "Enter task",
      name: "taskInput",
      type: "text",
      errorMsg: "This is an error",
    };

    render(<CustomInput {...props} />);

    expect(screen.getByText("This is an error")).toBeInTheDocument();
  });

  it("handles input change correctly", () => {
    const props = {
      placeholderText: "Enter task",
      name: "taskInput",
      type: "text",
    };

    render(<CustomInput {...props} />);
    const inputElement = screen.getByPlaceholderText("Enter task");

    fireEvent.change(inputElement, { target: { value: "New Task" } });

    expect(inputStore.setInput).toHaveBeenCalledWith("New Task");
    expect(inputStore.setError).toHaveBeenCalledWith("");
  });

  it("displays current input value from store", () => {
    const props = {
      placeholderText: "Enter task",
      name: "taskInput",
      type: "text",
    };
    (inputStore.getInput as jest.Mock).mockReturnValue("Current Task");

    render(<CustomInput {...props} />);

    const inputElement = screen.getByPlaceholderText("Enter task");
    expect(inputElement).toHaveValue("Current Task");
  });
});
