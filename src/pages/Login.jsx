// Login Page - Minimal cute design
// Author: Wajeeha Habib | TechNexus Internship

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Wrench, ArrowRight } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!email.trim()) e.email = 'Please enter your email';
    if (!password.trim()) e.password = 'Please enter your password';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    alert('Login successful!');
  };

  return (
    <div
      className="min-h-screen bg-white flex items-center
      justify-center px-4 py-12 relative overflow-hidden"
    >
      {/* ── Background blobs ── */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96
        rounded-full blur-3xl opacity-20"
        style={{ background: '#EC4899' }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96
        rounded-full blur-3xl opacity-20"
        style={{ background: '#2563EB' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2
        -translate-y-1/2 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ background: '#818cf8' }}
      />

      {/* ── Card ── */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo + Title */}
        <div className="text-center mb-8">
          <div
            className="w-16 h-16 bg-[#2563EB] rounded-2xl
            flex items-center justify-center mx-auto mb-4
            shadow-lg shadow-blue-200"
          >
            <Wrench size={28} className="text-white" />
          </div>
          <h1
            className="font-black font-poppins text-[#0F172A]
            text-3xl mb-1"
          >
            Welcome Back!
          </h1>
          <p className="text-[#64748B] text-sm">
            Login to manage your bookings
          </p>
        </div>

        {/* Form Card */}
        <div
          className="bg-white rounded-3xl shadow-xl shadow-blue-100/50
          border border-gray-100 p-8"
        >
          <div className="space-y-5">
            {/* Email */}
            <div>
              <label
                className="block text-sm font-semibold
                text-[#64748B] mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2
                    text-[#64748B]"
                />
                <input
                  type="email"
                  placeholder="john@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl
                    text-sm text-[#0F172A] focus:outline-none
                    transition bg-[#F8FAFC]
                    ${
                      errors.email
                        ? 'border-pink-400 focus:border-pink-500'
                        : 'border-gray-100 focus:border-[#2563EB]'
                    }`}
                />
              </div>
              {errors.email && (
                <p className="text-pink-500 text-xs mt-1 flex items-center gap-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-sm font-semibold
                text-[#64748B] mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2
                    text-[#64748B]"
                />
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-11 pr-11 py-3 border-2 rounded-xl
                    text-sm text-[#0F172A] focus:outline-none
                    transition bg-[#F8FAFC]
                    ${
                      errors.password
                        ? 'border-pink-400 focus:border-pink-500'
                        : 'border-gray-100 focus:border-[#2563EB]'
                    }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2
                    text-[#64748B] hover:text-[#2563EB] transition"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-pink-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Forgot */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-xs text-[#2563EB] hover:text-pink-500
                  font-semibold transition"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full py-3.5 bg-[#2563EB] text-white
                rounded-xl font-bold text-sm tracking-wider uppercase
                hover:bg-blue-700 transition shadow-lg shadow-blue-200
                flex items-center justify-center gap-2
                ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                'Logging in...'
              ) : (
                <>
                  <span>LOGIN</span> <ArrowRight size={16} />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <hr className="flex-1 border-gray-100" />
              <span className="text-xs text-[#64748B]">OR</span>
              <hr className="flex-1 border-gray-100" />
            </div>

            {/* Emergency */}
            <a
              href="tel:+18005551234"
              className="w-full py-3 bg-gradient-to-r from-red-500
                to-red-600 text-white rounded-xl font-bold text-sm
                tracking-wider uppercase hover:from-red-600
                hover:to-red-700 transition flex items-center
                justify-center gap-2 shadow-lg shadow-pink-200"
            >
              🚨 Emergency Call
            </a>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-[#64748B] mt-6">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-[#2563EB] font-bold hover:text-pink-500
                transition"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
