import React from "react";

import LanguageSwitcher from ".";
import i18n from "i18next";

describe("test language switching util", () => {
  jest.mock(".", () => ({
    LanguageSwitcher: jest.fn(),
  }));

  it("changing language from english to hindi", () => {
    (i18n.language as string) = "en";
    LanguageSwitcher({ lang: "hi" });
    expect(LanguageSwitcher).toHaveBeenCalledWith("hi");
  });
});
