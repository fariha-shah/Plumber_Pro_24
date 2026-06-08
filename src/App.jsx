// Main App - All routes defined here
// Author: Wajeeha Habib | TechNexus Internship

import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingPage from './pages/BookingPage';
// Components as pages
import Services from './components/Services';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        {/* Services */}
        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />

        {/* Blog */}
        <Route
          path="/blog"
          element={
            <MainLayout>
              <Blog />
            </MainLayout>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        {/* Booking */}
        <Route
          path="/booking"
          element={
            <MainLayout>
              <BookingPage />
            </MainLayout>
          }
        />
        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Register */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
