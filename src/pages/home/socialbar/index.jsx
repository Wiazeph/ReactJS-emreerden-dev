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
    <div className="SocialBar">
      <div className="text-neutral-400 text-sm mb-5">Follow Me!</div>

      <div
        className={`flex items-center gap-4 sm:gap-6 transition-colors ${color}`}
      >
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

        <a
          href="https://instagram.com/Wiazeph"
          target="_blank"
          rel="noopener noreferrer"
          className="socialbar-link"
        >
          <FaInstagram />
        </a>

        <a
          href="https://linkedin.com/in/Wiazeph"
          target="_blank"
          rel="noopener noreferrer"
          className="socialbar-link"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Wiazeph"
          target="_blank"
          rel="noopener noreferrer"
          className="socialbar-link"
        >
          <FaGithub />
        </a>

        <a
          href="https://codepen.io/Wiazeph"
          target="_blank"
          rel="noopener noreferrer"
          className="socialbar-link"
        >
          <FaCodepen />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
