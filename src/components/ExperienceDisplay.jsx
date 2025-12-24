export function ExperienceDisplay({ experience }) {
  return (
    <>
      <p>School name : {experience.companyName}</p>
      <p>Title of study : {experience.positionTitle}</p>
      <p>Date of study : {experience.dateWork}</p>
    </>
  );
}
