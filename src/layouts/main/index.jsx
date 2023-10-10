import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="container mx-auto flex flex-col sm:flex-row gap-10 sm:gap-0 items-center h-screen px-6 pt-10 pb-14">
      <aside className="sm:max-w-[300px] w-full">
        <SideBar />
      </aside>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
