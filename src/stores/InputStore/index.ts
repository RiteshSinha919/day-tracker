import { makeObservable, observable, action } from "mobx";

class InputStore {
  inputs: Record<string, string> = {};

  constructor() {
    makeObservable(this, {
      inputs: observable,
      setInput: action,
      resetInput: action,
    });
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
}

export const inputStore = new InputStore();
