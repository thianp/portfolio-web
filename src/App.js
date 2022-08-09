import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Resume from "./components/sections/Resume";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { useEffect, useState } from "react";

function App() {
  const [cursorXY, setCursorXY] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);

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
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseenter", handleMouseEnter);
    document.removeEventListener("mouseleave", handleMouseLeave);
  };

  const handleMouseMove = (e) => {
    const x = e.clientX - 16;
    const y = e.clientY - 16;
    setCursorXY({ x, y });
  };

  const handleMouseEnter = () => {
    setHidden(false);
  };

  const handleMouseLeave = () => {
    setHidden(true);
  };

  return (
    <>
      <div
        id="circularcursor"
        className={hidden ? "cursor-hidden" : ""}
        style={{ left: `${cursorXY.x}px`, top: `${cursorXY.y}px` }}
        // style={{
        //   transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        // }}
      />
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
