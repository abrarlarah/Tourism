"use client";

import React, { useState, useCallback } from 'react';
import Link from 'next/link';

// Defined outside component — stable reference, zero re-allocation
const NAV_LINKS = [
  { href: '/',            label: 'Home' },
  { href: '/about',       label: 'About Us' },
  { href: '/packages',    label: 'Packages' },
  { href: '/destinations',label: 'Destinations' },
  { href: '/services',    label: 'Services' },
  { href: '/gallery',     label: 'Gallery' },
  { href: '/contact',     label: 'Contact Us' },
];

const Navbar = ({ transparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 p-4 ${
        transparent ? 'bg-transparent' : 'bg-white shadow-md'
      } text-gray-800 transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-yellow-500 transition-transform transform hover:scale-110">
          Kashmir Venture
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="nav-link hover:text-yellow-500 transition duration-300">
              {label}
            </Link>
          ))}
        </div>

        {/* Admin Button (desktop) */}
        <div className="hidden md:flex ml-4">
          <Link href="/admin">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
              Admin Section
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white p-4 text-center space-y-4 shadow-md flex flex-col">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="nav-link hover:text-yellow-500 transition duration-300"
            >
              {label}
            </Link>
          ))}
          <div className="mt-4">
            <Link href="/admin" onClick={closeMenu}>
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
