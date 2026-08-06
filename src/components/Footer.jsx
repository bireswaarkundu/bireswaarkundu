import React from 'react';
import { ArrowUp, Instagram, Linkedin, Dribbble, Globe } from 'lucide-react';

const PinterestIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
  </svg>
);

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Dribbble', url: 'https://dribbble.com/bireswaarkundu', icon: Dribbble },
    { name: 'Pinterest', url: 'https://in.pinterest.com/bireswaarkundu/', icon: PinterestIcon },
    { name: 'Instagram', url: 'https://www.instagram.com/bireswaarkundu/', icon: Instagram },
    { name: 'Behance', url: 'https://behance.net/bireswaarkundu', icon: Globe },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/bireswaarkundu', icon: Linkedin }
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
            <h2 className="font-syne-mono text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-white">
              BIRESWAAR KUNDU
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
              KOLKATA / REMOTE (INDIA)<br />
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
          <span>© {new Date().getFullYear()} BIRESWAAR KUNDU. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED WITH TACTILE PRECISION &amp; TYPESET IN SYNE &amp; PLAYFAIR DISPLAY.</span>
        </div>
      </div>
    </footer>
  );
};
