import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col sm:flex-row gap-10 sm:gap-20 md:gap-[120px] lg:gap-40 justify-center items-center px-6 pt-10 pb-14">
      <aside>
        <SideBar />
      </aside>
      <main className="w-full max-w-2xl">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
