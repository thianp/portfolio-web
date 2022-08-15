import Experience from "../Experience";
import resume from "../../assets/Thian Patcharaprakiti_resume.pdf";
import { DownloadIcon } from "@heroicons/react/outline";

export default function About() {
  const skills = {
    Skills: ["HTML", "CSS", "Javascript", "React JS", "Node JS", "MySQL"],
    Libraries: ["Bootstrap", "Tailwind", "Chakra UI", "Daisy UI"],
    APIs: ["Postman", "Omise Payment"],
  };

  return (
    <>
      <a id="about"></a>
      <div className="grid grid-cols-1 md:grid-cols-4 md:mt-[50px]">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-1">
            <h2 className="inline-block">About</h2>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px]">
            {Object.keys(skills).map((key) => (
              <div>
                <h3>{key}</h3>
                <ul className="mt-[10px]">
                  {skills[key].map((el) => (
                    <li>&emsp; &#9900; {el}</li>
                  ))}
                </ul>
              </div>
            ))}
            {/* {skills?.map((ctg, idx) => {
            <div>
              <h3>{Object.keys(skills)[idx]}</h3>
              <ul className="mt-[10px]">
                {ctg?.map((el) => (
                  <li>&emsp; &#9900; {el}</li>
                ))}
              </ul>
            </div>
            })} */}
            {/* <div>
              <h3>UI Libraries</h3>
              <ul className="mt-[10px]">
                {feLibraries?.map((el) => (
                  <li>&emsp; &#9900; {el}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>APIs</h3>
              <ul className="mt-[10px]">
                {apis?.map((el) => (
                  <li>&emsp; &#9900; {el}</li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
