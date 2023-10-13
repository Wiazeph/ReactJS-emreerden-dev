import { Outlet } from "react-router-dom";
import SocialBar from "./socialbar";
import NavBar from "./navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto h-screen">
      <NavBar />
      <main className="container pt-28 sm:pt-32 md:pt-36 px-6 mb-28">
        <Outlet />
      </main>
      <SocialBar />
    </div>
  );
};

export default MainLayout;
