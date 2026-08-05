import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/projects.js';

export const Testimonials = () => {
  const [activeQuote, setActiveQuote] = useState(0);

  const prev = () => setActiveQuote((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActiveQuote((prev) => (prev + 1) % TESTIMONIALS.length);

  const current = TESTIMONIALS[activeQuote];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#1A1A1A]/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#5D5CDE]"></span>
            <span className="font-mono-display text-xs text-[#1A1A1A]/70 uppercase tracking-widest font-semibold">
              CLIENT TESTIMONIALS & REPUTATION
            </span>
          </div>
          <h2 className="font-syne-mono text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-tight tracking-wide">
            Client Endorsements
          </h2>
        </div>
        <span className="font-mono-display text-xs text-[#1A1A1A]/60">
          VERIFIED CLIENT FEEDBACK
        </span>
      </div>

      {/* Main Quote Spotlight Card */}
      <div className="bg-[#1A1A1A] text-[#F5F5F0] p-8 sm:p-14 rounded-xs border border-[#1A1A1A] shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[380px]">
        {/* Background Quote Symbol */}
        <Quote className="absolute top-6 right-8 w-24 h-24 text-white/5 pointer-events-none" />

        <div className="space-y-6 max-w-4xl relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-[#5D5CDE] text-white text-[10px] font-mono-display font-bold uppercase tracking-wider rounded-xs">
              PROJECT: {current.projectRelation}
            </span>
            <span className="text-xs font-mono-display text-white/60">VERIFIED PARTNER</span>
          </div>

          <p className="font-editorial text-base sm:text-lg text-white font-normal leading-relaxed italic">
            &ldquo;{current.quote}&rdquo;
          </p>
        </div>

        {/* Client Attribution Footer & Slider Controls */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <img
              src={current.avatar}
              alt={current.author}
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full object-cover border border-white/20"
            />
            <div>
              <span className="block font-syne-mono font-normal text-base text-white">
                {current.author}
              </span>
              <span className="block font-mono-display text-xs text-white/70">
                {current.role}, <strong className="text-white">{current.company}</strong>
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <span className="font-mono-display text-xs text-white/60">
              0{activeQuote + 1} / 0{TESTIMONIALS.length}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-white/10 hover:bg-[#5D5CDE] text-white transition-colors border border-white/10"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full bg-white/10 hover:bg-[#5D5CDE] text-white transition-colors border border-white/10"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
