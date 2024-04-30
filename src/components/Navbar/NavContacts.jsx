import { FaPhone } from 'react-icons/fa';

const contactDetails = [
    { phoneNumber: '34324323', email: 'abcd1@gmail.com' },
    { phoneNumber: '34324324', email: 'abcd2@gmail.com' },
    { phoneNumber: '34324325', email: 'abcd3@gmail.com' }
];

const NavContacts = () => {
    return (
        <main className="flex  flex-col md:flex-row justify-between">
            {contactDetails.map((contact, index) => (
                <div key={index} className="flex items-center mr-4  mb-3 lg:mb-0 ">
                    <div className="mr-5 flex justify-center items-center"><FaPhone /></div>
                    <div className=''>
                        <h2>{contact.phoneNumber}</h2>
                        <h2>{contact.email}</h2>
                    </div>
                </div>
            ))}
        </main>
    );
};

export default NavContacts;
