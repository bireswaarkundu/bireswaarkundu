import React, { useEffect, useState } from 'react';
import { X, ArrowLeft, ArrowRight, Bookmark, BookmarkCheck, CheckCircle2, Copy, Check } from 'lucide-react';
import { PROJECTS } from '../data/projects.js';

export const ProjectModal = ({
  projectId,
  onClose,
  onSelectProject,
  shortlist,
  onToggleShortlist,
  onOpenInquiryWithProject
}) => {
  const [copiedHex, setCopiedHex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (projectId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectId, onClose]);

  if (!projectId) return null;

  const projectIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const project = PROJECTS[projectIndex];
  if (!project) return null;

  const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  const isBookmarked = shortlist.includes(project.id);
  const caseStudy = project.caseStudy;

  const handleCopyHex = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#1A1A1A]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#F5F5F0] rounded-xs border border-[#1A1A1A]/20 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F5F5F0]/95 backdrop-blur-md border-b border-[#1A1A1A]/10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#1A1A1A] text-white text-[10px] font-mono-display uppercase tracking-wider rounded-xs">
              {project.category}
            </span>
            <span className="text-xs font-mono-display text-[#1A1A1A]/60">
              CLIENT: {project.client.toUpperCase()} ({project.year})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleShortlist(project.id)}
              className={`p-2 rounded-full border transition-colors ${
                isBookmarked
                  ? 'bg-[#5D5CDE] text-white border-[#5D5CDE]'
                  : 'bg-white hover:bg-neutral-100 text-[#1A1A1A] border-[#1A1A1A]/20'
              }`}
              title={isBookmarked ? 'Remove from Shortlist' : 'Add to Shortlist'}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white hover:bg-[#5D5CDE] hover:text-white text-[#1A1A1A] border border-[#1A1A1A]/20 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-12">
          {/* Case Study Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-display text-[#5D5CDE] font-bold uppercase tracking-wider">
              <span>{caseStudy ? 'CASE STUDY DEEP DIVE' : 'PROJECT SHOWCASE'}</span>
            </div>

            <h1 className="font-syne text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1A1A1A]">
              {project.title}
            </h1>

            <p className="font-editorial text-xl sm:text-2xl text-[#1A1A1A]/80 italic">
              {project.shortDescription}
            </p>
          </div>

          {/* Hero Image */}
          <div className="rounded-xs overflow-hidden border border-[#1A1A1A]/10 bg-[#1A1A1A] p-4 shadow-md flex items-center justify-center">
            <img
              src={project.thumbnail}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="max-h-[750px] w-auto h-auto object-contain mx-auto rounded-xs shadow-lg"
            />
          </div>

          {/* Brief & Constraint Cards (2-Column) */}
          {caseStudy && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Brief */}
              <div className="p-6 bg-white rounded-xs border border-[#1A1A1A]/15 shadow-xs space-y-3">
                <span className="text-xs font-mono-display font-bold text-[#5D5CDE] uppercase tracking-wider">
                  01 // THE BRIEF
                </span>
                <p className="font-editorial text-lg text-[#1A1A1A] leading-relaxed">
                  {caseStudy.brief}
                </p>
              </div>

              {/* Constraint */}
              <div className="p-6 bg-[#1A1A1A] text-white rounded-xs border border-[#1A1A1A] shadow-xs space-y-3">
                <span className="text-xs font-mono-display font-bold text-[#5D5CDE] uppercase tracking-wider">
                  02 // THE INTERESTING CONSTRAINT
                </span>
                <p className="font-editorial text-lg text-white/90 leading-relaxed italic">
                  &ldquo;{caseStudy.constraint}&rdquo;
                </p>
              </div>
            </div>
          )}

          {/* Visual Gallery */}
          {caseStudy && caseStudy.gallery && (
            <div className="space-y-8 pt-4">
              {caseStudy.gallery.map((imgItem, idx) => {
                const imgSrc = typeof imgItem === 'string' ? imgItem : imgItem.url;
                const imgCaption = typeof imgItem === 'string' ? `Final Campaign Artwork 0${idx + 1}` : imgItem.caption;
                return (
                  <figure key={idx} className="space-y-2">
                    <div className="rounded-xs overflow-hidden border border-[#1A1A1A]/10 bg-[#1A1A1A] p-2 sm:p-3 shadow-sm flex items-center justify-center aspect-[4/5] max-w-2xl mx-auto w-full">
                      <img
                        src={imgSrc}
                        alt={imgCaption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-xs shadow-md"
                      />
                    </div>
                    <figcaption className="text-xs font-mono-display text-[#1A1A1A]/60 italic flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#5D5CDE] rounded-full"></span>
                      <span>FIG 0{idx + 1}: {imgCaption}</span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          )}


        </div>

        {/* Modal Bottom Footer Navigation */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F5F5F0]/95 backdrop-blur-md border-t border-[#1A1A1A]/10">
          <button
            onClick={() => onSelectProject(prevProject.id)}
            className="flex items-center gap-2 text-xs font-mono-display uppercase font-bold text-[#1A1A1A] hover:text-[#5D5CDE] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev: {prevProject.title.slice(0, 20)}...</span>
            <span className="sm:hidden">Prev</span>
          </button>

          {onOpenInquiryWithProject && (
            <button
              onClick={() => {
                onClose();
                onOpenInquiryWithProject(project.id);
              }}
              className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#5D5CDE] text-white text-xs font-mono-display uppercase font-bold tracking-wider rounded-xs transition-colors shadow-xs"
            >
              Inquire Similar Project
            </button>
          )}

          <button
            onClick={() => onSelectProject(nextProject.id)}
            className="flex items-center gap-2 text-xs font-mono-display uppercase font-bold text-[#1A1A1A] hover:text-[#5D5CDE] transition-colors"
          >
            <span className="hidden sm:inline">Next: {nextProject.title.slice(0, 20)}...</span>
            <span className="sm:hidden">Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
