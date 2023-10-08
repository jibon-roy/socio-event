import Slider from "../../components/slider/Slider";
import Services from "../../components/services/Services";
import Statistics from "../../components/statistics/Statistics";
import Pricing from "../../components/pricing/Pricing";

const Home = () => {

    return (
        <div>
            {/* Header Sections */}
            <section>
                <Slider></Slider>
            </section>
            {/* Services Section */}
            <section data-aos='fade-up'>
                <Services></Services>
            </section>
            {/* Statistics Sections */}
            <section>
                <Statistics></Statistics>
            </section>
            {/* Pricing Sections */}
            <section>
                <Pricing></Pricing>
            </section>
        </div>
    );
};

export default Home;