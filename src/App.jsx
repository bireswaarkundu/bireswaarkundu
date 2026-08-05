import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectModal } from './components/ProjectModal';
import { Process } from './components/Process';
import { PricingStrategy } from './components/PricingStrategy';
import { Testimonials } from './components/Testimonials';
import { InquiryForm } from './components/InquiryForm';
import { ShortlistDrawer } from './components/ShortlistDrawer';
import { Footer } from './components/Footer';
import { CustomQuoteModal } from './components/CustomQuoteModal';

export default function App() {
  const [shortlist, setShortlist] = useState(['weld-layers-happiness', 'happy-holi-color-picker']);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryPreselectedProject, setInquiryPreselectedProject] = useState(null);
  const [shortlistDrawerOpen, setShortlistDrawerOpen] = useState(false);
  const [studioMode, setStudioMode] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  React.useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

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

      {/* Main Header */}
      <Header
        shortlistCount={shortlist.length}
        onOpenShortlist={() => setShortlistDrawerOpen(true)}
        onOpenInquiry={() => setBookingModalOpen(true)}
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

        <Process />

        {/* <PricingStrategy
          onOpenInquiry={() => {
            setInquiryPreselectedProject(null);
            setInquiryModalOpen(true);
          }}
        /> */}

        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Modal (Disabled as requested) */}
      {/* <ProjectModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
        onSelectProject={(id) => setSelectedProjectId(id)}
        shortlist={shortlist}
        onToggleShortlist={handleToggleShortlist}
        onOpenInquiryWithProject={handleOpenInquiryWithProject}
      /> */}

      {/* Freelance Inquiry Studio Modal */}
      {inquiryModalOpen && (
        <InquiryForm
          isOpenModal={true}
          onCloseModal={() => setInquiryModalOpen(false)}
          shortlist={shortlist}
          preselectedProjectId={inquiryPreselectedProject}
        />
      )}

      {/* Saved Projects Shortlist Drawer (Disabled) */}
      {/* <ShortlistDrawer
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
      /> */}
      {/* Custom Quote Modal (triggered by header Inquire button) */}
      {bookingModalOpen && (
        <CustomQuoteModal onClose={() => setBookingModalOpen(false)} />
      )}
    </div>
  );
}
