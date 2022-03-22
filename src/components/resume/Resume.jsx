import ResumeAssistantSection from "./ResumeAssistantSection";
import ResumeMainSection from "./ResumeMainSection";
import NavBar from "../Nabvar";
import Footer from "../Footer";

function Resume() {
  return (
    <div className="d-flex">
      <ResumeMainSection />
      <ResumeAssistantSection />
    </div>
  );
}

export default Resume;
