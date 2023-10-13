import { useState, useEffect } from "react";
import axios from "axios";
import { useColorStore } from "~/stores/color";
import { portfolioFilters } from "~/utils/consts";
import { FiGithub, FiStar } from "react-icons/fi";
import { IoLogoVercel } from "react-icons/io5";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState([
    "project",
    "resource",
    "study",
  ]);
  const color = useColorStore((state) => state.color);
  const repos = useColorStore((state) => state.repos);
  const setRepos = useColorStore((state) => state.setRepos);

  useEffect(() => {
    const getRepoData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/Wiazeph/repos`
        );

        const data = response.data.filter((repo) =>
          selectedFilter.some((topic) => repo.topics.includes(topic))
        );

        const updatedRepos = data
          .map((repo) => ({
            url: repo.html_url,
            live: repo.homepage,
            name: repo.name,
            desc: repo.description,
            stars: repo.stargazers_count,
            topics: repo.topics,
            img: `https://github.com/Wiazeph/${repo.name}/blob/main/thumbnail/${repo.name}.png?raw=true`,
          }))
          .sort((a, b) => b.stars - a.stars);

        setRepos(updatedRepos);
      } catch (error) {
        console.error("Error fetching repository data:", error);
      }
    };
    getRepoData();
  }, [setRepos, selectedFilter]);

  console.log(repos);

  return (
    <div className="page-base select-none">
      <div className={`page-title ${color}`}>portfolio.</div>

      <div className="tracking-wide text-center lg:text-left">
        <div className="text-neutral-500 text-sm">{"<span>"}</div>
        <div className="my-2 ml-4">
          All the works I have done about the technologies I know and am still
          learning
        </div>
        <div className="text-neutral-500 text-sm">{"</span>"}</div>
      </div>

      <div>
        <div className="max-w-[401px] mx-auto lg:mx-0">
          <div className="overflow-x-auto no-scrollbar">
            <ul className="mb-4 pb-1.5 w-max flex border-b border-neutral-600">
              <li>
                <button
                  className="portfolio-filter"
                  onClick={() =>
                    setSelectedFilter(["project", "resource", "study"])
                  }
                >
                  All
                </button>
              </li>
              {portfolioFilters.map((filter, index) => (
                <li key={index}>
                  <button
                    className="portfolio-filter"
                    onClick={() => setSelectedFilter([filter.filterName])}
                  >
                    {filter.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="flex flex-wrap gap-4 justify-center lg:justify-start">
          {repos.map((repo, index) => (
            <li
              key={index}
              className="portfolio-card group relative h-56 w-[308px] lg:w-[calc(50%-8px)] border border-neutral-600 bg-cover bg-center bg-no-repeat overflow-hidden rounded-lg"
              style={{
                backgroundImage: `url(${repo.img})`,
              }}
            >
              <div className="group-hover:opacity-100 group-hover:delay-300 opacity-0 transition-opacity relative z-20 h-full flex flex-col items-center justify-between p-4 text-center">
                <div className="text-lg">{repo.name}</div>

                <div>{repo.desc}</div>

                <div className="flex justify-center gap-4 text-sm">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-card-link"
                  >
                    <FiGithub />

                    <div className="border border-gray-50"></div>

                    <div className="flex select-none items-center justify-center gap-2">
                      <FiStar />

                      <div className="mb-px">Star</div>

                      <div className="rounded-full bg-neutral-700/70 px-[7px] pt-[2px] pb-0.5 leading-4">
                        {repo.stars}
                      </div>
                    </div>
                  </a>

                  <a
                    href={repo.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-card-link"
                  >
                    <IoLogoVercel />
                    <div className="w-max">Live Action</div>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
