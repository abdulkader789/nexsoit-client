import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const contactDetails = [
    { icon: <FaPhone />, detail: '34324323', description: 'abcd1@gmail.com' },
    { icon: <FaMapMarkerAlt />, detail: 'Address 123', description: 'City, Country' },
    { icon: <FaClock />, detail: 'Mon - Fri: 9am - 5pm', description: 'Sunday Closed' }
];

const NavContacts = () => {
    return (
        <main className="flex flex-col md:flex-row justify-between">
            {contactDetails.map((contact, index) => (
                <div key={index} className="flex items-center mr-4 mb-3 lg:mb-0">
                    <div className="mr-3 flex justify-center items-center text-blue-500">{contact.icon}</div>
                    <div className=''>
                        <h2>{contact.detail}</h2>
                        {contact.description && <p>{contact.description}</p>}
                    </div>
                </div>
            ))}
        </main>
    );
};

export default NavContacts;
