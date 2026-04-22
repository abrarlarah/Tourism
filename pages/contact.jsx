"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../app/globals.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  // State to control animation visibility
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar transparent={false} />
      <div className="p-10 m-20 mt-20">
        <h2 className="text-5xl font-bold text-center mb-8 text-yellow-500 font-montserrat uppercase underline-animation">
          Contact Us
        </h2>

        {/* Top section with Phone and Email */}
        <div className={`flex flex-col lg:flex-row justify-center gap-10 mb-8 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
          {/* Phone */}
          <div className="flex items-center bg-white shadow-lg rounded-lg p-6 gap-4 lg:w-1/2 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="bg-yellow-500 text-white p-4 rounded-full">
              <FaPhoneAlt className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 font-montserrat">Mobile Number</h3>
              <p className="text-gray-600">+91 7889400477</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center bg-white shadow-lg rounded-lg p-6 gap-4 lg:w-1/2 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="bg-yellow-500 text-white p-4 rounded-full">
              <FaEnvelope className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 font-montserrat">Email Address</h3>
              <p className="text-gray-600">Kashmir.Tourism@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Office Location */}
        <div className={`flex justify-center mb-8 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
          <div className="flex items-center bg-white shadow-lg rounded-lg p-6 gap-4 max-w-3xl w-full transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
            <div className="bg-yellow-500 text-white p-4 rounded-full">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 font-montserrat">Office Location</h3>
              <p className="text-gray-600">Baramulla, Jammu & Kashmir, India</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div>
          <h3 className="text-center text-2xl font-bold text-gray-800 mb-10 font-montserrat">
            Track us on Map
          </h3>
        </div>
        <div className={`flex justify-center transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'}`}>
          <div className="rounded-lg shadow-lg overflow-hidden w-full lg:w-3/4 h-96">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.527205958366!2d74.355550!3d34.202755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e11f575775fd1d%3A0xe89b69aa31684984!2sBaramulla%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1699270196564!5m2!1sen!2sin" 
                
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
