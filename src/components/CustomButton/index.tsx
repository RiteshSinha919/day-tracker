import React from "react";
import { ButtonWrapper, StyledButton } from "./styledComponents";

interface ButtonProps {
  buttonText: string;
  buttonType: "primary" | "secondary";
  submitFunction?: () => void;
}

const CustomButton: React.FC = (props: ButtonProps) => {
  const { buttonText, buttonType } = props;
  return (
    <ButtonWrapper>
      <StyledButton type={buttonType} onClick={props.submitFunction}>
        {buttonText}
      </StyledButton>
    </ButtonWrapper>
  );
};

export default CustomButton;
