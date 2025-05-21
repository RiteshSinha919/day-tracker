import i18n from "i18next";

interface LanguageSwitcherProps {
  lang: "en" | "hi";
}

const LanguageSwitcher = (lang: LanguageSwitcherProps) => {
  const currentLanguage = i18n.language;
  const newLanguage = currentLanguage === "en" ? "hi" : "en";
  i18n.changeLanguage(newLanguage);
};

export default LanguageSwitcher;
