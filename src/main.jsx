import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "./index.scss";
import "./Translations/i18n";
import Footer from "./Components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);
