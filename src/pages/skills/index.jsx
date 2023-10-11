import { useColorStore } from "~/stores/color";
import { skillsList } from "~/utils/consts";

const Skills = () => {
  const color = useColorStore((state) => state.color);

  return (
    <div className="page-base select-none">
      <div className={`text-6xl font-bold transition-colors ${color}`}>skills.</div>
      <div className="tracking-wider">
        <div className="text-gray-500">{"<span>"}</div>
        <div className="my-2 ml-4">
          Skills I know and currently continue to learn:
        </div>
        <div className="text-gray-500">{"</span>"}</div>
      </div>

      <ul className={`flex flex-wrap items-center gap-5 transition-colors ${color}`}>
        {skillsList.map((skill, index) => (
          <a
            key={index}
            href={skill.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 px-5 py-3 w-fit rounded-lg border border-gray-600 hover:border-green-400 bg-[#2a2a2a] shadow-lg [&:not(:hover)]:text-gray-50 hover:cursor-pointer transition-colors ${color}`}
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
