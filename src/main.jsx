import React from "react";
import { createRoot } from "react-dom/client";
// Import order matters: global tokens and base styles must be emitted before
// any component stylesheet so component rules win on equal specificity.
import "./styles/global.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
