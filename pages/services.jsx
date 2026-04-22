"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import GetQuoteButton from '../components/GetQuoteButton';
import "../app/globals.css";

const services = [
  {
    id: 1,
    title: 'Customized Tour Packages',
    description: 'We offer tailor-made packages to suit your travel needs. Whether you seek adventure, relaxation, or cultural immersion, we have something for everyone.',
    image: '/images/services/tour.jpg',
  },
  {
    id: 2,
    title: 'Luxury Hotel Bookings',
    description: 'Enjoy the best accommodations with our luxury hotel bookings. We ensure comfort and quality service at the best prices for a hassle-free stay.',
    image: '/images/services/luxury.jpg',
  },
  {
    id: 3,
    title: 'Local Guided Tours',
    description: 'Discover hidden gems with our local guides who provide in-depth knowledge and insights into the culture, history, and traditions of each destination.',
    image: '/images/services/guide.jpg',
  },
  {
    id: 4,
    title: 'Adventure Activities',
    description: 'From trekking to water sports, we provide a variety of adventure activities to quench your thirst for thrill. Let us guide you to an adventure of a lifetime.',
    image: '/images/services/adventure.jpg',
  },
  {
    id: 5,
    title: 'Transportation Services',
    description: 'We provide safe and reliable transportation services to ensure you travel in comfort between destinations. Private cars, buses, and more are available.',
    image: '/images/services/transport.jpg',
  },
  {
    id: 6,
    title: 'Travel Insurance',
    description: 'We offer comprehensive travel insurance to protect you from unforeseen events during your trip, ensuring a worry-free journey.',
    image: '/images/services/insurance.webp',
  },
  {
    id: 7,
    title: 'Visa Assistance',
    description: 'Our experts assist with visa processing and documentation, making your international travel seamless and stress-free.',
    image: '/images/services/visa.jpg',
  },
  {
    id: 8,
    title: 'Destination Weddings',
    description: 'Turn your wedding dreams into reality with our destination wedding planning services. From venues to logistics, we handle everything.',
    image: '/images/services/weddings.jpg',
  },
];

const Services = () => {
  return (
    <>
      <Navbar transparent={false} />
      <div className="p-6 md:p-10 lg:p-16 space-y-16 mt-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-500 font-montserrat underline-animation">
  Our Services
</h2>         
        <p className="text-center text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          At Addams Tour, we specialize in curating exceptional travel experiences that cater to every kind of traveler. Explore our range of services designed to make your journey unforgettable.
        </p>
        <div className="space-y-16 pl-20 pr-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
            >
              <div className="lg:w-1/2">
                <div className="rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="responsive"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 font-montserrat underline-animation">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  {service.description}
                </p>
                <GetQuoteButton>Know More</GetQuoteButton>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
