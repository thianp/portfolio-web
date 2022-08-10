import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Resume from "./components/sections/Resume";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { useEffect, useState } from "react";
import classNames from "classnames";

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
    "cursor-hidden": hidden,
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
      <div
        id="circularcursor"
        className={cursorClasses}
        // style={{ left: `${cursorXY.x}px`, top: `${cursorXY.y}px` }}
        style={{
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
      ></div>
      <div className="App mx-4 md:mx-20 mt-2 space-y-1">
        <Navbar />
        <Hero />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
