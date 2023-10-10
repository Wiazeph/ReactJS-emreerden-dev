import NavBar from "./navbar";
import SocialBar from "./socialbar";

const SideBar = () => {
  return (
    <div className="flex gap-10 sm:gap-20 md:gap-[120px] lg:gap-40 items-center">
      <SocialBar />

      <NavBar />
    </div>
  );
};

export default SideBar;
