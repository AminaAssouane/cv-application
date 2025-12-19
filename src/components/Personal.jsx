import { useState } from "react";

function Name({ name, setName }) {
  return (
    <label>
      Full name :
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );
}

function Email() {
  const [email, setEmail] = useState("");
  return (
    <label>
      Email :
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </label>
  );
}

function Phone() {
  const [phone, setPhone] = useState("");

  return (
    <label>
      Phone number :
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </label>
  );
}

function updateFields(name) {}

export function Personal() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  return (
    <>
      <Name name={name} setName={setName} />
      <br />
      <Email />
      <br />
      <Phone />
      <br />
      <button
        onClick={() => {
          {
            setSubmittedName(name);
          }
        }}
      >
        Submit
      </button>
      <div>Full name : {submittedName}</div>
    </>
  );
}
