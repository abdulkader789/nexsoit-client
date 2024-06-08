import React from "react";
import Subscribe from "../components/Subscribe/Subscribe";
import Footer from "../components/Footer/Footer";

const ContactInfo = () => {
  return (
    <div className="text-white">
      <h2 className="font-bold md:text-5xl text-3xl w-3/4 mb-4">
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
  return (
    <div>
      <div className="flex md:justify-end md:items-end md:flex-row flex-col justify-center items-center px-3 py-20 bg-black">
        <div className="md:w-1/2 w-full">
          <ContactInfo />
        </div>
        <div className="md:w-1/2 w-full p-0 md:pt-10 md:pr-10">
          <ContactForm />
        </div>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default NewContact;
