import React from "react";
import { ButtonWrapper, StyledButton } from "./styledComponents";

interface ButtonProps {
  buttonText: string;
  buttonType: "primary" | "secondary";
}

const CustomButton: React.FC = (props: ButtonProps) => {
  const { buttonText, buttonType } = props;
  return (
    <ButtonWrapper>
      <StyledButton type={buttonType}>{buttonText}</StyledButton>
    </ButtonWrapper>
  );
};

export default CustomButton;
