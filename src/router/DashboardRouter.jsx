import { Address, Favorites, OrderHistory, Profile } from "../pages";
import ROUTES from "./routePath";

const DashboardRouter = [
  {
    path: ROUTES.PROFILE,
    element: <Profile />,
  },
  {
    path: ROUTES.ORDERHISTORY,
    element: <OrderHistory />,
  },
  {
    path: ROUTES.FAVORITES,
    element: <Favorites />,
  },
  {
    path: ROUTES.ADDRESS,
    element: <Address />,
  },
];

export default DashboardRouter;
