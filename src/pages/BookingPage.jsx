// Main Booking Page
// Combines all components into one booking flow
// TODO: Replace fake API call with POST /api/bookings when backend ready
// Author: Taimoor Amin | TechNexus Internship | 25 May 2026

import { useState } from 'react';
import {
  User,
  Phone,
  MapPin,
  CalendarCheck,
  FileText,
  AlertTriangle,
  Loader,
} from 'lucide-react';

import ServiceCard from '../components/ServiceCard';
import TimeSlotPicker from '../components/TimeSlotPicker';
import BookingSummary from '../components/BookingSummary';
import SuccessScreen from '../components/SuccessScreen';
import { SERVICES } from '../data/bookingData';

export default function BookingPage() {
  // Form field states
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  // UI states
  const [step, setStep] = useState(1); // 1=form 2=success
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Today's date - prevents picking past dates
  const today = new Date().toISOString().split('T')[0];

  // Validate all required fields
  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Please enter your name';
    if (!phone.trim()) e.phone = 'Please enter your phone number';
    if (!selectedService) e.service = 'Please select a service type';
    if (!selectedDate) e.date = 'Please select a date';
    if (!selectedTime) e.time = 'Please select a time slot';
    if (!address.trim()) e.address = 'Please enter your address';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Handle form submit with fake API simulation
  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    // TODO: Replace with real API call:
    // await fetch('/api/bookings', { method: 'POST', ... })
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setStep(2);
  };

  // Reset all form fields
  const handleReset = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedDate('');
    setSelectedTime('');
    setAddress('');
    setName('');
    setPhone('');
    setNotes('');
    setErrors({});
  };

  // Show success screen after booking
  if (step === 2) {
    return (
      <SuccessScreen
        name={name}
        phone={phone}
        selectedService={selectedService}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        address={address}
        onReset={handleReset}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Page Title */}
      <div className="text-center py-8 px-4">
        <h1 className="text-2xl md:text-3xl font-bold font-poppins text-[#0F172A] mb-2">
          Book a Plumber
        </h1>
        <p className="text-[#64748B]">
          Available 24/7 · Fast Response · Professional Service
        </p>
      </div>

      {/* Main Form Card */}
      <div className="max-w-2xl mx-auto px-4 pb-10">
        <div className="bg-[#F1F5F9] rounded-2xl shadow-sm p-6 md:p-8">
          {/* ===== SECTION 1: Personal Info ===== */}
          <SectionTitle icon={<User size={18} />} title="Your Details" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Name */}
            <div>
              <label className="text-sm font-semibold text-[#64748B] block mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full border rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB]
                  ${errors.name ? 'border-[#DC2626]' : 'border-gray-200'}`}
              />
              {errors.name && (
                <p className="text-[#DC2626] text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold text-[#64748B] block mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="e.g. +1 555 000 1234"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full border rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB]
                  ${errors.phone ? 'border-[#DC2626]' : 'border-gray-200'}`}
              />
              {errors.phone && (
                <p className="text-[#DC2626] text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <Divider />

          {/* ===== SECTION 2: Service Type ===== */}
          <SectionTitle
            icon={<FileText size={18} />}
            title="Select Service Type *"
          />
          {errors.service && (
            <p className="text-[#DC2626] text-xs mb-3">{errors.service}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isSelected={selectedService === service.id}
                onSelect={() => setSelectedService(service.id)}
              />
            ))}
          </div>

          <Divider />

          {/* ===== SECTION 3: Date & Time ===== */}
          <SectionTitle
            icon={<CalendarCheck size={18} />}
            title="Choose Date & Time"
          />

          {/* Date Picker */}
          <div className="mb-4">
            <label className="text-sm font-semibold text-[#64748B] block mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              min={today}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className={`w-full border rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB]
                ${errors.date ? 'border-[#DC2626]' : 'border-gray-200'}`}
            />
            {errors.date && (
              <p className="text-[#DC2626] text-xs mt-1">{errors.date}</p>
            )}
          </div>

          {/* Time Slot Picker */}
          <div className="mb-2">
            <TimeSlotPicker
              selected={selectedTime}
              onSelect={setSelectedTime}
            />
            {errors.time && (
              <p className="text-[#DC2626] text-xs mt-1">{errors.time}</p>
            )}
          </div>

          <div className="mb-6" />
          <Divider />

          {/* ===== SECTION 4: Address ===== */}
          <SectionTitle icon={<MapPin size={18} />} title="Your Address" />

          {/* Address Input */}
          <div className="mb-4">
            <label className="text-sm font-semibold text-[#64748B] block mb-2">
              Full Address *
            </label>
            <input
              type="text"
              placeholder="e.g. 123 Main Street, New York, NY 10001"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`w-full border rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB]
                ${errors.address ? 'border-[#DC2626]' : 'border-gray-200'}`}
            />
            {errors.address && (
              <p className="text-[#DC2626] text-xs mt-1">{errors.address}</p>
            )}
          </div>

          {/* Notes */}
          <div className="mb-6">
            <label className="text-sm font-semibold text-[#64748B] block mb-2">
              Additional Notes (optional)
            </label>
            <textarea
              rows={3}
              placeholder="Describe the problem, access instructions, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB] resize-none"
            />
          </div>

          {/* ===== LIVE BOOKING SUMMARY ===== */}
          {selectedService && (
            <BookingSummary
              selectedService={selectedService}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              address={address}
            />
          )}

          {/* ===== SUBMIT BUTTON ===== */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-4 bg-[#2563EB] text-white rounded-xl font-bold font-poppins text-base hover:bg-blue-700 transition mb-3 flex items-center justify-center gap-2
              ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? (
              <>
                <Loader size={18} className="animate-spin" /> Booking...
              </>
            ) : (
              '🔧 Confirm Booking'
            )}
          </button>

          {/* Emergency Call Button */}
          <a
            href="tel:+18005551234"
            className="w-full py-3 bg-[#DC2626] text-white rounded-xl font-semibold text-sm hover:bg-red-700 transition flex items-center justify-center gap-2 animate-pulse"
          >
            <AlertTriangle size={16} />
            Emergency? Call Now: +1 800 555 1234
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Helper Components ─────────────────────────────────────────────────────────

// Section title with icon
function SectionTitle({ icon, title }) {
  return (
    <h2 className="flex items-center gap-2 text-lg font-bold font-poppins text-[#0F172A] mb-4">
      <span className="text-[#2563EB]">{icon}</span>
      {title}
    </h2>
  );
}

// Horizontal divider
function Divider() {
  return <hr className="border-none border-t border-gray-100 my-6" />;
}
