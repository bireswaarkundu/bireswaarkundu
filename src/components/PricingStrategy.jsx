import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Check, Clock, RefreshCw, Zap, Sparkles, ArrowRight, ShieldCheck, Mail, Phone, MessageSquare, X, Send, CheckCircle2, Calendar } from 'lucide-react';

export const PRICING_SERVICES = [
  {
    id: 'logo-design',
    name: 'Logo Design',
    badge: 'Core Identity',
    description: 'Distinctive, memorable vector logos crafted for modern brand identities.',
    packages: {
      basic: {
        name: 'Basic',
        price: '₹6,000',
        delivery: '5 Days Delivery',
        revisions: '2 Revisions',
        features: [
          '1 Logo Concept',
          '2 Revisions',
          'Transparent PNG',
          'High-Resolution JPG & PNG',
          'Commercial Use Rights',
        ],
      },
      standard: {
        name: 'Standard',
        price: '₹9,000',
        popular: true,
        delivery: '3 Days Delivery',
        revisions: '5 Revisions',
        features: [
          '2 Logo Concepts',
          '5 Revisions',
          'Transparent PNG',
          'High-Resolution Files',
          'Vector Files (AI, EPS, SVG)',
          'Editable Source File',
          'Print-Ready PDF',
          '2 Mockup Previews',
          'Commercial Use Rights',
        ],
      },
      premium: {
        name: 'Premium',
        price: '₹12,000',
        delivery: '24–48 Hours Delivery',
        revisions: 'Unlimited Revisions',
        features: [
          '3 Logo Concepts',
          'Unlimited Revisions',
          'Transparent PNG',
          'High-Resolution Files',
          'All Source Files',
          'Vector Files',
          'Print-Ready Files',
          '5 Premium Mockups',
          'Brand Color Palette',
          'Social Media Profile Logo',
          'Favicon Package',
          'Priority Support',
        ],
      },
    },
  },
  {
    id: 'social-media',
    name: 'Social Media Post Design',
    badge: 'Marketing',
    description: 'High-converting, visual feed graphics for Instagram, LinkedIn, & Facebook.',
    packages: {
      basic: {
        name: 'Basic',
        price: '₹700',
        unit: '/ Post',
        delivery: '2 Days Delivery',
        revisions: '2 Revisions',
        features: [
          '1 Design Concept',
          '2 Revisions',
          'High-Resolution JPG/PNG',
          '1 Social Media Platform Size',
          'Commercial Use Rights',
        ],
      },
      standard: {
        name: 'Standard',
        price: '₹1,000',
        unit: '/ Post',
        popular: true,
        delivery: '1 Day Delivery',
        revisions: '5 Revisions',
        features: [
          '2 Design Concepts',
          '5 Revisions',
          'Editable Source File (PSD/AI)',
          '2 Platform Sizes',
          'Premium Stock Images',
          'Commercial Use Rights',
        ],
      },
      premium: {
        name: 'Premium',
        price: '₹1,500',
        unit: '/ Post',
        delivery: 'Same-Day Delivery',
        revisions: 'Unlimited Revisions',
        features: [
          '3 Design Concepts',
          'Unlimited Revisions',
          'Editable Source File',
          'Multiple Platform Sizes',
          'Custom Graphics / Icons',
          'Priority Support',
        ],
      },
    },
  },
  {
    id: 'carousel-design',
    name: 'Instagram Carousel Design',
    badge: 'Social Media',
    description: 'Engaging multi-slide swipe carousels designed to drive high engagement.',
    packages: {
      basic: {
        name: 'Basic',
        price: '₹3,000',
        delivery: '4 Days Delivery',
        revisions: '2 Revisions',
        features: [
          'Up to 5 Slides',
          '2 Revisions',
          'High-Resolution JPG',
          'Basic Layout Architecture',
        ],
      },
      standard: {
        name: 'Standard',
        price: '₹4,500',
        popular: true,
        delivery: '3 Days Delivery',
        revisions: '5 Revisions',
        features: [
          'Up to 8 Slides',
          '5 Revisions',
          'Editable Source File',
          'Cover Slide Design',
          'CTA Slide',
          'Premium Icons',
        ],
      },
      premium: {
        name: 'Premium',
        price: '₹6,000',
        delivery: '48 Hours Delivery',
        revisions: 'Unlimited Revisions',
        features: [
          'Up to 10 Slides',
          'Unlimited Revisions',
          'Editable Source File',
          'Custom Graphics',
          'Premium Layout',
          'Priority Support',
        ],
      },
    },
  },
  {
    id: 'flyer-brochure',
    name: 'Flyer / Brochure Design',
    badge: 'Print & Collateral',
    description: 'Tactile, print-calibrated collateral for events, marketing, & sales.',
    packages: {
      basic: {
        name: 'Basic',
        price: '₹3,000',
        delivery: '4 Days Delivery',
        revisions: '2 Revisions',
        features: [
          'Single Page Design',
          '2 Revisions',
          'Print-Ready PDF',
          'High-Resolution File',
        ],
      },
      standard: {
        name: 'Standard',
        price: '₹4,500',
        popular: true,
        delivery: '3 Days Delivery',
        revisions: '5 Revisions',
        features: [
          'Double-Sided Design',
          '5 Revisions',
          'Source File',
          'Print-Ready PDF',
          'Bleed Setup',
          'Mockup Preview',
        ],
      },
      premium: {
        name: 'Premium',
        price: '₹6,000',
        delivery: 'Fast Delivery',
        revisions: 'Unlimited Revisions',
        features: [
          'Up to 4 Pages',
          'Unlimited Revisions',
          'Editable Source File',
          'Premium Mockup Showcase',
          'CMYK Print Setup',
          'Fast Delivery',
          'Priority Support',
        ],
      },
    },
  },
  {
    id: 'business-card',
    name: 'Business Card Design',
    badge: 'Print & Stationery',
    description: 'Elevated tactile business cards engineered to leave lasting impressions.',
    packages: {
      basic: {
        name: 'Basic',
        price: '₹1,500',
        delivery: '2 Days Delivery',
        revisions: '2 Revisions',
        features: [
          '1 Design Concept',
          '2 Revisions',
          'Front Side Design',
          'Print-Ready PDF',
        ],
      },
      standard: {
        name: 'Standard',
        price: '₹2,000',
        popular: true,
        delivery: '2 Days Delivery',
        revisions: '5 Revisions',
        features: [
          '2 Design Concepts',
          '5 Revisions',
          'Front & Back Design',
          'Source File',
          'QR Code',
          'Mockup Preview',
        ],
      },
      premium: {
        name: 'Premium',
        price: '₹2,500',
        delivery: '24 Hours Delivery',
        revisions: 'Unlimited Revisions',
        features: [
          '3 Design Concepts',
          'Unlimited Revisions',
          'Source File',
          'Premium Mockups',
          'QR Code',
          'NFC Card Layout Suggestion',
          'Priority Support',
        ],
      },
    },
  },
  {
    id: 'banner-poster',
    name: 'Banner / Poster Design',
    badge: 'Large Format',
    description: 'High-impact display banners & billboards designed to command attention.',
    packages: {
      basic: {
        name: 'Basic',
        price: '₹2,000',
        delivery: '3 Days Delivery',
        revisions: '2 Revisions',
        features: [
          '1 Design Concept',
          '2 Revisions',
          'High-Resolution File',
          'Web & Print Version',
        ],
      },
      standard: {
        name: 'Standard',
        price: '₹3,000',
        popular: true,
        delivery: '2 Days Delivery',
        revisions: '5 Revisions',
        features: [
          '2 Design Concepts',
          '5 Revisions',
          'Source File',
          'Print-Ready PDF',
          'Mockup Preview',
        ],
      },
      premium: {
        name: 'Premium',
        price: '₹4,000',
        delivery: '24 Hours Delivery',
        revisions: 'Unlimited Revisions',
        features: [
          '3 Design Concepts',
          'Unlimited Revisions',
          'Source File',
          'Large Format Print Setup',
          'Premium Mockup Showcase',
          'Priority Support',
        ],
      },
    },
  },
  {
    id: 'youtube-thumbnail',
    name: 'YouTube Thumbnail Design',
    badge: 'Digital Content',
    description: 'Click-optimized, high-CTR YouTube thumbnails for creators & brands.',
    packages: {
      basic: {
        name: 'Basic',
        price: '₹700',
        delivery: '24 Hours Delivery',
        revisions: '2 Revisions',
        features: [
          '1 Thumbnail',
          '2 Revisions',
          'High-Resolution JPG',
          '24 Hours Delivery',
        ],
      },
      standard: {
        name: 'Standard',
        price: '₹1,000',
        popular: true,
        delivery: '24 Hours Delivery',
        revisions: '5 Revisions',
        features: [
          '2 Thumbnail Concepts',
          '5 Revisions',
          'Source File',
          'Click-Optimized Design',
          '24 Hours Delivery',
        ],
      },
      premium: {
        name: 'Premium',
        price: '₹1,500',
        delivery: '12 Hours Delivery',
        revisions: 'Unlimited Revisions',
        features: [
          '3 Thumbnail Concepts',
          'Unlimited Revisions',
          'Editable Source File',
          'Advanced Photo Manipulation',
          'Priority Support',
          '12 Hours Delivery',
        ],
      },
    },
  },
  {
    id: 'brand-identity-kit',
    name: 'Brand Identity Kit',
    badge: 'Complete Ecosystem',
    description: 'Comprehensive, scalable brand identity ecosystem from guidelines to collateral.',
    packages: {
      basic: {
        name: 'Basic',
        price: '₹18,000',
        delivery: '7 Days Delivery',
        revisions: '2 Revisions',
        features: [
          'Logo Design',
          'Color Palette',
          'Typography Selection',
          '2 Revisions',
          '7 Days Delivery',
        ],
      },
      standard: {
        name: 'Standard',
        price: '₹24,000',
        popular: true,
        delivery: '5 Days Delivery',
        revisions: '5 Revisions',
        features: [
          'Logo Design',
          'Color Palette',
          'Typography',
          'Business Card',
          'Letterhead',
          'Social Media Kit',
          '5 Revisions',
          'Source Files',
        ],
      },
      premium: {
        name: 'Premium',
        price: '₹30,000',
        delivery: '3 Days Delivery',
        revisions: 'Unlimited Revisions',
        features: [
          'Complete Brand Identity',
          'Brand Guidelines (10–15 Pages)',
          'Logo Design',
          'Color Palette',
          'Typography',
          'Business Card',
          'Letterhead',
          'Social Media Kit',
          'Brand Mockups',
          'All Source Files',
          'Unlimited Revisions',
          'Priority Support',
        ],
      },
    },
  },
];

