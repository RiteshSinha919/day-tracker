import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { themes } from "../../constants/Theme/themes";

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
    ),
    ...options,
  });

export * from "@testing-library/react";

export { customRender as render };
