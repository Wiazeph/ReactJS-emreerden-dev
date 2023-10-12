const navLinks = [
  {
    path: "/",
    title: "hello",
    color: "text-pink-400",
    textHover: "hover:text-pink-300 hover:translate-x-2",
  },
  {
    path: "/whoami",
    title: "whoami",
    color: "text-yellow-300",
    textHover: "hover:text-yellow-200 hover:translate-x-2",
  },
  {
    path: "/skills",
    title: "skills",
    color: "text-green-400",
    textHover: "hover:text-green-300 hover:translate-x-2",
  },
  {
    path: "/portfolio",
    title: "portfolio",
    color: "text-red-500",
    textHover: "hover:text-red-400 hover:translate-x-2",
  },
  {
    path: "/tools",
    title: "tools",
    color: "text-blue-400",
    textHover: "hover:text-blue-300 hover:translate-x-2",
  },
];

export default navLinks;

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

export const toolsList = [
  {
    path: "https://proton.me/mail",
    title: "Proton Mail",
  },
  {
    path: "https://proton.me/pass",
    title: "Proton Pass",
  },
  {
    path: "https://proton.me/calendar",
    title: "Proton Calendar",
  },
  {
    path: "https://protonvpn.com/",
    title: "Proton VPN",
  },
  {
    path: "https://authy.com/",
    title: "Authy",
  },
  {
    path: "https://www.mozilla.org/en-US/firefox/new/",
    title: "Firefox Browser",
  },
  {
    path: "https://www.google.com/chrome/",
    title: "Google Chrome",
  },
  {
    path: "https://maps.google.com/",
    title: "Google Maps",
  },
  {
    path: "https://drive.google.com/drive",
    title: "Google Drive",
  },
  {
    path: "https://meet.google.com/",
    title: "Google Meet",
  },
  {
    path: "https://translate.google.com/",
    title: "Google Translate",
  },
  {
    path: "https://www.deepl.com/translator",
    title: "DeepL Translator",
  },
  {
    path: "https://todoist.com/",
    title: "Todoist",
  },
  {
    path: "https://www.notion.so/",
    title: "Notion",
  },
  {
    path: "https://getpocket.com/",
    title: "Pocket",
  },
  {
    path: "https://code.visualstudio.com/",
    title: "Visual Studio Code",
  },
  {
    path: "https://www.sublimetext.com/",
    title: "Sublime Text",
  },
  {
    path: "https://openai.com/chatgpt",
    title: "ChatGPT",
  },
  {
    path: "https://vercel.com/",
    title: "Vercel",
  },
  {
    path: "https://www.figma.com/",
    title: "Figma",
  },
  {
    path: "https://flowcv.com/",
    title: "FlowCV",
  },
  {
    path: "https://excalidraw.com/",
    title: "Excalidraw",
  },
  {
    path: "https://calendly.com/",
    title: "Calendly",
  },
  {
    path: "https://zoom.us/",
    title: "Zoom",
  },
  {
    path: "https://app.prntscr.com/",
    title: "Lightshot",
  },
];

export const portfolioFilters = [
  {
    name: "React Projects",
  },
  {
    name: "Vue Projects",
  },
  {
    name: "Studies",
  },
  {
    name: "Resources",
  },
];
