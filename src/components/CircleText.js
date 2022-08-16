import { useState } from "react";
import quote from "../assets/quote-blake.svg";

export default function CircleText() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <img
      src={quote}
      className={`w-36 inline-block ${isClicked && "circle-text"}`}
      onClick={handleClick}
    />
  );
}
