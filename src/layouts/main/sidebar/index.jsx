import classNames from "classnames";
import { NavLink } from "react-router-dom";
import navLinks from "~/utils/consts";
import { useColorStore } from "~/stores/color";
import { useState, useEffect } from "react";

const SideBar = () => {
  const [currentPathColor, setCurrentPathColor] = useState("");
  const color = useColorStore((state) => state.color);
  const setColor = useColorStore((state) => state.setColor);

  const handleNavLinkOver = (color) => {
    setColor(color);
  };

  const handleNavLinkOut = () => {
    setColor(currentPathColor);
  };

  useEffect(() => {
    const matchedNavLink = navLinks.find(
      (nlink) => nlink.path === location.pathname
    );
    if (matchedNavLink) {
      setColor(matchedNavLink.color);
      setCurrentPathColor(matchedNavLink.color);
    }
  }, []);

  return (
    <div className="flex gap-10 sm:gap-20 md:gap-[120px] lg:gap-40 items-center">
      <div
        className={`flex flex-col gap-2 items-center transition-colors ${color}`}
      >
        <div className="h-16 w-px bg-current"></div>
        <div className="border border-current w-3 h-3 rounded-full"></div>
        <div className="h-4 w-px bg-current"></div>
        <div className="border border-current w-3 h-3 rounded-full"></div>
        <div className="h-4 w-px bg-current"></div>
        <div className="border border-current w-3 h-3 rounded-full"></div>
        <div className="h-16 w-px bg-current"></div>
      </div>

      <nav className="w-max">
        {navLinks.map((nlink, index) => (
          <NavLink
            key={index}
            to={nlink.path}
            onClick={() => setCurrentPathColor(nlink.color)}
            onMouseOver={() => handleNavLinkOver(nlink.color)}
            onMouseOut={handleNavLinkOut}
          >
            {({ isActive }) => (
              <div
                className={classNames(
                  "flex gap-4 items-center transition-all py-2",
                  {
                    [nlink.color]: isActive,
                    [nlink.textHover]: !isActive,
                  }
                )}
              >
                <div>{index + 1}.</div>
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
