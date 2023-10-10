import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="container mx-auto flex flex-col sm:flex-row gap-10 sm:gap-20 md:gap-[120px] lg:gap-40 items-center h-screen px-6 pt-10 pb-14">
      <aside>
        <SideBar />
      </aside>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
