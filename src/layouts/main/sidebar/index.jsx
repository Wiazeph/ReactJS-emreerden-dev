import classNames from "classnames";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import navLinks from "~/utils/consts";

const SideBar = () => {
  const [activeColor, setActiveColor] = useState("text-pink-500");
  console.log(activeColor);

  const handleNavLinkClick = (color) => {
    setActiveColor(color);
  };

  return (
    <div className="flex gap-10 items-center">
      <div className="flex flex-col gap-2 items-center text-red-500">
        <div className="h-12 w-px bg-current"></div>
        <div className="border w-3 h-3 rounded-full"></div>
        <div className="h-4 w-px bg-current"></div>
        <div className="border w-3 h-3 rounded-full"></div>
        <div className="h-4 w-px bg-current"></div>
        <div className="border w-3 h-3 rounded-full"></div>
        <div className="h-12 w-px bg-current"></div>
      </div>

      <nav className="flex flex-col gap-4">
        {navLinks.map((nlink, index) => (
          <NavLink
            key={index}
            to={nlink.path}
            onClick={() => handleNavLinkClick(nlink.color)}
            className="w-fit"
          >
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
    </div>
  );
};

export default SideBar;
