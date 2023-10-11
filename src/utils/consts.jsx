const navLinks = [
  {
    path: "/",
    title: "hello",
    color: "text-pink-400",
    textHover: "hover:text-pink-300 hover:shadow-hello",
  },
  {
    path: "/whoami",
    title: "whoami",
    color: "text-yellow-300",
    textHover: "hover:text-yellow-200 hover:shadow-whoami",
  },
  {
    path: "/skills",
    title: "skills",
    color: "text-green-400",
    textHover: "hover:text-green-300 hover:shadow-skills",
  },
  {
    path: "/portfolio",
    title: "portfolio",
    color: "text-blue-400",
    textHover: "hover:text-blue-300 hover:shadow-portfolio",
  },
  {
    path: "/tools",
    title: "tools",
    color: "text-purple-400",
    textHover: "hover:text-purple-300  hover:shadow-tools",
  },
];

export default navLinks;

// import { FaInstagram, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

// export const socialLinks = [
//   {
//     separator: "h-4 w-px bg-current",
//   },
//   {
//     link: "https://instagram.com/Wiazeph",
//     icon: <FaInstagram />,
//   },
//   {
//     separator: "h-4 w-px bg-current",
//   },
//   {
//     link: "https://linkedin.com/in/Wiazeph",
//     icon: <FaLinkedin />,
//   },
//   {
//     separator: "h-4 w-px bg-current",
//   },
//   {
//     link: "https://github.com/Wiazeph",
//     icon: <FaGithub />,
//   },
//   {
//     separator: "h-4 w-px bg-current",
//   },
//   {
//     link: "https://codepen.io/Wiazeph",
//     icon: <FaCodepen />,
//   },
// ];

import { IoLogoHtml5, IoLogoCss3, IoLogoSass } from "react-icons/io";
import { FaBootstrap, FaReact, FaVuejs } from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoJavascript, BiLogoGit } from "react-icons/bi";

export const skillsList = [
  {
    path: "https://www.w3schools.com/html/default.asp",
    icon: <IoLogoHtml5 />,
    title: "HTML",
  },
  {
    path: "https://css-tricks.com/almanac/",
    icon: <IoLogoCss3 />,
    title: "CSS",
  },
  {
    path: "https://sass-lang.com/",
    icon: <IoLogoSass />,
    title: "Sass/Scss",
  },
  {
    path: "https://getbootstrap.com/",
    icon: <FaBootstrap />,
    title: "Bootstrap",
  },
  {
    path: "https://tailwindcss.com/",
    icon: <BiLogoTailwindCss />,
    title: "Tailwind CSS",
  },
  {
    path: "https://javascript.info/",
    icon: <BiLogoJavascript />,
    title: "JavaScript",
  },
  {
    path: "https://react.dev/",
    icon: <FaReact />,
    title: "React",
  },
  {
    path: "https://vuejs.org/",
    icon: <FaVuejs />,
    title: "Vue",
  },
  {
    path: "https://www.w3schools.com/git/default.asp",
    icon: <BiLogoGit />,
    title: "Git",
  },
];
