// app/layout.tsx  — Server Component (no "use client")
import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Kashmir Venture | Tour & Travel',
  description: 'Discover the best travel destinations in Kashmir — Dal Lake, Gulmarg, Sonamarg, Pahalgam and more.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar transparent={false} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
