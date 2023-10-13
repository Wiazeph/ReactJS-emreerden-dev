import { useColorStore } from "~/stores/color";
import { IoIosMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

const Home = () => {
  const color = useColorStore((state) => state.color);

  return (
    <div className="HomePage page-base">
      <div className="flex flex-col gap-4">
        <span className="font-semibold text-gray-400 text-lg sm:text-xl md:text-2xl">
          Hi 👋, I am
        </span>

        <div className="font-Caveat text-6xl md:text-7xl -mt-1">Emre Erden</div>

        <div className="font-semibold text-xl sm:text-2xl md:text-3xl">
          <span className="text-gray-400">{"<"}</span>
          <span className={`sm:ml-0.5 transition-colors ${color}`}>
            Front-End Developer
          </span>
          <span className="text-gray-400">{" />"}</span>
        </div>
      </div>

      <div className="text-lg">
        I'm working to be an experienced developer in the Front-End world. In
        this profession, I'm open to learning and improving myself. I enjoy
        learning new things and constantly improving myself.
      </div>

      <div className="flex flex-wrap-reverse justify-center gap-4">
        <div className="card-link gap-3 px-4">
          <a
            href="mailto:emreerden@pm.me"
            className="flex items-center gap-2 transition-colors hover:text-pink-400"
          >
            <span className="text-xl">
              <IoIosMail />
            </span>
            <span>emreerden@pm.me</span>
          </a>

          <div className="border border-gray-50"></div>

          <a
            href="https://t.me/Wiazeph"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-pink-400"
          >
            <span className="text-lg">
              <FaTelegramPlane />
            </span>
            <span>Telegram</span>
          </a>
        </div>

        <div className="card-link gap-3 px-4">
          <a
            href="https://flowcv.com/resume/l3ncgjown0"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-pink-400"
          >
            View CV
          </a>

          <div className="border border-gray-50"></div>

          <a
            href="Emre_Erden_CV.pdf"
            target="_blank"
            download="Emre_Erden_CV.pdf"
            className="transition-colors hover:text-pink-400"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
