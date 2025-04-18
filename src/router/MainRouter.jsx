import { MainLayout } from "../layouts";
import {
  About,
  Branches,
  Cart,
  CompleteInfo,
  Contact,
  Dashboard,
  Faq,
  FoodDetail,
  Home,
  Menu,
  NotFound,
  Payment,
  Privacy,
  Profile,
  Result,
  Rules,
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
        path: ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: ROUTES.CONTACT,
        element: <Contact />,
      },
      {
        path: ROUTES.FAQ,
        element: <Faq />,
      },
      {
        path: ROUTES.RULES,
        element: <Rules />,
      },
      {
        path: ROUTES.PRIVACY,
        element: <Privacy />,
      },
      {
        path: ROUTES.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
export default MainRouter;
