import { useColorStore } from "~/stores/color";
import { skillsList } from "~/utils/consts";

const Skills = () => {
  const color = useColorStore((state) => state.color);

  return (
    <div className="page-base select-none">
      <div className={`page-title ${color}`}>skills.</div>

      <div className="tracking-wide text-center lg:text-left">
        <div className="text-neutral-500 text-sm">{"<span>"}</div>
        <div className="my-2 ml-4">
          Skills I know, I use and currently continue to learn
        </div>
        <div className="text-neutral-500 text-sm">{"</span>"}</div>
      </div>

      <ul
        className={`flex flex-wrap items-center gap-5 transition-colors ${color}`}
      >
        {skillsList.map((skill, index) => (
          <a
            key={index}
            href={skill.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`card-link card-skills hover:border-green-400 [&:not(:hover)]:text-gray-50 transition-colors ${color}`}
          >
            <span className="text-xl">{skill.icon}</span>
            <span>{skill.title}</span>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
