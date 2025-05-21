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
import LanguageSwitcher from "../../utils/LanguageSwitchUtils";
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
            name="addItem"
            type="text"
            placeholderText={t("enterTaskName")}
            errorMsg={inputStore.errorMessage}
          />
        </InputConatiner>
        <AddButtonContainer>
          <CustomButton
            buttonText={t("addTask")}
            buttontype="primary"
            submitFunction={() => {
              inputStore.addTask();
            }}
          />
        </AddButtonContainer>
      </TaskAdderContainer>
    );
  };

  const renderTaskItem = () => {
    return inputStore.taskBucket.map((task) => (
      <TaskItem
        key={task.taskId}
        taskName={task.taskName}
        taskId={task.taskId}
      />
    ));
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
