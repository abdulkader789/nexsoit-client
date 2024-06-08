import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Subscribe from "../components/Subscribe/Subscribe";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
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

      setTimeout(() => {
        navigate("/"); // Redirect to home page after a delay
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      // Handle error - you can show an error message to the user
    }
  };

  return (
    <div className="flex flex-col work-sans object-cover pt-32 box-border ">
      {successMessage && (
        <div className="bg-green-500 text-white p-4 text-center relative">
          <span>{successMessage}</span>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-lg"
            onClick={() => setSuccessMessage("")}
          >
            &times;
          </button>
        </div>
      )}
      <main className="pl-5  mb-5 ">
        <div className="w-full py-36 bg-[#1F1F1F] flex flex-col justify-end items-center lg:flex-row px-2  rounded-tl-xl rounded-bl-xl  overflow-hidden">
          <section className="w-full lg:w-96 flex flex-col text-white ">
            <div className="my-5">
              <span className=" block text-base font-semibold text-primary">
                Contact Us
              </span>
              <h2 className="text-[32px] font-bold capitalize  lg:text-[36px] xl:text-[40px]">
                Let's work together?
              </h2>
              <p className="text-base leading-relaxed text-body-color ">
                We have world-class, flexible support via live chat, email, and
                phone. We guarantee that you’ll be able to have any issue
                resolved within 24 hours.
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

          <section className=" flex w-1/2 px-32 items-center">
            <div className="flex flex-col bg-white rounded-2xl px-12 py-12 w-full  border border-gray-600">
              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <label className="font-bold text-lg text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="border rounded-lg py-3 px-3  placeholder-white-500 text-white"
                />
                <label className="font-bold text-lg text-white">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="border rounded-lg py-3 px-3  placeholder-white-500 text-white"
                />
                <label className="font-bold text-lg text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="border rounded-lg py-3 px-3 placeholder-white-500 text-white"
                />
                <label className="font-bold text-lg text-white">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="border rounded-lg py-3 px-3  placeholder-white-500 text-white"
                />
                <button
                  type="submit"
                  className="border  text-white rounded-lg py-3 font-semibold"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default Contact;
