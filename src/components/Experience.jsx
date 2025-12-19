import { useState } from "react";

function CompanyName({ companyName, setCompanyName, display }) {
  return (
    <label>
      Company Name :
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        style={{ display: display }}
      ></input>
    </label>
  );
}

function PositionTitle({ positionTitle, setPositionTitle, display }) {
  return (
    <label>
      Position title :
      <input
        type="text"
        value={positionTitle}
        onChange={(e) => setPositionTitle(e.target.value)}
        style={{ display: display }}
      ></input>
    </label>
  );
}

function DateWork({ dateWork, setDateWork, display }) {
  return (
    <label>
      Date of work :
      <input
        type="date"
        value={dateWork}
        onChange={(e) => setDateWork(e.target.value)}
        style={{ display: display }}
      ></input>
    </label>
  );
}

export function Experience() {
  const [companyName, setCompanyName] = useState("");
  const [submittedCompanyName, setSubmittedCompanyName] = useState("");

  const [positionTitle, setPositionTitle] = useState("");
  const [submittedPositionTitle, setSubmittedPositionTitle] = useState("");

  const [dateWork, setDateWork] = useState("");
  const [submittedDateWork, setSubmittedDateWork] = useState("");

  const [display, setDisplay] = useState("inline");

  const [buttonContent, setButtonContent] = useState("Submit");

  return (
    <>
      <CompanyName
        companyName={companyName}
        setCompanyName={setCompanyName}
        display={display}
      />
      <br />
      <PositionTitle
        positionTitle={positionTitle}
        setPositionTitle={setPositionTitle}
        display={display}
      />
      <br />
      <DateWork
        dateWork={dateWork}
        setDateWork={setDateWork}
        display={display}
      />
      <br />
      <button
        onClick={() => {
          if (buttonContent === "Submit") {
            setSubmittedCompanyName(companyName);
            setSubmittedPositionTitle(positionTitle);
            setSubmittedDateWork(dateWork);
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
      <div>Company name : {submittedCompanyName}</div>
      <div>Position title : {submittedPositionTitle}</div>
      <div>Date of Work : {submittedDateWork}</div>
    </>
  );
}
