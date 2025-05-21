import React from "react";
import { ButtonWrapper, StyledButton } from "./styledComponents";

interface ButtonProps {
  buttonText: string;
  buttontype: "primary" | "secondary";
  submitFunction: () => void;
}

const CustomButton: React.FC = (props: ButtonProps) => {
  const { buttonText, buttontype, submitFunction } = props;
  return (
    <ButtonWrapper>
      <StyledButton buttontype={buttontype} onClick={submitFunction}>
        {buttonText}
      </StyledButton>
    </ButtonWrapper>
  );
};

export default CustomButton;
