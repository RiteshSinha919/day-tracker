import React from "react";
import { ButtonWrapper, StyledButton } from "./styledComponents";

interface ButtonProps {
  buttonText: string;
  buttonType: "primary" | "secondary";
  submitFunction?: () => void;
}

const CustomButton: React.FC = (props: ButtonProps) => {
  const { buttonText, buttonType, submitFunction } = props;
  return (
    <ButtonWrapper>
      <StyledButton type={buttonType} onClick={submitFunction}>
        {buttonText}
      </StyledButton>
    </ButtonWrapper>
  );
};

export default CustomButton;
