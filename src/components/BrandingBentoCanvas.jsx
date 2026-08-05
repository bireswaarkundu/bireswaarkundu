import React from 'react';
import { ArrowUpRight, Bookmark, BookmarkCheck, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { ASSET_PATHS } from '../data/projectImages.js';

export const BrandingBentoCanvas = ({
  activeSubBrand,
  onSelectProject,
  shortlist,
  onToggleShortlist
}) => {
  // Brand Specific Configurations
  const getBrandData = () => {
    switch (activeSubBrand) {
      case 'Weld':
        return {
          id: 'branding-weld',
          brandName: 'WELD — VEGETARIAN PASTRIES',
          barcode: 'BK-2025-WELD-9914',
          masterBentoImg: ASSET_PATHS.WELD_MASTER_BENTO,
          logoImg: ASSET_PATHS.WELD_1,
          upMockup: ASSET_PATHS.WELD_2,
          leftMockup: ASSET_PATHS.WELD_3,
          rightMockup: ASSET_PATHS.WELD_ASSET_7,
          downMockup: ASSET_PATHS.WELD_G,
          bottomRightMockup: ASSET_PATHS.WELD_ASSET_8,
          typefaceName: 'Syne & JetBrains Mono',
          colors: [
            { hex: '#F68B2E', name: 'Weld Orange' },
            { hex: '#4F8A4D', name: 'Leaf Green' },
            { hex: '#FCFCFA', name: 'Cream White' },
            { hex: '#F3E7D5', name: 'Wheat Beige' },
            { hex: '#5B3A20', name: 'Dark Crust' },
          ],
          missionStatement: 'Vegetarian Pastries Made With Love.',
          deliverables: '14 Custom Industrial Assets, Packaging & Collateral',
          year: '2025',
          medium: 'Brand Identity & Packaging System',
        };
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
          colors: [
            { hex: '#111111', name: 'Deep Charcoal' },
            { hex: '#D4AF37', name: 'Gold Accent' },
            { hex: '#F5F5F0', name: 'Alabaster' },
            { hex: '#5D5CDE', name: 'Electric Violet' },
          ],
          missionStatement: 'Connecting Ideas, Empowering Innovation & Modern Sophistication',
          deliverables: '12 Identity & Packaging Assets Suite',
          year: '2025',
          medium: 'Brand Experience Architecture',
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
          colors: [
            { hex: '#1A1A1A', name: 'Ink Black' },
            { hex: '#5D5CDE', name: 'Electric Violet' },
            { hex: '#FFFFFF', name: 'Pure White' },
            { hex: '#4A90E2', name: 'Tech Blue' },
          ],
          missionStatement: 'Empowering Innovation • Structured Geometric Identity System',
          deliverables: 'Corporate Identity Guidelines & Collateral',
          year: '2025',
          medium: 'Brand Guidelines Architecture',
        };
    }
  };

  const brand = getBrandData();
  const isBookmarked = shortlist.includes(brand.id);
  const isWeld = activeSubBrand === 'Weld';

  return (
    <div className={`w-full rounded-3xl p-4 sm:p-6 lg:p-8 shadow-inner border border-[#1A1A1A]/10 transition-colors ${
      isWeld ? 'bg-[#F7F4EE]' : 'bg-[#E8EEF4]'
    }`}>
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#1A1A1A]/15">
        <div className="flex items-center gap-3">
          <span className={`w-3 h-3 rounded-full animate-pulse ${isWeld ? 'bg-[#F68B2E]' : 'bg-[#5D5CDE]'}`}></span>
          <div>
            <span className="font-mono-display text-[11px] text-[#1A1A1A]/70 uppercase tracking-widest font-bold block">
              SINGLE-SCREEN BENTO CANVAS // {brand.brandName}
            </span>
            <h3 className="font-syne-mono-italic text-2xl text-[#1A1A1A] font-normal">
              {brand.brandName}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectProject(brand.id)}
            className={`px-4 py-2 text-white text-xs font-mono-display uppercase tracking-wider font-bold rounded-xl transition-colors inline-flex items-center gap-2 shadow-xs ${
              isWeld ? 'bg-[#F68B2E] hover:bg-[#1A1A1A]' : 'bg-[#1A1A1A] hover:bg-[#5D5CDE]'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Open Case Study</span>
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

      {/* CONDITIONAL RENDER: WELD OFFICIAL BENTO GRID CANVAS vs BRAND BENTO COMPOSITION */}
      {isWeld ? (
        /* WELD MASTER BENTO CANVAS (EXACT MATCHING REFERENCE IMAGE GRID & MOCKUPS) */
        <div className="space-y-6">
          <div
            onClick={() => onSelectProject(brand.id)}
            className="group relative bg-white rounded-2xl p-3 cursor-pointer border border-[#1A1A1A]/15 shadow-md overflow-hidden"
          >
            <img
              src={brand.masterBentoImg}
              alt="Weld Official Branding Bento Grid"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-500 shadow-sm"
            />
            <div className="absolute top-6 left-6 px-3 py-1 bg-[#F68B2E] text-white text-xs font-mono-display font-bold uppercase tracking-wider rounded-lg shadow-md">
              ★ OFFICIAL WELD BRANDING BENTO GRID
            </div>
          </div>

          {/* Weld Feature Icons & Color Palette Bar */}
          <div className="bg-white rounded-2xl p-5 border border-[#1A1A1A]/15 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6 overflow-x-auto py-1">
              <span className="text-xs font-mono-display font-bold text-[#F68B2E] uppercase">BRAND COLOR SWATCHES:</span>
              <div className="flex items-center gap-3">
                {brand.colors.map((c) => (
                  <div key={c.hex} className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full border border-[#1A1A1A]/20" style={{ backgroundColor: c.hex }}></span>
                    <span className="text-[11px] font-mono-display text-[#1A1A1A] font-semibold">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono-display text-[#1A1A1A]/80">
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#F68B2E]" /> 100% Vegetarian</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#F68B2E]" /> Premium Ingredients</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#F68B2E]" /> Made With Love</span>
            </div>
          </div>
        </div>
      ) : (
        /* SYMMETRIC BENTO GRID: CENTERED MAIN LOGO & UNCROPPED MOCKUPS */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* ROW 1, COL 1: Barcode Ticket */}
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

          {/* ROW 1, COL 2: Type Specimen */}
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
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          {/* ROW 1, COL 3: Up Mockup */}
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

          {/* ROW 2, COL 1: Left Mockup */}
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

          {/* ROW 2, COL 3: Right Mockup */}
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

          {/* ROW 3, COL 1: Down Mockup */}
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

          {/* ROW 3, COL 2: Brand Slogan Card */}
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

          {/* ROW 3, COL 3: Bottom-Right Secondary Mockup */}
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
      )}
    </div>
  );
};
