import React from 'react';
import { Bookmark, X, Trash2, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/projects.js';

export const ShortlistDrawer = ({
  isOpen,
  onClose,
  shortlist,
  onRemoveItem,
  onClearAll,
  onSelectProject,
  onOpenInquiry
}) => {
  if (!isOpen) return null;

  const savedProjects = PROJECTS.filter((p) => shortlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#1A1A1A]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#F5F5F0] h-full shadow-2xl border-l border-[#1A1A1A]/20 flex flex-col justify-between overflow-hidden">
        {/* Drawer Header */}
        <div className="p-6 bg-[#1A1A1A] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-[#5D5CDE]" />
            <span className="font-syne-mono font-normal text-base">
              Saved Shortlist ({savedProjects.length})
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
            aria-label="Close Shortlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedProjects.length === 0 ? (
            <div className="py-16 text-center space-y-3 text-[#1A1A1A]/60 font-mono-display text-xs">
              <Bookmark className="w-10 h-10 mx-auto text-[#1A1A1A]/20" />
              <p>Your saved project shortlist is currently empty.</p>
              <p className="text-[11px] text-[#1A1A1A]/40">
                Click the bookmark star on any project tile to collect reference work for your freelance inquiry.
              </p>
            </div>
          ) : (
            savedProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-3 bg-white rounded-xs border border-[#1A1A1A]/15 flex items-center gap-3 group hover:border-[#1A1A1A] transition-colors"
              >
                <div
                  className="w-16 h-16 rounded-xs overflow-hidden shrink-0 bg-neutral-200"
                >
                  <img
                    src={proj.thumbnail}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain bg-[#1A1A1A] group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono-display text-[#1A1A1A]/50 block uppercase">
                    {proj.category}
                  </span>
                  <h4
                    className="font-syne-mono font-normal text-xs text-[#1A1A1A] truncate"
                  >
                    {proj.title}
                  </h4>
                  <span className="text-[11px] font-mono-display text-[#1A1A1A]/70 truncate block">
                    Client: {proj.client}
                  </span>
                </div>

                <button
                  onClick={() => onRemoveItem(proj.id)}
                  className="p-2 text-[#1A1A1A]/40 hover:text-[#5D5CDE] transition-colors"
                  title="Remove from shortlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Bottom Actions */}
        {savedProjects.length > 0 && (
          <div className="p-6 bg-white border-t border-[#1A1A1A]/10 space-y-3">
            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="w-full py-3 bg-[#5D5CDE] hover:bg-[#1A1A1A] text-white text-xs font-mono-display font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Attach Shortlist &amp; Start Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClearAll}
              className="w-full text-center text-[11px] font-mono-display text-[#1A1A1A]/50 hover:text-[#5D5CDE] transition-colors py-1"
            >
              Clear All Shortlisted Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
