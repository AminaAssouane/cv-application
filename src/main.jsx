import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import * as Personal from "./components/Personal.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Personal.Name />
    <Personal.Email />
    <Personal.Phone />
  </StrictMode>
);
