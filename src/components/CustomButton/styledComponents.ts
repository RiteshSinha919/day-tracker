import { styled } from "styled-components";

export const ButtonWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const StyledButton = styled.button`
  height: 100%;
  width: 100%;
  border: ${({ buttontype, theme }) =>
    buttontype === "primary" ? "none" : `1px solid ${theme.colors.blue600}`};
  border-radius: 8px;
  background-color: ${({ buttontype, theme }) =>
    buttontype === "primary"
      ? `${theme.colors.blue600}`
      : `${theme.colors.baseWhite}`};
  color: ${({ buttontype, theme }) =>
    buttontype === "primary"
      ? `${theme.colors.baseWhite}`
      : `${theme.colors.blue600}`};
  font-weight: 500;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.1em;
  font-size: 1.1em;
  cursor: pointer;
`;
