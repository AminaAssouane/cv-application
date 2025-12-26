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
  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: "",
      titleStudy: "",
      dateStudy: "",
      isEditing: true,
    },
  ]);
  const [educationSubmitted, setEducationSubmitted] = useState([]);

  // Experience
  const [experience, setExperience] = useState([
    {
      id: crypto.randomUUID(),
      positionTitle: "",
      companyName: "",
      dateWork: "",
      isEditing: true,
    },
  ]);
  const [experienceSubmitted, setExperienceSubmitted] = useState([]);

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
            />
          </section>
          <section className="sidebar-section">
            <ExperienceForm
              experience={experience}
              setExperience={setExperience}
              setSubmitted={setExperienceSubmitted}
            />
          </section>
        </aside>
        <main className="cv">
          <section className="cv-section personal-section">
            <PersonalDisplay personal={personalSubmitted} />
          </section>
          <section className="cv-section education-section">
            <EducationDisplay education={educationSubmitted} />
          </section>
          <section className="cv-section experience-section">
            <ExperienceDisplay experience={experienceSubmitted} />
          </section>
        </main>
      </div>
    </>
  );
}
