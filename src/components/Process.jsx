import React, { useState } from 'react';
import { Compass, Layers, PenTool, CheckCircle2, ChevronRight, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/projects.js';

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#5D5CDE]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#5D5CDE]" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-[#5D5CDE]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#5D5CDE]" />;
    }
  };

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#1A1A1A]/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#5D5CDE]"></span>
            <span className="font-mono-display text-xs text-[#1A1A1A]/70 uppercase tracking-widest font-semibold">
              METHODOLOGY & WORKFLOW
            </span>
          </div>
          <h2 className="font-syne-mono text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] font-normal leading-tight tracking-wide">
            How Projects Get Made
          </h2>
        </div>
        <p className="font-editorial text-lg text-[#1A1A1A]/80 max-w-md italic">
          A disciplined 4-step framework engineered to eliminate guesswork and deliver lasting brand equity.
        </p>
      </div>

      {/* Process Interactive Grid with Smooth Motion Effects */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Step List Column */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3 h-full">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-xs text-left border transition-all duration-300 flex items-center justify-between gap-4 flex-1 transform ${
                  isActive
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md translate-x-2'
                    : 'bg-white hover:bg-neutral-50 text-[#1A1A1A] border-[#1A1A1A]/15 hover:translate-x-1 hover:border-[#1A1A1A]/40'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`font-mono-display text-xs font-bold transition-colors ${
                      isActive ? 'text-[#5D5CDE]' : 'text-[#1A1A1A]/40'
                    }`}
                  >
                    [{step.number}]
                  </span>

                  <div>
                    <h3
                      className={`font-syne font-bold text-base transition-colors ${
                        isActive ? 'text-white' : 'text-[#1A1A1A]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs font-editorial italic transition-colors ${
                        isActive ? 'text-white/70' : 'text-[#1A1A1A]/60'
                      }`}
                    >
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <ChevronRight
                  className={`w-4 h-4 mt-1 transition-transform duration-300 ${
                    isActive ? 'text-[#5D5CDE] translate-x-1' : 'text-[#1A1A1A]/30'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Step Deep Breakdown Panel with Smooth Content Fade & Slide Motion */}
        <div
          key={activeStep}
          className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xs border border-[#1A1A1A]/15 shadow-sm flex flex-col justify-between min-h-[420px] transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#5D5CDE]/10 flex items-center justify-center animate-pulse">
                  {getIcon(PROCESS_STEPS[activeStep].iconName)}
                </span>
                <span className="font-mono-display text-xs font-bold text-[#5D5CDE] uppercase tracking-wider">
                  PHASE [{PROCESS_STEPS[activeStep].number}] // WORKFLOW SPECIFICATION
                </span>
              </div>
              <span className="font-mono-display text-xs text-[#1A1A1A]/50">
                0{activeStep + 1} OF 0{PROCESS_STEPS.length}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-syne text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                {PROCESS_STEPS[activeStep].title}
              </h3>
              <p className="font-editorial text-lg text-[#1A1A1A]/80 leading-relaxed italic">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1A1A1A]/10 space-y-3">
              <span className="text-xs font-mono-display font-bold text-[#1A1A1A] uppercase tracking-wider block">
                TYPICAL PHASE DELIVERABLES:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROCESS_STEPS[activeStep].deliverables.map((del) => (
                  <div
                    key={del}
                    className="p-3 bg-[#F5F5F0] rounded-xs border border-[#1A1A1A]/10 text-xs font-mono-display text-[#1A1A1A] flex items-center gap-2 transition-all duration-200 hover:border-[#5D5CDE]/40 hover:bg-[#5D5CDE]/5"
                  >
                    <Check className="w-3.5 h-3.5 text-[#5D5CDE] shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#1A1A1A]/10 flex items-center justify-between font-mono-display text-xs text-[#1A1A1A]/60">
            <span>FULL PRODUCTION TRANSPARENCY</span>
            <span>STRICT TIMELINE MILESTONES</span>
          </div>
        </div>
      </div>
    </section>
  );
};
