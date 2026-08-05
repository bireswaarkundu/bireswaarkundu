import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TypeStudio } from './components/TypeStudio';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectModal } from './components/ProjectModal';
import { About } from './components/About';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { StartProjectSection } from './components/StartProjectSection';
import { InquiryForm } from './components/InquiryForm';
import { ShortlistDrawer } from './components/ShortlistDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [shortlist, setShortlist] = useState(['weld-layers-happiness', 'happy-holi-color-picker']);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryPreselectedProject, setInquiryPreselectedProject] = useState(null);
  const [shortlistDrawerOpen, setShortlistDrawerOpen] = useState(false);
  const [studioMode, setStudioMode] = useState(false);

  const handleToggleShortlist = (id) => {
    setShortlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleOpenInquiryWithProject = (id) => {
    setInquiryPreselectedProject(id);
    if (!shortlist.includes(id)) {
      setShortlist((prev) => [...prev, id]);
    }
    setInquiryModalOpen(true);
  };

  return (
    <div className={`min-h-screen relative font-sans text-[#1A1A1A] bg-[#F5F5F0] selection:bg-[#5D5CDE] selection:text-white transition-all ${
      studioMode ? 'bg-grid-pattern' : ''
    }`}>
      {/* Studio Grid Mode Visual Indicator Bar */}
      {studioMode && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#5D5CDE] text-white text-[10px] font-mono-display py-1 px-4 text-center font-bold tracking-widest uppercase">
          ★ INTERACTIVE STUDIO GRID MODE ACTIVE — 32PX ARCHITECTURAL BASELINE GRID OVERLAY
        </div>
      )}

      {/* Main Header */}
      <Header
        shortlistCount={shortlist.length}
        onOpenShortlist={() => setShortlistDrawerOpen(true)}
        onOpenInquiry={() => {
          setInquiryPreselectedProject(null);
          setInquiryModalOpen(true);
        }}
        studioMode={studioMode}
        setStudioMode={setStudioMode}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero
          onOpenInquiry={() => {
            setInquiryPreselectedProject(null);
            setInquiryModalOpen(true);
          }}
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        <ProjectGrid
          onSelectProject={(id) => setSelectedProjectId(id)}
          shortlist={shortlist}
          onToggleShortlist={handleToggleShortlist}
        />

        <TypeStudio />

        <About />

        <Process />

        <Testimonials />

        <StartProjectSection shortlist={shortlist} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Modal */}
      <ProjectModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
        onSelectProject={(id) => setSelectedProjectId(id)}
        shortlist={shortlist}
        onToggleShortlist={handleToggleShortlist}
        onOpenInquiryWithProject={handleOpenInquiryWithProject}
      />

      {/* Freelance Inquiry Studio Modal */}
      {inquiryModalOpen && (
        <InquiryForm
          isOpenModal={true}
          onCloseModal={() => setInquiryModalOpen(false)}
          shortlist={shortlist}
          preselectedProjectId={inquiryPreselectedProject}
        />
      )}

      {/* Saved Projects Shortlist Drawer */}
      <ShortlistDrawer
        isOpen={shortlistDrawerOpen}
        onClose={() => setShortlistDrawerOpen(false)}
        shortlist={shortlist}
        onRemoveItem={handleToggleShortlist}
        onClearAll={() => setShortlist([])}
        onSelectProject={(id) => setSelectedProjectId(id)}
        onOpenInquiry={() => {
          setShortlistDrawerOpen(false);
          setInquiryModalOpen(true);
        }}
      />
    </div>
  );
}
