import { useEffect, useState } from 'react';
import NavLogo from '../components/Navbar/NavLogo';
import NavIcons from '../components/Navbar/NavIcons';
import NavLinks from '../components/Navbar/NavLinks';
import NavContacts from '../components/Navbar/NavContacts';
import BookButton from '../components/Navbar/BookButton';
import MenuIcon from '../components/Navbar/MenuIcon';
import { useMenuClick } from '../contexts/MenuClickContext';
// import FaBars from '../components/Navbar/FaBars/FaBars';
// import NavLogo from '../components/Navbar/NavLogo';
// import NavLinks from '../components/Navbar/NavLinks';
// import NavIcons from '../components/Navbar/NavIcons';
// import { useMobileNav } from '../context/MobileNavContext';
// import SearchCar from '../components/Navbar/SearchCar';
// import ThemeSwitcher from '../components/utils/ThemeSwitcher'
const Navbar = () => {
    // const { isActive } = useMobileNav();
    // const [scrolling, setScrolling] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 0) {
    //             setScrolling(true);
    //         } else {
    //             setScrolling(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    const {isMenuClicked}= useMenuClick()

    return (
        // <nav className={`w-full fixed top-0 z-10 flex transition-all duration-500 ease-in-out `} >

        //     <div className="w-full  h-14  py-3 flex justify-between items-center"
        //         style={scrolling || isActive ? { backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', zIndex: 999 } : {}}
        //     >
        //         <div className="">
        //             <NavLogo />
        //         </div>

        //         <div className={`w-full md:w-auto hidden lg:block z-10 text-white`}

        //         >
        //             <NavLinks />
        //         </div>

        //         <div className={`flex bg-inherit lg:hidden text-white w-full lg:w-auto absolute top-full left-0 min-h-screen lg:min-h-0 transition-all duration-500 ease-in-out ${isActive ? 'translate-y-0' : 'translate-y-full'} `}

        //         >
        //             <NavLinks />

        //         </div>


        //         <div className="h-full flex justify-center space-x-5 items-center">
        //             <div className='hidden md:block'>
        //                 <SearchCar />
        //             </div>
        //             <div className='hidden md:block text-white'>
        //                 <NavIcons />
        //             </div>
        //             <ThemeSwitcher />
        //             <div className='lg:hidden relative h-full w-10 md:w-12'>
        //                 <FaBars />
        //             </div>


        //         </div>



        //     </div>
        // </nav>
        
        <nav className={`w-full montserrat-regular z-50  flex flex-col xl:flex-row justify-between xl:justify-normal `}>
            <header className='w-full lg:w-auto px-5 h-[5vh] lg:h-auto flex justify-between items-center'>
                <NavLogo/>
                <div className='flex justify-center items-center lg:hidden'>
                    <MenuIcon /> 
                </div>
            </header>
            <main className={`h-[95vh] lg:h-auto lg:-translate-x-0  w-full absolute lg:relative top-14 lg:top-0 z-20  bg-white transition-all duration-500 ease-in-out ${isMenuClicked ? '-translate-x-0' : '-translate-x-full'}`}>
                <div className='w-full flex flex-col-reverse lg:flex-col'>
                    <section className={`flex flex-col lg:flex-row justify-evenly xl:justify-between py-2 lg:py-0 w-full `}>
                        <div className='my-5  px-5 lg:px-0'>
                        <NavIcons/>
                        </div>
                        <div className='mb-5 lg:mb-0 px-5'>
                        <NavContacts/>
                        </div>
                        <div>
                        <BookButton/>
                        </div>
                    </section>
                    <section className='border-t-[1px]  montserrat-bold'>
                        <NavLinks/>
                    </section>
                </div>
            </main>
        </nav>

    );
};

export default Navbar;