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
          upMockup: ASSET_PATHS.PHOENIX_3,
          leftMockup: ASSET_PATHS.PHOENIX_1,
          rightMockup: ASSET_PATHS.PHOENIX_4,
          downMockup: ASSET_PATHS.PHOENIX_6,
          bottomRightMockup: ASSET_PATHS.PHOENIX_8,
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
          upMockup: ASSET_PATHS.WELD_2,
          leftMockup: ASSET_PATHS.WELD_3,
          rightMockup: ASSET_PATHS.WELD_ASSET_7,
          downMockup: ASSET_PATHS.WELD_G,
          bottomRightMockup: ASSET_PATHS.WELD_ASSET_8,
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
          upMockup: ASSET_PATHS.INNOFUSION_3,
          leftMockup: ASSET_PATHS.INNOFUSION_2,
          rightMockup: ASSET_PATHS.INNOFUSION_4,
          downMockup: ASSET_PATHS.INNOFUSION_3,
          bottomRightMockup: ASSET_PATHS.INNOFUSION_2,
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

      {/* 3x3 SYMMETRIC BENTO GRID: MAIN LOGO IN CENTER, MOCKUPS SURROUNDING (UP/DOWN/LEFT/RIGHT), ALL IMAGES 100% VISIBLE WITH OBJECT-CONTAIN */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* ==================== ROW 1 ==================== */}
        {/* ROW 1, COL 1: Barcode / Metadata Ticket Card */}
        <div className="bg-white rounded-2xl p-5 flex flex-col justify-between border border-[#1A1A1A]/15 shadow-xs min-h-[190px]">
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

        {/* ROW 1, COL 2: Type Specimen Card */}
        <div className="bg-white rounded-2xl p-5 flex flex-col justify-between border border-[#1A1A1A]/15 shadow-xs min-h-[190px]">
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

        {/* ROW 1, COL 3: UP Mockup Image Card */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-white rounded-2xl p-3 cursor-pointer border border-[#1A1A1A]/15 shadow-xs min-h-[190px] flex items-center justify-center overflow-hidden"
        >
          <img
            src={brand.upMockup}
            alt="Up Brand Mockup"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[170px] rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[9px] font-mono-display uppercase tracking-wider rounded-md">
            SIGNAGE / DISPLAY MOCKUP
          </div>
        </div>

        {/* ==================== ROW 2 (MAIN LOGO IN MIDDLE) ==================== */}
        {/* ROW 2, COL 1: LEFT Mockup Image Card */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-white rounded-2xl p-3 cursor-pointer border border-[#1A1A1A]/15 shadow-xs min-h-[220px] flex items-center justify-center overflow-hidden"
        >
          <img
            src={brand.leftMockup}
            alt="Left Brand Mockup"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[200px] rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[9px] font-mono-display uppercase tracking-wider rounded-md">
            STATIONERY / MOBILE MOCKUP
          </div>
        </div>

        {/* ROW 2, COL 2: MAIN LOGO LOCKUP IN THE EXACT CENTER */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-white rounded-2xl p-6 cursor-pointer border-2 border-[#5D5CDE]/30 shadow-md min-h-[220px] flex flex-col items-center justify-center overflow-hidden text-center"
        >
          <img
            src={brand.logoImg}
            alt="Primary Logo Lockup"
            referrerPolicy="no-referrer"
            className="max-h-[150px] w-auto object-contain group-hover:scale-105 transition-transform duration-500 my-auto"
          />
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#5D5CDE] text-white text-[10px] font-mono-display uppercase tracking-wider rounded-lg font-bold shadow-xs">
            PRIMARY LOGO LOCKUP
          </div>
          <span className="text-[10px] font-mono-display text-[#1A1A1A]/60 uppercase tracking-widest mt-2">
            MAIN BRAND MARK
          </span>
        </div>

        {/* ROW 2, COL 3: RIGHT Mockup Image Card */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-white rounded-2xl p-3 cursor-pointer border border-[#1A1A1A]/15 shadow-xs min-h-[220px] flex items-center justify-center overflow-hidden"
        >
          <img
            src={brand.rightMockup}
            alt="Right Brand Mockup"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[200px] rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[9px] font-mono-display uppercase tracking-wider rounded-md">
            PACKAGING / ASSET MOCKUP
          </div>
        </div>

        {/* ==================== ROW 3 ==================== */}
        {/* ROW 3, COL 1: DOWN Mockup Image Card */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-white rounded-2xl p-3 cursor-pointer border border-[#1A1A1A]/15 shadow-xs min-h-[190px] flex items-center justify-center overflow-hidden"
        >
          <img
            src={brand.downMockup}
            alt="Down Brand Mockup"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[170px] rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[9px] font-mono-display uppercase tracking-wider rounded-lg">
            OOH BILLBOARD POSTER
          </div>
        </div>

        {/* ROW 3, COL 2: Brand Slogan // Mission Statement Card */}
        <div className="bg-white rounded-2xl p-5 flex flex-col justify-center border border-[#1A1A1A]/15 shadow-xs min-h-[190px]">
          <span className="text-[9px] font-mono-display text-[#5D5CDE] font-bold uppercase tracking-widest block mb-1">
            BRAND SLOGAN // MISSION
          </span>
          <p className="font-editorial text-lg text-[#1A1A1A] italic leading-snug">
            &ldquo;{brand.missionStatement}&rdquo;
          </p>
          <div className="mt-3 pt-2 border-t border-[#1A1A1A]/10 flex items-center justify-between text-[10px] font-mono-display text-[#1A1A1A]/60">
            <span>VERIFIED IDENTITY SYSTEM</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#5D5CDE]" />
          </div>
        </div>

        {/* ROW 3, COL 3: Bottom-Right Secondary Mockup Image Card */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-white rounded-2xl p-3 cursor-pointer border border-[#1A1A1A]/15 shadow-xs min-h-[190px] flex items-center justify-center overflow-hidden"
        >
          <img
            src={brand.bottomRightMockup}
            alt="Bottom Right Brand Mockup"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[170px] rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[9px] font-mono-display uppercase tracking-wider rounded-md">
            BRAND COLLATERAL
          </div>
        </div>

      </div>
    </div>
  );
};
