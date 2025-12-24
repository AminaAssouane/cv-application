export function ExperienceForm({
  experience,
  setExperience,
  setSubmitted,
  isEditing,
  setIsEditing,
}) {
  function handleSubmit() {
    setSubmitted(experience);
    setIsEditing(false);
  }
  return (
    <>
      <label>
        Company Name :
        <input
          type="text"
          value={experience.companyName}
          disabled={!isEditing}
          onChange={(e) =>
            setExperience({ ...experience, companyName: e.target.value })
          }
        ></input>
      </label>
      <br />
      <label>
        Position title :
        <input
          type="text"
          value={experience.positionTitle}
          disabled={!isEditing}
          onChange={(e) =>
            setExperience({ ...experience, positionTitle: e.target.value })
          }
        ></input>
      </label>
      <br />
      <label>
        Date of work :
        <input
          type="date"
          value={experience.dateWork}
          disabled={!isEditing}
          onChange={(e) =>
            setExperience({ ...experience, dateWork: e.target.value })
          }
        ></input>
      </label>
      <br />
      {isEditing ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </>
  );
}
