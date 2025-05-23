import React from "react";
import "./App.css";
import "./i18n";

import { ThemeProvider } from "./components/ThemeProvider";
import TrackerPage from "./routes/TrackerPage";

const App = () => {
  return (
    <ThemeProvider>
      <TrackerPage />
    </ThemeProvider>
  );
};

export default App;
