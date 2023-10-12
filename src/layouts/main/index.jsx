import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="container mx-auto h-screen flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-[120px] lg:gap-40 pl-6 sm:pl-12 md:pl-0 pt-4 md:pt-12 pb-[84px] sm:pb-[88px] md:pb-12">
      <aside>
        <SideBar />
      </aside>
      <main className="w-full max-h-full overflow-y-auto pr-6 sm:pr-12">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
