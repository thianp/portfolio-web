import bgLight from "../../assets/bg-light.png";

export default function Hero() {
  return (
    <div className="hero grid grid-cols-1 md:grid-cols-2 md:mt-[50px]">
      <div className="text-start grid content-around min-h-[200px] md:min-h-[400px] bg-transparent">
        <h1>Hello, I'm Thian.</h1>
      </div>
      <div className="text-start grid content-around min-h-[200px] md:min-h-[400px] bg-transparent">
        An aspiring frontend developer with full stack project experience using
        React JS and Node JS at Codecamp Thailand. Prior to the bootcamp, I have
        held a position at a fintech Startup, working on the company’s in-app
        chatbot feature.
      </div>
    </div>
  );
}
