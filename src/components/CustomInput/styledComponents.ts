import { styled } from "styled-components";

export const InputWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.grey600};
  outline: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.baseWhite};
  color: ${(props) => props.theme.colors.baseBlack};
  font-weight: 500;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.1em;
  font-size: 1.1em;
  padding: 0 1em;
`;
