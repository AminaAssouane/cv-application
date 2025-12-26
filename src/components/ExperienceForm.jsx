import { FaTrash } from "react-icons/fa";

export function ExperienceForm({ experience, setExperience, setSubmitted }) {
  function handleChange(id, field, value) {
    setExperience((prev) =>
      prev.map((exp) => (exp.id == id ? { ...exp, [field]: value } : exp))
    );
  }

  function handleSubmit(id) {
    const expToSubmit = { ...experience.find((exp) => exp.id === id) };

    setSubmitted((prev) => {
      const exists = prev.find((edu) => edu.id === id);
      return exists
        ? prev.map((edu) => (edu.id === id ? expToSubmit : edu))
        : [...prev, expToSubmit];
    });

    setExperience((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, isEditing: false } : exp))
    );
  }

  function handleEdit(id) {
    setExperience((prev) =>
      prev.map((exp) => (exp.id == id ? { ...exp, isEditing: true } : exp))
    );
  }

  function handleDelete(id) {
    setExperience((prev) => prev.filter((exp) => exp.id !== id));

    setSubmitted((prev) => prev.filter((exp) => exp.id !== id));
  }

  function addExperience() {
    setExperience((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        positionTitle: "",
        companyName: "",
        dateWork: "",
        isEditing: true,
      },
    ]);
  }

  return (
    <>
      <h2>Experience</h2>
      {experience.map((exp) => (
        <div key={exp.id} className="education-item">
          <label>
            Position title :
            <input
              type="text"
              value={exp.positionTitle}
              disabled={!exp.isEditing}
              onChange={(e) =>
                handleChange(exp.id, "positionTitle", e.target.value)
              }
            ></input>
          </label>
          <label>
            Company name :
            <input
              type="text"
              value={exp.companyName}
              disabled={!exp.isEditing}
              onChange={(e) =>
                handleChange(exp.id, "companyName", e.target.value)
              }
            ></input>
          </label>

          <label>
            Date of work :
            <input
              type="date"
              value={exp.dateWork}
              disabled={!exp.isEditing}
              onChange={(e) => handleChange(exp.id, "dateWork", e.target.value)}
            ></input>
          </label>

          {exp.isEditing ? (
            <button onClick={() => handleSubmit(exp.id)}>Submit</button>
          ) : (
            <button onClick={() => handleEdit(exp.id)}>Edit</button>
          )}

          <button onClick={() => handleDelete(exp.id)}>
            <FaTrash />
          </button>
        </div>
      ))}
      <button onClick={addExperience}>+ Add</button>
    </>
  );
}
