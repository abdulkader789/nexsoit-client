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
        
        <nav className={`w-full flex flex-col justify-between ${scrolling ? 'lg:fixed lg:top-0 lg:z-10' : ''}`}>
            <header className='w-full flex justify-between items-center'>
                <NavLogo/>
                <div className='flex justify-center items-center lg:hidden'>
                    <MenuIcon /> {/* Pass toggleMenu function as onClick handler */}
                </div>
            </header>
            <main className={`h-[90vh] bg-green-500 transition-all duration-500 ease-in-out ${isMenuClicked ? '-translate-x-0' : '-translate-x-full'}`}>
                <div className='w-full flex flex-col-reverse'>
                    <section className={`flex flex-col lg:flex-row justify-evenly py-2 w-full ${scrolling ? 'lg:fixed lg:top-0 lg:z-10' : ''}`}>
                        <NavIcons/>
                        <NavContacts/>
                        <BookButton/>
                    </section>
                    <section className='border-t-[1px] py-2'>
                        <NavLinks/>
                    </section>
                </div>
            </main>
        </nav>

    );
};

export default Navbar;