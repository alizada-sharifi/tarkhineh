import { createBrowserRouter } from "react-router";
import MainRouter from "./MainRouter";
import DashboardRouter from "./DashboardRouter";

const router = createBrowserRouter([...MainRouter, ...DashboardRouter]);

export default router;
