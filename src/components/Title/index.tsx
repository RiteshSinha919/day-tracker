import React from "react";
import { TitleContainer, TitleContent } from "./styledComponents";

interface TitleProps {
  headingText: string;
}

const Title: React.FC = (props: TitleProps) => {
  return (
    <TitleContainer>
      <TitleContent>{props.headingText}</TitleContent>
    </TitleContainer>
  );
};

export default Title;
