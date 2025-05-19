import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://775ee7787151f6286537662b0bd63f63@o4509348696621056.ingest.de.sentry.io/4509349219401808",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={<p>Something went wrong</p>}>
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
