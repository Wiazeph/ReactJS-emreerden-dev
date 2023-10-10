import classNames from "classnames";
import { NavLink } from "react-router-dom";
import navLinks from "~/utils/consts";

const SideBar = () => {
  return (
    <nav className="flex flex-col gap-4">
      {navLinks.map((nlink, index) => (
        <NavLink key={index} to={nlink.path} className="w-fit">
          {({ isActive }) => (
            <div
              className={classNames(
                "flex gap-4 items-center transition-colors",
                {
                  [nlink.color]: isActive,
                  [`${nlink.hoverColor}`]: !isActive,
                }
              )}
            >
              <div>{index + 1}.</div>
              {/* <div className="h-3 w-px bg-current"></div> */}
              <div># {nlink.title}</div>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default SideBar;
