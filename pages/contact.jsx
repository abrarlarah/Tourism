"use client";
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const CARDS = [
  { id: 'phone',    Icon: FaPhoneAlt,     title: 'Mobile Number',   detail: '+91 7889400477',             href: 'tel:+917889400477' },
  { id: 'email',    Icon: FaEnvelope,     title: 'Email Address',   detail: 'Kashmir.Tourism@gmail.com',  href: 'mailto:Kashmir.Tourism@gmail.com' },
  { id: 'location', Icon: FaMapMarkerAlt, title: 'Office Location', detail: 'Baramulla, J&K, India',      href: null },
];

const Contact = () => (
  <div className="p-6 md:p-10 mt-24 max-w-5xl mx-auto">
    <h1 className="text-5xl font-bold text-center mb-10 text-yellow-500 font-montserrat uppercase underline-animation">Contact Us</h1>
    <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-6 mb-10">
      {CARDS.map(({ id, Icon, title, detail, href }) => (
        <div key={id} className="flex items-center bg-white shadow-lg rounded-lg p-6 gap-4 flex-1 min-w-[240px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="bg-yellow-500 text-white p-4 rounded-full flex-shrink-0"><Icon className="text-2xl" /></div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 font-montserrat">{title}</h3>
            {href ? <a href={href} className="text-gray-600 hover:text-yellow-500 transition duration-300">{detail}</a> : <p className="text-gray-600">{detail}</p>}
          </div>
        </div>
      ))}
    </div>
    <h2 className="text-center text-2xl font-bold text-gray-800 mb-6 font-montserrat">Find Us on the Map</h2>
    <div className="rounded-lg shadow-lg overflow-hidden w-full h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.527205958366!2d74.355550!3d34.202755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e11f575775fd1d%3A0xe89b69aa31684984!2sBaramulla%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1699270196564!5m2!1sen!2sin"
        width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" title="Kashmir Venture office location"
      />
    </div>
  </div>
);

export default Contact;
