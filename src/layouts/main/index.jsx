import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="container mx-auto h-screen flex flex-col md:flex-row gap-10 sm:gap-20 md:gap-[120px] lg:gap-40 items-center px-6 pt-8 pb-16 sm:pb-[68px]">
      <aside>
        <SideBar />
      </aside>
      <main className="w-full max-h-full overflow-y-auto pr-5">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
