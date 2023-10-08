import CountUp from "react-countup";

const Statistics = () => {
    return (
        <div>
            <div className="my-20 bg-primary-dark" data-aos='fade-in'>
                <div className="text-5xl text-center py-10">
                    <span className="text-primary-white">SOCIO </span><span className="text-primary-pink">EVENT&#39;S </span><span className="font-semibold text-primary-white">Statistics</span>
                    <div className="w-20 mt-3 mr-[45%] md:mr-[40%]  2xl:ml-[48%] lg:mr-[44%] xl:mr-[45%] h-1 bg-primary-white mx-auto"></div>
                    <div className="w-20 mt-1 ml-[45%] md:mr-[40%]  2xl:mr-[40%] lg:ml-[44%] xl:ml-[45%] h-1 bg-primary-white mx-auto"></div>
                </div>
                <section className="body-font text-primary-white">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-wrap mx-auto gap-2 text-center">
                            <div className="py-4 md:w-[24%] rounded-lg sm:md:w-[50%] w-1/2 border border-primary-white">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                    <CountUp start={1000} enableScrollSpy={true} end={2703} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                            </div>
                                        )}
                                    </CountUp>
                                </h2>
                                <p className="leading-relaxed text-3xl">Users</p>
                            </div>
                            <div className="py-4 md:w-[24%] rounded-lg sm:md:w-[50%] w-1/2 border border-primary-white">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                    <CountUp start={1000} enableScrollSpy={true} end={1810} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                            </div>
                                        )}
                                    </CountUp>
                                </h2>
                                <p className="leading-relaxed text-3xl">Subscribes</p>
                            </div>
                            <div className="py-4 md:w-[24%] rounded-lg sm:md:w-[50%] w-1/2 border border-primary-white">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                    <CountUp start={100} enableScrollSpy={true} end={800} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} /><span>+</span>
                                            </div>
                                        )}
                                    </CountUp>
                                </h2>
                                <p className="leading-relaxed text-3xl">Manage Events</p>
                            </div>
                            <div className="py-4 md:w-[24%] rounded-lg sm:md:w-[50%] w-1/2 border border-primary-white">
                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                    <CountUp start={0} enableScrollSpy={true} end={70} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} /><span>+</span>
                                            </div>
                                        )}
                                    </CountUp>
                                </h2>
                                <p className="leading-relaxed text-3xl">Workers</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-10 block text-center">
                        <button className="btn btn-secondary">Get Started With Us</button>
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Statistics;