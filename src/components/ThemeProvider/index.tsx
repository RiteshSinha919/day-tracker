import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themes } from "../../constants/themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <StyledThemeProvider theme={themes.light}>{children}</StyledThemeProvider>
  );
};
