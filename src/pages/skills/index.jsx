import { useColorStore } from "~/stores/color";
import { skillsList } from "~/utils/consts";

const Skills = () => {
  const color = useColorStore((state) => state.color);

  return (
    <div className="SkillsPage page-base">
      <div className={`page-title ${color}`}>skills.</div>

      <div>
        <div className="text-neutral-500 text-sm">{"<span>"}</div>

        <div className="my-2 text-lg">
          Skills I know, I use and currently continue to learn
        </div>

        <div className="text-neutral-500 text-sm">{"</span>"}</div>
      </div>

      <ul
        className={`flex flex-wrap justify-center gap-4 transition-colors ${color}`}
      >
        {skillsList.map((skill, index) => (
          <a
            key={index}
            href={skill.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`card-link gap-3 w-full max-w-[250px] hover:border-green-400 [&:not(:hover)]:text-gray-50 transition-colors ${color}`}
          >
            <span className="text-2xl">{skill.icon}</span>
            <span>{skill.title}</span>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
