import NavBar from "./navbar";
import SocialBar from "./socialbar";

const SideBar = () => {
  return (
    <div className="lg:flex lg:gap-24 xl:gap-48 lg:items-center">
      <SocialBar />

      <NavBar />
    </div>
  );
};

export default SideBar;
