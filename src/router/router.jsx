
import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/home/Home";
import Root from "../layouts/root/Root";
import Services from "../components/services/Services";
import ServiceDetails from "../layouts/serviceDetails/ServiceDetails";
import Register from "../layouts/register/Register";
import Login from "../layouts/login/Login";
import Contact from "../layouts/contact/Contact";
import PrivetLayout from "../layouts/privetlayout/PrivetLayout";
import PublicLayout from "../layouts/PublicLayout/PublicLayout";
import Profile from "../layouts/Profile/Profile";
import Settings from "../layouts/settings/Settings";
import ErrorPage from "../layouts/errorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivetLayout><ServiceDetails></ServiceDetails></PrivetLayout>
            },
            {
                path: "/register",
                element: <PublicLayout><Register></Register></PublicLayout>
            },
            {
                path: "/login",
                element: <PublicLayout><Login></Login></PublicLayout>
            },
            {
                path: "/profile",
                element: <PrivetLayout><Profile></Profile></PrivetLayout>
            },
            {
                path: "/settings",
                element: <PrivetLayout><Settings></Settings></PrivetLayout>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    },
])


export default router;