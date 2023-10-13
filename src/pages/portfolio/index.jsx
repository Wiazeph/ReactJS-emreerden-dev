import { useColorStore } from "~/stores/color";
import { portfolioFilters } from "~/utils/consts";
import { FiGithub, FiStar } from "react-icons/fi";
import { IoLogoVercel } from "react-icons/io5";

const Portfolio = () => {
  const color = useColorStore((state) => state.color);

  return (
    <div className="page-base select-none">
      <div className={`page-title ${color}`}>portfolio.</div>

      <div className="tracking-wide">
        <div className="text-neutral-500 text-sm">{"<span>"}</div>
        <div className="my-2 ml-4">
          All the works I have done about the technologies I know and am still
          learning:
        </div>
        <div className="text-neutral-500 text-sm">{"</span>"}</div>
      </div>

      <div>
        <div className="overflow-x-auto no-scrollbar">
          <ul className="mb-4 flex pb-1.5 border-b border-neutral-600 w-max">
            <li className="portfolio-filter">All</li>
            {portfolioFilters.map((filter, index) => (
              <li key={index} className="portfolio-filter">
                {filter.name}
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-wrap gap-4">
          <li
            className="portfolio-card group relative h-56 border border-neutral-600 bg-cover bg-center bg-no-repeat overflow-hidden rounded-lg"
            style={{
              backgroundImage:
                'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hayvansitesi.com%2Fwp-content%2Fuploads%2Fkopek-isimleri.jpg&f=1&nofb=1&ipt=6ffd9e9d8a35db8c43dbc580a3eedd97f20abb628bd4773d7114f6887ad335e2&ipo=images")',
            }}
          >
            <div className="group-hover:opacity-100 group-hover:delay-300 opacity-0 transition-opacity relative z-20 h-full flex flex-col items-center justify-between p-4 text-center">
              <div className="text-lg">repo.name</div>

              <div>repo.desc</div>

              <div className="flex justify-center gap-4 text-sm">
                <a
                  href="{repo.url}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card-link"
                >
                  <FiGithub />

                  <div className="border border-gray-50"></div>

                  <div className="flex select-none items-center justify-center gap-2">
                    <FiStar />

                    <div className="mb-px">Star</div>

                    <div className="rounded-full bg-neutral-700/70 px-[7px] pt-[3px] pb-0.5 leading-4">
                      4
                    </div>
                  </div>
                </a>

                <a
                  href="{repo.live}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card-link"
                >
                  <IoLogoVercel />
                  <div>Live Action</div>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
