import { NavLink } from "react-router-dom";
import navLinks from "~/utils/consts";

const SideBar = () => {
  return (
    <nav className="flex flex-col gap-4">
      {navLinks.map((nlink, index) => (
        <NavLink
          key={index}
          to={nlink.path}
          className={`flex gap-4 items-center hover:text-[${nlink.color}] transition-colors w-fit`}
        >
          <div>{index + 1}.</div>
          {/* <div className="h-3 w-px bg-current"></div> */}
          <div># {nlink.title}</div>
        </NavLink>
      ))}
    </nav>
  );
};

export default SideBar;
