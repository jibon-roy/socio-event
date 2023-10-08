import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";


const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex min-h-[750px] justify-center items-center">
                <div>
                    <h3 className="text-2xl md:text-5xl mb-10">Opps, Sorry...</h3>
                    <h1 className="text-4xl md:text-7xl font-bold"><span className="italic">404</span> Page not found.</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;