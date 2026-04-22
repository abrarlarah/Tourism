"use client";

// app/layout.jsx
import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import { Montserrat } from '@next/font/google';


interface LayoutProps {
  children: ReactNode;
}

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   display: 'swap',
// });



const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Tour and Travel Website</title>
        <meta name="description" content="Discover the best travel destinations around the world" />
      </head>
      <body>
        <Navbar transparent={false} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
