import React from "react";
import Title from "../../components/Title";
import PrimaryButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { TrackerPageContainer } from "./styledComponents";

const TrackerPage: React.FC = () => {
  return (
    <TrackerPageContainer>
      <Title headingText="Day Tracker"></Title>
      <PrimaryButton buttonText="new" buttonType="primary" />
      <PrimaryButton buttonText="new" buttonType="secondary" />
      <CustomInput name="name" type="text" placeholderText="Enter your name" />
    </TrackerPageContainer>
  );
};

export default TrackerPage;
