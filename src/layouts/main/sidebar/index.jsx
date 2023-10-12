import NavBar from "./navbar";
import SocialBar from "./socialbar";

const SideBar = () => {
  return (
    <div className="md:flex md:gap-24 lg:gap-48 md:items-center">
      <SocialBar />

      <NavBar />
    </div>
  );
};

export default SideBar;
