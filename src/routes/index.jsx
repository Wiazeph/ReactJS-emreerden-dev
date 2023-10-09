import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>home</div>,
      },
      {
        path: "whoami",
        element: <div>whoami</div>,
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
