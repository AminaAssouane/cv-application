export function EducationForm({
  education,
  setEducation,
  setSubmitted,
  isEditing,
  setIsEditing,
}) {
  function handleSubmit() {
    setSubmitted(education);
    setIsEditing(false);
  }

  return (
    <>
      <label>
        School Name :
        <input
          type="text"
          value={education.schoolName}
          disabled={!isEditing}
          onChange={(e) =>
            setEducation({ ...education, schoolName: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Title of study :
        <input
          type="text"
          value={education.titleStudy}
          disabled={!isEditing}
          onChange={(e) =>
            setEducation({ ...education, titleStudy: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Title of study :
        <input
          type="date"
          value={education.dateStudy}
          disabled={!isEditing}
          onChange={(e) =>
            setEducation({ ...education, dateStudy: e.target.value })
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
