import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

import { themes } from "../../constants/Theme/themes";

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
      </I18nextProvider>
    ),
    ...options,
  });

export * from "@testing-library/react";

export { customRender as render };
