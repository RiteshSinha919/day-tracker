import React from "react";
import { observer } from "mobx-react-lite";
import {
  InputWrapper,
  StyledInput,
  ErrorMessageWrapper,
} from "./styledComponents";
import { inputStore } from "../../stores/InputStore";

interface InputProps {
  placeholderText: string;
  name: string;
  type: string;
  errorMsg?: string;
}

const CustomInput: React.FC<InputProps> = observer(
  ({ placeholderText, name, type, errorMsg }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      inputStore.setInput(inputValue);
      inputStore.setError("");
    };

    return (
      <>
        <InputWrapper>
          <StyledInput
            type={type}
            name={name}
            value={inputStore.getInput()}
            onChange={handleChange}
            placeholder={placeholderText}
          />
        </InputWrapper>
        {errorMsg && <ErrorMessageWrapper>{errorMsg}</ErrorMessageWrapper>}
      </>
    );
  }
);

export default CustomInput;
