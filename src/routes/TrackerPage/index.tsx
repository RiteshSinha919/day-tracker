import React from "react";
import Title from "../../components/Title";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { TrackerPageContainer } from "./styledComponents";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../utils/LanguageSwitchUtils.ts";

const TrackerPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <TrackerPageContainer>
      <Title headingText={t("dayTracker")}></Title>
      <CustomButton buttonText={t("addTask")} buttonType="primary" />
      <CustomButton buttonText={t("removeTask")} buttonType="secondary" />
      <CustomButton
        buttonText={t("changeLanguage")}
        buttonType="primary"
        submitFunction={LanguageSwitcher}
      />
      <CustomInput
        name="name"
        type="text"
        placeholderText={t("enterTaskName")}
      />
    </TrackerPageContainer>
  );
};

export default TrackerPage;
