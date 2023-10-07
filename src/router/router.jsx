
import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/home/Home";
import Root from "../layouts/root/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/",
                element: <Home></Home>
            },
        ]
    },
])


export default router;