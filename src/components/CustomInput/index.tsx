import React from "react";
import { InputWrapper, StyledInput } from "./styledComponents";

interface InputProps {
  placeholderText: string;
  name: string;
  value: string;
  type: string;
}

const CustomInput: React.FC = (props: InputProps) => {
  const { placeholderText, name, value, type } = props;
  return (
    <InputWrapper>
      <StyledInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholderText}
      />
    </InputWrapper>
  );
};

export default CustomInput;
