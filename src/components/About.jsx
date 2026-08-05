import React from 'react';
import { Award, Code2, PenTool, Terminal, CheckCircle } from 'lucide-react';

export const About = () => {
  const tools = [
    { name: 'Figma & Design Tokens', level: 'Mastery', category: 'Systems' },
    { name: 'Adobe Creative Cloud', level: 'Mastery', category: 'Print & Brand' },
    { name: 'Glyphs (Type Design)', level: 'Advanced', category: 'Typography' },
    { name: 'Cinema 4D & Blender', level: 'Intermediate', category: '3D & Packaging' },
    { name: 'Print & Pre-Press Specs', level: 'Mastery', category: 'Tactile Print' },
    { name: 'Frontend & Webflow', level: 'Advanced', category: 'Digital UI' }
  ];

  const recognition = [
    { year: '2025', title: 'Kyoorius Design Awards — Blue Elephant', project: 'Vedic Organic Branding' },
    { year: '2025', title: 'CII Design Excellence Award', project: 'Kundu Display Typeface' },
    { year: '2024', title: 'Type Directors Club (TDC) Certificate of Excellence', project: 'Indic Type Tokens' },
    { year: '2023', title: 'Dieline Global Packaging Showcase Winner', project: 'Saffron Artisanal Tea' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#1A1A1A]/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#5D5CDE]"></span>
            <span className="font-mono-display text-xs text-[#1A1A1A]/70 uppercase tracking-widest font-semibold">
              BACKGROUND &amp; PHILOSOPHY
            </span>
          </div>
          <h2 className="font-syne text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1A1A1A]">
            About Bireswaar Kundu
          </h2>
        </div>
        <span className="font-mono-display text-xs text-[#1A1A1A]/60">
          INDIAN GRAPHIC &amp; BRAND DESIGNER
        </span>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Designer Portrait & Quick Facts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-xs overflow-hidden border border-[#1A1A1A]/20 shadow-md bg-neutral-200 aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85"
              alt="Bireswaar Kundu Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#1A1A1A]/90 backdrop-blur-md text-white rounded-xs border border-white/10">
              <span className="block font-syne font-bold text-sm">Bireswaar Kundu</span>
              <span className="block font-mono-display text-[11px] text-white/70">
                Principal Designer • Studio Kundu
              </span>
            </div>
          </div>

          <div className="p-5 bg-white rounded-xs border border-[#1A1A1A]/15 space-y-3 font-mono-display text-xs text-[#1A1A1A]/80">
            <div className="flex justify-between py-1 border-b border-[#1A1A1A]/10">
              <span className="text-[#1A1A1A]/50">LOCATION:</span>
              <span className="font-bold">India (Mumbai / Delhi / Remote)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#1A1A1A]/10">
              <span className="text-[#1A1A1A]/50">EXPERIENCE:</span>
              <span className="font-bold">8+ Years Senior Practice</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#1A1A1A]/10">
              <span className="text-[#1A1A1A]/50">SPECIALIZATION:</span>
              <span className="font-bold">Ad Campaigns, Social Media, Branding, Concepts</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#1A1A1A]/50">RECOGNITION:</span>
              <span className="font-bold">Kyoorius, TDC, CII Design</span>
            </div>
          </div>
        </div>

        {/* Bio, Philosophy, Tools & Recognition */}
        <div className="lg:col-span-7 space-y-10">
          {/* First-Person Bio */}
          <div className="space-y-4">
            <span className="text-xs font-mono-display font-bold text-[#5D5CDE] uppercase tracking-wider">
              FIRST-PERSON PERSPECTIVE
            </span>
            <p className="font-editorial text-2xl sm:text-3xl text-[#1A1A1A] leading-relaxed font-normal">
              &ldquo;I am Bireswaar Kundu, an Indian graphic and brand designer with a passion for crafting enduring visual identities, editorial print systems, custom typography, and physical packaging architecture. I believe design is a bridge between rich heritage and contemporary visual language—stripping away ornament to let bold typography, structured grid hierarchy, and purposeful material texture communicate. Whether partnering with ambitious startups, luxury heritage brands, or cultural institutions, I engineer visual systems built to command attention and scale.&rdquo;
            </p>
          </div>

          {/* Software Stack & Capabilities */}
          <div className="space-y-4">
            <h3 className="font-syne font-bold text-xl text-[#1A1A1A] flex items-center gap-2">
              <PenTool className="w-5 h-5 text-[#5D5CDE]" />
              <span>Technical Stack &amp; Software Mastery</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className="p-3 bg-white rounded-xs border border-[#1A1A1A]/15 flex items-center justify-between"
                >
                  <div>
                    <span className="block font-syne font-bold text-xs text-[#1A1A1A]">
                      {t.name}
                    </span>
                    <span className="block font-mono-display text-[10px] text-[#1A1A1A]/50">
                      {t.category}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#F5F5F0] text-[#1A1A1A] text-[10px] font-mono-display font-semibold rounded-xs border border-[#1A1A1A]/10">
                    {t.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition & Awards */}
          <div className="space-y-4">
            <h3 className="font-syne font-bold text-xl text-[#1A1A1A] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#5D5CDE]" />
              <span>Selected Recognition &amp; Awards</span>
            </h3>

            <div className="bg-white rounded-xs border border-[#1A1A1A]/15 divide-y divide-[#1A1A1A]/10">
              {recognition.map((rec) => (
                <div
                  key={rec.title}
                  className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#F5F5F0] transition-colors"
                >
                  <div>
                    <span className="font-syne font-bold text-sm text-[#1A1A1A] block">
                      {rec.title}
                    </span>
                    <span className="font-editorial text-xs text-[#1A1A1A]/70 italic block">
                      Project: {rec.project}
                    </span>
                  </div>
                  <span className="text-xs font-mono-display text-[#5D5CDE] font-bold shrink-0">
                    [{rec.year}]
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
