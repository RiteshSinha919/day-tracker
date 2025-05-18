import React from "react";
import {
  TaskItemContainer,
  TaskItemContent,
  RemoveButtonContainer,
} from "./styledComponents";
import CustomButton from "../../../components/CustomButton";
import { useTranslation } from "react-i18next";

interface TaskItemProps {
  taskName: string;
}

const TaskItem: React.FC = (props: TaskItemProps) => {
  const { taskName } = props;
  const { t } = useTranslation();
  return (
    <TaskItemContainer>
      <TaskItemContent>{taskName}</TaskItemContent>
      <RemoveButtonContainer>
        <CustomButton buttonText={t("removeTask")} buttonType="secondary" />
      </RemoveButtonContainer>
    </TaskItemContainer>
  );
};

export default TaskItem;
