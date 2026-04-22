"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ transparent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 p-4 ${
        transparent ? 'bg-transparent' : 'bg-white shadow-md'
      } text-gray-800 transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-lg font-bold text-yellow-500 transition-transform transform hover:scale-110">
          Kashmir Venture
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="nav-link hover:text-yellow-500 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="nav-link hover:text-yellow-500 transition duration-300">
            About Us
          </Link>
          <Link href="/packages" className="nav-link hover:text-yellow-500 transition duration-300">
            Packages
          </Link>
          <Link href="/destinations" className="nav-link hover:text-yellow-500 transition duration-300">
            Destinations
          </Link>
          <Link href="/services" className="nav-link hover:text-yellow-500 transition duration-300">
            Services
          </Link>
          <Link href="/gallery" className="nav-link hover:text-yellow-500 transition duration-300">
            Gallery
          </Link>
          <Link href="/contact" className="nav-link hover:text-yellow-500 transition duration-300">
            Contact Us
          </Link>
        </div>

        {/* Admin Button */}
        <div className="hidden md:flex ml-4">
          <Link href="/admin">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
              Admin Section
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white p-4 text-center space-y-4 shadow-md flex flex-col">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="nav-link hover:text-yellow-500 transition duration-300">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="nav-link hover:text-yellow-500 transition duration-300">
            About Us
          </Link>
          <Link href="/packages" onClick={() => setIsMenuOpen(false)} className="nav-link hover:text-yellow-500 transition duration-300">
            Packages
          </Link>
          <Link href="/destinations" onClick={() => setIsMenuOpen(false)} className="nav-link hover:text-yellow-500 transition duration-300">
            Destinations
          </Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="nav-link hover:text-yellow-500 transition duration-300">
            Services
          </Link>
          <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="nav-link hover:text-yellow-500 transition duration-300">
            Gallery
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="nav-link hover:text-yellow-500 transition duration-300">
            Contact Us
          </Link>
          <div className="mt-4">
            <Link href="/admin">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 w-full">
                Admin Section
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
