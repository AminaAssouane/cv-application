import { useState } from "react";
import { PersonalForm } from "./components/PersonalForm";
import { PersonalDisplay } from "./components/PersonalDisplay";
import { EducationForm } from "./components/EducationForm";
import { EducationDisplay } from "./components/EducationDisplay";
/*import { ExperienceForm } from "./components/ExperienceForm";
import { ExperienceDisplay } from "./components/ExperienceDisplay";*/

export function App() {
  // Personal
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [personalSubmitted, setPersonalSubmitted] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEditingPersonal, setIsEditingPersonal] = useState(true);

  // Education
  const [education, setEducation] = useState({
    schoolName: "",
    titleStudy: "",
    dateStudy: "",
  });
  const [isEditingEducation, setIsEditingEducation] = useState(true);

  // Experience
  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    dateWork: "",
  });

  return (
    <div className="layout">
      <aside className="sidebar">
        <PersonalForm
          personal={personal}
          setPersonal={setPersonal}
          submitted={personalSubmitted}
          setSubmitted={setPersonalSubmitted}
          isEditing={isEditingPersonal}
          setIsEditing={setIsEditingPersonal}
        />

        <EducationForm
          education={education}
          setEducation={setEducation}
          isEditing={isEditingEducation}
          setIsEditing={setIsEditingEducation}
        />
      </aside>
      <main className="cv">
        <PersonalDisplay personal={personalSubmitted} />
        <EducationDisplay education={education} />
      </main>
    </div>
  );
}
