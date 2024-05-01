import React from 'react';
import Testimonial from '../components/Testimonial/Testimonial';
import BannerCarousel from '../components/BannerCarousel/BannerCarousel';
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
    return (
        <div>
            
            <BannerCarousel/>
            <Testimonial/>
            <Subscribe/>
            <Footer/>
            
        </div>
    );
};

export default HomePage;