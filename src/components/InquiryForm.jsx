import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Bookmark, ArrowRight, Sparkles, X, Download, FileText, Check } from 'lucide-react';
import { PROJECTS } from '../data/projects.js';

export const InquiryForm = ({
  isOpenModal = false,
  onCloseModal,
  shortlist,
  preselectedProjectId
}) => {
  const [selectedServices, setSelectedServices] = useState(['Visual Identity & Branding']);
  const [budgetTier, setBudgetTier] = useState('$10,000 – $25,000');
  const [timeline, setTimeline] = useState('2 – 3 Months');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [overview, setOverview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  useEffect(() => {
    if (preselectedProjectId) {
      const proj = PROJECTS.find((p) => p.id === preselectedProjectId);
      if (proj && !selectedServices.includes(proj.category)) {
        setSelectedServices((prev) => [...prev, `${proj.category} System`]);
      }
    }
  }, [preselectedProjectId]);

  const serviceOptions = [
    'Ad-Campaign Design',
    'Social Media Design',
    'Brand Identity System',
    'Concept Driven Design',
    'Full Creative Studio Retainer'
  ];

  const budgetOptions = [
    '$5,000 – $10,000',
    '$10,000 – $25,000',
    '$25,000 – $50,000',
    '$50,000+'
  ];

  const timelineOptions = [
    'Immediate (< 1 Month)',
    '1 – 2 Months',
    '2 – 3 Months',
    'Flexible / Q4 Planning'
  ];

  const toggleService = (srv) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    const data = {
      services: selectedServices,
      budget: budgetTier,
      timeline,
      name,
      email,
      company: company || 'Independent / Confidential',
      projectOverview: overview || 'Initial exploratory inquiry.',
      shortlistedProjects: shortlist
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setReceiptData(data);
    }, 1000);
  };

  const shortlistedObjs = PROJECTS.filter((p) => shortlist.includes(p.id));

  const contentMarkup = (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#1A1A1A]/10 pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#5D5CDE]"></span>
          <span className="font-mono-display text-xs text-[#1A1A1A]/70 uppercase tracking-widest font-semibold">
            FREELANCE SERVICE INQUIRY STUDIO
          </span>
        </div>
        <h2 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1A1A1A]">
          Let&apos;s Build Something Enduring
        </h2>
        <p className="font-editorial text-lg sm:text-xl text-[#1A1A1A]/80 italic mt-2">
          Select your scope, target budget, and timeline below. Responses are sent directly to Bireswaar Kundu with guaranteed feedback within 24 hours.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Services Selection */}
          <div className="space-y-3">
            <label className="block text-xs font-mono-display font-bold text-[#1A1A1A] uppercase tracking-wider">
              01 // SELECT DESIRED CAPABILITIES / SCOPE
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {serviceOptions.map((srv) => {
                const isSelected = selectedServices.includes(srv);
                return (
                  <button
                    type="button"
                    key={srv}
                    onClick={() => toggleService(srv)}
                    className={`p-3 rounded-xs border text-left text-xs font-mono-display transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs font-bold'
                        : 'bg-white hover:bg-neutral-50 text-[#1A1A1A] border-[#1A1A1A]/15'
                    }`}
                  >
                    <span>{srv}</span>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                        isSelected ? 'bg-[#5D5CDE] border-[#5D5CDE] text-white' : 'border-[#1A1A1A]/30'
                      }`}
                    >
                      {isSelected ? '✓' : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Budget & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Budget Tier */}
            <div className="space-y-3">
              <label className="block text-xs font-mono-display font-bold text-[#1A1A1A] uppercase tracking-wider">
                02 // ESTIMATED BUDGET RANGE
              </label>
              <div className="grid grid-cols-2 gap-2">
                {budgetOptions.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setBudgetTier(b)}
                    className={`p-2.5 rounded-xs border text-center text-xs font-mono-display transition-all ${
                      budgetTier === b
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold'
                        : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-3">
              <label className="block text-xs font-mono-display font-bold text-[#1A1A1A] uppercase tracking-wider">
                03 // TARGET LAUNCH TIMELINE
              </label>
              <div className="grid grid-cols-2 gap-2">
                {timelineOptions.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTimeline(t)}
                    className={`p-2.5 rounded-xs border text-center text-xs font-mono-display transition-all ${
                      timeline === t
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold'
                        : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Shortlist Sync Banner if any projects saved */}
          {shortlistedObjs.length > 0 && (
            <div className="p-4 bg-white rounded-xs border border-[#1A1A1A]/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono-display font-bold text-[#5D5CDE]">
                <Bookmark className="w-4 h-4" />
                <span>INCLUDED SHORTLISTED REFERENCE PROJECTS ({shortlistedObjs.length}):</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {shortlistedObjs.map((p) => (
                  <span
                    key={p.id}
                    className="px-2.5 py-1 bg-[#F5F5F0] border border-[#1A1A1A]/15 rounded-xs text-[11px] font-mono-display text-[#1A1A1A]"
                  >
                    ★ {p.title} ({p.category})
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Contact & Brief */}
          <div className="space-y-4 pt-4 border-t border-[#1A1A1A]/10">
            <label className="block text-xs font-mono-display font-bold text-[#1A1A1A] uppercase tracking-wider">
              04 // CLIENT CONTACT DETAILS
            </label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-mono-display text-[#1A1A1A]/70 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Bireshwar Kundu"
                  className="w-full px-3 py-2.5 bg-white border border-[#1A1A1A]/20 rounded-xs text-xs font-mono-display focus:outline-none focus:border-[#5D5CDE]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-display text-[#1A1A1A]/70 mb-1">
                  Direct Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. marcus@brandstudio.com"
                  className="w-full px-3 py-2.5 bg-white border border-[#1A1A1A]/20 rounded-xs text-xs font-mono-display focus:outline-none focus:border-[#5D5CDE]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-display text-[#1A1A1A]/70 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Aura Laboratories"
                  className="w-full px-3 py-2.5 bg-white border border-[#1A1A1A]/20 rounded-xs text-xs font-mono-display focus:outline-none focus:border-[#5D5CDE]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono-display text-[#1A1A1A]/70 mb-1">
                Project Overview &amp; Primary Objectives
              </label>
              <textarea
                rows={4}
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                placeholder="Tell us about the project goals, audience, existing assets, or specific deliverables needed..."
                className="w-full px-3 py-2.5 bg-white border border-[#1A1A1A]/20 rounded-xs text-xs font-mono-display focus:outline-none focus:border-[#5D5CDE]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-[11px] font-mono-display text-[#1A1A1A]/60">
              * Guaranteed response within 24 business hours. No spam.
            </span>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3.5 bg-[#1A1A1A] hover:bg-[#5D5CDE] text-white text-xs font-mono-display font-bold uppercase tracking-wider rounded-xs transition-all shadow-md flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>Transmitting Brief...</span>
                </>
              ) : (
                <>
                  <span>Send Freelance Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        /* Confirmation State */
        <div className="p-8 sm:p-12 bg-white border border-[#1A1A1A]/20 rounded-xs space-y-6 shadow-md text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-syne font-bold text-2xl text-[#1A1A1A]">
                Inquiry Successfully Transmitted
              </h3>
              <p className="font-mono-display text-xs text-[#1A1A1A]/70">
                A receipt copy has been generated below for {receiptData?.name}.
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#F5F5F0] rounded-xs border border-[#1A1A1A]/10 font-mono-display text-xs space-y-3">
            <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-2">
              <span className="text-[#1A1A1A]/50">CLIENT NAME:</span>
              <span className="font-bold">{receiptData?.name} ({receiptData?.company})</span>
            </div>
            <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-2">
              <span className="text-[#1A1A1A]/50">SELECTED SCOPE:</span>
              <span className="font-bold text-[#5D5CDE]">{receiptData?.services.join(', ')}</span>
            </div>
            <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-2">
              <span className="text-[#1A1A1A]/50">BUDGET TIER:</span>
              <span className="font-bold">{receiptData?.budget}</span>
            </div>
            <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-2">
              <span className="text-[#1A1A1A]/50">TARGET TIMELINE:</span>
              <span className="font-bold">{receiptData?.timeline}</span>
            </div>
            {shortlistedObjs.length > 0 && (
              <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-2">
                <span className="text-[#1A1A1A]/50">ATTACHED REFERENCES:</span>
                <span className="font-bold">{shortlistedObjs.map((p) => p.title).join('; ')}</span>
              </div>
            )}
            <div className="pt-2 text-[11px] text-[#1A1A1A]/70 italic">
              &ldquo;{receiptData?.projectOverview}&rdquo;
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSubmitted(false)}
              className="px-4 py-2 border border-[#1A1A1A]/20 rounded-xs text-xs font-mono-display font-bold hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              Submit Another Inquiry
            </button>
            {onCloseModal && (
              <button
                onClick={onCloseModal}
                className="px-4 py-2 bg-[#1A1A1A] text-white rounded-xs text-xs font-mono-display font-bold hover:bg-[#5D5CDE] transition-colors"
              >
                Close Window
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/85 backdrop-blur-md animate-in fade-in duration-200">
        <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#F5F5F0] p-6 sm:p-10 rounded-xs border border-[#1A1A1A]/20 shadow-2xl overflow-y-auto">
          <button
            onClick={onCloseModal}
            className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-[#5D5CDE] hover:text-white text-[#1A1A1A] border border-[#1A1A1A]/20 transition-colors"
            aria-label="Close Inquiry Studio"
          >
            <X className="w-5 h-5" />
          </button>
          {contentMarkup}
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {contentMarkup}
    </section>
  );
};
