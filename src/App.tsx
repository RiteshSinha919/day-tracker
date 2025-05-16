import React from "react";
import PrimaryButton from "./components/CustomButton";
import { ThemeProvider } from "./components/ThemeProvider";
import "./App.css";
import CustomInput from "./components/CustomInput";

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ height: "50px", width: "400px" }}>
        <PrimaryButton buttonText="new" buttonType="primary" />
        <PrimaryButton buttonText="new" buttonType="secondary" />
        <CustomInput
          name="name"
          type="text"
          placeholderText="Enter your name"
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
