import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Root = () => {
    return (
        <div className="container mx-auto">
            {/* Navbar Section */}
            <Navbar></Navbar>
            {/* React Router Render Section */}
            <Outlet></Outlet>
            {/* Footer Section */}
            <Footer></Footer>
        </div>
    );
};

export default Root;