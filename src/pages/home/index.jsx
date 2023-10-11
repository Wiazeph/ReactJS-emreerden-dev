import { useColorStore } from "~/stores/color";

const Home = () => {
  const color = useColorStore((state) => state.color);

  return (
    <div className="page-base">
      <div className="font-semibold">
        <span className="text-gray-400 text-2xl">Hi 👋, I am</span>

        <div className="mt-1 text-7xl">Emre Erden</div>

        <div className="mt-4 text-3xl tracking-wider">
          <span className="text-gray-400">{"<"}</span>
          <span className={`transition-colors ${color}`}>
            Front-End Developer
          </span>
          <span className="text-gray-400">{" />"}</span>
        </div>
      </div>

      <div className="tracking-wider">
        I'm working to be an experienced developer in the Front-End world. In
        this profession, I'm open to learning and improving myself. I enjoy
        learning new things and constantly improving myself.
      </div>

      <div className="flex items-center justify-center gap-3 rounded-lg border border-gray-600 bg-[#2a2a2a] px-5 py-3 text-sm shadow-lg w-fit select-none">
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
  );
};

export default Home;
