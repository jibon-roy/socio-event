import Slider from "../../components/slider/Slider";
import Services from "../../components/services/Services";

const Home = () => {




    return (
        <div>
            {/* Header Sections */}
            <section>
                <Slider></Slider>
            </section>
            {/* Services Section */}
            <section>
                <Services></Services>
            </section>
        </div>
    );
};

export default Home;