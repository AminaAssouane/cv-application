export function PersonalForm({
  personal,
  setPersonal,
  submitted,
  setSubmitted,
  isEditing,
  setIsEditing,
}) {
  function handleSubmit() {
    setSubmitted(personal);
    setIsEditing(false);
  }

  return (
    <>
      <label>
        Name :
        <input
          type="text"
          value={personal.name}
          disabled={!isEditing}
          onChange={(e) => setPersonal({ ...personal, name: e.target.value })}
        />
      </label>
      <label>
        Email :
        <input
          type="text"
          value={personal.email}
          disabled={!isEditing}
          onChange={(e) => setPersonal({ ...personal, email: e.target.value })}
        />
      </label>
      <label>
        Phone number :
        <input
          type="text"
          value={personal.phone}
          disabled={!isEditing}
          onChange={(e) => setPersonal({ ...personal, phone: e.target.value })}
        />
      </label>
      {isEditing ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </>
  );
}
