import { Outlet } from "react-router-dom";
import NavBar from "./navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <NavBar />
      <main className="pt-4 sm:pt-8 px-6 pb-14">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
