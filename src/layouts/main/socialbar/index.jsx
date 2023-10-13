import { useColorStore } from "~/stores/color";
import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaCodepen,
} from "react-icons/fa";

const SocialBar = () => {
  const color = useColorStore((state) => state.color);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`SocialBar w-full min-w-fit h-16 fixed z-50 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 sm:gap-2 transition-colors ${color} bg-baseBgColor`}
    >
      <div className="w-6 sm:w-10 md:w-14 lg:w-20 h-px bg-current"></div>

      <a
        href="https://twitter.com/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="socialbar-link"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? <FaXTwitter /> : <FaTwitter />}
      </a>

      <div className="w-3 sm:w-5 md:w-7 lg:w-9 h-px bg-current"></div>

      <a
        href="https://instagram.com/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="socialbar-link"
      >
        <FaInstagram />
      </a>

      <div className="w-3 sm:w-5 md:w-7 lg:w-9 h-px bg-current"></div>

      <a
        href="https://linkedin.com/in/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="socialbar-link"
      >
        <FaLinkedin />
      </a>

      <div className="w-3 sm:w-5 md:w-7 lg:w-9 h-px bg-current"></div>

      <a
        href="https://github.com/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="socialbar-link"
      >
        <FaGithub />
      </a>

      <div className="w-3 sm:w-5 md:w-7 lg:w-9 h-px bg-current"></div>

      <a
        href="https://codepen.io/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="socialbar-link"
      >
        <FaCodepen />
      </a>

      <div className="w-6 sm:w-10 md:w-14 lg:w-20 h-px bg-current"></div>
    </div>
  );
};

export default SocialBar;
