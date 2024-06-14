import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "../components/Footer/Footer";
const ContactInfo = () => {
  return (
    <div className="text-white">
      <h2 className="font-bold md:text-5xl text-3xl w-3/4 mb-4 michroma-regular">
        We are always ready to help you and answer your questions.
      </h2>
      <p className="mb-8 w-3/4 poppins-light">
        Whether you need assistance, have a query, or just want to give us
        feedback, we're here for you. Feel free to reach out through any of the
        methods below, and our team will respond promptly. We look forward to
        hearing from you!
      </p>

      <div className="grid grid-cols-2 montserrat-light">
        <div className="mb-4">
          <h3 className="mb-2">Call Center</h3>
          <p>+880 1788838782</p>
        </div>

        <div className="mb-4">
          <h3 className="mb-2">Our Location</h3>
          <p>Natun Bazar, Gulshan-2</p>
        </div>

        <div className="mb-4">
          <h3 className="mb-2">Email</h3>
          <p>nexsoitinfo@gmail.com</p>
        </div>

        <div>
          <h3 className=" mb-2">Social network</h3>
          <div className="flex space-x-4">
            <span>f</span>
            <span>x</span>
            <span>in</span>
            <span>g</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    // subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/contact/create-contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      setSuccessMessage("Your message has been sent successfully!"); // Set success message
      setErrorMessage(""); // Clear any previous error messages
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="bg-white px-12 py-32 rounded-sm relative w-full">
      {successMessage && (
        <div className="bg-green-500 text-white p-4 text-center relative -top-10 montserrat-regular text-sm">
          <span>{successMessage}</span>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-lg"
            onClick={() => setSuccessMessage("")}
          >
            &times;
          </button>
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-500 text-white p-4 text-center relative -top-10 montserrat-regular text-sm">
          <span>{errorMessage}</span>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-lg"
            onClick={() => setErrorMessage("")}
          >
            &times;
          </button>
        </div>
      )}
      <div>
        <h2 className="text-2xl font-bold mb-4 poppins-medium">Get in Touch</h2>
        <p className="mb-6 work-sans">
          Define your goals and identify areas where We can add value to your
          business.
        </p>
      </div>

      <form className="montserrat-regular text-sm ">
        <div className="mb-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
          />
        </div>
        {/* <div className="mb-4">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
          />
        </div> */}
        <div className="mb-6">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-black text-white px-6 py-2 rounded"
        >
          Send a Message
        </button>
      </form>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="py-10">
      <div className="flex md:flex-row flex-col justify-center items-center px-3 py-20 bg-black lg:min-h-screen">
        <div className="md:w-1/2 w-full mb-5 md:mb-0">
          <ContactInfo />
        </div>
        <div className="md:w-1/2 xl:w-[40vw] 2xl:w-[30vw] w-full p-0 md:pt-10 ">
          <ContactForm />
        </div>
      </div>
<<<<<<< HEAD

=======
>>>>>>> 36fbd2489370766c33eecc6aeab7482b2c8e2f0f
    </div>
  );
};

export default ContactPage;
