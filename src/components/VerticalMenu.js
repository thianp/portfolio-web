import { FaGithub, FaLinkedinIn, FaCodepen } from "react-icons/fa";

export default function VerticalMenu() {
  return (
    <div className="vertical-menu flex items-center flex-col gap-[12px]">
      <a href="https://github.com/thianp">
        <FaGithub className="w-[20px] h-[20px]" />
      </a>
      <a href="https://www.linkedin.com/in/thian-patcharaprakiti-367bb017a/">
        <FaLinkedinIn className="w-[20px] h-[20px]" />
      </a>
      <a href="https://codepen.io/thianp">
        <FaCodepen className="w-[20px] h-[20px]" />
      </a>
      <div className="flex items-center flex-col">
        <span className="text-center">·</span>
        <span className="text-center mt-[-12px]">·</span>
        <span className="text-center mt-[-12px]">·</span>
        <div className="vertical-line block w-[0.5px] h-[150px] my-0 mx-auto bg-black"></div>
      </div>
    </div>
  );
}
