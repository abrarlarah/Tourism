// app/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import "./globals.css";
import Destinations from '../components/Destinations';
import Package from '../components/Packages';
import Reviews from '../components/reviews';
import Team from '../components/team';
import Services from '../components/services';
import Customers from '../components/customers';

export default function HomePage() {
  const [clientData, setClientData] = useState<number | null>(null);

  // Fetch dynamic data after initial mount
  useEffect(() => {
    setClientData(Date.now()); // Example dynamic data
  }, []);

  return (
    <>
      <HeroSection />
      <Destinations />
      <Package />
      <Reviews />
      <Team />
      <Services />
      <Customers />

      {/* Render dynamic data */}
      {clientData ? (
        <p>The dynamic value is: {clientData}</p>
      ) : (
        <p>Loading...</p>
      )}

      {/* Conditional dynamic content */}
      {clientData && (
        <div>
          <p>Dynamic content is now loaded</p>
        </div>
      )}
    </>
  );
}
