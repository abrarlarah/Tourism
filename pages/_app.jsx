// pages/_app.jsx — Shared persistent layout for ALL pages/ routes
// Navbar + Footer stay mounted across page transitions = instant SPA navigation
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isAdmin = router.pathname.startsWith('/admin');

  // Admin pages have their own layout (AdminLayout) — skip shared wrapper
  if (isAdmin) {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <Navbar transparent={false} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
