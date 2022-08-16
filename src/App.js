import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { isMobile } from "react-device-detect";
import { ArrowDownIcon } from "@heroicons/react/outline";
import arrow from "./assets/arrow.svg";

function App() {
  const [cursorXY, setCursorXY] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    addEventListeners();
    return () => {
      removeEventListeners();
    };
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", createRipple);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseenter", handleMouseEnter);
    document.removeEventListener("mouseleave", handleMouseLeave);
    document.removeEventListener("mousedown", createRipple);
  };

  const handleMouseMove = (e) => {
    const x = e.clientX - 10;
    const y = e.clientY - 10;
    setCursorXY({ x, y });
  };

  const handleMouseEnter = () => {
    setHidden(false);
  };

  const handleMouseLeave = () => {
    setHidden(true);
  };

  const cursorClasses = classNames({
    "cursor-clicked": clicked,
    "cursor-hidden": hidden || isMobile,
  });

  function createRipple(e) {
    const circle = document.createElement("span");
    const diameter = 20;
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - radius}px`;
    circle.style.top = `${e.clientY - radius}px`;
    circle.classList.add("ripple");

    const ripple = document.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    document.body.appendChild(circle);
  }

  return (
    <>
      {/* <div
        id="circularcursor"
        className={cursorClasses}
        style={{
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
      ></div> */}
      <div className="App">
        <div className="mx-8 md:mx-32 my-2">
          <Navbar />
        </div>
        <hr />
        <div className="mx-8 md:mx-32 mt-20 mb-16 md:my-[40px] space-y-1 md:space-y-[20px]">
          <Hero />
          <a href="#about">
            <img src={arrow} className="down-arrow w-10 h-10s my-[40px]" />
          </a>
          <About />
          <a href="#projects">
            <img src={arrow} className="down-arrow w-10 h-10s my-[40px]" />
          </a>
          <Projects />
          <a href="#contact">
            <img src={arrow} className="down-arrow w-10 h-10s my-[40px]" />
          </a>
          <Contact />
        </div>
        <hr className="border-gray" />
        <Footer />
      </div>
    </>
  );
}

export default App;
