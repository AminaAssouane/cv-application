export function EducationDisplay({ education }) {
  return (
    <>
      {education.length !== 0 && <h2>Education</h2>}
      {education.map((edu) => (
        <div key={edu.id} className="cv-education-item">
          <p>
            <strong>
              <h3>{edu.titleStudy}</h3>
            </strong>
          </p>
          <p>{edu.schoolName}</p>
          <p>{edu.dateStudy}</p>
        </div>
      ))}
    </>
  );
}
