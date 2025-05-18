import { makeObservable, observable, action } from "mobx";

class InputStore {
  inputs: Record<string, string> = {};
  taskBucket: string[] = [];

  constructor() {
    makeObservable(this, {
      inputs: observable,
      setInput: action,
      resetInput: action,
      taskBucket: observable,
      addTask: action,
    });

    this.taskBucket = [];
    this.inputs = {};
  }

  setInput(key: string, value: string) {
    this.inputs[key] = value;
  }

  getInput(key: string) {
    return this.inputs[key] || "";
  }

  resetInput() {
    this.inputs = {};
  }

  addTask(task: string) {
    console.log("new", task);
    this.taskBucket.push(task);
  }
}

export const inputStore = new InputStore();
