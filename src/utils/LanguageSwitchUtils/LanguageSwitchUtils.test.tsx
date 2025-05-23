import React from "react";

import LanguageSwitcher from ".";
import i18n from "../../i18n";

jest.mock("../../i18n", () => ({
  __esModule: true,
  default: {
    language: "en",
    changeLanguage: jest.fn(),
    use: jest.fn().mockReturnThis(),
    init: jest.fn(),
  },
}));

describe("test language switching util", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("changing language from english to hindi", () => {
    i18n.language = "en";
    LanguageSwitcher();
    expect(i18n.changeLanguage).toHaveBeenCalledTimes(1);
    expect(i18n.changeLanguage).toHaveBeenCalledWith("hi");
  });

  it("changing language from hindi to english", () => {
    i18n.language = "hi";
    LanguageSwitcher();
    expect(i18n.changeLanguage).toHaveBeenCalledTimes(1);
    expect(i18n.changeLanguage).toHaveBeenCalledWith("en");
  });
});
