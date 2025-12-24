export function PersonalDisplay({ personal }) {
  return (
    <>
      <h2>{personal.name}</h2>
      <p>Email : {personal.email}</p>
      <p>Phone : {personal.phone}</p>
    </>
  );
}
