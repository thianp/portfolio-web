import Experience from "../Experience";
import htmlLogo from "../../assets/html-logo.png";
import cssLogo from "../../assets/css-logo.png";
import jsLogo from "../../assets/js-logo.png";
import reactLogo from "../../assets/react-logo.png";
import nodeLogo from "../../assets/node-logo.png";
import resume from "../../assets/Thian Patcharaprakiti_resume.pdf";

export default function About() {
  return (
    <>
      <a id="about"></a>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mt-[50px]">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-1">
            <h2 className="inline-block">About</h2>
            {/* TODO */}
            <a
              className="inline-block self-center md:self-start justify-self-end md:justify-self-start"
              href={resume}
              download
            >
              Download as PDF
            </a>
          </div>
        </div>
        <div className="mt-4 md:mt-0 space-y-[20px]">
          <Experience
            startDate="Mar 2022"
            endDate="Jul 2022"
            title="Fullstack Javascript (Certificate)"
            org="Codecamp Thailand"
          />
          <Experience
            startDate="Sep 2021"
            endDate="Feb 2022"
            title="Product Development Associate"
            org="Mula-X"
            details="Planned and implemented the conversational structure of the customer service chatbot, as well as managed the telephony vendor for the IVR loan collections system"
          />
          <Experience
            startDate="Dec 2020"
            endDate="Aug 2021"
            title="Enabler Executive"
            org="Mula-X"
            details="Developed a customer service chatbot using Google Dialogflow and gathered requirements for the development of the MULA app's learning platform"
          />
          <Experience
            startDate="Jul 2016"
            endDate="Jul 2020"
            title="Bachelor of Arts in Economics (EBA)"
            org="Chulalongkorn University"
          />
          <div>
            <h3>Skills</h3>
            <div className="grid grid-cols-6 md:grid-cols-8 gap-[8px] mt-[10px]">
              <img src={htmlLogo} />
              <img src={cssLogo} />
              <img src={jsLogo} />
              <img src={reactLogo} />
              <img src={nodeLogo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
