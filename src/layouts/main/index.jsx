import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="container mx-auto h-screen flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-24 xl:gap-48 pl-6 sm:pl-12 md:pl-[68px] lg:pl-12 pt-4 sm:pt-6 lg:pt-12 pb-[84px] sm:pb-[88px] lg:pb-12">
      <aside>
        <SideBar />
      </aside>
      <main className="w-full max-h-full overflow-y-auto pr-6 sm:pr-12 md:pr-[68px] lg:pr-12">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
