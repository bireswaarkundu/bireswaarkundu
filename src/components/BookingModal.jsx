import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { X, Calendar, CheckCircle2 } from 'lucide-react';

/* Generate the next 14 available weekdays (Mon–Sat) */
const generateDates = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const result = [];
  const today = new Date();
  let checked = 0;
  while (result.length < 10) {
    checked++;
    const d = new Date(today);
    d.setDate(today.getDate() + checked);
    const dayIdx = d.getDay();
    if (dayIdx === 0) continue; // skip Sunday
    result.push({ day: days[dayIdx], date: `${d.getDate()} ${months[d.getMonth()]}` });
  }
  return result;
};

const AVAILABLE_TIMES = [
  '10:00 AM', '11:00 AM', '12:00 PM',
  '2:00 PM',  '3:00 PM',  '4:00 PM',
  '5:00 PM',  '6:00 PM',
];

export const BookingModal = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [clientName, setClientName]     = useState('');
  const [clientEmail, setClientEmail]   = useState('');
  const [submitted, setSubmitted]       = useState(false);

  const availableDates = generateDates();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !clientName || !clientEmail) return;
    emailjs.send(
      'service_bireswaarkundu15',
      'template_e9ekdah',
      {
        name: clientName,
        email: clientEmail,
        title: 'Discovery Meeting Booking',
        message: `Date: ${selectedDate}\nTime: ${selectedTime} IST`,
        date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      }
    ).finally(() => setSubmitted(true));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#F5F5F0] rounded-xs border border-[#1A1A1A] shadow-2xl max-w-xl w-full p-6 sm:p-8 relative overflow-y-auto max-h-[90vh]">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 rounded-full transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 border-b border-[#1A1A1A]/15 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-4 h-4 text-[#5D5CDE]" />
            <span className="font-mono-display text-xs font-bold text-[#5D5CDE] uppercase tracking-wider">
              SCHEDULE A DISCOVERY MEETING
            </span>
          </div>
          <h3 className="font-syne-mono text-2xl sm:text-3xl font-normal text-[#1A1A1A]">
            Book a Call with Bireswaar Kundu
          </h3>
          <p className="font-editorial text-sm text-[#1A1A1A]/70 italic mt-1">
            30-min discovery call · Free & no obligation · IST timezone
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Date Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-mono-display font-bold text-[#1A1A1A] uppercase tracking-wider">
                01 // SELECT MEETING DATE
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {availableDates.map((d) => {
                  const key = `${d.day}, ${d.date}`;
                  const isSel = selectedDate === key;
                  return (
                    <button
                      type="button"
                      key={key}
                      onClick={() => setSelectedDate(key)}
                      className={`p-2.5 rounded-xs border text-center font-mono-display transition-all ${
                        isSel
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm font-bold scale-105'
                          : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40'
                      }`}
                    >
                      <span className="block text-[9px] uppercase opacity-60">{d.day}</span>
                      <span className="block text-xs font-bold">{d.date}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-mono-display font-bold text-[#1A1A1A] uppercase tracking-wider">
                02 // SELECT TIME SLOT (IST)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {AVAILABLE_TIMES.map((t) => {
                  const isSel = selectedTime === t;
                  return (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`p-2.5 rounded-xs border text-center text-xs font-mono-display transition-all ${
                        isSel
                          ? 'bg-[#5D5CDE] text-white border-[#5D5CDE] font-bold shadow-xs'
                          : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Client Details */}
            <div className="space-y-3 pt-3 border-t border-[#1A1A1A]/10">
              <label className="block text-xs font-mono-display font-bold text-[#1A1A1A] uppercase tracking-wider">
                03 // YOUR DETAILS
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-mono-display uppercase tracking-wider font-bold text-[#1A1A1A]/70 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Aryan Shah"
                    className="w-full p-2.5 bg-white border border-[#1A1A1A]/20 rounded-xs text-xs font-mono-display text-[#1A1A1A] focus:outline-none focus:border-[#5D5CDE]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono-display uppercase tracking-wider font-bold text-[#1A1A1A]/70 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="aryan@brand.com"
                    className="w-full p-2.5 bg-white border border-[#1A1A1A]/20 rounded-xs text-xs font-mono-display text-[#1A1A1A] focus:outline-none focus:border-[#5D5CDE]"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#5D5CDE] text-white text-xs font-mono-display uppercase tracking-wider font-bold rounded-xs transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Confirm &amp; Book Discovery Meeting</span>
            </button>
          </form>
        ) : (
          /* Confirmation */
          <div className="bg-white p-6 sm:p-8 rounded-xs border border-emerald-500/30 space-y-5 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="font-mono-display text-xs text-emerald-600 font-bold uppercase tracking-wider">
                ● MEETING CONFIRMED &amp; BOOKED
              </span>
              <h4 className="font-syne-mono text-2xl font-normal text-[#1A1A1A]">
                Discovery Call Scheduled!
              </h4>
            </div>
            <div className="p-4 bg-[#F5F5F0] rounded-xs border border-[#1A1A1A]/10 text-left font-mono-display text-xs space-y-2">
              <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-1.5">
                <span className="text-[#1A1A1A]/60">Client Name:</span>
                <span className="font-bold text-[#1A1A1A]">{clientName}</span>
              </div>
              <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-1.5">
                <span className="text-[#1A1A1A]/60">Email:</span>
                <span className="font-bold text-[#1A1A1A]">{clientEmail}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">Date &amp; Time:</span>
                <span className="font-bold text-[#5D5CDE]">{selectedDate} @ {selectedTime} IST</span>
              </div>
            </div>
            <p className="font-editorial text-xs text-[#1A1A1A]/80 italic">
              A Google Meet link has been dispatched to <strong className="not-italic text-[#1A1A1A]">{clientEmail}</strong>. Bireswaar Kundu looks forward to consulting with you!
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#1A1A1A] text-white text-xs font-mono-display uppercase tracking-wider rounded-xs font-bold hover:bg-[#5D5CDE] transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
