import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import ThreePath from "./components/ThreePath";
import CandidateRegForm from "./components/CandidateRegForm";
import CompanyRegForm from "./components/CompanyRegForm";
import CreatorRegForm from "./components/CreatorRegForm";
import LandingPage from "./components/LandingPage";
import CandidateEducation from "./components/CandidateEducation";
import CandidateExperience from "./components/CandidateExperience";
import CreatorExperience from "./components/CreatorExperience";
import Testing from "./components/Testing";
import TagInput from "./components/TagInput";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ThreePath />}></Route>
          <Route
            path="/candidateregform"
            element={<CandidateRegForm />}
          ></Route>
          <Route path="/tag-input" element={<TagInput />}></Route>
          <Route path="/testing" element={<Testing />}></Route>
          <Route
            path="/candidateregform/candidate-education"
            element={<CandidateEducation />}
          ></Route>
          <Route
            path="/candidateregform/candidate-experience"
            element={<CandidateExperience />}
          ></Route>
          <Route
            path="/creator-experience"
            element={<CreatorExperience />}
          ></Route>
          <Route path="/landing" element={<LandingPage />}></Route>
          <Route path="/creatorregform" element={<CreatorRegForm />}></Route>
          <Route path="/companyregform" element={<CompanyRegForm />}></Route>
        </Routes>
      </Router>

      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
