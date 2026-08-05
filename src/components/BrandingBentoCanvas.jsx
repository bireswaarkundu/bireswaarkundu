import React from 'react';
import { ArrowUpRight, Bookmark, BookmarkCheck, Eye, Sparkles } from 'lucide-react';
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
          tallProductImg: ASSET_PATHS.PHOENIX_8,
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
          tallProductImg: ASSET_PATHS.WELD_ASSET_7,
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
          tallProductImg: ASSET_PATHS.INNOFUSION_1,
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
    <div className="w-full bg-[#E2E8F0] dark:bg-[#1E293B] rounded-3xl p-4 sm:p-6 lg:p-8 shadow-inner border border-[#1A1A1A]/10">
      {/* Top Single-Screen Canvas Bar */}
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
            className="px-4 py-2 bg-[#1A1A1A] hover:bg-[#5D5CDE] text-white text-xs font-mono-display uppercase tracking-wider font-bold rounded-xl transition-colors inline-flex items-center gap-2 shadow-sm"
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

      {/* SINGLE-SCREEN BENTO GRID LAYOUT (MATCHING ATTACHED REFERENCE EXACTLY) */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 auto-rows-fr">
        {/* Tile 1: Top-Left Barcode / Metadata Ticket Card */}
        <div className="bg-white rounded-2xl p-5 flex flex-col justify-between border border-[#1A1A1A]/10 shadow-sm min-h-[160px]">
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
              <div className="flex items-center gap-0.5 h-6">
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

        {/* Tile 2: Top Center-Left Typeface Specimen Card */}
        <div className="bg-[#5D5CDE] text-white rounded-2xl p-5 flex flex-col justify-between shadow-sm min-h-[160px]">
          <div>
            <span className="text-[10px] font-mono-display text-white/70 font-bold uppercase tracking-widest block mb-1">
              TYPE SPECIMEN
            </span>
            <h4 className="font-syne-mono-italic text-lg text-white font-normal leading-snug">
              {brand.typefaceName}
            </h4>
          </div>

          <div className="flex items-end justify-between">
            <span className="font-editorial text-5xl text-white italic leading-none">Aa</span>
            {/* Color Palette Swatches */}
            <div className="flex items-center gap-1">
              {brand.colors.map((c, i) => (
                <span
                  key={i}
                  className="w-4 h-4 rounded-full border border-white/20 shadow-xs"
                  style={{ backgroundColor: c }}
                  title={c}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Tile 3: Top Center-Right Outdoor Signage Card */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden cursor-pointer border border-[#1A1A1A]/10 shadow-sm min-h-[160px] flex items-center justify-center p-2"
        >
          <img
            src={brand.signageImg}
            alt="Brand Signage"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
          />
          <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[9px] font-mono-display uppercase tracking-wider rounded-md">
            SIGNAGE MOCKUP
          </div>
        </div>

        {/* Tile 4: Tall Right Merchandise & Bottle Packaging Card (Spans 2 Rows on Desktop) */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden cursor-pointer border border-[#1A1A1A]/10 shadow-sm md:row-span-2 min-h-[340px] flex items-center justify-center p-2"
        >
          <img
            src={brand.tallProductImg}
            alt="Product Merchandise Packaging"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
          />
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white z-10 pointer-events-none">
            <span className="px-2.5 py-1 bg-[#1A1A1A]/80 backdrop-blur-md text-[10px] font-mono-display uppercase tracking-wider rounded-lg font-bold">
              PRODUCT PACKAGING
            </span>
            <ArrowUpRight className="w-4 h-4 text-white opacity-80" />
          </div>
        </div>

        {/* Tile 5: Center-Left Mobile Screen Mockup Card */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden cursor-pointer border border-[#1A1A1A]/10 shadow-sm min-h-[180px] flex items-center justify-center p-2"
        >
          <img
            src={brand.mobileImg}
            alt="Mobile App Interface"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
          />
          <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[9px] font-mono-display uppercase tracking-wider rounded-md">
            MOBILE UI INTERFACE
          </div>
        </div>

        {/* Tile 6: Center Hero Brand Logo Lockup Card (Spans 2 Columns) */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer border border-[#1A1A1A]/10 shadow-sm md:col-span-2 min-h-[180px] flex items-center justify-center p-6"
        >
          <img
            src={brand.logoImg}
            alt="Main Logo Lockup"
            referrerPolicy="no-referrer"
            className="max-h-[140px] w-auto object-contain group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#5D5CDE] text-white text-[10px] font-mono-display uppercase tracking-wider rounded-lg font-bold">
            PRIMARY LOGO LOCKUP
          </div>
        </div>

        {/* Tile 7: Bottom-Left Billboard Poster Card (Spans 2 Columns) */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden cursor-pointer border border-[#1A1A1A]/10 shadow-sm md:col-span-2 min-h-[170px] flex items-center justify-center p-2"
        >
          <img
            src={brand.billboardImg}
            alt="Billboard Poster"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
          />
          <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[10px] font-mono-display uppercase tracking-wider rounded-lg">
            OOH BILLBOARD POSTER
          </div>
        </div>

        {/* Tile 8: Bottom-Center Mission Quote Card */}
        <div className="bg-[#1A1A1A] text-white rounded-2xl p-5 flex flex-col justify-center border border-[#1A1A1A] shadow-sm min-h-[170px]">
          <span className="text-[9px] font-mono-display text-[#5D5CDE] font-bold uppercase tracking-widest block mb-1">
            BRAND SLOGAN // MISSION
          </span>
          <p className="font-editorial text-lg text-white/90 italic leading-snug">
            &ldquo;{brand.missionStatement}&rdquo;
          </p>
        </div>

        {/* Tile 9: Bottom-Right Secondary Mockup Card */}
        <div
          onClick={() => onSelectProject(brand.id)}
          className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden cursor-pointer border border-[#1A1A1A]/10 shadow-sm min-h-[170px] flex items-center justify-center p-2"
        >
          <img
            src={brand.extraMockup}
            alt="Collateral Specimen"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
          />
          <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[9px] font-mono-display uppercase tracking-wider rounded-md">
            BRAND COLLATERAL
          </div>
        </div>
      </div>
    </div>
  );
};
