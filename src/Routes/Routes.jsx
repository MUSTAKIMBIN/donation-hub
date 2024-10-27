import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Statistic from "../Pages/Statistic";
import Donation from "../Pages/Donation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage/>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/statistic',
            element: <Statistic></Statistic>
        },
        {
            path: '/donation',
            element: <Donation></Donation>
        }
    ]
  }
]);
export default router;
