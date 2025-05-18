import styled from "styled-components";

export const TitleContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContent = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 48px;
  color: ${(props) => props.theme.colors.grey700};
`;
