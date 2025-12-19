import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Personal } from "./components/Personal.jsx";
import { Education } from "./components/Education.jsx";
import { Experience } from "./components/Experience.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Personal />
    <br />
    <Education />
    <br />
    <Experience />
  </StrictMode>
);
