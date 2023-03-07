import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import UserSheet from "../UserSheet/UserSheet";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        // children : [
        //     {
        //         path : '/user',
        //         element: <UserSheet />,
        //     }
        // ]
    },
    {
        path: "/user",
        element: <UserSheet />,
    }
])