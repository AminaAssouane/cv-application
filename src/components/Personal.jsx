import { useState } from "react";

function Name({ name, setName, display }) {
  return (
    <label>
      Full name :
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: display }}
      />
    </label>
  );
}

function Email({ email, setEmail, display }) {
  return (
    <label>
      Email :
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: display }}
      />
    </label>
  );
}

function Phone({ phone, setPhone, display }) {
  return (
    <label>
      Phone number :
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ display: display }}
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

  const [display, setDisplay] = useState("inline");

  const [buttonContent, setButtonContent] = useState("Submit");

  return (
    <>
      <Name name={name} setName={setName} display={display} />
      <br />
      <Email email={email} setEmail={setEmail} display={display} />
      <br />
      <Phone phone={phone} setPhone={setPhone} display={display} />
      <br />
      <button
        onClick={() => {
          if (buttonContent === "Submit") {
            setSubmittedName(name);
            setSubmittedEmail(email);
            setSubmittedPhone(phone);
            setDisplay("none");
            setButtonContent("Edit");
          } else {
            setDisplay("inline");
            setButtonContent("Submit");
          }
        }}
      >
        {buttonContent}
      </button>
      <div>Full name : {submittedName}</div>
      <div>Email : {submittedEmail}</div>
      <div>Phone : {submittedPhone}</div>
    </>
  );
}
