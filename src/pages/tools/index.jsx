import { useColorStore } from "~/stores/color";
import { toolsList } from "~/utils/consts/toolslist";

const Tools = () => {
  const color = useColorStore((state) => state.color);

  return (
    <div className="ToolsPage page-base">
      <div className={`page-title ${color}`}>tools.</div>

      <ul
        className={`flex flex-wrap justify-center gap-4 transition-colors ${color}`}
      >
        {toolsList.map((tool, index) => (
          <a
            key={index}
            href={tool.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`card-link w-full max-w-[250px] sm:w-[calc(33%-9px)] hover:border-blue-400 [&:not(:hover)]:text-gray-50 transition-colors ${color}`}
          >
            {tool.title}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Tools;
