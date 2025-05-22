import i18n from "i18next";

interface LanguageSwitcherProps {
  lang: "en" | "hi";
}

const LanguageSwitcher = ({ lang }: LanguageSwitcherProps) => {
  const newLanguage = lang === "en" ? "hi" : "en";
  i18n.changeLanguage(newLanguage);
};

export default LanguageSwitcher;
