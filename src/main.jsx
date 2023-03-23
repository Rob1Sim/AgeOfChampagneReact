import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "./index.scss";
import "./Translations/i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
