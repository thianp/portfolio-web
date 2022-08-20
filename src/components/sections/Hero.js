import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

  return (
    <>
      <div className="hero grid grid-cols-1 md:grid-cols-5 gap-[40px]">
        <div className="text-start md:col-span-3 grid content-center min-h-[200px] md:min-h-[400px] bg-transparent">
          <div className="flex items-center gap-[10px]">
            <hr className="w-[30px] short-hr" />
            <h3>Hello, I'm Thian,</h3>
          </div>
          <h1>
            A Full Stack <br />
            Web Developer
          </h1>
        </div>
        <div className="md:col-span-2 text-start grid content-center md:pt-[60px] gap-[20px] min-h-[200px] md:min-h-[400px] bg-transparent">
          {!isMobile && <hr className="w-[30px] short-hr" />}
          <p>
            I am an aspiring frontend developer with full stack project
            experience using React JS and Node JS at Codecamp Thailand. Prior to
            the bootcamp, I have held a position at a fintech Startup, working
            on the company’s in-app chatbot feature.
          </p>
        </div>
      </div>
    </>
  );
}
