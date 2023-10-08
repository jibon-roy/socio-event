
import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/home/Home";
import Root from "../layouts/root/Root";
import Services from "../components/services/Services";

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
                path: "/services",
                element: <Services></Services>
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