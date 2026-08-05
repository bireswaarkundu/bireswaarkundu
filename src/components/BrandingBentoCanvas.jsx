import React from 'react';
import { ArrowUpRight, Bookmark, BookmarkCheck, Eye } from 'lucide-react';
import { ASSET_PATHS } from '../data/projectImages.js';

export const BrandingBentoCanvas = ({
  activeSubBrand,
  onSelectProject,
  shortlist,
  onToggleShortlist
}) => {
  // Brand Specific Configurations for Single-Screen Bento Canvas
  const getBrandData = () => {
    switch (activeSubBrand) {
      case 'Phoenix':
        return {
          id: 'branding-phoenix',
          brandName: 'PHOENIX STUDIO',
          barcode: 'BK-2025-PHX-8802',
          logoImg: ASSET_PATHS.PHOENIX_LOGO,
          mobileImg: ASSET_PATHS.PHOENIX_1,
          signageImg: ASSET_PATHS.PHOENIX_3,
          billboardImg: ASSET_PATHS.PHOENIX_6,
          extraMockup: ASSET_PATHS.PHOENIX_4,
          typefaceName: 'Syne & Playfair',
          colors: ['#111111', '#D4AF37', '#F5F5F0', '#5D5CDE'],
          missionStatement: 'Connecting Ideas, Empowering Innovation & Modern Sophistication',
          deliverables: '12 Identity & Packaging Assets Suite',
          year: '2025',
          medium: 'Brand Experience Architecture',
        };
      case 'Weld':
        return {
          id: 'branding-weld',
          brandName: 'WELD INDUSTRIAL',
          barcode: 'BK-2025-WELD-9914',
          logoImg: ASSET_PATHS.WELD_1,
          mobileImg: ASSET_PATHS.WELD_2,
          signageImg: ASSET_PATHS.WELD_3,
          billboardImg: ASSET_PATHS.WELD_G,
          extraMockup: ASSET_PATHS.WELD_ASSET_8,
          typefaceName: 'Syne & JetBrains Mono',
          colors: ['#121212', '#FF6B00', '#F9F9FB', '#5D5CDE'],
          missionStatement: 'Industrial Strength • Indestructible Packaging Architecture',
          deliverables: '14 Custom Industrial Assets & Labels',
          year: '2025',
          medium: 'Industrial Brand System',
        };
      case 'Innofusion':
      default:
        return {
          id: 'branding-innofusion',
          brandName: 'INNOFUSION CORP',
          barcode: 'BK-2025-INNO-4401',
          logoImg: ASSET_PATHS.INNOFUSION_1,
          mobileImg: ASSET_PATHS.INNOFUSION_2,
          signageImg: ASSET_PATHS.INNOFUSION_3,
          billboardImg: ASSET_PATHS.INNOFUSION_4,
          extraMockup: ASSET_PATHS.INNOFUSION_3,
          typefaceName: 'Plus Jakarta & Syne Mono',
          colors: ['#1A1A1A', '#5D5CDE', '#FFFFFF', '#4A90E2'],
          missionStatement: 'Empowering Innovation • Structured Geometric Identity System',
          deliverables: 'Corporate Identity Guidelines & Collateral',
          year: '2025',
          medium: 'Brand Guidelines Architecture',
        };
    }
  };

  const brand = getBrandData();
  const isBookmarked = shortlist.includes(brand.id);

  return (
    <div className="w-full bg-[#E8EEF4] rounded-3xl p-4 sm:p-6 lg:p-7 shadow-inner border border-[#1A1A1A]/10">
      {/* Canvas Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#1A1A1A]/15">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-[#5D5CDE] animate-pulse"></span>
          <div>
            <span className="font-mono-display text-[11px] text-[#1A1A1A]/70 uppercase tracking-widest font-bold block">
              SINGLE-SCREEN BENTO CANVAS // BRANDING SHOWCASE
            </span>
            <h3 className="font-syne-mono-italic text-2xl text-[#1A1A1A] font-normal">
              {brand.brandName}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectProject(brand.id)}
            className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#5D5CDE] text-white text-xs font-mono-display uppercase tracking-wider font-bold rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Open Brand Case Study</span>
          </button>

          <button
            onClick={() => onToggleShortlist(brand.id)}
            className={`p-2 rounded-xl border transition-all ${
              isBookmarked
                ? 'bg-[#5D5CDE] text-white border-[#5D5CDE]'
                : 'bg-white hover:bg-neutral-100 text-[#1A1A1A] border-[#1A1A1A]/15'
            }`}
            title={isBookmarked ? 'Remove from Shortlist' : 'Add to Shortlist'}
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 3-COLUMN SINGLE-SCREEN BENTO CANVAS (ALL BOXES HAVE WHITE BACKGROUND) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* ROW 1 — BOX 1: Barcode / Metadata Ticket (White Box) */}
        <div className="bg-white rounded-2xl p-5 flex flex-col justify-between border border-[#1A1A1A]/15 shadow-xs min-h-[170px]">
          <div>
            <span className="text-[10px] font-mono-display text-[#5D5CDE] font-bold uppercase tracking-widest block mb-1">
              BRAND SPECIFICATION
            </span>
            <h4 className="font-syne-mono-italic text-lg text-[#1A1A1A] font-normal leading-snug">
              {brand.deliverables}
            </h4>
            <span className="text-[11px] font-mono-display text-[#1A1A1A]/60 block mt-1">
              MEDIUM: {brand.medium} ({brand.year})
            </span>
          </div>

          <div className="pt-3 border-t border-[#1A1A1A]/10 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[9px] font-mono-display text-[#1A1A1A]/50 block">BARCODE SPEC</span>
              {/* Simulated Barcode Lines */}
              <div className="flex items-center gap-0.5 h-5">
                {[2,1,3,1,2,4,1,2,1,3,2,1,4,1,2,1].map((w, i) => (
                  <span key={i} className="bg-[#1A1A1A] h-full" style={{ width: `${w}px` }}></span>
                ))}
              </div>
            </div>
            <span className="font-mono-display text-[10px] text-[#1A1A1A]/70 font-bold">
              {brand.barcode}
            </span>
          </div>
        </div>

        {/* ROW 1 — BOX 2: Type Specimen (White Box) */}
        <div className="bg-white rounded-2xl p-5 flex flex-col justify-between border border-[#1A1A1A]/15 shadow-xs min-h-[170px]">
          <div>
            <span className="text-[10px] font-mono-display text-[#5D5CDE] font-bold uppercase tracking-widest block mb-1">
              TYPE SPECIMEN
            </span>
            <h4 className="font-syne-mono-italic text-lg text-[#1A1A1A] font-normal leading-snug">
              {brand.typefaceName}
            </h4>
          </div>

          <div className="flex items-end justify-between">
            <span className="font-editorial text-5xl text-[#1A1A1A] italic leading-none">Aa</span>
            {/* Color Palette Swatches */}
            <div className="flex items-center gap-1.5">
              {brand.colors.map((c, i) => (
                <span
                  key={i}
                  className="w-5 h-5 rounded-full border border-[#1A1A1A]/20 shadow-xs"
                  style={{ backgroundColor: c }}
                  title={c}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 1 — BOX 3: Outdoor Signage Mockup (White Box Container) */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-white rounded-2xl p-2.5 cursor-pointer border border-[#1A1A1A]/15 shadow-xs min-h-[170px] flex items-center justify-center overflow-hidden"
        >
          <img
            src={brand.signageImg}
            alt="Outdoor Signage"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-500 max-h-[160px]"
          />
          <div className="absolute top-4 left-4 px-2 py-0.5 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[9px] font-mono-display uppercase tracking-wider rounded-md">
            SIGNAGE MOCKUP
          </div>
        </div>

        {/* ROW 2 — BOX 4: Mobile UI Screen Mockup (White Box Container) */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-white rounded-2xl p-2.5 cursor-pointer border border-[#1A1A1A]/15 shadow-xs min-h-[220px] flex items-center justify-center overflow-hidden"
        >
          <img
            src={brand.mobileImg}
            alt="Mobile UI Interface"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-500 max-h-[210px]"
          />
          <div className="absolute bottom-4 left-4 px-2 py-0.5 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[9px] font-mono-display uppercase tracking-wider rounded-md">
            MOBILE UI INTERFACE
          </div>
        </div>

        {/* ROW 2 — BOX 5: Primary Logo Lockup (White Box Container - Spans 2 Columns) */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-white rounded-2xl p-6 cursor-pointer border border-[#1A1A1A]/15 shadow-xs md:col-span-2 min-h-[220px] flex items-center justify-center overflow-hidden"
        >
          <img
            src={brand.logoImg}
            alt="Primary Logo Lockup"
            referrerPolicy="no-referrer"
            className="max-h-[160px] w-auto object-contain group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#5D5CDE] text-white text-[10px] font-mono-display uppercase tracking-wider rounded-lg font-bold">
            PRIMARY LOGO LOCKUP
          </div>
        </div>

        {/* ROW 3 — BOX 6: OOH Billboard Poster (White Box Container - Spans 2 Columns) */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-white rounded-2xl p-2.5 cursor-pointer border border-[#1A1A1A]/15 shadow-xs md:col-span-2 min-h-[190px] flex items-center justify-center overflow-hidden"
        >
          <img
            src={brand.billboardImg}
            alt="OOH Billboard Poster"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-500 max-h-[180px]"
          />
          <div className="absolute bottom-4 left-4 px-2.5 py-1 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[10px] font-mono-display uppercase tracking-wider rounded-lg">
            OOH BILLBOARD POSTER
          </div>
        </div>

        {/* ROW 3 — BOX 7: Brand Slogan // Mission (White Box) */}
        <div className="bg-white rounded-2xl p-5 flex flex-col justify-center border border-[#1A1A1A]/15 shadow-xs min-h-[190px]">
          <span className="text-[9px] font-mono-display text-[#5D5CDE] font-bold uppercase tracking-widest block mb-1">
            BRAND SLOGAN // MISSION
          </span>
          <p className="font-editorial text-lg text-[#1A1A1A] italic leading-snug">
            &ldquo;{brand.missionStatement}&rdquo;
          </p>
          <div className="mt-3 pt-2 border-t border-[#1A1A1A]/10 flex items-center justify-between text-[10px] font-mono-display text-[#1A1A1A]/60">
            <span>VERIFIED IDENTITY</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#5D5CDE]" />
          </div>
        </div>
      </div>
    </div>
  );
};
