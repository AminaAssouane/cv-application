export function PersonalDisplay({ personal }) {
  return (
    <>
      <h2>{personal.name}</h2>
      <p>
        {personal.email} {personal.phone}
      </p>
    </>
  );
}
