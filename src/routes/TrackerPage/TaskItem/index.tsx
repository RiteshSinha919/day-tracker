import React from "react";
import {
  TaskItemContainer,
  TaskItemContent,
  RemoveButtonContainer,
} from "./styledComponents";
import CustomButton from "../../../components/CustomButton";
import { useTranslation } from "react-i18next";
import { inputStore } from "../../../stores/InputStore";
import { observer } from "mobx-react-lite";

interface TaskItemProps {
  taskId: string;
  taskName: string;
}

const TaskItem: React.FC = observer((props: TaskItemProps) => {
  const { taskName, taskId } = props;
  const { t } = useTranslation();
  return (
    <TaskItemContainer>
      <TaskItemContent>{taskName}</TaskItemContent>
      <RemoveButtonContainer>
        <CustomButton
          buttonText={t("removeTask")}
          buttonType="secondary"
          submitFunction={() => inputStore.removeTask(taskId)}
        />
      </RemoveButtonContainer>
    </TaskItemContainer>
  );
});

export default TaskItem;
