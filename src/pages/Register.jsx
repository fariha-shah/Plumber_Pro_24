// Register Page - Minimal cute design
// Author: Wajeeha Habib | TechNexus Internship

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Phone,
  Wrench,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function Register() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirm: '',
  });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    if (!form.phone.trim()) e.phone = 'Please enter your phone';
    if (!form.password.trim()) e.password = 'Please enter a password';
    if (form.password.length < 6) e.password = 'Minimum 6 characters';
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
  };

  // ── Success Screen ──
  if (success) {
    return (
      <div
        className="min-h-screen bg-white flex items-center
        justify-center px-4 relative overflow-hidden"
      >
        <div
          className="absolute -top-32 -right-32 w-96 h-96
          rounded-full blur-3xl opacity-20"
          style={{ background: '#10B981' }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96
          rounded-full blur-3xl opacity-20"
          style={{ background: '#2563EB' }}
        />

        <div
          className="relative z-10 bg-white rounded-3xl shadow-xl
          border border-gray-100 p-10 w-full max-w-md text-center"
        >
          <div
            className="w-20 h-20 bg-gradient-to-br from-[#10B981]
            to-[#2563EB] rounded-full flex items-center justify-center
            mx-auto mb-5 shadow-lg"
          >
            <CheckCircle size={36} className="text-white" />
          </div>

          <h2
            className="font-black font-poppins text-[#0F172A]
            text-2xl mb-2"
          >
            Account Created! 🎉
          </h2>
          <p className="text-[#64748B] text-sm mb-8">
            Welcome to Plumber Pro 24/7! You can now login and manage your
            bookings.
          </p>

          <Link to="/login">
            <button
              className="w-full py-3.5 bg-[#2563EB] text-white
              rounded-xl font-bold text-sm uppercase tracking-wider
              hover:bg-blue-700 transition shadow-lg shadow-blue-200
              flex items-center justify-center gap-2"
            >
              GO TO LOGIN <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // ── Input field helper ──
  const InputField = ({
    label,
    name,
    type = 'text',
    placeholder,
    icon,
    error,
    showToggle,
    onToggle,
    show,
  }) => (
    <div>
      <label
        className="block text-sm font-semibold
        text-[#64748B] mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <div
          className="absolute left-4 top-1/2 -translate-y-1/2
          text-[#64748B]"
        >
          {icon}
        </div>
        <input
          type={showToggle ? (show ? 'text' : 'password') : type}
          name={name}
          placeholder={placeholder}
          value={form[name]}
          onChange={handleChange}
          className={`w-full pl-11 ${showToggle ? 'pr-11' : 'pr-4'}
            py-3 border-2 rounded-xl text-sm text-[#0F172A]
            focus:outline-none transition bg-[#F8FAFC]
            ${
              error
                ? 'border-pink-400 focus:border-pink-500'
                : 'border-gray-100 focus:border-[#2563EB]'
            }`}
        />
        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute right-4 top-1/2 -translate-y-1/2
              text-[#64748B] hover:text-[#2563EB] transition"
          >
            {show ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
      {error && <p className="text-pink-500 text-xs mt-1">{error}</p>}
    </div>
  );

  return (
    <div
      className="min-h-screen bg-white flex items-center
      justify-center px-4 py-12 relative overflow-hidden"
    >
      {/* ── Background blobs ── */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96
        rounded-full blur-3xl opacity-20"
        style={{ background: '#EC4899' }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96
        rounded-full blur-3xl opacity-20"
        style={{ background: '#2563EB' }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-64 h-64
        rounded-full blur-3xl opacity-10"
        style={{ background: '#10B981' }}
      />

      {/* ── Card ── */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo + Title */}
        <div className="text-center mb-8">
          <div
            className="w-16 h-16 rounded-2xl mx-auto mb-4
            flex items-center justify-center shadow-lg
            bg-gradient-to-br from-pink-500 to-[#2563EB]"
          >
            <Wrench size={28} className="text-white" />
          </div>
          <h1
            className="font-black font-poppins text-[#0F172A]
            text-3xl mb-1"
          >
            Create Account
          </h1>
          <p className="text-[#64748B] text-sm">
            Join thousands of happy customers
          </p>
        </div>

        {/* Form Card */}
        <div
          className="bg-white rounded-3xl shadow-xl
          shadow-pink-100/50 border border-gray-100 p-8"
        >
          <div className="space-y-4">
            {/* Full Name */}
            <InputField
              label="Full Name"
              name="fullName"
              placeholder="e.g. John Smith"
              icon={<User size={16} />}
              error={errors.fullName}
            />

            {/* Email */}
            <InputField
              label="Email Address"
              name="email"
              type="email"
              placeholder="john@email.com"
              icon={<Mail size={16} />}
              error={errors.email}
            />

            {/* Phone */}
            <InputField
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+1 555 000 1234"
              icon={<Phone size={16} />}
              error={errors.phone}
            />

            {/* Password */}
            <InputField
              label="Password"
              name="password"
              placeholder="Min 6 characters"
              icon={<Lock size={16} />}
              error={errors.password}
              showToggle={true}
              show={showPass}
              onToggle={() => setShowPass(!showPass)}
            />

            {/* Confirm Password */}
            <InputField
              label="Confirm Password"
              name="confirm"
              placeholder="Repeat your password"
              icon={<Lock size={16} />}
              error={errors.confirm}
              showToggle={true}
              show={showConfirm}
              onToggle={() => setShowConfirm(!showConfirm)}
            />

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full py-3.5 mt-2 text-white rounded-xl
                font-bold text-sm tracking-wider uppercase transition
                flex items-center justify-center gap-2 shadow-lg
                bg-gradient-to-r from-[#2563EB] to-pink-500
                hover:from-blue-700 hover:to-pink-600
                shadow-blue-200
                ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                'Creating Account...'
              ) : (
                <>
                  <span>CREATE ACCOUNT</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-[#64748B] mt-6">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-[#2563EB] font-bold
                hover:text-pink-500 transition"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
