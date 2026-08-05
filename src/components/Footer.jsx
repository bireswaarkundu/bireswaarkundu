import React from 'react';
import { ArrowUp, Instagram, Linkedin, Dribbble, Globe } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
    { name: 'Behance', url: 'https://behance.net', icon: Globe },
    { name: 'Dribbble', url: 'https://dribbble.com', icon: Dribbble },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
    { name: 'Read.cv', url: 'https://read.cv', icon: Globe }
  ];

  return (
    <footer id="main-footer" className="bg-[#1A1A1A] text-[#F5F5F0] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Row: Big Brand Signature & Back to Top */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <span className="font-mono-display text-xs text-[#5D5CDE] font-bold uppercase tracking-widest block mb-2">
              ● CURRENT STATUS: ACCEPTING Q3/Q4 COMMISSION COMMISSIONS
            </span>
            <h2 className="font-syne text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              STUDIO KUNDU
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono-display uppercase tracking-wider text-white/80 hover:text-[#5D5CDE] transition-colors group self-start md:self-auto"
          >
            <span>Back to Top</span>
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#5D5CDE] text-white flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Middle Row: Navigation Links & Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-mono-display">
          <div className="md:col-span-6 space-y-3">
            <span className="text-white/40 uppercase tracking-widest block font-bold">
              STUDIO LOCATION &amp; BASE
            </span>
            <p className="text-white/80 leading-relaxed font-mono-display">
              MUMBAI / NEW DELHI / REMOTE (INDIA)<br />
              GLOBAL COLLABORATIONS &amp; COMMISSIONS WELCOME
            </p>
          </div>

          <div className="md:col-span-6 space-y-3">
            <span className="text-white/40 uppercase tracking-widest block font-bold">
              DIGITAL NETWORK &amp; PROFILES
            </span>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-[#5D5CDE] text-white rounded-xs border border-white/10 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{s.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Minimal Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-display text-white/50">
          <span>© {new Date().getFullYear()} BIRESHWAR KUNDU. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED WITH TACTILE PRECISION &amp; TYPESET IN SYNE &amp; PLAYFAIR DISPLAY.</span>
        </div>
      </div>
    </footer>
  );
};
