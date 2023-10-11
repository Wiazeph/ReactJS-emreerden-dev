import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import Home from "~/pages/home";
import WhoAmI from "~/pages/whoami";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "whoami",
        element: <WhoAmI />,
      },
      {
        path: "skills",
        element: <div>skills</div>,
      },
      {
        path: "portfolio",
        element: <div>portfolio</div>,
      },
      {
        path: "tools",
        element: <div>tools</div>,
      },
    ],
  },
]);

export default routes;
