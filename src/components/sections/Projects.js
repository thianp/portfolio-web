import Project from "../Project";
import petcation1 from "../../assets/petcation-1.png";
import petcation2 from "../../assets/petcation-2.png";
import petcation3 from "../../assets/petcation-3.png";
import homebody1 from "../../assets/homebody-1.png";
import homebody2 from "../../assets/homebody-2.png";
import homebody3 from "../../assets/homebody-3.png";

export default function Projects() {
  return (
    <>
      <a id="projects"></a>
      <div className="md:mt-[50px]">
        <h2>Projects</h2>
        <hr className="mt-4 md:mt-[20px]"/>
        <div className="mt-8 md:mt-[40px] space-y-[40px]">
          <Project
            title="Petcation (Group Project)"
            websiteLink="https://petcation.taptap.ooo/"
            feLink="https://github.com/MinkNanta/petcation"
            beLink="https://github.com/thianp/petcation-api"
            desc="An Airbnb website for pets where users can book holidays for their
            pets or become a host themselves"
            features={[
              "Booking creation (back and front end)",
              "Payment (Omise API)",
            ]}
            imgs={[petcation1, petcation2, petcation3]}
          />
          <Project
            title="Homebody (Personal Project)"
            feLink="https://github.com/thianp/homebody-web"
            beLink="https://github.com/thianp/homebody-api"
            desc="An e-commerce website for furniture and home appliances"
            features={[
              "Register / log in authentication using JWd",
              "Product database with complete CRUD operationX",
              "Shopping cart",
              "Order creation",
              "Admin dashboard",
            ]}
            imgs={[homebody1, homebody2, homebody3]}
          />
        </div>
      </div>
    </>
  );
}
