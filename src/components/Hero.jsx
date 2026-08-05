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
          <h1 className="font-syne-mono-italic text-5xl sm:text-7xl lg:text-8xl text-[#1A1A1A] font-normal leading-[0.95] tracking-wide">
            BIRESWAAR <br />
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

      {/* Designer Profile Showcase - Replaced Featured Carousel */}
      <div className="my-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white p-6 sm:p-8 rounded-xs border border-[#1A1A1A]/20 shadow-md">
          {/* Left Column: Portrait Photo Frame */}
          <div className="lg:col-span-4 relative rounded-xs overflow-hidden bg-neutral-100 border border-[#1A1A1A]/15 aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-full flex flex-col justify-end group min-h-[420px]">
            <img
              src="/assets/profile.jpg"
              alt="Bireswaar Kundu — Designer Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-700 absolute inset-0"
            />

            {/* Overlaid Badge */}
            <div className="relative z-10 p-4 bg-[#1A1A1A]/90 backdrop-blur-md border-t border-white/10 text-white flex items-center justify-between">
              <div>
                <span className="block font-syne font-bold text-sm text-white">BIRESWAAR KUNDU</span>
                <span className="block font-mono-display text-[11px] text-white/70">GRAPHIC &amp; BRAND DESIGNER</span>
              </div>
              <span className="px-2 py-0.5 bg-[#5D5CDE] text-white text-[10px] font-mono-display font-bold uppercase rounded-xs">
                INDIA
              </span>
            </div>
          </div>

          {/* Right Column: Complete Resume Profile Grid */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Row: Greeting Speech Bubble & Bio Description */}
            <div className="space-y-3 pb-5 border-b border-[#1A1A1A]/10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#1A1A1A] text-white font-syne font-bold text-xs shadow-xs">
                Hi, I&apos;m Bireswaar
              </div>
              <p className="font-editorial text-base sm:text-lg text-[#1A1A1A]/90 leading-relaxed">
                Forward-thinking Visual Communication Design student dedicated to exploring cutting-edge ideas across the creative industry. Experienced in directing visual strategy and crafting compelling graphic assets for diverse student exhibitions.
              </p>
            </div>

            {/* Main Information Grid: 2 Sub-Columns */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-mono-display">
              {/* Sub-Column 1: Contact, Education, Achievements */}
              <div className="md:col-span-7 space-y-5">
                {/* Contact Section */}
                <div className="space-y-1.5">
                  <span className="text-[#1A1A1A]/50 font-bold uppercase tracking-wider block">CONTACT</span>
                  <div className="text-[#1A1A1A] font-medium space-y-0.5">
                    <p>(+91) 74395 75294</p>
                    <a href="mailto:bireswaarkundu@gmail.com" className="hover:text-[#5D5CDE] transition-colors block">
                      bireswaarkundu@gmail.com
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                    <div>
                      <span className="text-[#1A1A1A]/50 block">Instagram</span>
                      <a href="https://instagram.com/bireshwarkundu" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1A1A1A] hover:text-[#5D5CDE]">
                        @bireswaarkundu
                      </a>
                    </div>
                    <div>
                      <span className="text-[#1A1A1A]/50 block">Behance</span>
                      <a href="https://behance.net/bireshwarkundu" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1A1A1A] hover:text-[#5D5CDE] truncate block">
                        behance.net/bireshwarkundu
                      </a>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[#1A1A1A]/50 block">LinkedIn</span>
                      <a href="https://linkedin.com/in/bireswaarkundu" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1A1A1A] hover:text-[#5D5CDE]">
                        linkedin.com/in/bireswaarkundu
                      </a>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <div className="pt-3 border-t border-[#1A1A1A]/10 space-y-1">
                  <span className="text-[#1A1A1A]/50 font-bold uppercase tracking-wider block">EDUCATION</span>
                  <div className="flex items-start gap-2">
                    <span className="text-[#5D5CDE] font-bold shrink-0">2023–now</span>
                    <div>
                      <span className="font-bold text-[#1A1A1A] block">B.Tech, CSE</span>
                      <span className="text-[#1A1A1A]/70 text-[11px] block">Institute of Engineering and Management, Kolkata</span>
                    </div>
                  </div>
                </div>

                {/* Achievements Section */}
                <div className="pt-3 border-t border-[#1A1A1A]/10 space-y-1">
                  <span className="text-[#1A1A1A]/50 font-bold uppercase tracking-wider block">ACHIEVEMENTS</span>
                  <ul className="space-y-1 text-[#1A1A1A] font-medium text-[11px]">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5D5CDE]"></span>
                      <span>Best Student Contribution, IEM Kolkata</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5D5CDE]"></span>
                      <span>Best Graphics Lead, Innofusion 2.0 Hackathon</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5D5CDE]"></span>
                      <span>Web3 Track Winner, Technologia 1.0 Hackathon</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sub-Column 2: Experience Timeline, Values, Fields, Skills */}
              <div className="md:col-span-5 space-y-5 md:border-l md:border-[#1A1A1A]/10 md:pl-6">
                {/* Experience Section with Mathematically Centered Timeline & Liquid Wave Motion */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#5D5CDE] animate-pulse"></span>
                    <span className="text-[#1A1A1A]/50 font-bold uppercase tracking-wider block">EXPERIENCE</span>
                  </div>

                  <div className="relative pl-6 space-y-4">
                    {/* 1. Perfect Central Vertical Track Line */}
                    <div className="absolute left-[8px] top-1.5 bottom-1.5 w-[2px] bg-[#1A1A1A]/15 rounded-full overflow-hidden">
                      {/* Animated Liquid Wave Light Beam traveling up and down */}
                      <span className="absolute left-0 w-full bg-gradient-to-b from-transparent via-[#5D5CDE] to-transparent rounded-full animate-timeline-wave shadow-[0_0_12px_#5D5CDE] pointer-events-none"></span>
                    </div>

                    {/* Timeline Item 1: Techscholars */}
                    <div className="group cursor-pointer transition-all duration-300 hover:translate-x-1.5 relative">
                      <span className="absolute left-[-15px] top-1 flex h-3 w-3 items-center justify-center -translate-x-1/2">
                        <span className="animate-smooth-glow absolute inline-flex h-full w-full rounded-full bg-[#5D5CDE]"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5D5CDE] shadow-[0_0_8px_#5D5CDE] group-hover:scale-125 transition-transform duration-300"></span>
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#1A1A1A] group-hover:text-[#5D5CDE] transition-colors">Techscholars™</span>
                        <span className="text-[10px] text-[#1A1A1A]/60 font-semibold">May–May 2024</span>
                      </div>
                      <span className="text-[11px] text-[#1A1A1A]/70 block">Graphic Designer Intern</span>
                    </div>

                    {/* Timeline Item 2: School Root Education */}
                    <div className="group cursor-pointer transition-all duration-300 hover:translate-x-1.5 relative">
                      <span className="absolute left-[-15px] top-1 flex h-3 w-3 items-center justify-center -translate-x-1/2">
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1A1A1A]/40 border border-white group-hover:bg-[#5D5CDE] group-hover:scale-125 transition-all duration-300 shadow-xs"></span>
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#1A1A1A] group-hover:text-[#5D5CDE] transition-colors">School Root Education</span>
                        <span className="text-[10px] text-[#1A1A1A]/60 font-semibold">June–Aug 2024</span>
                      </div>
                      <span className="text-[11px] text-[#1A1A1A]/70 block">Graphic Designer Intern</span>
                    </div>

                    {/* Timeline Item 3: The Agenc-E */}
                    <div className="group cursor-pointer transition-all duration-300 hover:translate-x-1.5 relative">
                      <span className="absolute left-[-15px] top-1 flex h-3 w-3 items-center justify-center -translate-x-1/2">
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1A1A1A]/40 border border-white group-hover:bg-[#5D5CDE] group-hover:scale-125 transition-all duration-300 shadow-xs"></span>
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#1A1A1A] group-hover:text-[#5D5CDE] transition-colors">The Agenc-E</span>
                        <span className="text-[10px] text-[#1A1A1A]/60 font-semibold">Dec &apos;24–Mar &apos;25</span>
                      </div>
                      <span className="text-[11px] text-[#1A1A1A]/70 block">Graphic Designer</span>
                    </div>

                    {/* Timeline Item 4: GrnLYFT */}
                    <div className="group cursor-pointer transition-all duration-300 hover:translate-x-1.5 relative">
                      <span className="absolute left-[-15px] top-1 flex h-3 w-3 items-center justify-center -translate-x-1/2">
                        <span className="animate-smooth-glow absolute inline-flex h-full w-full rounded-full bg-[#5D5CDE]"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5D5CDE] shadow-[0_0_8px_#5D5CDE] group-hover:scale-125 transition-transform duration-300"></span>
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#1A1A1A] group-hover:text-[#5D5CDE] transition-colors">GrnLYFT</span>
                        <span className="text-[10px] text-[#5D5CDE] font-bold">Sep &apos;25–Mar &apos;26</span>
                      </div>
                      <span className="text-[11px] text-[#1A1A1A]/80 font-medium block">Brand Designer &amp; Graphic Designer</span>
                    </div>
                  </div>
                </div>

                {/* Personal Values & Creative Fields */}
                <div className="pt-3 border-t border-[#1A1A1A]/10 grid grid-cols-2 gap-3 text-[11px]">
                  <div>
                    <span className="text-[#1A1A1A]/50 font-bold uppercase block mb-0.5">PERSONAL VALUES</span>
                    <p className="text-[#1A1A1A]/80 font-medium leading-tight">
                      Innovation, creative dedication, teamwork, good taste
                    </p>
                  </div>
                  <div>
                    <span className="text-[#1A1A1A]/50 font-bold uppercase block mb-0.5">CREATIVE FIELDS</span>
                    <p className="text-[#1A1A1A]/80 font-medium leading-tight">
                      Branding, poster design, UI/UX, Packaging
                    </p>
                  </div>
                </div>

                {/* Software Skills SVG Icons */}
                <div className="pt-3 border-t border-[#1A1A1A]/10 space-y-1.5">
                  <span className="text-[#1A1A1A]/50 font-bold uppercase tracking-wider block">SOFTWARE SKILLS</span>
                  <div className="flex items-center gap-3">
                    <img src="/assets/software skills/2069a460dcf28295e231f3111e037552.svg" alt="Photoshop" className="w-8 h-8 rounded-xs hover:scale-110 transition-transform shadow-xs border border-black/20" title="Adobe Photoshop" />
                    <img src="/assets/software skills/Group 13.svg" alt="Illustrator" className="w-8 h-8 rounded-xs hover:scale-110 transition-transform shadow-xs border border-black/20" title="Adobe Illustrator" />
                    <img src="/assets/software skills/Group 14.svg" alt="Figma" className="w-8 h-8 rounded-xs hover:scale-110 transition-transform shadow-xs border border-black/20" title="Figma" />
                    <img src="/assets/software skills/Group 15.svg" alt="Canva" className="w-8 h-8 rounded-xs hover:scale-110 transition-transform shadow-xs border border-black/20" title="Canva" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </section>
  );
};
