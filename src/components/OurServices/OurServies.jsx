import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Import your background image
import backgroundImage from "../../../public/services-bg.png";


const servicesData = [
    {
        icon: <FaFacebook />,
        heading: 'Service 1',
        text: 'Description of Service 1'
    },
    {
        icon: <FaTwitter />,
        heading: 'Service 2',
        text: 'Description of Service 2'
    },
    {
        icon: <FaInstagram />,
        heading: 'Service 3',
        text: 'Description of Service 3'
    },
    {
        icon: <FaLinkedin />,
        heading: 'Service 4',
        text: 'Description of Service 4'
    },
    {
        icon: <FaFacebook />,
        heading: 'Service 5',
        text: 'Description of Service 5'
    },
    {
        icon: <FaTwitter />,
        heading: 'Service 6',
        text: 'Description of Service 6'
    }
];

const OurServices = () => {
    return (
        <div>
            <section className="bg-white p-8 shadow-md mb-8 text-center">
                <h2 className="text-blue-600 italic text-2xl mb-4">What We Do</h2>
                <h3 className="font-bold text-black text-2xl mb-4">Our Services</h3>
                <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </section>

            <section className="flex flex-wrap justify-center py-16" >
    {servicesData.map((service, index) => (
        <div key={index} className="w-1/3 flex justify-center">
            <div className="w-full max-w-md bg-white shadow-sm p-4 border mb-20">
                <div className="flex flex-col items-center mb-2">
                    <div className="rounded-full flex justify-center items-center relative -top-14 bg-white h-20 w-20 border">
                        {service.icon}
                    </div>
                    <div>
                        <h4 className="font-bold">{service.heading}</h4>
                        <p>{service.text}</p>
                    </div>
                </div>
            </div>
        </div>
    ))}
</section>

        </div>
    );
};

export default OurServices;
