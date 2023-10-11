import { useColorStore } from "~/stores/color";
import { toolsList } from "~/utils/consts";

const Tools = () => {
  const color = useColorStore((state) => state.color);

  return (
    <div className="page-base select-none">
      <div className={`page-title ${color}`}>tools.</div>

      <ul
        className={`flex flex-wrap items-center gap-5 transition-colors ${color}`}
      >
        {toolsList.map((tool, index) => (
          <a
            key={index}
            href={tool.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`card-link card-tools hover:border-blue-400 [&:not(:hover)]:text-gray-50 transition-colors ${color}`}
          >
            {tool.title}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Tools;
