import { makeObservable, observable, action, reaction } from "mobx";
import { v4 as uuidv4 } from "uuid";
import * as Sentry from "@sentry/react";

interface Task {
  taskId: string;
  taskName: string;
}

class InputStore {
  input: string = "";
  taskBucket: Task[] = [];
  errorMessage: string = "";

  constructor() {
    makeObservable(this, {
      input: observable,
      taskBucket: observable,
      errorMessage: observable,

      addTask: action,
      setInput: action,
      setError: action,
      resetInput: action,
      removeTask: action,
      setTaskBucket: action,
      initializeStore: action,
    });

    this.initializeStore();
  }

  initializeStore() {
    const storedTasks = localStorage.getItem("dayTrackerTasks");
    if (storedTasks) {
      try {
        this.setTaskBucket(JSON.parse(storedTasks));
      } catch (e) {
        Sentry.captureException(
          new Error(`Error parsing locally stored task bucket: ${e}`)
        );
        this.setTaskBucket([]);
        console.error("Failed to parse the localstorage tasks", e);
      }
    } else {
      this.setTaskBucket([]);
    }
    this.resetInput();
  }

  setInput(inputValue: string) {
    this.input = inputValue;
  }

  getInput() {
    return this.input || "";
  }

  resetInput() {
    this.input = "";
  }

  setTaskBucket(tasks: Task[]) {
    this.taskBucket = tasks;
    return this.taskBucket;
  }

  setError(error: string) {
    this.errorMessage = error;
  }

  addTask() {
    if (this.input.trim()) {
      this.setError("");
      const newTask: Task = {
        taskId: uuidv4(),
        taskName: this.input.trim(),
      };
      this.setTaskBucket([...this.taskBucket, newTask]);
      this.resetInput();
    } else {
      this.setError("Please enter a task");
      Sentry.setTag("task_name", "AddEmptyTask");
      Sentry.captureException(new Error("No task entered"));
    }
  }

  removeTask(taskId: string) {
    this.setTaskBucket(
      this.taskBucket.filter((task) => task.taskId !== taskId)
    );
  }
}

export const inputStore = new InputStore();

reaction(
  () => inputStore.taskBucket.slice(),
  (tasks) => {
    localStorage.setItem("dayTrackerTasks", JSON.stringify(tasks));
  }
);
