import { Link, useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const { id } = useParams();
    const services = useLoaderData();
    const service = services.map(data => data)
    const serviceItem = service.find(data => id == data.id);

    return (

        <div>
            <div className=" my-10">
                <div className="p-3">
                    <img src={serviceItem.cover_image} className="w-[80%] block mx-auto" alt="" />
                    <p className="text-xl font-bold my-6 text-center">{
                        serviceItem?.title
                    }</p>
                    <p className="text-xl font-bold my-6 text-center">
                        Pricing at: {serviceItem?.price}
                    </p>
                    <p className="text-justify">{serviceItem.post}</p>
                    <div className="text-center py-10">
                        <Link to='/'><div className="btn btn-secondary">Back to Home</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;