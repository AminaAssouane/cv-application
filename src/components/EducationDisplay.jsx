export function EducationDisplay({ education }) {
  return (
    <>
      <p>School name : {education.schoolName}</p>
      <p>Title of study : {education.titleStudy}</p>
      <p>Date of study : {education.dateStudy}</p>
    </>
  );
}
