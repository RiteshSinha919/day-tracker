import i18n from "../../i18n";

const LanguageSwitcher = () => {
  const currentLanguage = i18n.language;
  const newLanguage = currentLanguage === "en" ? "hi" : "en";
  i18n.changeLanguage(newLanguage);
};

export default LanguageSwitcher;
