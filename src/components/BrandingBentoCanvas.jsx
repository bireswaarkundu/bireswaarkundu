import React from 'react';
import { ArrowUpRight, Bookmark, BookmarkCheck, ExternalLink, Sparkles } from 'lucide-react';
import { ASSET_PATHS } from '../data/projectImages.js';

export const BRANDING_PROJECTS = [
  {
    id: 'branding-weld',
    title: 'WELD — Bakery Brand Identity',
    subBrand: 'Weld',
    client: 'WELD BAKERY',
    year: '2025',
    medium: 'Brand System & Packaging',
    thumbnail: ASSET_PATHS.WELD_1,
    behanceUrl: 'https://www.behance.net/gallery/252792481/Weld-Bakery-Brand-Identity',
    description: 'Complete brand identity system, packaging architecture, collateral suite, and website design for Weld Vegetarian Bakery.',
    tags: ['Brand Identity', 'Packaging', 'Behance Portfolio'],
  },
  {
    id: 'branding-phoenix',
    title: 'PHOENIX — Studio Brand & Visual System',
    subBrand: 'Phoenix',
    client: 'PHOENIX STUDIO',
    year: '2025',
    medium: 'Brand Experience System',
    thumbnail: ASSET_PATHS.PHOENIX_LOGO,
    behanceUrl: 'https://www.behance.net/gallery/252488901/Phoenix',
    description: 'Modern identity system, editorial typography, and digital experience guidelines for Phoenix Design Studio.',
    tags: ['Visual Identity', 'Editorial', 'Behance Portfolio'],
  },
  {
    id: 'branding-innofusion',
    title: 'INNOFUSION — Corporate Identity System',
    subBrand: 'Innofusion',
    client: 'INNOFUSION CORP',
    year: '2025',
    medium: 'Corporate Identity Guidelines',
    thumbnail: ASSET_PATHS.INNOFUSION_1,
    behanceUrl: 'https://www.behance.net/gallery/199797165/INNOFUSION-Brand-Identity',
    description: 'Geometric brand identity, stationery collateral, and corporate brand guidelines for Innofusion Corporation.',
    tags: ['Corporate Identity', 'Guidelines', 'Behance Portfolio'],
  },
];

export const BrandingBentoCanvas = ({
  shortlist = [],
  onToggleShortlist
}) => {
  return (
    <div className="w-full">
      {/* 3 BOXES FOR 3 BRANDINGS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BRANDING_PROJECTS.map((brand) => {
          const isBookmarked = shortlist.includes(brand.id);

          return (
            <article
              key={brand.id}
              className="group relative flex flex-col bg-white rounded-xs border border-[#1A1A1A]/20 shadow-[3px_3px_0px_#1A1A1A] hover:shadow-[5px_5px_0px_#5D5CDE] hover:border-[#1A1A1A] transition-all duration-300 overflow-hidden"
            >
              {/* Card Top Diagrammatic Header Bar */}
              <div className="bg-[#F9F9F6] border-b border-[#1A1A1A]/15 px-4 py-2.5 flex items-center justify-between z-10 shrink-0">
                <div className="flex items-center gap-2 truncate">
                  <span className="w-2 h-2 rounded-full bg-[#5D5CDE] shrink-0"></span>
                  <span className="font-mono-display text-xs text-[#1A1A1A] font-bold tracking-wider uppercase truncate">
                    BRANDING // {brand.subBrand.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* LANDSCAPE 16:9 ASPECT RATIO THUMBNAIL CONTAINER FOR BRANDING */}
              <div className="relative cursor-pointer overflow-hidden bg-[#1A1A1A] aspect-[16/9] w-full flex items-center justify-center border-b border-[#1A1A1A]/10">
                <img
                  src={brand.thumbnail}
                  alt={brand.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#1A1A1A]/85 backdrop-blur-md text-white text-[10px] font-mono-display uppercase tracking-wider rounded-xs font-bold">
                  {brand.client}
                </div>
              </div>

              {/* Card Info & Behance Direct Link Button */}
              <div className="p-4 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono-display text-[#1A1A1A]/60 mb-1.5">
                    <span className="font-bold text-[#5D5CDE] uppercase">{brand.client}</span>
                    <span>{brand.year}</span>
                  </div>

                  <h3 className="font-syne-mono-italic font-normal text-lg text-[#1A1A1A] leading-snug mb-2">
                    {brand.title}
                  </h3>

                  <p className="font-editorial text-xs text-[#1A1A1A]/75 italic leading-relaxed mb-4">
                    {brand.description}
                  </p>
                </div>

                {/* PROMINENT DIRECT BEHANCE PORTFOLIO BUTTON */}
                <a
                  href={brand.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#1A1A1A] hover:bg-[#5D5CDE] text-white text-xs font-mono-display font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs group/btn"
                >
                  <span>See Portfolio on Behance</span>
                  <ArrowUpRight className="w-4 h-4 text-[#5D5CDE] group-hover/btn:text-white transition-colors" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
