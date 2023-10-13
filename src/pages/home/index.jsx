import { useColorStore } from "~/stores/color";
import { IoIosMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

const Home = () => {
  const color = useColorStore((state) => state.color);

  return (
    <div className="page-base text-center lg:text-left">
      <div className="font-semibold flex flex-col gap-4 tracking-wider">
        <span className="text-gray-400 select-none text-lg sm:text-xl md:text-2xl">
          Hi 👋, I am
        </span>

        <div className="font-Caveat text-6xl md:text-7xl">Emre Erden</div>

        <div className="text-xl sm:text-2xl md:text-3xl">
          <span className="text-gray-400 select-none">{"<"}</span>
          <span className={`transition-colors ${color}`}>
            Front-End Developer
          </span>
          <span className="text-gray-400 select-none">{" />"}</span>
        </div>
      </div>

      <div className="tracking-wider max-w-[650px] lg:max-w-none mx-auto">
        I'm working to be an experienced developer in the Front-End world. In
        this profession, I'm open to learning and improving myself. I enjoy
        learning new things and constantly improving myself.
      </div>

      <div className="flex flex-wrap-reverse justify-center lg:justify-start gap-4">
        <div className="card-link card-home">
          <a
            href="mailto:emreerden@pm.me"
            className="home-link flex items-center justify-center gap-2"
          >
            <span className="text-xl">
              <IoIosMail />
            </span>
            <span className="-mt-0.5">emreerden@pm.me</span>
          </a>

          <div className="border border-gray-50"></div>

          <a
            href="https://t.me/Wiazeph"
            target="_blank"
            rel="noopener noreferrer"
            className="home-link flex items-center justify-center gap-2 select-none"
          >
            <span className="text-lg">
              <FaTelegramPlane />
            </span>
            <span className="-mt-0.5">Telegram</span>
          </a>
        </div>

        <div className="card-link card-home select-none">
          <a
            href="https://flowcv.com/resume/l3ncgjown0"
            target="_blank"
            rel="noopener noreferrer"
            className="home-link"
          >
            View CV
          </a>

          <div className="border border-gray-50"></div>

          <a
            href="Emre_Erden_CV.pdf"
            target="_blank"
            download="Emre_Erden_CV.pdf"
            className="home-link"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
