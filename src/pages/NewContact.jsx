import React from "react";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import Subscribe from "./../components/Subscribe/Subscribe";
// import Footer from "./../components/Footer/Footer";

const ContactInfo = () => {
  return (
    <div className="text-white">
      <h2 className="font-bold text-5xl w-3/4 mb-4">
        We are always ready to help you and answer your questions
      </h2>
      <p className="mb-8 w-3/4">
        Pacific hake false tree valley queen parrot fish black prickle back war
        bonnet swipe green ling super
      </p>

      <div className="grid grid-cols-2">
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Call Center</h3>
          <p>800 100 975 2234</p>
          <p>+ (123) 800-245-6678</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Our Location</h3>
          <p>Liza, New York - 1050</p>
          <p>5th [Park Avenue ]</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Email</h3>
          <p>no-reply@mail.co</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Social network</h3>
          <div className="flex space-x-4">
            <span>f</span>
            <span>x</span>
            <span>in</span>
            <span>&#9679;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="bg-white p-12">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-6">
        Define your goals and identify areas where AI can add value to your
        business.
      </p>

      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Message"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded">
          Send a Message
        </button>
      </form>
    </div>
  );
};

const NewContact = () => {
  // return (
  //   <div className="flex flex-col object-cover bg-gray-900">
  //     <div className="lg:min-h-screen flex flex-col justify-center items-center lg:flex-row px-2 py-14 xl:w-[70%] mx-auto">
  //       <section className="w-full lg:w-1/2 flex flex-col ">
  //         <div className="my-5">
  //           <span className=" block text-base font-semibold text-primary">
  //             Contact Us
  //           </span>
  //           <h2 className="text-[32px] font-bold capitalize  lg:text-[36px] xl:text-[40px]">
  //             Let's work together?
  //           </h2>
  //           <p className="text-base leading-relaxed text-body-color md:w-2/3">
  //             We have world-class, flexible support via live chat, email, and
  //             phone. We guarantee that you’ll be able to have any issue resolved
  //             within 24 hours.
  //           </p>
  //         </div>
  //         <div className="mb-8 w-full max-w-[370px] flex justify-center items-center">
  //           <div className=" text-4xl mr-5">
  //             <FaMapMarkerAlt />
  //           </div>
  //           <div className="w-full">
  //             <h4 className="mb-1 text-xl font-bold text-dark ">
  //               Our Location
  //             </h4>
  //             <p className="text-base ">Natun Bazar, Gulshan-2, Dhaka</p>
  //           </div>
  //         </div>

  //         <div className="mb-8 w-full max-w-[370px] flex justify-center items-center">
  //           <div className=" text-4xl mr-5">
  //             <FaPhoneAlt />
  //           </div>
  //           <div className="w-full">
  //             <h4 className="mb-1 text-xl font-bold text-dark ">
  //               Phone Number
  //             </h4>
  //             <p className="text-base ">(+880) 1788838782</p>
  //           </div>
  //         </div>

  //         <div className="mb-8 w-full max-w-[370px] flex justify-center items-center">
  //           <div className="text-4xl mr-5">
  //             <FaEnvelope />
  //           </div>
  //           <div className="w-full">
  //             <h4 className="mb-1 text-xl font-bold ">Email Address</h4>
  //             <p className="text-base ">nexsoitinfo@gmail.com</p>
  //           </div>
  //         </div>
  //       </section>

  //       <section className="lg:w-1/2 w-full flex items-center">
  //         <div className="flex flex-col bg-white rounded-sm p-12 w-full border border-gray-600">
  //           <form className="flex flex-col space-y-2">
  //             <input
  //               type="text"
  //               name="fullName"
  //               placeholder="Full Name"
  //               className="border rounded-lg py-3 px-3 bg-black border-gray-700 placeholder-white-500 text-white"
  //             />
  //             <input
  //               type="text"
  //               name="phone"
  //               placeholder="Phone Number"
  //               className="border rounded-lg py-3 px-3 bg-black border-gray-700 placeholder-white-500 text-white"
  //             />
  //             <input
  //               type="email"
  //               name="email"
  //               placeholder="Email Address"
  //               className="border rounded-lg py-3 px-3 bg-black border-gray-700 placeholder-white-500 text-white"
  //             />
  //             <textarea
  //               name="message"
  //               placeholder="Your Message"
  //               className="border rounded-lg py-3 px-3 bg-black border-gray-700 placeholder-white-500 text-white"
  //             />
  //             <button
  //               type="button"
  //               className="border border-gray-700 bg-black text-white rounded-lg py-3 font-semibold"
  //             >
  //               Submit
  //             </button>
  //           </form>
  //         </div>
  //       </section>
  //     </div>

  //     <Subscribe />
  //     <Footer />
  //   </div>
  // );
  return (
    <div>
      <div className="flex justify-end items-end py-20 bg-black">
        <div className="w-1/2">
          <ContactInfo />
        </div>
        <div className="w-1/2 pt-10 pr-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default NewContact;
