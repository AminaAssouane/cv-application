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

function Email({ email, setEmail }) {
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

function Phone({ phone, setPhone }) {
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

export function Personal() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const [phone, setPhone] = useState("");
  const [submittedPhone, setSubmittedPhone] = useState("");

  return (
    <>
      <Name name={name} setName={setName} />
      <br />
      <Email email={email} setEmail={setEmail} />
      <br />
      <Phone phone={phone} setPhone={setPhone} />
      <br />
      <button
        onClick={() => {
          {
            setSubmittedName(name);
            setSubmittedEmail(email);
            setSubmittedPhone(phone);
          }
        }}
      >
        Submit
      </button>
      <div>Full name : {submittedName}</div>
      <div>Email : {submittedEmail}</div>
      <div>Phone : {submittedPhone}</div>
    </>
  );
}
