







// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';








const BannerCarousel = () => {

    const items = [
        {
            url: 'https://www.myhrtoolkit.com/hubfs/strategicvstacticalhr.jpg',
            model: 'Lorem', // Add model for the h2 tag
            redirect: '/mercedes-gt63s',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            url: 'https://ica.coop/sites/default/files/styles/full_image/public/news-item-fullimage/ballpen-blur-close-461077-2013101013.jpg?itok=F-Fwb7Lb',
            model: 'Lorem', // Add model for the h2 tag
            redirect: '/bentley-bacalar',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            url: 'https://www.hsestudyguide.com/wp-content/uploads/2023/08/pexels-photo-7014337.jpeg',
            model: 'Lorem', // Add model for the h2 tag
            redirect: '/rolls-royce-phantom',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ];




    return (
        <section className=''>
            <Swiper
             style={{ zIndex: 1 }}
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                // pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
                simulateTouch={false}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                       <div className="relative w-full h-full lg:h-[88vh] flex justify-center items-center">
    <img src={item.url} alt={` ${index + 1}`} className="w-full h-full object-cover" />
    <div className="absolute w-full h-full bg-blue-400 opacity-50"></div> {/* Cyan overlay */}

    <div className="absolute w-full text-white text-center">
        <h2 className="text-5xl outfit-bold">{item.model}</h2>
        <p className="text-sm">{item.description}</p>
        <div className='flex w-full justify-center'>
        <button href={item.redirect} className="  bg-white py-4  border-white border-2 block px-20 mt-4   transition duration-300 text-black">View Details</button>
        <button href={item.redirect} className=" text-white py-4  border-white border-2 block px-20  mt-4 hover:bg-white hover:text-black transition duration-300">View Details</button>
        </div>
    </div>
</div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BannerCarousel;