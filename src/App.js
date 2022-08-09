import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Resume from "./components/sections/Resume";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { useEffect, useState } from "react";

function App() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        id="circularcursor"
        style={{
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
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
