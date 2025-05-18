import React from "react";
import Title from "../../components/Title";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import TaskItem from "./TaskItem";
import {
  TrackerPageContainer,
  LanguageSwitcherContainer,
  TaskAdderContainer,
  TrackerPageAdderSection,
  AddButtonContainer,
  InputConatiner,
} from "./styledComponents";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../utils/LanguageSwitchUtils.ts";
import { observer } from "mobx-react-lite";
import { inputStore } from "../../stores/InputStore";

const TrackerPage: React.FC = observer(() => {
  const { t } = useTranslation();

  const renderTitle = () => {
    return <Title headingText={t("dayTracker")}></Title>;
  };

  const renderLanguageSwitcher = () => {
    return (
      <LanguageSwitcherContainer>
        <CustomButton
          buttonText={t("changeLanguage")}
          buttonType="primary"
          submitFunction={LanguageSwitcher}
        />
      </LanguageSwitcherContainer>
    );
  };

  const renderTasksAdder = () => {
    return (
      <TaskAdderContainer>
        <InputConatiner>
          <CustomInput
            name="name"
            type="text"
            placeholderText={t("enterTaskName")}
          />
        </InputConatiner>
        <AddButtonContainer>
          <CustomButton
            buttonText={t("addTask")}
            buttonType="primary"
            submitFunction={() =>
              inputStore.addTask(inputStore.getInput("name"))
            }
          />
        </AddButtonContainer>
      </TaskAdderContainer>
    );
  };

  const renderTaskItem = () => {
    return <TaskItem taskName="Creating the new login app" />;
  };

  return (
    <TrackerPageContainer>
      {renderTitle()}
      <TrackerPageAdderSection>
        {renderTasksAdder()}
        {renderLanguageSwitcher()}
      </TrackerPageAdderSection>
      {renderTaskItem()}
    </TrackerPageContainer>
  );
});

export default TrackerPage;
