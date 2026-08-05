import React, { useState } from 'react';
import { Type, Grid, Sliders, Copy, Check, RefreshCw, Layers } from 'lucide-react';
import { TYPE_SPECIMENS } from '../data/projects.js';

export const TypeStudio = () => {
  const [customText, setCustomText] = useState('ARCHITECTURAL RESTRAINT');
  const [selectedFont, setSelectedFont] = useState(0);
  const [fontSize, setFontSize] = useState(48);
  const [letterSpacing, setLetterSpacing] = useState(2);
  const [lineHeight, setLineHeight] = useState(1.1);
  const [showGrid, setShowGrid] = useState(true);
  const [themeMode, setThemeMode] = useState('light');
  const [copied, setCopied] = useState(false);

  const specimen = TYPE_SPECIMENS[selectedFont];

  const handleCopyCSS = () => {
    const fontFamilies = [
      "'Playfair Display', serif",
      "'Space Grotesk', sans-serif",
      "'Space Mono', monospace"
    ];
    const cssText = `font-family: ${fontFamilies[selectedFont]};
font-size: ${fontSize}px;
letter-spacing: ${letterSpacing}px;
line-height: ${lineHeight};`;

    navigator.clipboard.writeText(cssText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const presetTexts = [
    'ARCHITECTURAL RESTRAINT',
    'AURA BOTANICAL LABS',
    'KINETIC RETROSPECTIVE 2026',
    'FORM FOLLOWS FUNCTION',
    'STUDIO VANCE // PARIS'
  ];

  const themeClasses = {
    light: 'bg-[#F5F5F0] text-[#1A1A1A] border-[#1A1A1A]/20',
    dark: 'bg-[#1A1A1A] text-[#F5F5F0] border-white/20',
    vermillion: 'bg-[#5D5CDE] text-white border-white/20',
    spruce: 'bg-[#1c2826] text-[#f4f1ea] border-[#d4a373]/30'
  };

  return (
    <section id="type-studio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#1A1A1A]/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#5D5CDE]"></span>
            <span className="font-mono-display text-xs text-[#1A1A1A]/70 uppercase tracking-widest font-semibold">
              SIGNATURE INTERACTIVE DETAIL
            </span>
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
            Type Specimen & Brand Tester
          </h2>
        </div>
        <p className="font-editorial text-lg text-[#1A1A1A]/80 max-w-md italic">
          Test Elena&apos;s signature custom typography pairs with your brand name, adjust kerning live, and inspect baseline grid alignment.
        </p>
      </div>

      {/* Main Interactive Studio Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-4 bg-white p-6 rounded-xs border border-[#1A1A1A]/15 shadow-xs flex flex-col gap-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]/10">
            <div className="flex items-center gap-2 text-xs font-mono-display font-bold uppercase text-[#1A1A1A]">
              <Sliders className="w-4 h-4 text-[#5D5CDE]" />
              <span>Studio Controls</span>
            </div>
            <button
              onClick={() => {
                setFontSize(48);
                setLetterSpacing(2);
                setLineHeight(1.1);
              }}
              className="text-[11px] font-mono-display text-[#1A1A1A]/60 hover:text-[#5D5CDE] flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Preset Buttons */}
          <div>
            <label className="block text-xs font-mono-display text-[#1A1A1A]/70 uppercase font-semibold mb-2">
              Preset Brand Strings
            </label>
            <div className="flex flex-wrap gap-1.5">
              {presetTexts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setCustomText(preset)}
                  className={`text-[11px] font-mono-display px-2.5 py-1 rounded-xs border transition-colors ${
                    customText === preset
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                      : 'bg-neutral-50 text-[#1A1A1A] hover:bg-neutral-100 border-[#1A1A1A]/15'
                  }`}
                >
                  {preset.slice(0, 16)}...
                </button>
              ))}
            </div>
          </div>

          {/* Custom Text Input */}
          <div>
            <label className="block text-xs font-mono-display text-[#1A1A1A]/70 uppercase font-semibold mb-2">
              Your Custom Brand Name / Text
            </label>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full px-3 py-2 bg-[#F5F5F0] border border-[#1A1A1A]/20 rounded-xs text-sm font-mono-display focus:outline-none focus:border-[#5D5CDE]"
              placeholder="Type anything..."
            />
          </div>

          {/* Font Family Selector */}
          <div>
            <label className="block text-xs font-mono-display text-[#1A1A1A]/70 uppercase font-semibold mb-2">
              Signature Typeface Family
            </label>
            <div className="flex flex-col gap-2">
              {TYPE_SPECIMENS.map((spec, idx) => (
                <button
                  key={spec.fontName}
                  onClick={() => setSelectedFont(idx)}
                  className={`p-2.5 rounded-xs text-left border text-xs font-mono-display transition-colors flex items-center justify-between ${
                    selectedFont === idx
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                      : 'bg-[#F5F5F0] text-[#1A1A1A] border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30'
                  }`}
                >
                  <span className="font-bold">{spec.fontName}</span>
                  <span className="text-[10px] opacity-70">{spec.category.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sliders */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex justify-between text-xs font-mono-display mb-1">
                <span className="text-[#1A1A1A]/70">Font Size ({fontSize}px)</span>
              </div>
              <input
                type="range"
                min="24"
                max="96"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-[#5D5CDE]"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-display mb-1">
                <span className="text-[#1A1A1A]/70">Tracking / Letter Spacing ({letterSpacing}px)</span>
              </div>
              <input
                type="range"
                min="-2"
                max="16"
                value={letterSpacing}
                onChange={(e) => setLetterSpacing(Number(e.target.value))}
                className="w-full accent-[#5D5CDE]"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono-display mb-1">
                <span className="text-[#1A1A1A]/70">Line Height ({lineHeight})</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="2.0"
                step="0.05"
                value={lineHeight}
                onChange={(e) => setLineHeight(Number(e.target.value))}
                className="w-full accent-[#5D5CDE]"
              />
            </div>
          </div>

          {/* Canvas Toggles */}
          <div className="pt-3 border-t border-[#1A1A1A]/10 flex items-center justify-between">
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-xs font-mono-display border transition-colors ${
                showGrid
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                  : 'bg-[#F5F5F0] text-[#1A1A1A] border-[#1A1A1A]/20'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>{showGrid ? 'Grid Lines ON' : 'Grid Lines OFF'}</span>
            </button>

            {/* Theme Swatches */}
            <div className="flex items-center gap-1.5">
              {['light', 'dark', 'vermillion', 'spruce'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setThemeMode(mode)}
                  className={`w-5 h-5 rounded-full border transition-transform ${
                    mode === 'light' ? 'bg-[#F5F5F0] border-neutral-400' : ''
                  } ${mode === 'dark' ? 'bg-[#1A1A1A] border-neutral-700' : ''} ${
                    mode === 'vermillion' ? 'bg-[#5D5CDE] border-indigo-400' : ''
                  } ${mode === 'spruce' ? 'bg-[#1c2826] border-emerald-800' : ''} ${
                    themeMode === mode ? 'scale-125 ring-2 ring-[#5D5CDE] ring-offset-1' : ''
                  }`}
                  title={`Canvas Color Mode: ${mode}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Live Specimen Preview Canvas */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div
            className={`relative p-8 sm:p-12 min-h-[420px] rounded-xs border shadow-sm flex flex-col justify-between overflow-hidden transition-all duration-300 ${
              themeClasses[themeMode]
            } ${showGrid ? (themeMode === 'light' ? 'bg-grid-pattern' : 'bg-dark-grid-pattern') : ''}`}
          >
            {/* Top Specimen Header */}
            <div className="flex items-center justify-between font-mono-display text-xs tracking-wider opacity-60 border-b border-current/15 pb-4">
              <span>TYPE SPECIMEN // {specimen.fontName.toUpperCase()}</span>
              <span>GRID RHYTHM: {showGrid ? 'ACTIVE (32px)' : 'HIDDEN'}</span>
            </div>

            {/* Main Live Text Render */}
            <div className="my-8 overflow-hidden py-4">
              <p
                style={{
                  fontSize: `${fontSize}px`,
                  letterSpacing: `${letterSpacing}px`,
                  lineHeight: lineHeight,
                  fontFamily:
                    selectedFont === 0
                      ? "'Playfair Display', serif"
                      : selectedFont === 1
                      ? "'Space Grotesk', sans-serif"
                      : "'Space Mono', monospace"
                }}
                className="font-bold tracking-tight break-words transition-all duration-150"
              >
                {customText || 'TYPE SPECIMEN'}
              </p>
            </div>

            {/* Specimen Bottom Footer Info */}
            <div className="pt-4 border-t border-current/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-display text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-current"></span>
                <span>{specimen.pairingSuggestion}</span>
              </div>

              <button
                onClick={handleCopyCSS}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-current/10 hover:bg-current/20 text-current transition-colors text-xs font-mono-display self-start sm:self-auto"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'CSS Copied!' : 'Copy Typography CSS'}</span>
              </button>
            </div>
          </div>

          {/* Quick Guidance Note */}
          <div className="p-4 bg-white rounded-xs border border-[#1A1A1A]/15 text-xs font-mono-display text-[#1A1A1A]/70 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#5D5CDE]" />
              <span>All client identities engineered by Bireshwar Kundu include bespoke vector typography specimens &amp; token guides.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