export const PricingStrategy = ({ onOpenInquiry }) => {
  const [selectedServiceId, setSelectedServiceId] = useState('logo-design');
  const [viewMode, setViewMode] = useState('tabs'); // 'tabs' or 'all'
  const [customQuoteModalOpen, setCustomQuoteModalOpen] = useState(false);
  const [customSubmitted, setCustomSubmitted] = useState(false);

  // Meeting Booking Calendar State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPkgInfo, setSelectedPkgInfo] = useState(null);
  const [selectedDate, setSelectedDate] = useState('Thu, Aug 6');
  const [selectedTime, setSelectedTime] = useState('02:00 PM IST');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  // Custom quote form state
  const [cqName, setCqName] = useState('');
  const [cqEmail, setCqEmail] = useState('');
  const [cqMessage, setCqMessage] = useState('');

  const activeService = PRICING_SERVICES.find((s) => s.id === selectedServiceId) || PRICING_SERVICES[0];

  const availableDates = [
    { day: 'Thu', date: 'Aug 6' },
    { day: 'Fri', date: 'Aug 7' },
    { day: 'Mon', date: 'Aug 10' },
    { day: 'Tue', date: 'Aug 11' },
    { day: 'Wed', date: 'Aug 12' },
    { day: 'Thu', date: 'Aug 13' },
    { day: 'Fri', date: 'Aug 14' },
  ];

  const availableTimes = ['10:00 AM IST', '11:30 AM IST', '02:00 PM IST', '04:30 PM IST', '06:00 PM IST', '08:00 PM IST'];

  const handleSelectPackage = (pkgDetails) => {
    setSelectedPkgInfo(pkgDetails);
    setBookingModalOpen(true);
    setBookingSubmitted(false);
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Anchor for Navbar link */}
      <div id="pricing-strategy" className="scroll-mt-24"></div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#1A1A1A]/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5D5CDE] animate-pulse"></span>
            <span className="font-mono-display text-xs text-[#1A1A1A]/70 uppercase tracking-widest font-semibold">
              TRANSPARENT FREELANCE PRICING // INR (₹)
            </span>
          </div>

          <h2 className="font-syne-mono text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-tight tracking-wide">
            Services &amp; Packages
          </h2>
          <p className="font-editorial text-base sm:text-lg text-[#1A1A1A]/80 italic mt-1 max-w-2xl">
            Clear, transparent, tier-based design investment suitable for Fiverr, Upwork, Freelancer, &amp; direct clients.
          </p>
        </div>

        {/* View Mode Toggle Button (Single Service Tab View vs All 8 Services) */}
        <div className="flex items-center gap-1.5 bg-[#1A1A1A]/5 p-1 rounded-xs border border-[#1A1A1A]/15 text-xs font-mono-display">
          <button
            onClick={() => setViewMode('tabs')}
            className={`px-3.5 py-1.5 rounded-xs transition-all ${
              viewMode === 'tabs'
                ? 'bg-[#1A1A1A] text-white font-bold shadow-xs'
                : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
            }`}
          >
            Tabbed View
          </button>
          <button
            onClick={() => setViewMode('all')}
            className={`px-3.5 py-1.5 rounded-xs transition-all ${
              viewMode === 'all'
                ? 'bg-[#1A1A1A] text-white font-bold shadow-xs'
                : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
            }`}
          >
            All 8 Services
          </button>
        </div>
      </div>

      {/* Service Category Selection Bar */}
      <div className="mb-10 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {PRICING_SERVICES.map((srv) => {
            const isSelected = srv.id === selectedServiceId && viewMode === 'tabs';

            return (
              <button
                key={srv.id}
                onClick={() => {
                  setSelectedServiceId(srv.id);
                  if (viewMode === 'all') setViewMode('tabs');
                }}
                className={`px-4 py-2.5 rounded-xs text-xs font-mono-display uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md -translate-y-0.5'
                    : 'bg-white text-[#1A1A1A]/80 border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40 hover:bg-neutral-50'
                }`}
              >
                <span>{srv.name}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded-xs font-bold ${
                    isSelected ? 'bg-[#5D5CDE] text-white' : 'bg-[#1A1A1A]/5 text-[#1A1A1A]/60'
                  }`}
                >
                  {srv.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Packages */}
      {viewMode === 'tabs' ? (
        <ServicePricingCard service={activeService} onSelectPackage={handleSelectPackage} />
      ) : (
        <div className="space-y-16">
          {PRICING_SERVICES.map((srv) => (
            <div key={srv.id} className="space-y-6 pt-6 border-t border-[#1A1A1A]/15 first:pt-0 first:border-0">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono-display text-xs text-[#5D5CDE] font-bold uppercase tracking-wider">
                    {srv.badge}
                  </span>
                  <h3 className="font-syne-mono text-2xl sm:text-3xl font-normal text-[#1A1A1A] mt-0.5">
                    {srv.name}
                  </h3>
                </div>
                <p className="font-editorial text-sm text-[#1A1A1A]/70 italic hidden sm:block">
                  {srv.description}
                </p>
              </div>
              <ServicePricingCard service={srv} onSelectPackage={handleSelectPackage} />
            </div>
          ))}
        </div>
      )}

      {/* Bottom Guarantee & Custom Quote Banner */}
      <div className="mt-12 bg-white p-6 sm:p-8 rounded-xs border border-[#1A1A1A]/15 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#5D5CDE]/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#5D5CDE]" />
          </div>
          <div>
            <h4 className="font-syne-mono font-normal text-base text-[#1A1A1A]">Need a Custom Scope or Retainer?</h4>
            <p className="font-editorial text-sm text-[#1A1A1A]/70 italic">
              Skip pre-configured segments — contact Bireswaar Kundu directly for custom specifications, bulk packages, or retainers.
            </p>
          </div>
        </div>

        <button
          onClick={() => setCustomQuoteModalOpen(true)}
          className="px-6 py-3 bg-[#1A1A1A] hover:bg-[#5D5CDE] text-white text-xs font-mono-display uppercase tracking-wider font-bold rounded-xs transition-colors shadow-xs flex items-center gap-2 shrink-0"
        >
          <span>Get Custom Project Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Direct Contact & Custom Quote Modal */}
      {customQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#F5F5F0] rounded-xs border border-[#1A1A1A] shadow-2xl max-w-xl w-full p-6 sm:p-8 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => {
                setCustomQuoteModalOpen(false);
                setCustomSubmitted(false);
              }}
              className="absolute top-4 right-4 p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 border-b border-[#1A1A1A]/15 pb-4">
              <span className="font-mono-display text-xs font-bold text-[#5D5CDE] uppercase tracking-wider block">
                DIRECT CUSTOM QUOTE INQUIRY
              </span>
              <h3 className="font-syne-mono text-2xl sm:text-3xl font-normal text-[#1A1A1A] mt-1">
                Contact Bireswaar Kundu
              </h3>
              <p className="font-editorial text-sm text-[#1A1A1A]/80 italic mt-1">
                Direct contact methods for custom design scopes, retainers, or specific project requirements.
              </p>
            </div>

            {/* Direct Contact Channel Cards */}
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

            {/* Quick Custom Quote Brief Form */}
            {!customSubmitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                      name: cqName,
                      email: cqEmail,
                      title: 'Custom Quote Request',
                      message: cqMessage,
                      date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                    },
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                  )
                  .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setCustomSubmitted(true);
                  })
                  .catch((error) => {
                    console.error('FAILED...', error);
                    alert('Failed to send the request. Please try again later.');
                  })
                  .finally(() => setCustomSubmitted(true));
                }}
                className="space-y-4 bg-white p-5 rounded-xs border border-[#1A1A1A]/15 shadow-xs"
              >
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
                      value={cqName}
                      onChange={(e) => setCqName(e.target.value)}
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
                      value={cqEmail}
                      onChange={(e) => setCqEmail(e.target.value)}
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
                    value={cqMessage}
                    onChange={(e) => setCqMessage(e.target.value)}
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
                <h4 className="font-syne font-bold text-lg text-[#1A1A1A]">Custom Quote Request Received!</h4>
                <p className="font-editorial text-xs text-[#1A1A1A]/80 italic">
                  Thank you! Bireswaar Kundu will review your custom project requirements and reply directly to your email within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setCustomQuoteModalOpen(false);
                    setCustomSubmitted(false);
                  }}
                  className="px-4 py-2 bg-[#1A1A1A] text-white text-xs font-mono-display rounded-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Meeting Booking Calendar Modal */}
      {bookingModalOpen && selectedPkgInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#F5F5F0] rounded-xs border border-[#1A1A1A] shadow-2xl max-w-xl w-full p-6 sm:p-8 relative overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => {
                setBookingModalOpen(false);
                setBookingSubmitted(false);
              }}
              className="absolute top-4 right-4 p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 border-b border-[#1A1A1A]/15 pb-4">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-[#5D5CDE]" />
                <span className="font-mono-display text-xs font-bold text-[#5D5CDE] uppercase tracking-wider block">
                  SCHEDULE PACKAGE DISCOVERY MEETING
                </span>
              </div>
              <h3 className="font-syne-mono text-2xl sm:text-3xl font-normal text-[#1A1A1A]">
                Book Meeting with Bireswaar Kundu
              </h3>
              <div className="mt-3 p-3 bg-white rounded-xs border border-[#1A1A1A]/15 flex items-center justify-between font-mono-display text-xs">
                <div>
                  <span className="text-[#1A1A1A]/60 block text-[10px]">SELECTED PACKAGE:</span>
                  <span className="font-bold text-[#1A1A1A]">{selectedPkgInfo.serviceName} — {selectedPkgInfo.tierName}</span>
                </div>
                <span className="font-syne-mono font-bold text-sm text-[#5D5CDE]">{selectedPkgInfo.price}</span>
              </div>
            </div>

            {!bookingSubmitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!clientName || !clientEmail) return;
                  setBookingSubmitted(true);
                }}
                className="space-y-6"
              >
                {/* 1. Date Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-display font-bold text-[#1A1A1A] uppercase tracking-wider">
                    01 // SELECT MEETING DATE
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {availableDates.map((d) => {
                      const fullDateStr = `${d.day}, ${d.date}`;
                      const isSel = selectedDate === fullDateStr;

                      return (
                        <button
                          type="button"
                          key={fullDateStr}
                          onClick={() => setSelectedDate(fullDateStr)}
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

                {/* 2. Time Slot Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-display font-bold text-[#1A1A1A] uppercase tracking-wider">
                    02 // SELECT TIME SLOT (IST)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {availableTimes.map((t) => {
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

                {/* 3. Client Details */}
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
                        placeholder="e.g. Priyanshu Das"
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
                        placeholder="priyanshu@brand.com"
                        className="w-full p-2.5 bg-white border border-[#1A1A1A]/20 rounded-xs text-xs font-mono-display text-[#1A1A1A] focus:outline-none focus:border-[#5D5CDE]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#5D5CDE] text-white text-xs font-mono-display uppercase tracking-wider font-bold rounded-xs transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm &amp; Book Discovery Meeting</span>
                </button>
              </form>
            ) : (
              /* Booking Confirmation Receipt */
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
                    <span className="text-[#1A1A1A]/60">Client Email:</span>
                    <span className="font-bold text-[#1A1A1A]">{clientEmail}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-1.5">
                    <span className="text-[#1A1A1A]/60">Date &amp; Time:</span>
                    <span className="font-bold text-[#5D5CDE]">{selectedDate} @ {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1A1A1A]/60">Package:</span>
                    <span className="font-bold text-[#1A1A1A]">{selectedPkgInfo.serviceName} ({selectedPkgInfo.tierName})</span>
                  </div>
                </div>

                <p className="font-editorial text-xs text-[#1A1A1A]/80 italic">
                  A Google Calendar invite &amp; meeting link have been dispatched to <strong className="not-italic text-[#1A1A1A]">{clientEmail}</strong>. Bireswaar Kundu looks forward to consulting with you!
                </p>

                <button
                  onClick={() => {
                    setBookingModalOpen(false);
                    setBookingSubmitted(false);
                  }}
                  className="px-6 py-2.5 bg-[#1A1A1A] text-white text-xs font-mono-display uppercase tracking-wider rounded-xs font-bold hover:bg-[#5D5CDE] transition-colors"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

/* Individual Service 3-Column Comparison Table Component */
const ServicePricingCard = ({ service, onSelectPackage }) => {
  // Explicit Tier Column Ordering: Basic -> Standard -> Premium
  const tiers = ['basic', 'standard', 'premium'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      {tiers.map((tierKey) => {
        const pkg = service.packages[tierKey];
        const isStandard = tierKey === 'standard';

        return (
          <div
            key={tierKey}
            className={`relative rounded-xs p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
              isStandard
                ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xl md:-translate-y-2 border-t-4 border-t-[#5D5CDE]'
                : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40 shadow-xs hover:shadow-md'
            }`}
          >
            {/* Standard Tier Highlighted Badge */}
            {isStandard && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-[#5D5CDE] text-white text-[10px] font-mono-display font-bold uppercase tracking-widest rounded-xs shadow-md flex items-center gap-1.5 shrink-0 z-20 whitespace-nowrap">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>★ HIGHLIGHTED / MOST POPULAR</span>
              </div>
            )}

            <div>
              {/* Package Tier Header */}
              <div className="flex items-center justify-between border-b pb-4 mb-5 border-current/15">
                <div>
                  <span className={`font-mono-display text-xs uppercase tracking-widest font-bold block ${
                    isStandard ? 'text-[#5D5CDE]' : 'text-[#1A1A1A]/60'
                  }`}>
                    {pkg.name} TIER
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-syne-mono text-3xl sm:text-4xl font-normal tracking-wide">
                      {pkg.price}
                    </span>
                    {pkg.unit && (
                      <span className="font-mono-display text-xs opacity-70">
                        {pkg.unit}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  className={`px-3 py-1 rounded-xs flex items-center justify-center font-mono-display text-xs font-bold tracking-wider uppercase ${
                    isStandard ? 'bg-[#5D5CDE] text-white' : 'bg-[#1A1A1A]/5 text-[#1A1A1A] border border-[#1A1A1A]/10'
                  }`}
                >
                  {pkg.name}
                </div>
              </div>

              {/* Delivery & Revision Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-6 font-mono-display text-[11px]">
                <div
                  className={`p-2.5 rounded-xs flex items-center gap-2 border ${
                    isStandard
                      ? 'bg-white/10 border-white/15 text-white/90'
                      : 'bg-[#F5F5F0] border-[#1A1A1A]/10 text-[#1A1A1A]/80'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5 text-[#5D5CDE] shrink-0" />
                  <span className="font-semibold truncate">{pkg.delivery}</span>
                </div>

                <div
                  className={`p-2.5 rounded-xs flex items-center gap-2 border ${
                    isStandard
                      ? 'bg-white/10 border-white/15 text-white/90'
                      : 'bg-[#F5F5F0] border-[#1A1A1A]/10 text-[#1A1A1A]/80'
                  }`}
                >
                  <RefreshCw className="w-3.5 h-3.5 text-[#5D5CDE] shrink-0" />
                  <span className="font-semibold truncate">{pkg.revisions}</span>
                </div>
              </div>

              {/* Package Features List */}
              <div className="space-y-3 mb-8">
                <span className="font-mono-display text-[10px] uppercase tracking-widest opacity-60 font-bold block">
                  PACKAGE SPECIFICATIONS:
                </span>
                <ul className="space-y-2.5 text-xs font-mono-display">
                  {pkg.features.map((ftr, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check
                        className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          isStandard ? 'text-[#5D5CDE]' : 'text-[#5D5CDE]'
                        }`}
                      />
                      <span className={isStandard ? 'text-white/90' : 'text-[#1A1A1A]/90'}>{ftr}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action CTA Button */}
            <button
              onClick={() =>
                onSelectPackage &&
                onSelectPackage({
                  serviceName: service.name,
                  tierName: pkg.name,
                  price: pkg.price,
                  unit: pkg.unit
                })
              }
              className={`w-full py-3.5 px-4 rounded-xs text-xs font-mono-display uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 ${
                isStandard
                  ? 'bg-[#5D5CDE] hover:bg-[#4b4ab0] text-white shadow-lg'
                  : 'bg-[#1A1A1A] hover:bg-[#5D5CDE] text-white shadow-xs'
              }`}
            >
              <span>Select {pkg.name} Package</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
