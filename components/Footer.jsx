"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const SOCIAL_LINKS = [
  { href: 'https://facebook.com',  Icon: FaFacebookF,  label: 'Facebook'  },
  { href: 'https://twitter.com',   Icon: FaTwitter,    label: 'Twitter'   },
  { href: 'https://instagram.com', Icon: FaInstagram,  label: 'Instagram' },
  { href: 'https://linkedin.com',  Icon: FaLinkedinIn, label: 'LinkedIn'  },
  { href: 'https://youtube.com',   Icon: FaYoutube,    label: 'YouTube'   },
];

const COMPANY_LINKS = [
  { href: '/about',        label: 'About Us'     },
  { href: '/contact',      label: 'Contact Us'   },
  { href: '/packages',     label: 'Packages'     },
  { href: '/destinations', label: 'Destinations' },
];

const SERVICE_LINKS = [
  { href: '/services', label: 'Custom Tours'   },
  { href: '/services', label: 'Luxury Travel'  },
  { href: '/services', label: 'Adventure Tours'},
  { href: '/services', label: 'Group Tours'    },
];

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Footer = () => (
  <footer className="relative w-full h-[500px]">
    {/* Background image */}
    <div className="absolute inset-0">
      <Image
        src="/images/kashmir.png"
        alt="Kashmir landscape footer background"
        fill
        className="object-cover"
        loading="lazy"
        quality={75}
      />
    </div>

    {/* Overlay content */}
    <div className="relative z-10 flex items-center justify-center h-full">
      <div className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg shadow-lg p-10 max-w-6xl w-full mx-4 transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">

        {/* Top row — logo + social */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mb-6 space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-yellow-500">Kashmir Venture</h2>
            <p className="text-gray-600 mt-2">Explore the world with us.</p>
          </div>
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map(({ href, Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-yellow-500 transition duration-300"
              >
                <Icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-between items-start mb-6 max-w-4xl mx-auto">
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Company</h3>
            <ul className="space-y-2">
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-yellow-500 transition duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-right">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Services</h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-yellow-500 transition duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="bg-gray-100 py-4 rounded-lg shadow-md flex justify-between items-center px-4">
          <p className="text-lg font-semibold text-gray-800">
            &copy; {new Date().getFullYear()} Kashmir Venture. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="text-yellow-500 font-bold hover:text-yellow-600 transition duration-300"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
