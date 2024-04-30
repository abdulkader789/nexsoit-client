import { FaPhone } from 'react-icons/fa';

const contactDetails = [
    { phoneNumber: '34324323', email: 'abcd1@gmail.com' },
    { phoneNumber: '34324324', email: 'abcd2@gmail.com' },
    { phoneNumber: '34324325', email: 'abcd3@gmail.com' }
];

const NavContacts = () => {
    return (
        <main className="flex">
            {contactDetails.map((contact, index) => (
                <div key={index} className="flex items-center mr-4">
                    <div className="mr-2 flex justify-center items-center"><FaPhone /></div>
                    <div>
                        <h2>{contact.phoneNumber}</h2>
                        <h2>{contact.email}</h2>
                    </div>
                </div>
            ))}
        </main>
    );
};

export default NavContacts;
