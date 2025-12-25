import { useState } from "react";
import { PersonalForm } from "./components/PersonalForm";
import { PersonalDisplay } from "./components/PersonalDisplay";
import { EducationForm } from "./components/EducationForm";
import { EducationDisplay } from "./components/EducationDisplay";
import { ExperienceForm } from "./components/ExperienceForm";
import { ExperienceDisplay } from "./components/ExperienceDisplay";

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
  const [educationSubmitted, setEducationSubmitted] = useState({
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
  const [experienceSubmitted, setExperienceSubmitted] = useState({
    companyName: "",
    positionTitle: "",
    dateWork: "",
  });
  const [isEditingExperience, setIsEditingExperience] = useState(true);

  return (
    <>
      <header>CV Application</header>

      <div className="layout">
        <aside className="sidebar">
          <section className="sidebar-section">
            <PersonalForm
              personal={personal}
              setPersonal={setPersonal}
              setSubmitted={setPersonalSubmitted}
              isEditing={isEditingPersonal}
              setIsEditing={setIsEditingPersonal}
            />
          </section>
          <section className="sidebar-section">
            <EducationForm
              education={education}
              setEducation={setEducation}
              setSubmitted={setEducationSubmitted}
              isEditing={isEditingEducation}
              setIsEditing={setIsEditingEducation}
            />
          </section>
          <section className="sidebar-section">
            <ExperienceForm
              experience={experience}
              setExperience={setExperience}
              setSubmitted={setExperienceSubmitted}
              isEditing={isEditingExperience}
              setIsEditing={setIsEditingExperience}
            />
          </section>
        </aside>
        <main className="cv">
          <section className="cv-section personal-section">
            <PersonalDisplay personal={personalSubmitted} />
          </section>
          <EducationDisplay education={educationSubmitted} />
          <ExperienceDisplay experience={experienceSubmitted} />
        </main>
      </div>
    </>
  );
}
