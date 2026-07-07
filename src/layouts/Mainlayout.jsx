import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
