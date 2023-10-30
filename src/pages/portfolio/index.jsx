import axios from "axios";
import { useColorStore } from "~/stores/color";
import { useReposStore } from "~/stores/repos";
import { portfolioFilters } from "~/utils/consts/portfoliofilters";
import { useState, useEffect } from "react";
import { FiGithub, FiStar } from "react-icons/fi";
import { IoLogoVercel } from "react-icons/io5";

const Portfolio = () => {
  const color = useColorStore((state) => state.color);
  const repos = useReposStore((state) => state.repos);
  const setRepos = useReposStore((state) => state.setRepos);

  const [selectedFilter, setSelectedFilter] = useState([
    "project",
    "study",
    "resource",
  ]);

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

  const handleFilterClick = (filter) => {
    if (filter === "all") {
      setSelectedFilter(["project", "study", "resource"]);
    } else {
      setSelectedFilter([filter]);
    }
  };

  return (
    <div className="PortfolioPage page-base">
      <div className={`page-title ${color}`}>portfolio.</div>

      <div>
        <div className="text-neutral-500 text-sm">{"<span>"}</div>

        <div className="my-2 text-lg">
          All the works I have done about the technologies I know and am still
          learning
        </div>

        <div className="text-neutral-500 text-sm">{"</span>"}</div>
      </div>

      <div className="w-full">
        <div className="max-w-max mx-auto">
          <div className="overflow-x-auto no-scrollbar">
            <ul className="mb-4 pb-1.5 w-max flex border-b border-neutral-600">
              <li>
                <button
                  className="px-2 py-1 text-neutral-400 hover:bg-neutral-800 hover:text-gray-50 transition-colors rounded-lg hover:cursor-pointer"
                  onClick={() => handleFilterClick("all")}
                >
                  All
                </button>
              </li>
              {portfolioFilters.map((filter, index) => (
                <li key={index}>
                  <button
                    className="px-2 py-1 text-neutral-400 hover:bg-neutral-800 hover:text-gray-50 transition-colors rounded-lg hover:cursor-pointer"
                    onClick={() => handleFilterClick(filter.filterName)}
                  >
                    {filter.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="flex flex-wrap justify-center gap-4">
          {repos.map((repo, index) => (
            <li
              key={index}
              className="portfolio-card group relative h-64 w-full md:w-[calc(50%-8px)] max-w-[350px] min-w-[100px] md:max-w-none border border-neutral-600 bg-cover bg-center bg-no-repeat overflow-hidden rounded-lg"
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

                    <div className="flex items-center justify-center gap-2">
                      <FiStar />
                      <div className="mt-px">Star</div>
                      <div className="rounded-full bg-neutral-700/70 px-[7px] pt-[3px] pb-0.5 leading-4">
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
                    <div className="w-max mt-px">Live Action</div>
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
