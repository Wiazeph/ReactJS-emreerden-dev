import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";

const MainLayout = () => {
  return (
    <div className="container mx-auto flex flex-col sm:flex-row gap-10 sm:gap-0 items-center bg-red-900 h-screen px-6 pt-10 pb-14">
      <aside className="bg-blue-900 sm:max-w-[300px] w-full">
        <SideBar />
      </aside>
      <main className="bg-green-900 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
