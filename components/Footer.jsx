import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative w-full h-[500px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
  src="/images/kashmir.png"
  alt="Footer background"
  fill
  quality={100} // Sets the image quality to maximum
  className="object-cover opacity-100"
/>

      </div>

      {/* Centered overlay content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg p-10 max-w-6xl w-full mx-4 
          transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
          
          {/* Upper section with logo and social media icons */}
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mb-6 space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-yellow-500">Kashmir Venture</h2>
              <p className="text-gray-600 mt-2">Explore the world with us.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" className="hover:text-yellow-500 transition duration-300">
                <FaFacebookF className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-yellow-500 transition duration-300">
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-yellow-500 transition duration-300">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-yellow-500 transition duration-300">
                <FaLinkedinIn className="w-6 h-6" />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="hover:text-yellow-500 transition duration-300">
                <FaYoutube className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Links section with adjusted alignment */}
          <div className="flex justify-between items-start mb-6 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-yellow-500 transition duration-300">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-yellow-500 transition duration-300">Contact Us</Link>
                </li>
                <li>
                  <Link href="/packages" className="hover:text-yellow-500 transition duration-300">Packages</Link>
                </li>
                <li>
                  <Link href="/destinations" className="hover:text-yellow-500 transition duration-300">Destinations</Link>
                </li>
              </ul>
            </div>

            <div className="text-right">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="hover:text-yellow-500 transition duration-300">Custom Tours</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-yellow-500 transition duration-300">Luxury Travel</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-yellow-500 transition duration-300">Adventure Tours</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-yellow-500 transition duration-300">Group Tours</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section with back to top and copyright */}
          <div className="bg-gray-100 py-4 rounded-lg shadow-md flex justify-between items-center px-4">
            <p className="text-lg font-semibold text-gray-800">
              &copy; 2024 Kashmir Venture. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="text-yellow-500 font-bold hover:text-yellow-600 transition duration-300"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
