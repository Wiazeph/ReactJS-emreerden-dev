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
      className={`flex flex-col gap-2 items-center transition-colors ${color}`}
    >
      <div className="h-8 w-px bg-current"></div>

      <a
        href="https://twitter.com/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-current w-8 h-8 rounded-full flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? <FaXTwitter /> : <FaTwitter />}
      </a>

      <div className="h-4 w-px bg-current"></div>
      <a
        href="https://instagram.com/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-current w-8 h-8 rounded-full flex items-center justify-center"
      >
        <FaInstagram />
      </a>
      <div className="h-4 w-px bg-current"></div>
      <a
        href="https://linkedin.com/in/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-current w-8 h-8 rounded-full flex items-center justify-center"
      >
        <FaLinkedin />
      </a>
      <div className="h-4 w-px bg-current"></div>
      <a
        href="https://github.com/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-current w-8 h-8 rounded-full flex items-center justify-center"
      >
        <FaGithub />
      </a>
      <div className="h-4 w-px bg-current"></div>
      <a
        href="https://codepen.io/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-current w-8 h-8 rounded-full flex items-center justify-center"
      >
        <FaCodepen />
      </a>

      <div className="h-8 w-px bg-current"></div>
    </div>
  );
};

export default SocialBar;
