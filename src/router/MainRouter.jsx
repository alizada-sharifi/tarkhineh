import { MainLayout } from "../layouts";
import { Branches, Home, NotFound } from "../pages";
import ROUTES from "./routePath";

const MainRouter = [
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.BRANCH,
        element: <Branches />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
export default MainRouter;
