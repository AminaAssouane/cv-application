import { FaEnvelope, FaPhone } from "react-icons/fa";

export function PersonalDisplay({ personal }) {
  return (
    <>
      <h1>{personal.name}</h1>
      <p>
        {personal.email && (
          <span className="contact-item">
            <FaEnvelope />
            <span>{personal.email}</span>
          </span>
        )}

        {personal.phone && (
          <span className="contact-item">
            <FaPhone />
            <span>{personal.phone}</span>
          </span>
        )}
      </p>
    </>
  );
}
