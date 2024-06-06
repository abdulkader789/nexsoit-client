import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Subscribe from "../components/Subscribe/Subscribe";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/contact/contact-us`,
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
      // Handle success - you can show a success message or redirect the user
    } catch (error) {
      console.error("Error:", error);
      // Handle error - you can show an error message to the user
    }
  };

  return (
    <div
      className="flex flex-col work-sans object-cover"
      style={{
        backgroundImage:
          "url(https://png.pngtree.com/background/20210709/original/pngtree-technology-business-line-ppt-background-picture-image_931725.jpg)",
      }}
    >
      <div className="lg:min-h-screen flex flex-col justify-center items-center lg:flex-row px-2 py-10 xl:w-[70%] mx-auto">
        <section className="w-full lg:w-1/2 flex flex-col">
          <div className="mb-5">
            <span className="mb-4 block text-base font-semibold text-primary">
              Contact Us
            </span>
            <h2 className="text-[32px] font-bold capitalize  lg:text-[36px] xl:text-[40px]">
              Let's work together?
            </h2>
            <p className="text-base leading-relaxed text-body-color md:w-2/3">
              We have world-class, flexible support via live chat, email, and
              phone. We guarantee that you’ll be able to have any issue resolved
              within 24 hours.
            </p>
          </div>
          <div className="mb-8 w-full max-w-[370px] flex justify-center items-center">
            <div className=" text-4xl mr-5">
              <FaMapMarkerAlt />
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-xl font-bold text-dark ">
                Our Location
              </h4>
              <p className="text-base ">Natun Bazar, Gulshan-2, Dhaka</p>
            </div>
          </div>

          <div className="mb-8 w-full max-w-[370px] flex justify-center items-center">
            <div className=" text-4xl mr-5">
              <FaPhoneAlt />
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-xl font-bold text-dark ">
                Phone Number
              </h4>
              <p className="text-base ">(+880) 1788838782</p>
            </div>
          </div>

          <div className="mb-8 w-full max-w-[370px] flex justify-center items-center">
            <div className="text-4xl mr-5">
              <FaEnvelope />
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-xl font-bold ">Email Address</h4>
              <p className="text-base ">nexsoitinfo@gmail.com</p>
            </div>
          </div>
        </section>

        <section className="lg:w-1/2 w-full flex items-center">
          <div className="flex flex-col bg-slate-800 rounded-sm px-8 py-12 w-full border border-gray-600">
            <form className="flex flex-col space-y-4">
              <label className="font-bold text-lg text-white">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="border rounded-lg py-3 px-3 bg-black border-gray-700 placeholder-white-500 text-white"
              />
              <label className="font-bold text-lg text-white">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="border rounded-lg py-3 px-3 bg-black border-gray-700 placeholder-white-500 text-white"
              />
              <label className="font-bold text-lg text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="border rounded-lg py-3 px-3 bg-black border-gray-700 placeholder-white-500 text-white"
              />
              <label className="font-bold text-lg text-white">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="border rounded-lg py-3 px-3 bg-black border-gray-700 placeholder-white-500 text-white"
              />
              <button
                type="button"
                className="border border-gray-700 bg-black text-white rounded-lg py-3 font-semibold"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default Contact;
