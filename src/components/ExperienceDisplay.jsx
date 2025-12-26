export function ExperienceDisplay({ experience }) {
  return (
    <>
      {experience.length !== 0 && <h2>Experience</h2>}
      {experience.map((exp) => (
        <div>
          <p>
            <strong>
              <h3>{exp.positionTitle}</h3>
            </strong>
          </p>
          <p>{exp.companyName}</p>
          <p>{exp.dateWork}</p>
        </div>
      ))}
    </>
  );
}
