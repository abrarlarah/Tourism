// pages/admin/index.jsx
import React from 'react';
import Link from 'next/link';
import withAuth from '../../components/withAuth';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import "../../app/globals.css"; // Import global styles if you have some base styling in place

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white flex flex-col">
      {/* Navbar */}
      <Navbar transparent={false} />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-20">
          <h1 className="text-4xl font-extrabold mb-8 text-yellow-500 text-center">Admin Dashboard</h1>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/admin/packages">
                Manage Packages
              
            </Link>
            <Link href="/admin/destinations">
                Manage Destinations
              
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default withAuth(AdminDashboard);
