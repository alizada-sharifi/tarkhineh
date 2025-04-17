import { MainLayout } from "../layouts";
import {
  Branches,
  Cart,
  CompleteInfo,
  FoodDetail,
  Home,
  Menu,
  NotFound,
  Payment,
  Result,
  SuccessfulPayment,
} from "../pages";
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
        path: ROUTES.RESULT,
        element: <Result />,
      },
      {
        path: ROUTES.BRANCH,
        element: <Branches />,
      },
      {
        path: ROUTES.MENU,
        element: <Menu />,
      },
      {
        path: ROUTES.FOODDETAIL,
        element: <FoodDetail />,
      },
      {
        path: ROUTES.CART,
        element: <Cart />,
      },
      {
        path: ROUTES.COMPLETEINFO,
        element: <CompleteInfo />,
      },
      {
        path: ROUTES.PAYMENT,
        element: <Payment />,
      },
      {
        path: ROUTES.SUCCESSFULPAYMENT,
        element: <SuccessfulPayment />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
export default MainRouter;
