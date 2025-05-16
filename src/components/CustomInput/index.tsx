import React from "react";
import { observer } from "mobx-react-lite";
import { InputWrapper, StyledInput } from "./styledComponents";
import { inputStore } from "../../stores/InputStore";

interface InputProps {
  placeholderText: string;
  name: string;
  type: string;
}

const CustomInput: React.FC<InputProps> = observer((props: InputProps) => {
  const { placeholderText, name, type } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputStore.setInput(name, e.target.value);
  };

  return (
    <InputWrapper>
      <StyledInput
        type={type}
        name={name}
        value={inputStore.getInput(name)}
        onChange={handleChange}
        placeholder={placeholderText}
      />
    </InputWrapper>
  );
});

export default CustomInput;
