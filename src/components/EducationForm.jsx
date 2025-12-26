import { FaTrash } from "react-icons/fa";

export function EducationForm({ education, setEducation, setSubmitted }) {
  function handleChange(id, field, value) {
    setEducation((prev) =>
      prev.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  }

  function handleSubmit(id) {
    const eduToSubmit = { ...education.find((edu) => edu.id === id) };

    setSubmitted((prev) => {
      const exists = prev.find((edu) => edu.id === id);
      return exists
        ? prev.map((edu) => (edu.id === id ? eduToSubmit : edu))
        : [...prev, eduToSubmit];
    });

    setEducation((prev) =>
      prev.map((edu) => (edu.id === id ? { ...edu, isEditing: false } : edu))
    );
  }

  function handleEdit(id) {
    setEducation((prev) =>
      prev.map((edu) => (edu.id === id ? { ...edu, isEditing: true } : edu))
    );
  }

  function handleDelete(id) {
    // remove from sidebar
    setEducation((prev) => prev.filter((edu) => edu.id !== id));

    // remove from CV
    setSubmitted((prev) => prev.filter((edu) => edu.id !== id));
  }

  function addEducation() {
    setEducation((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        schoolName: "",
        titleStudy: "",
        dateStudy: "",
        isEditing: true,
      },
    ]);
  }

  return (
    <>
      <h2>Education</h2>
      {education.map((edu) => (
        <div key={edu.id} className="education-item">
          <label>
            Title of study :
            <input
              type="text"
              value={edu.titleStudy}
              disabled={!edu.isEditing}
              onChange={(e) =>
                handleChange(edu.id, "titleStudy", e.target.value)
              }
            />
          </label>

          <label>
            School Name :
            <input
              type="text"
              value={edu.schoolName}
              disabled={!edu.isEditing}
              onChange={(e) =>
                handleChange(edu.id, "schoolName", e.target.value)
              }
            />
          </label>

          <label>
            Date of study :
            <input
              type="date"
              value={edu.dateStudy}
              disabled={!edu.isEditing}
              onChange={(e) =>
                handleChange(edu.id, "dateStudy", e.target.value)
              }
            />
          </label>
          {edu.isEditing ? (
            <button onClick={() => handleSubmit(edu.id)}>Submit</button>
          ) : (
            <button onClick={() => handleEdit(edu.id)}>Edit</button>
          )}

          <button onClick={() => handleDelete(edu.id)} className="delete-btn">
            <FaTrash />
          </button>
        </div>
      ))}
      <button onClick={addEducation}>+ Add</button>
    </>
  );
}
