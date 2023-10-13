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
      className={`fixed lg:static bottom-[26px] lg:bottom-auto left-1/2 lg:left-auto -translate-x-1/2 lg:-translate-x-0 flex lg:flex-col gap-2 items-center transition-colors ${color}`}
    >
      <div className="w-6 sm:w-12 lg:w-px h-px lg:h-12 bg-current"></div>

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

      <div className="w-3 sm:w-4 lg:w-px h-px lg:h-4 bg-current"></div>

      <a
        href="https://instagram.com/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="socialbar-link"
      >
        <FaInstagram />
      </a>

      <div className="w-3 sm:w-4 lg:w-px h-px lg:h-4 bg-current"></div>

      <a
        href="https://linkedin.com/in/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="socialbar-link"
      >
        <FaLinkedin />
      </a>

      <div className="w-3 sm:w-4 lg:w-px h-px lg:h-4 bg-current"></div>

      <a
        href="https://github.com/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="socialbar-link"
      >
        <FaGithub />
      </a>

      <div className="w-3 sm:w-4 lg:w-px h-px lg:h-4 bg-current"></div>

      <a
        href="https://codepen.io/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="socialbar-link"
      >
        <FaCodepen />
      </a>

      <div className="w-6 sm:w-12 lg:w-px h-px lg:h-12 bg-current"></div>
    </div>
  );
};

export default SocialBar;
