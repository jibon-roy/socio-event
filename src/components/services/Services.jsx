import { useEffect, useState } from "react";
import Service from "../service/Service";



const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(result => result.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className="my-20">
                <div className="text-5xl text-center">
                    <span className="text-primary-dark">SOCIO </span><span className="text-primary-pink">EVENT&#39;S </span><span className="font-semibold">Services</span>
                    <div className="w-20 mt-3 mr-[45%] md:mr-[40%] lg:mr-[45%] h-1 bg-primary-dark mx-auto"></div>
                    <div className="w-20 mt-1 ml-[45%] md:mr-[40%] lg:ml-[45%] h-1 bg-primary-dark mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 my-20 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                    {services.map(service => <Service key={service.id} service={service}></Service>)}
                </div>
            </div>
        </>
    );
};

export default Services;