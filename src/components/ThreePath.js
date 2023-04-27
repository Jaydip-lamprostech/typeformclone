import React from "react";
import { useNavigate } from "react-router-dom";

function ThreePath() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/testing")}>Testing</button>
      <button onClick={() => navigate("/tag-input")}>TagInput</button>
      <button onClick={() => navigate("/candidateregform")}>
        Candidate Reg Form
      </button>
      <button onClick={() => navigate("/candidateregform/candidate-education")}>
        Candidate Education
      </button>
      <button
        onClick={() => navigate("/candidateregform/candidate-experience")}
      >
        Candidate Experience
      </button>
      <button onClick={() => navigate("/companyregform")}>
        Company Reg Form
      </button>
      <button onClick={() => navigate("/creatorregform")}>
        Creator Reg Form
      </button>
      <button onClick={() => navigate("/creator-experience")}>
        Creator Experience
      </button>
      <button onClick={() => navigate("/landing")}>Landing page</button>
    </>
  );
}

export default ThreePath;
