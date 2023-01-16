import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import arrow from "./assets/arrow.svg";
import CircleText from "./components/CircleText";
import VerticalMenu from "./components/VerticalMenu";

function App() {
  return (
    <div className="App">
      <VerticalMenu />
      <div className="mx-8 md:mx-32 my-2">
        <Navbar />
      </div>
      <hr />
      <div className="mx-8 md:mx-32 mt-20 md:mt-[20px] mb-16 md:mb-[40px] space-y-1 md:space-y-[20px]">
        <Hero />
        <div className="flex justify-between pb-[40px]">
          <a href="#about" className="self-end">
            <img src={arrow} alt="" className="w-10 h-10" />
          </a>
          <CircleText />
        </div>
        <About />
        <a href="#projects">
          <img src={arrow} alt="" className="w-10 h-10s my-[40px]" />
        </a>
        <Projects />
        <a href="#contact">
          <img src={arrow} alt="" className="w-10 h-10s my-[40px]" />
        </a>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
