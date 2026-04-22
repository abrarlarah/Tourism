"use client";

import "../app/globals.css";
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamMembers = [
  { id: 1, name: 'Abrar', role: 'Founder & CEO', image: '/images/team/t1.jpg' },

];

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          <Image
            src="/images/about.avif"
            alt="About Us"
            width={500}  // Set the width according to your needs
            height={100} 
            className="brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl  md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-lg animate-fade-in font-montserrat uppercase">
              About Addams Tour
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-white leading-relaxed drop-shadow-md animate-slide-up">
              Crafting unforgettable travel experiences with a passion for exploration and a commitment to excellence.
            </p>
          </div>
        </div>

        {/* About Us Section */}
        <div className="bg-white py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-lg text-gray-700 space-y-6">
              <h2 className="text-4xl font-bold text-yellow-500 font-montserrat uppercase ">Who We Are</h2>
              <p>
                At Kashmir Destination, we believe that travel is more than just visiting places. Its about discovering new cultures, making connections, and creating memories that last a lifetime. As a leading travel agency, we pride ourselves on providing a range of travel experiences that cater to all kinds of explorers.
              </p>
              <p>
  At Kashmir Destination, we believe that travel is more than just visiting places. It&apos;s about discovering new cultures, making connections, and creating memories that last a lifetime. As a leading travel agency, we pride ourselves on providing a range of travel experiences that cater to all kinds of explorers.
</p>

            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about.avif"
                alt="Our Journey"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 md:px-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-yellow-500 mb-4 font-montserrat uppercase">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our vision is to be the most trusted travel company that connects people with the world in the most seamless and personalized way. We aim to make every journey a reflection of your dreams and aspirations, helping you explore new horizons with comfort and ease.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through sustainable tourism practices, we strive to preserve the beauty of the destinations we offer while providing a positive impact on local communities. Our focus on continuous innovation ensures that we stay ahead, offering our clients the latest travel trends and technologies.
            </p>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="bg-white py-16 px-6 md:px-16">
          <h2 className="text-4xl font-bold mb-8 text-yellow-500 text-center font-montserrat uppercase">Our Excellent Team</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={250}
                  className="object-cover w-full h-60"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold mb-2 text-yellow-500 font-montserrat">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
