import { useState } from "react";

function SchoolName({ schoolName, setSchoolName, display }) {
  return (
    <label>
      School Name :
      <input
        type="text"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
        style={{ display: display }}
      ></input>
    </label>
  );
}

function TitleStudy({ titleStudy, setTitleStudy, display }) {
  return (
    <label>
      Title of study :
      <input
        type="text"
        value={titleStudy}
        onChange={(e) => setTitleStudy(e.target.value)}
        style={{ display: display }}
      ></input>
    </label>
  );
}

function DateStudy({ dateStudy, setDateStudy, display }) {
  return (
    <label>
      Title of study :
      <input
        type="date"
        value={dateStudy}
        onChange={(e) => setDateStudy(e.target.value)}
        style={{ display: display }}
      ></input>
    </label>
  );
}

export function EducationForm() {
  const [schoolName, setSchoolName] = useState("");
  const [submittedSchoolName, setSubmittedSchoolName] = useState("");

  const [titleStudy, setTitleStudy] = useState("");
  const [submittedTitleStudy, setSubmittedTitleStudy] = useState("");

  const [dateStudy, setDateStudy] = useState("");
  const [submittedDateStudy, setSubmittedDateStudy] = useState("");

  const [display, setDisplay] = useState("");

  const [buttonContent, setButtonContent] = useState("Submit");

  return (
    <>
      <SchoolName
        schoolName={schoolName}
        setSchoolName={setSchoolName}
        display={display}
      />
      <br />
      <TitleStudy
        titleStudy={titleStudy}
        setTitleStudy={setTitleStudy}
        display={display}
      />
      <br />
      <DateStudy
        dateStudy={dateStudy}
        setDateStudy={setDateStudy}
        display={display}
      />
      <br />
      <button
        onClick={() => {
          if (buttonContent === "Submit") {
            setSubmittedSchoolName(schoolName);
            setSubmittedTitleStudy(titleStudy);
            setSubmittedDateStudy(dateStudy);
            setButtonContent("Edit");
            setDisplay("none");
          } else {
            setButtonContent("Submit");
            setDisplay("inline");
          }
        }}
      >
        {buttonContent}
      </button>
      <div>School name : {submittedSchoolName}</div>
      <div>Title of study : {submittedTitleStudy}</div>
      <div>Date of study : {submittedDateStudy}</div>
    </>
  );
}
