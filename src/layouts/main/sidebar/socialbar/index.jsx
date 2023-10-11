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
// import React from "react";
// import { socialLinks } from "~/utils/consts";

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
        className="border border-current w-9 h-9 text-lg rounded-full flex items-center justify-center transition-colors [&:not(:hover)]:text-gray-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? <FaXTwitter /> : <FaTwitter />}
      </a>

      {/* {socialLinks.map((slink, index) => (
        <React.Fragment key={index}>
          <div className={slink.separator}></div>
          <a
            href={slink.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-current w-9 h-9 text-lg rounded-full flex items-center justify-center transition-colors [&:not(:hover)]:text-gray-50"
          >
            {slink.icon}
          </a>
        </React.Fragment>
      ))} */}

      <div className="h-4 w-px bg-current"></div>
      <a
        href="https://instagram.com/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-current w-9 h-9 text-lg rounded-full flex items-center justify-center transition-colors [&:not(:hover)]:text-gray-50"
      >
        <FaInstagram />
      </a>
      <div className="h-4 w-px bg-current"></div>
      <a
        href="https://linkedin.com/in/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-current w-9 h-9 text-lg rounded-full flex items-center justify-center transition-colors [&:not(:hover)]:text-gray-50"
      >
        <FaLinkedin />
      </a>
      <div className="h-4 w-px bg-current"></div>
      <a
        href="https://github.com/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-current w-9 h-9 text-lg rounded-full flex items-center justify-center transition-colors [&:not(:hover)]:text-gray-50"
      >
        <FaGithub />
      </a>
      <div className="h-4 w-px bg-current"></div>
      <a
        href="https://codepen.io/Wiazeph"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-current w-9 h-9 text-lg rounded-full flex items-center justify-center transition-colors [&:not(:hover)]:text-gray-50"
      >
        <FaCodepen />
      </a>

      <div className="h-8 w-px bg-current"></div>
    </div>
  );
};

export default SocialBar;
