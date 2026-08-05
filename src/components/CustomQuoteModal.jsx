import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { X, Send, CheckCircle2, Mail, Phone } from 'lucide-react';

export const CustomQuoteModal = ({ onClose }) => {
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [message, setMessage]   = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_bireswaarkundu15',
      'template_e9ekdah',
      {
        name,
        email,
        title: 'Custom Quote Request',
        message,
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
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 border-b border-[#1A1A1A]/15 pb-4">
          <span className="font-mono-display text-xs font-bold text-[#5D5CDE] uppercase tracking-wider block">
            DIRECT CUSTOM QUOTE INQUIRY
          </span>
          <h3 className="font-syne-mono text-2xl sm:text-3xl font-normal text-[#1A1A1A] mt-1">
            Get Custom Project Quote
          </h3>
          <p className="font-editorial text-sm text-[#1A1A1A]/80 italic mt-1">
            Direct contact for custom scopes, retainers, or specific project requirements.
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <a
            href="mailto:bireswaarkundu@gmail.com"
            className="p-4 bg-white rounded-xs border border-[#1A1A1A]/15 hover:border-[#5D5CDE] hover:bg-[#5D5CDE]/5 transition-all group flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-[#5D5CDE]/10 flex items-center justify-center group-hover:bg-[#5D5CDE] group-hover:text-white transition-colors text-[#5D5CDE]">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-mono-display text-[10px] text-[#1A1A1A]/60 font-bold uppercase">DIRECT EMAIL</span>
              <span className="block font-mono-display text-xs text-[#1A1A1A] font-bold group-hover:text-[#5D5CDE] transition-colors truncate">
                bireswaarkundu@gmail.com
              </span>
            </div>
          </a>

          <a
            href="https://wa.me/917439575294"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-xs border border-[#1A1A1A]/15 hover:border-[#5D5CDE] hover:bg-[#5D5CDE]/5 transition-all group flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors text-emerald-600">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-mono-display text-[10px] text-[#1A1A1A]/60 font-bold uppercase">PHONE / WHATSAPP</span>
              <span className="block font-mono-display text-xs text-[#1A1A1A] font-bold group-hover:text-emerald-600 transition-colors">
                (+91) 74395 75294
              </span>
            </div>
          </a>
        </div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-5 rounded-xs border border-[#1A1A1A]/15 shadow-xs">
            <span className="font-mono-display text-xs text-[#1A1A1A] font-bold block uppercase tracking-wider border-b border-[#1A1A1A]/10 pb-2">
              SEND CUSTOM PROJECT BRIEF DIRECTLY
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-mono-display uppercase tracking-wider font-bold text-[#1A1A1A]/70 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full p-2.5 bg-[#F5F5F0] border border-[#1A1A1A]/20 rounded-xs text-xs font-mono-display text-[#1A1A1A] focus:outline-none focus:border-[#5D5CDE]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono-display uppercase tracking-wider font-bold text-[#1A1A1A]/70 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul@brand.com"
                  className="w-full p-2.5 bg-[#F5F5F0] border border-[#1A1A1A]/20 rounded-xs text-xs font-mono-display text-[#1A1A1A] focus:outline-none focus:border-[#5D5CDE]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono-display uppercase tracking-wider font-bold text-[#1A1A1A]/70 mb-1">
                Describe Your Custom Project / Scope *
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your custom design requirements, timeline, budget expectations, or retainer details..."
                className="w-full p-2.5 bg-[#F5F5F0] border border-[#1A1A1A]/20 rounded-xs text-xs font-mono-display text-[#1A1A1A] focus:outline-none focus:border-[#5D5CDE]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#1A1A1A] hover:bg-[#5D5CDE] text-white text-xs font-mono-display uppercase tracking-wider font-bold rounded-xs transition-colors shadow-xs flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Custom Quote Request</span>
            </button>
          </form>
        ) : (
          <div className="bg-white p-6 rounded-xs border border-emerald-500/30 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-syne-mono text-xl font-normal text-[#1A1A1A]">Custom Quote Request Sent!</h4>
            <p className="font-editorial text-xs text-[#1A1A1A]/80 italic">
              Bireswaar Kundu will review your requirements and reply within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#1A1A1A] text-white text-xs font-mono-display rounded-xs font-bold hover:bg-[#5D5CDE] transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
