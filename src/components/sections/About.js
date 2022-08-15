import Experience from "../Experience";
import resume from "../../assets/Thian Patcharaprakiti_resume.pdf";
import { DownloadIcon } from "@heroicons/react/outline";

export default function About() {
  // const skills = [htmlLogo, cssLogo, jsLogo, reactLogo, nodeLogo];
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React JS",
    "Bootstrap",
    "Tailwind",
    "Chakra UI",
    "Daisy UI",
    "Node JS",
    "Postman",
    "MySQL",
  ];

  return (
    <>
      <a id="about"></a>
      <div className="grid grid-cols-1 md:grid-cols-4 md:mt-[50px]">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-1">
            <h2 className="inline-block">About</h2>
            {/* TODO */}
            <a
              className="inline-block self-center md:self-start justify-self-end md:justify-self-start"
              href={resume}
              download
            >
              Download resume <DownloadIcon className="w-4 h-4 inline-block" />
            </a>
          </div>
        </div>
        <div className="md:col-span-3 mt-4 md:mt-0 space-y-[20px]">
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
            <div className=" mt-[10px]">
              <ul>
                {skills?.map((el) => (
                  // <img className="max-h-[60px]" src={el} />
                  <li>&emsp; &#9900; {el}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
