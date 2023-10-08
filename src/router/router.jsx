
import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/home/Home";
import Root from "../layouts/root/Root";
import Services from "../components/services/Services";
import ServiceDetails from "../layouts/serviceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                loader: () => fetch('/services.json'),
                element: <Home></Home>
            },
            {
                path: "/services",
                loader: () => fetch('/services.json'),
                element: <Services></Services>
            },
            {
                path: "/service/:id",
                loader: () => fetch('/services.json'),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "/",
                element: <Home></Home>
            },
        ]
    },
])


export default router;