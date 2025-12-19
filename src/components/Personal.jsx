import { useState } from "react";

export function Name() {
  const [name, setName] = useState("");
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

export function Email() {
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

export function Phone() {
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
