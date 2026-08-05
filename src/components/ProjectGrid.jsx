import React, { useState } from 'react';
import { Bookmark, BookmarkCheck, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { PROJECTS, DOMAIN_CATEGORIES } from '../data/projects.js';
import { BrandingBentoCanvas } from './BrandingBentoCanvas.jsx';

export const ProjectGrid = ({
  onSelectProject,
  shortlist,
  onToggleShortlist
}) => {
  // Default to domain category: 'Ad Campaign'
  const [activeCategory, setActiveCategory] = useState('Ad Campaign');
  const [activeSubBrand, setActiveSubBrand] = useState('Innofusion');

  // Filtering Logic for Non-Branding Categories
  const filteredProjects = PROJECTS.filter((project) => {
    return project.domain === activeCategory;
  });

  return (
    <section id="work" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Top Header & Metadata */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-[#1A1A1A]/15 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5D5CDE] animate-pulse"></span>
            <span className="font-mono-display text-xs text-[#1A1A1A]/70 uppercase tracking-widest font-semibold">
              CURATED DESIGN ARCHIVE // 2024–2026
            </span>
          </div>

          {/* Headline in Syne Mono Graphical Italics */}
          <h2 className="font-syne-mono-italic text-3xl sm:text-4xl text-[#1A1A1A] font-normal tracking-wide">
            Selected Works
          </h2>
          <p className="font-editorial text-base text-[#1A1A1A]/70 italic mt-1">
            Tactile graphic design, brand identity systems, editorial typography, &amp; social media campaigns.
          </p>
        </div>

        {/* Primary Domain Category Tabs */}
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Design Domains">
          {DOMAIN_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (cat.id === 'Branding') setActiveSubBrand('Innofusion');
                }}
                className={`px-3.5 py-2 text-xs font-mono-display uppercase tracking-wider rounded-xs border transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold shadow-[2px_2px_0px_#5D5CDE]'
                    : 'bg-white text-[#1A1A1A]/80 hover:bg-[#1A1A1A]/5 border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40'
                }`}
              >
                <span>{cat.label}</span>
                {cat.count > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-[#5D5CDE] text-white' : 'bg-[#1A1A1A]/10 text-[#1A1A1A]/70'
                  }`}>
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-Brand Filters for Branding Domain */}
      {activeCategory === 'Branding' && (
        <div className="mb-6 p-3 bg-white rounded-2xl border border-[#1A1A1A]/15 flex items-center gap-3 overflow-x-auto shadow-xs">
          <div className="flex items-center gap-1.5 text-xs font-mono-display text-[#1A1A1A]/60 font-bold uppercase tracking-wider shrink-0 pl-2">
            <Filter className="w-3.5 h-3.5 text-[#5D5CDE]" />
            <span>SUB-BRAND BENTO CANVAS:</span>
          </div>
          <div className="flex items-center gap-2">
            {['Innofusion', 'Phoenix', 'Weld'].map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubBrand(sub)}
                className={`px-4 py-1.5 text-xs font-mono-display uppercase tracking-wider rounded-xl border transition-all ${
                  activeSubBrand === sub
                    ? 'bg-[#5D5CDE] text-white border-[#5D5CDE] font-bold shadow-xs'
                    : 'bg-[#F5F5F0] text-[#1A1A1A]/80 hover:bg-white border-[#1A1A1A]/15'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* RENDER MODE: BRANDING SINGLE-SCREEN BENTO CANVAS vs STANDARD 4:5 DOMAIN GRID */}
      {activeCategory === 'Branding' ? (
        /* SINGLE-SCREEN BENTO GRID CANVAS FOR BRANDING (NO SCROLLING) */
        <BrandingBentoCanvas
          activeSubBrand={activeSubBrand}
          onSelectProject={onSelectProject}
          shortlist={shortlist}
          onToggleShortlist={onToggleShortlist}
        />
      ) : filteredProjects.length === 0 ? (
        /* Digital Drawing / Empty State Card */
        <div className="py-20 px-8 text-center bg-white rounded-xs border border-dashed border-[#1A1A1A]/30 shadow-[4px_4px_0px_#1A1A1A]">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#5D5CDE]/10 text-[#5D5CDE] flex items-center justify-center font-bold text-xl font-mono-display">
            <Sparkles className="w-7 h-7 text-[#5D5CDE]" />
          </div>
          <div className="font-mono-display text-xs text-[#5D5CDE] font-bold uppercase tracking-widest mb-1">
            00 // DIGITAL DRAWING STUDIO
          </div>
          <h3 className="font-syne-mono-italic text-2xl sm:text-3xl text-[#1A1A1A] font-normal mb-3">
            Digital Artwork &amp; Vector Character Suite
          </h3>
          <p className="font-editorial text-base text-[#1A1A1A]/70 italic max-w-xl mx-auto leading-relaxed mb-6">
            Digital illustrations, speed paints, and character line-art drawings are currently in studio production and pre-press color calibration. New vector art pieces will drop soon!
          </p>
          <button
            onClick={() => setActiveCategory('Ad Campaign')}
            className="px-5 py-2.5 bg-[#1A1A1A] hover:bg-[#5D5CDE] text-white text-xs font-mono-display uppercase tracking-wider font-bold rounded-xs transition-colors shadow-xs"
          >
            Explore Ad Campaign Works
          </button>
        </div>
      ) : (
        /* Uniform Grid with 4:5 Aspect Ratio Cards for Other Domains */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => {
            const isBookmarked = shortlist.includes(project.id);

            return (
              <article
                key={project.id}
                className="group relative flex flex-col bg-white rounded-xs border border-[#1A1A1A]/20 shadow-[3px_3px_0px_#1A1A1A] hover:shadow-[5px_5px_0px_#5D5CDE] hover:border-[#1A1A1A] transition-all duration-300 overflow-hidden"
              >
                {/* Card Diagrammatic Header Bar */}
                <div className="bg-[#F9F9F6] border-b border-[#1A1A1A]/15 px-3.5 py-2 flex items-center justify-between z-10 shrink-0">
                  <div className="flex items-center gap-1.5 truncate pr-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5D5CDE] shrink-0"></span>
                    <span className="font-mono-display text-[10px] text-[#1A1A1A] font-bold tracking-wider uppercase truncate">
                      {project.bentoTag || project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleShortlist(project.id);
                      }}
                      className={`p-1 rounded-xs border transition-all ${
                        isBookmarked
                          ? 'bg-[#5D5CDE] text-white border-[#5D5CDE]'
                          : 'bg-white hover:bg-neutral-100 text-[#1A1A1A]/70 border-[#1A1A1A]/15 hover:text-[#5D5CDE]'
                      }`}
                      title={isBookmarked ? 'Remove from Shortlist' : 'Add to Shortlist'}
                    >
                      {isBookmarked ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* UNIFORM 4:5 ASPECT RATIO FRAME FOR OTHER DOMAIN CARDS */}
                <div
                  onClick={() => onSelectProject(project.id)}
                  className="relative cursor-pointer overflow-hidden bg-[#1A1A1A] aspect-[4/5] w-full flex items-center justify-center p-2.5 border-b border-[#1A1A1A]/10"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xs"
                  />

                  {/* Hover Details Overlay */}
                  <div className="absolute inset-0 bg-[#1A1A1A]/90 text-white p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between backdrop-blur-xs">
                    <div className="flex items-center justify-between font-mono-display text-[11px] text-white/70 border-b border-white/20 pb-2">
                      <span className="font-bold text-[#5D5CDE] truncate">{project.client.toUpperCase()}</span>
                      <span>{project.year}</span>
                    </div>

                    <div className="my-auto space-y-2">
                      <h4 className="font-syne-mono-italic text-base text-white font-normal leading-snug">
                        {project.title}
                      </h4>
                      <p className="font-editorial text-xs text-white/80 italic line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>

                      <div className="pt-1">
                        <span className="block text-[9px] font-mono-display text-white/50 uppercase tracking-widest mb-1">
                          DELIVERABLES:
                        </span>
                        <ul className="space-y-0.5 text-[11px] font-mono-display">
                          {project.deliverables.slice(0, 3).map((item) => (
                            <li key={item} className="flex items-center gap-1.5 text-white/90 truncate">
                              <span className="w-1 h-1 bg-[#5D5CDE] rounded-full shrink-0"></span>
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[11px] font-mono-display font-bold">
                      <span className="text-[#5D5CDE] uppercase">
                        {project.caseStudy?.gallery?.length > 1
                          ? `★ GALLERY (${project.caseStudy.gallery.length})`
                          : '★ PREVIEW'}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="p-3.5 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono-display text-[#1A1A1A]/60 mb-1">
                      <span className="truncate pr-1">{project.client.toUpperCase()}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3
                      onClick={() => onSelectProject(project.id)}
                      className="font-syne-mono-italic font-normal text-base text-[#1A1A1A] group-hover:text-[#5D5CDE] transition-colors cursor-pointer leading-snug mb-1.5 truncate"
                    >
                      {project.title}
                    </h3>

                    <p className="font-editorial text-xs text-[#1A1A1A]/75 line-clamp-2 italic mb-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#1A1A1A]/10 flex items-center justify-between gap-1">
                    <span className="text-[10px] font-mono-display text-[#1A1A1A]/60 truncate">
                      {project.medium}
                    </span>

                    <button
                      onClick={() => onSelectProject(project.id)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono-display text-[#1A1A1A] hover:text-[#5D5CDE] transition-colors shrink-0"
                    >
                      <span>{project.caseStudy?.gallery?.length > 1 ? 'Gallery' : 'Preview'}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#5D5CDE]" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};
