import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Bookmark } from 'lucide-react';

export const Header = ({
  shortlistCount,
  onOpenShortlist,
  onOpenInquiry,
  studioMode,
  setStudioMode
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Selected Work', href: '#work' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Start a Project', href: '#start-project' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F5F0]/90 backdrop-blur-md border-b border-[#1A1A1A]/10 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Status */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="group flex items-center gap-2 text-left"
              aria-label="Bireswaar Kundu Homepage"
            >
              <div className="w-8 h-8 bg-[#1A1A1A] text-[#F5F5F0] font-syne font-bold flex items-center justify-center text-sm rounded-xs group-hover:bg-[#5D5CDE] transition-colors">
                BK
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-bold tracking-tight text-sm text-[#1A1A1A] uppercase">
                  Bireswaar Kundu
                </span>
                <span className="font-mono-display text-[10px] text-[#1A1A1A]/60 tracking-wider">
                  STUDIO KUNDU ©2026
                </span>
              </div>
            </a>

            {/* Availability Badge */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 bg-[#1A1A1A]/5 rounded-full border border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/80">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-medium text-[11px]">Available Q3/Q4</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono-display uppercase tracking-wider text-[#1A1A1A]/70 hover:text-[#5D5CDE] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#5D5CDE] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Header Controls & CTAs */}
          <div className="flex items-center gap-3">
            {/* Interactive Studio Mode Toggle */}
            <button
              onClick={() => setStudioMode(!studioMode)}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-display transition-all ${
                studioMode
                  ? 'bg-[#5D5CDE] text-white shadow-xs'
                  : 'bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10 text-[#1A1A1A] border border-[#1A1A1A]/15'
              }`}
              title="Toggle Interactive Studio Mode (Baseline Grid & Inspection)"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{studioMode ? 'Grid On' : 'Grid Off'}</span>
            </button>

            {/* Shortlist Drawer Trigger */}
            <button
              onClick={onOpenShortlist}
              className="relative p-2 rounded-full bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10 text-[#1A1A1A] transition-colors border border-[#1A1A1A]/10"
              title="Saved Project Shortlist"
              aria-label="Saved Project Shortlist"
            >
              <Bookmark className="w-4 h-4 text-[#1A1A1A]" />
              {shortlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#5D5CDE] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {shortlistCount}
                </span>
              )}
            </button>

            {/* Inquiry CTA */}
            <button
              onClick={onOpenInquiry}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-[#1A1A1A] hover:bg-[#5D5CDE] text-[#F5F5F0] text-xs font-mono-display uppercase tracking-wider font-semibold rounded-xs transition-colors shadow-xs"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1A1A1A] hover:text-[#5D5CDE] transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A1A1A] text-[#F5F5F0] border-b border-[#333336] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono-display text-white/60">NAVIGATION</span>
              <span className="text-xs font-mono-display text-[#5D5CDE]">● AVAILABLE FOR Q3/Q4</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-syne font-bold hover:text-[#5D5CDE] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setStudioMode(!studioMode);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between px-4 py-2.5 rounded-xs bg-white/10 text-xs font-mono-display text-white"
              >
                <span>Interactive Studio Grid Mode</span>
                <Sparkles className="w-4 h-4 text-[#5D5CDE]" />
              </button>
              <button
                onClick={() => {
                  onOpenInquiry();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#5D5CDE] text-white text-xs font-mono-display font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2"
              >
                <span>Start Freelance Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
