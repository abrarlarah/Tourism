"use client";
import React, { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Outside component — stable
const services = [
  {
    id: 1,
    title: 'Custom Tour Packages',
    description: 'We offer tailor-made tour packages to suit your preferences and budget, ensuring a memorable travel experience.',
    image: '/images/hero.png',
  },
  {
    id: 2,
    title: 'Luxury Travel',
    description: 'Enjoy the best in class amenities with our luxury travel packages. From private transfers to 5-star accommodations, we have it all.',
    image: '/images/lux.jpg',
  },
  {
    id: 3,
    title: 'Adventure Tours',
    description: 'For thrill-seekers, our adventure tours include trekking, river rafting, and more. Discover new horizons with us.',
    image: '/images/advs.jpg',
  },
  {
    id: 4,
    title: 'Group Tours',
    description: 'Travel with your friends, family, or colleagues. We arrange group tours with special discounts and customized itineraries.',
    image: '/images/123.jpg',
  },
];

const Services = () => {
  const router = useRouter();
  const handleViewAll = useCallback(() => router.push('/services'), [router]);

  return (
    <section className="p-6 md:p-8 bg-gradient-to-b from-gray-100 via-white to-gray-100">
      <h2 className="text-5xl font-bold text-center text-yellow-500 mb-4 font-allura underline-animation">
        Our Services
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Discover the range of services we offer to make your journey unforgettable. From luxury experiences to adventurous expeditions, we have something for everyone.
      </p>

      <div className="max-w-6xl mx-auto space-y-16">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`relative flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center shadow-md rounded-xl overflow-hidden bg-white transition-all duration-500 hover:shadow-lg group`}
          >
            <div className="md:w-1/2 w-full h-56 md:h-64 lg:h-80 relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8 lg:p-10 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 font-montserrat uppercase">
                {service.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600">{service.description}</p>
            </div>

            {/* Hover border effect */}
            <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none">
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
              <div className="absolute bottom-0 right-0 h-0 w-[4px] bg-yellow-500 transition-all duration-300 group-hover:h-full" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleViewAll}
          className="px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition duration-300 shadow-md"
        >
          View All Services
        </button>
      </div>
    </section>
  );
};

export default Services;
