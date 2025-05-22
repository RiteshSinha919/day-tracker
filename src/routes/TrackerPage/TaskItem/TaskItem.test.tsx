import React from "react";
import { fireEvent, render, screen } from "../../../utils/ThemeTestUtils";

import { inputStore } from "../../../stores/InputStore";

import TaskItem from ".";

jest.mock("../../../stores/InputStore", () => ({
  inputStore: {
    removeTask: jest.fn(),
  },
}));

describe("test task items", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("render task item with correct props", () => {
    render(<TaskItem taskId="123" taskName="my first task" />);

    const taskElement = screen.getByText("my first task");

    expect(taskElement).toBeInTheDocument();
    expect(taskElement).toHaveTextContent("my first task");
  });

  it("render remove task button with proper text", () => {
    render(<TaskItem taskId="123" taskName="my first task" />);

    const removeButtonElement = screen.getByRole("button", {
      name: "Remove Task",
    });

    expect(removeButtonElement).toHaveTextContent("Remove Task");
  });

  it("functionally working remove task button", () => {
    render(<TaskItem taskId="123" taskName="my first task" />);

    const removeButtonElement = screen.getByRole("button", {
      name: "Remove Task",
    });
    fireEvent.click(removeButtonElement);

    expect(inputStore.removeTask).toHaveBeenCalledTimes(1);
  });
});
