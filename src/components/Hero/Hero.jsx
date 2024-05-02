import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const bottomData = [
    {
        icon: <FaFacebook />,
        heading: 'Header 1',
        text: 'Paragraph 1'
    },
    {
        icon: <FaTwitter />,
        heading: 'Header 2',
        text: 'Paragraph 2'
    },
    {
        icon: <FaInstagram />,
        heading: 'Header 3',
        text: 'Paragraph 3'
    }
];
const heroData = [
    {
        heading: 'Heading 1',
        icon: <FaFacebook />,
        text: 'Text 1'
    },
    {
        heading: 'Heading 2',
        icon: <FaTwitter />,
        text: 'Text 2'
    },
    {
        heading: 'Heading 3',
        icon: <FaInstagram />,
        text: 'Text 3'
    },
    {
        heading: 'Heading 4',
        icon: <FaLinkedin />,
        text: 'Text 4'
    },
    {
        heading: 'Heading 5',
        icon: <FaFacebook />,
        text: 'Text 5'
    },
    {
        heading: 'Heading 6',
        icon: <FaTwitter />,
        text: 'Text 6'
    }
];

const HeroSection = () => {
    return (
        <main className='relative z-30 px-20  w-full h-[50vh]'>
            <div className=' h-full w-full relative  -top-36 shadow-sm    bg-gray-100'>
            <section className="flex w-full h-1/2 p-5">
            {heroData.map((item, index) => (
                <div key={index} className={`flex-1 border border-1 border-gray-300   p-4`}>
                    <h2 className="mb-2">{item.heading}</h2>
                    <span className="block mb-2">{item.icon}</span>
                    <p>{item.text}</p>
                </div>
            ))}
        </section>

        <section className='flex h-1/2'>
    {bottomData.map((item, index) => (
        <div key={index} className="flex-1 mb-4">
            {/* First Div - Icon */}
            <div className="mr-2">
                {item.icon}
            </div>
            {/* Second Div - Header and Paragraph */}
            <div className="flex flex-col">
                <h2 className="mb-2">{item.heading}</h2>
                <p className="mb-2">{item.text}</p>
            </div>
        </div>
    ))}
</section>

        
        </div>
        </main>
    );
};

export default HeroSection;
