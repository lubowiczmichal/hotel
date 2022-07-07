import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FrontPage from "./HomePage/FrontPage";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FrontPage />
  </React.StrictMode>
);

reportWebVitals();
