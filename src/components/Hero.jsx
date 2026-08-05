import React, { useState } from 'react';
import { ArrowDownRight, Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projects.js';

export const Hero = ({ onOpenInquiry, onSelectProject }) => {
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);

  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Subtle Typography Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none font-syne font-extrabold text-[18vw] leading-none text-[#1A1A1A] tracking-tighter whitespace-nowrap">
        STUDIO KUNDU
      </div>

      {/* Top Banner Row - Bento Header Block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A1A1A]/10 pb-8 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5D5CDE]"></span>
            <span className="font-mono-display text-xs text-[#1A1A1A]/80 uppercase tracking-widest font-semibold">
              GRAPHIC &amp; BRAND DESIGNER // INDIA
            </span>
          </div>
          <h1 className="font-syne text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#1A1A1A] leading-[0.95]">
            BIRESHWAR <br />
            <span className="font-serif-display italic font-normal text-[#5D5CDE]">
              KUNDU
            </span>
          </h1>
        </div>

        {/* Positioning Statement & Short Bio Hook */}
        <div className="max-w-md flex flex-col gap-4">
          <p className="font-editorial text-2xl sm:text-3xl text-[#1A1A1A] leading-snug italic">
            &ldquo;Crafting high-impact Ad Campaigns, Social Media Systems, Brand Identities, and Concept Driven Designs for forward-thinking brands.&rdquo;
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-xs font-mono-display uppercase font-bold tracking-wider text-[#1A1A1A] hover:text-[#5D5CDE] transition-colors group"
            >
              <span>Explore Selected Work</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <span className="text-[#1A1A1A]/30">•</span>
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-1.5 text-xs font-mono-display uppercase font-bold tracking-wider text-[#5D5CDE] hover:underline"
            >
              <span>Estimate Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Hero Interactive Work Showcase Previewer - Bento Layout */}
      <div className="my-10 relative z-10">
        {featuredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Featured Showcase Large Image Preview */}
            <div className="lg:col-span-8 group relative rounded-xs overflow-hidden bg-[#1A1A1A] aspect-[4/5] sm:aspect-[16/10] min-h-[480px] flex items-center justify-center shadow-lg border border-[#1A1A1A]">
              <img
                src={featuredProjects[activeThumbnailIndex]?.thumbnail}
                alt={featuredProjects[activeThumbnailIndex]?.title || 'Featured Work'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 opacity-95"
              />

              {/* Overlaid Case Study Overlay Card */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 bg-[#5D5CDE] text-white text-[10px] font-mono-display font-bold uppercase tracking-wider rounded-xs">
                    FEATURED PROJECT 0{activeThumbnailIndex + 1}
                  </span>
                  <span className="text-xs font-mono-display text-white/70">
                    {featuredProjects[activeThumbnailIndex]?.category} • {featuredProjects[activeThumbnailIndex]?.year}
                  </span>
                </div>

                <h3 className="font-syne text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                  {featuredProjects[activeThumbnailIndex]?.title}
                </h3>

                <p className="text-sm font-editorial text-white/80 italic max-w-xl line-clamp-2 mb-4">
                  {featuredProjects[activeThumbnailIndex]?.shortDescription}
                </p>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => onSelectProject(featuredProjects[activeThumbnailIndex]?.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#1A1A1A] hover:bg-[#5D5CDE] hover:text-white text-xs font-mono-display font-bold uppercase tracking-wider rounded-xs transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </button>

                  <span className="text-xs font-mono-display text-white/60 hidden sm:inline">
                    Client: {featuredProjects[activeThumbnailIndex]?.client}
                  </span>
                </div>
              </div>
            </div>

            {/* Showcase Selector Column - Bento Cards */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#1A1A1A]/10">
                <span className="font-mono-display text-xs text-[#1A1A1A]/60 uppercase tracking-wider font-semibold">
                  FEATURED SHOWCASE TICKER
                </span>
                <span className="font-mono-display text-xs text-[#5D5CDE] font-bold">
                  0{activeThumbnailIndex + 1} / 0{featuredProjects.length}
                </span>
              </div>

              {featuredProjects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => setActiveThumbnailIndex(idx)}
                  className={`text-left p-3 rounded-xs transition-all flex items-center gap-3 border ${
                    activeThumbnailIndex === idx
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md translate-x-1'
                      : 'bg-white/80 hover:bg-white text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xs overflow-hidden shrink-0 bg-neutral-200 border border-black/10">
                    <img
                      src={proj.thumbnail}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className={`text-xs font-syne font-bold truncate ${
                      activeThumbnailIndex === idx ? 'text-white' : 'text-[#1A1A1A]'
                    }`}>
                      {proj.title}
                    </span>
                    <span className={`text-[11px] font-mono-display truncate ${
                      activeThumbnailIndex === idx ? 'text-white/70' : 'text-[#1A1A1A]/60'
                    }`}>
                      {proj.category} — {proj.client}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-8 sm:p-12 bg-white rounded-xs border border-dashed border-[#1A1A1A]/30 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#5D5CDE]/10 text-[#5D5CDE] flex items-center justify-center font-bold text-xl">
              ✦
            </div>
            <h2 className="font-syne font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
              Ready for Your Domain Designs
            </h2>
            <p className="font-editorial text-base sm:text-lg text-[#1A1A1A]/70 italic max-w-xl mx-auto">
              All previous design works have been cleared as requested. Please upload your design images domain by domain, and they will populate here!
            </p>
          </div>
        )}
      </div>

      {/* Ticker / Specialty Badges Bar */}
      <div className="relative z-10 pt-6 border-t border-[#1A1A1A]/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-display text-[#1A1A1A]/80">
        <div className="flex items-center gap-6 overflow-x-auto py-1">
          <span className="font-bold text-[#1A1A1A]">CORE DOMAINS:</span>
          <span className="hover:text-[#5D5CDE] cursor-default transition-colors font-bold">AD-CAMPAIGN DESIGN</span>
          <span>/</span>
          <span className="hover:text-[#5D5CDE] cursor-default transition-colors font-bold">SOCIAL MEDIA DESIGN</span>
          <span>/</span>
          <span className="hover:text-[#5D5CDE] cursor-default transition-colors font-bold">BRAND IDENTITY</span>
          <span>/</span>
          <span className="hover:text-[#5D5CDE] cursor-default transition-colors font-bold">CONCEPT DRIVEN DESIGN</span>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono-display text-[#1A1A1A]/60">
          <span>PARIS • ZURICH • REMOTE</span>
          <span>•</span>
          <span>EST. 2016</span>
        </div>
      </div>
    </section>
  );
};
