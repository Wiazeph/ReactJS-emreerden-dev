import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { navLinks } from "~/utils/consts/navlinks";
import { useColorStore } from "~/stores/color";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [currentPathColor, setCurrentPathColor] = useState("");
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
  }, [setColor]);

  return (
    <nav className="NavBar h-24 flex items-center justify-center">
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
                "transition-all px-1.5 sm:px-2 md:px-2.5 lg:px-3",
                {
                  [nlink.color]: isActive,
                  [nlink.textHover]: !isActive,
                }
              )}
            >
              {nlink.title}
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
