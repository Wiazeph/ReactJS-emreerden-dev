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
