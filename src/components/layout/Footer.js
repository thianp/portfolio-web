import { FaGithub, FaLinkedinIn, FaCodepen } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="py-[40px] grid justify-items-center text-sm gap-[20px]">
      <div className="footer-menu">
        <a href="https://github.com/thianp">
          <FaGithub className="w-[20px] h-[20px]" />
        </a>
        <a href="https://www.linkedin.com/in/thian-patcharaprakiti-367bb017a/">
          <FaLinkedinIn className="w-[20px] h-[20px]" />
        </a>
        <a href="https://codepen.io/thianp">
          <FaCodepen className="w-[20px] h-[20px]" />
        </a>
      </div>
      <div className="text-center">
        Developed & Maintained by Thian Patcharaprakiti
      </div>
    </div>
  );
}
