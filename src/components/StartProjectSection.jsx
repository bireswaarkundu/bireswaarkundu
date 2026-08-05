import React, { useState, useRef } from 'react';
import { ArrowRight, Check, Calendar, Sparkles, Clock, DollarSign, Bookmark, Send, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/projects.js';

export const StartProjectSection = ({ shortlist }) => {
  const [selectedPath, setSelectedPath] = useState('Brand Identity System');
  const [budgetTier, setBudgetTier] = useState('$10,000 – $25,000');
  const [timeline, setTimeline] = useState('2 – 3 Months');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [overview, setOverview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  const formRef = useRef(null);

  const bentoOptions = [
    {
      id: '01',
      title: 'Ad-Campaign Design',
      badge: 'HIGH-IMPACT PROMOS',
      description: 'End-to-end advertising campaigns across print, digital banners, POS displays, and outdoor billboards designed for maximum brand recall.',
      scope: 'Starting at $8,000 • 3–5 Weeks',
      isAnchor: true,
      categoryName: 'Ad-Campaign Design'
    },
    {
      id: '02',
      title: 'Social Media Design',
      badge: 'HIGH-ENGAGEMENT SUITES',
      description: 'Content suites, viral story templates, event speaker graphics, and educational factoid banners tailored for Instagram, LinkedIn & Twitter.',
      scope: 'Monthly Retainers / Project Scoped',
      isAnchor: false,
      categoryName: 'Social Media Design'
    },
    {
      id: '03',
      title: 'Brand Identity System',
      badge: 'CORE VISUAL IDENTITY',
      description: 'Complete logo architecture, heritage brand revivals, typography guidelines, and vector design tokens built to command authority.',
      scope: 'Starting at $12,000 • 6–8 Weeks',
      isAnchor: false,
      categoryName: 'Brand Identity System'
    },
    {
      id: '04',
      title: 'Concept Driven Design',
      badge: 'CREATIVE & SURREAL',
      description: 'Metaphorical UI/UX visual concepts, story-driven mystery challenges, and high-impact sports photo-manipulation posters.',
      scope: 'Project Scoped • 2–4 Weeks',
      isAnchor: false,
      categoryName: 'Concept Driven Design'
    }
  ];

  const handleSelectCard = (pathTitle) => {
    setSelectedPath(pathTitle);
    if (pathTitle === 'Discovery Consultation Call') {
      setBudgetTier('Complimentary / Consultation');
      setTimeline('Immediate (< 1 Month)');
    }
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    const data = {
      services: [selectedPath],
      budget: budgetTier,
      timeline,
      name,
      email,
      company: company || 'Independent / Confidential',
      projectOverview: overview || `Inquiry for ${selectedPath}.`,
      shortlistedProjects: shortlist
    };

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setReceiptData(data);
    }, 900);
  };

  const shortlistedObjs = PROJECTS.filter((p) => shortlist.includes(p.id));

  return (
    <section id="start-project" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#1A1A1A]/10 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5D5CDE] animate-pulse"></span>
            <span className="font-mono-display text-xs text-[#1A1A1A]/70 uppercase tracking-widest font-semibold">
              BEGIN A COLLABORATION
            </span>
          </div>
          <h2 className="font-syne text-4xl sm:text-6xl font-extrabold tracking-tight text-[#1A1A1A]">
            Start a <span className="font-editorial italic font-normal text-[#5D5CDE]">Project</span>
          </h2>
        </div>
        <p className="font-editorial text-lg text-[#1A1A1A]/80 max-w-md italic leading-relaxed">
          Select an engagement path below. Every collaboration is engineered for clarity, architectural rigor, and enduring brand equity.
        </p>
      </div>

      {/* Asymmetric Bento Grid (1 Anchor + 3 Supporting Cells) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
        {/* Anchor Cell (Option 01 - Large Dominant Cell) */}
        {bentoOptions
          .filter((opt) => opt.isAnchor)
          .map((opt) => {
            const isSelected = selectedPath === opt.title;
            return (
              <div
                key={opt.id}
                onClick={() => handleSelectCard(opt.title)}
                className={`lg:col-span-6 bg-[#1A1A1A] text-[#F5F5F0] p-8 sm:p-10 rounded-xs border transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden min-h-[380px] shadow-lg ${
                  isSelected
                    ? 'border-[#5D5CDE] ring-2 ring-[#5D5CDE]/50'
                    : 'border-[#1A1A1A] hover:border-white/30'
                }`}
              >
                {/* Visual Accent Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#5D5CDE]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#5D5CDE]/20 transition-all duration-500"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-display text-2xl font-bold text-[#5D5CDE]">
                      [{opt.id}]
                    </span>
                    <span className="px-3 py-1 bg-[#5D5CDE] text-white text-[10px] font-mono-display font-bold uppercase tracking-wider rounded-xs">
                      {opt.badge}
                    </span>
                  </div>

                  <h3 className="font-syne text-3xl sm:text-4xl font-extrabold text-white mb-4 group-hover:text-[#5D5CDE] transition-colors">
                    {opt.title}
                  </h3>

                  <p className="font-editorial text-lg text-white/80 leading-relaxed italic mb-6">
                    {opt.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="font-mono-display text-xs text-white/70 font-semibold">
                    {opt.scope}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectCard(opt.title);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1A1A1A] group-hover:bg-[#5D5CDE] group-hover:text-white font-mono-display text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shadow-xs"
                  >
                    <span>{isSelected ? 'Selected' : 'Select Option'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}

        {/* Supporting Cells (Options 02, 03, 04) */}
        <div className="lg:col-span-6 grid grid-cols-1 gap-6">
          {bentoOptions
            .filter((opt) => !opt.isAnchor)
            .map((opt) => {
              const isSelected = selectedPath === opt.title;
              return (
                <div
                  key={opt.id}
                  onClick={() => handleSelectCard(opt.title)}
                  className={`bg-white p-6 sm:p-7 rounded-xs border transition-all duration-200 cursor-pointer group flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#5D5CDE] bg-[#F5F5F0] shadow-md ring-1 ring-[#5D5CDE]'
                      : 'border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40 hover:bg-[#F5F5F0]/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono-display text-xs font-bold text-[#5D5CDE]">
                          [{opt.id}]
                        </span>
                        <span className="font-syne font-bold text-lg text-[#1A1A1A] group-hover:text-[#5D5CDE] transition-colors">
                          {opt.title}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-[#1A1A1A]/5 text-[#1A1A1A]/70 text-[10px] font-mono-display uppercase tracking-wider rounded-xs border border-[#1A1A1A]/10">
                        {opt.badge}
                      </span>
                    </div>

                    <p className="font-editorial text-sm text-[#1A1A1A]/80 italic mb-4 leading-relaxed">
                      {opt.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                    <span className="font-mono-display text-[11px] text-[#1A1A1A]/60 font-medium">
                      {opt.scope}
                    </span>

                    <span className="inline-flex items-center gap-1 font-mono-display text-xs font-bold text-[#1A1A1A] group-hover:text-[#5D5CDE] uppercase">
                      <span>{isSelected ? 'Selected' : 'Begin'}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Shared Inquiry Form Panel */}
      <div
        ref={formRef}
        className="bg-white p-8 sm:p-12 rounded-xs border border-[#1A1A1A]/15 shadow-md relative"
      >
        <div className="border-b border-[#1A1A1A]/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono-display font-bold text-[#5D5CDE] uppercase tracking-wider">
                COMMISSION FORM // PRE-SELECTED PATH
              </span>
            </div>
            <h3 className="font-syne text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              Inquiry: <span className="text-[#5D5CDE]">{selectedPath}</span>
            </h3>
          </div>

          <div className="px-3 py-1.5 bg-[#5D5CDE]/10 text-[#5D5CDE] rounded-xs border border-[#5D5CDE]/20 font-mono-display text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 self-start sm:self-auto">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guaranteed 24-Hour Reply</span>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 01: Scope / Engagement Path */}
            <div className="space-y-3">
              <label className="block text-xs font-mono-display font-bold text-[#1A1A1A] uppercase tracking-wider">
                01 // CONFIRM ENGAGEMENT OPTION
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {bentoOptions.map((opt) => {
                  const isCur = selectedPath === opt.title;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectCard(opt.title)}
                      className={`p-3 rounded-xs border text-left text-xs font-mono-display transition-all ${
                        isCur
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-xs font-bold'
                          : 'bg-white hover:bg-[#F5F5F0] text-[#1A1A1A] border-[#1A1A1A]/15'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={isCur ? 'text-[#5D5CDE]' : 'text-[#1A1A1A]/40'}>
                          [{opt.id}]
                        </span>
                        {isCur && <Check className="w-3.5 h-3.5 text-[#5D5CDE]" />}
                      </div>
                      <span className="block font-bold">{opt.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 02 & 03: Budget Tier & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Budget Tier */}
              <div className="space-y-3">
                <label className="block text-xs font-mono-display font-bold text-[#1A1A1A] uppercase tracking-wider">
                  02 // ESTIMATED BUDGET TIER
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    '$5,000 – $10,000',
                    '$10,000 – $25,000',
                    '$25,000 – $50,000',
                    '$50,000+',
                    'Complimentary / Consultation'
                  ].map((b) => (
                    <button
                      key={b}
                      type="button"
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
                  03 // TARGET TIMELINE / LAUNCH
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Immediate (< 1 Month)',
                    '1 – 2 Months',
                    '2 – 3 Months',
                    'Flexible / Q4 Planning'
                  ].map((t) => (
                    <button
                      key={t}
                      type="button"
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

            {/* Shortlist Sync Banner */}
            {shortlistedObjs.length > 0 && (
              <div className="p-4 bg-[#F5F5F0] rounded-xs border border-[#1A1A1A]/15 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-display font-bold text-[#5D5CDE]">
                  <Bookmark className="w-4 h-4" />
                  <span>ATTACHED SHORTLIST REFERENCE WORK ({shortlistedObjs.length}):</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {shortlistedObjs.map((p) => (
                    <span
                      key={p.id}
                      className="px-2.5 py-1 bg-white border border-[#1A1A1A]/15 rounded-xs text-[11px] font-mono-display text-[#1A1A1A]"
                    >
                      ★ {p.title} ({p.category})
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Step 04: Client Details */}
            <div className="space-y-4 pt-4 border-t border-[#1A1A1A]/10">
              <label className="block text-xs font-mono-display font-bold text-[#1A1A1A] uppercase tracking-wider">
                04 // CLIENT DETAILS &amp; BRIEF
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-display text-[#1A1A1A]/70 mb-1">
                    Your Name *
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
                    Direct Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. marcus@brand.com"
                    className="w-full px-3 py-2.5 bg-white border border-[#1A1A1A]/20 rounded-xs text-xs font-mono-display focus:outline-none focus:border-[#5D5CDE]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-display text-[#1A1A1A]/70 mb-1">
                    Company / Entity
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
                  Project Notes &amp; Objectives
                </label>
                <textarea
                  rows={3}
                  value={overview}
                  onChange={(e) => setOverview(e.target.value)}
                  placeholder="Share any background details, reference brands, key milestones, or specific deliverables..."
                  className="w-full px-3 py-2.5 bg-white border border-[#1A1A1A]/20 rounded-xs text-xs font-mono-display focus:outline-none focus:border-[#5D5CDE]"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#1A1A1A]/10">
              <span className="text-[11px] font-mono-display text-[#1A1A1A]/60">
                * Directly delivered to Studio Kundu. No automated sales queues.
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 bg-[#1A1A1A] hover:bg-[#5D5CDE] text-white text-xs font-mono-display font-bold uppercase tracking-wider rounded-xs transition-all shadow-md flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Project Inquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Receipt State */
          <div className="p-8 sm:p-12 bg-[#F5F5F0] border border-[#1A1A1A]/20 rounded-xs space-y-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-syne font-bold text-2xl text-[#1A1A1A]">
                  Inquiry Transmitted to Studio Kundu
                </h3>
                <p className="font-mono-display text-xs text-[#1A1A1A]/70">
                  Confirmation receipt generated for {receiptData?.name}.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xs border border-[#1A1A1A]/15 font-mono-display text-xs space-y-3 shadow-xs">
              <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-2">
                <span className="text-[#1A1A1A]/50">CLIENT:</span>
                <span className="font-bold">{receiptData?.name} ({receiptData?.company})</span>
              </div>
              <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-2">
                <span className="text-[#1A1A1A]/50">ENGAGEMENT PATH:</span>
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
              <div className="pt-2 text-[11px] text-[#1A1A1A]/80 italic">
                &ldquo;{receiptData?.projectOverview}&rdquo;
              </div>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 bg-[#1A1A1A] hover:bg-[#5D5CDE] text-white rounded-xs text-xs font-mono-display font-bold uppercase transition-colors"
            >
              Start Another Inquiry
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
