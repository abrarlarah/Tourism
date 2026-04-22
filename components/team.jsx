"use client";
import React from 'react';
import Image from 'next/image';

const teamMembers = [
  { id: 1, name: 'Abrar', role: 'Founder & CEO', image: '/images/Abrar.png', tagline: 'Leadingss the way to success' },

];

const Team = () => {
  return (
    <div className="p-6 md:p-8 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h2 className="text-5xl font-bold text-center text-yellow-500 mb-4 font-allura underline-animation">
      Meet Our Team
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Ours team of dedicated professionals is here to ensure that your travel experience is seamless, enjoyable, and unforgettable.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`relative w-full sm:w-64 md:w-72 h-96 bg-white shadow-lg rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${
              index % 2 === 0 ? '-rotate-2' : 'rotate-2'
            }`}
            style={{ zIndex: teamMembers.length - index }}
          >
            <div className="w-full h-48 relative">
              <Image
                src={member.image}
                alt={member.name}
                width={500}  // Set the width according to your needs
                height={100} 
                className="rounded-t-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="italic text-gray-600">{member.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
