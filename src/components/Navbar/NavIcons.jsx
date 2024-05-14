import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const socialIcons = [
    { Icon: FaFacebookF, text: 'Facebook' },
    { Icon: FaTwitter, text: 'Twitter' },
    { Icon: FaLinkedinIn, text: 'LinkedIn' },
    { Icon: FaInstagram, text: 'Instagram' }
];

const NavIcons = () => {
    return (
        <div className='flex w-full justify-evenly'>
            {socialIcons.map((socialIcon, index) => (
                <div key={index} className='flex justify-center items-center mr-10 '>
                    <socialIcon.Icon className="cursor-pointer mr-2 " />
                    <p className='hidden'>{socialIcon.text}</p>
                </div>
            ))}
        </div>
    )
}

export default NavIcons;
