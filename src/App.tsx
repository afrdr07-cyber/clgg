import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { AdmissionView } from './views/AdmissionView';
import { AcademicsView } from './views/AcademicsView';
import { InfrastructureView } from './views/InfrastructureView';
import { PlacementView } from './views/PlacementView';
import { ActivitiesView } from './views/ActivitiesView';
import { ExternalLinksView } from './views/ExternalLinksView';
import { GalleryView } from './views/GalleryView';
import { ContactView } from './views/ContactView';

// Modals
import { DepartmentDetailModal } from './components/modals/DepartmentDetailModal';
import { BusRouteDirectoryModal } from './components/modals/BusRouteDirectoryModal';
import { IQACModal } from './components/modals/IQACModal';
import { AccreditationHubModal } from './components/modals/AccreditationHubModal';
import { MandatoryDisclosureModal } from './components/modals/MandatoryDisclosureModal';
import { AutonomousExamModal } from './components/modals/AutonomousExamModal';
import { ERPModal } from './components/modals/ERPModal';
import { QuickSearchModal } from './components/modals/QuickSearchModal';
import { CampusVideoPlayer } from './components/CampusVideoPlayer';
import { EnquiryModal } from './components/EnquiryModal';

// Types & Data
import { 
  PageView, 
  AboutSubTab, 
  AdmissionSubTab, 
  AcademicsSubTab, 
  InfrastructureSubTab, 
  PlacementSubTab, 
  ActivitiesSubTab, 
  ExternalLinksSubTab 
} from './types/navigation';
import { 
  UG_DEPARTMENTS, 
  PG_DEPARTMENTS, 
  DepartmentInfo 
} from './data/officialCollegeData';
import { ArrowUp, Phone, Search } from 'lucide-react';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [activeSubTab, setActiveSubTab] = useState<string | undefined>(undefined);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Global Modals State
  const [selectedDepartment, setSelectedDepartment] = useState<DepartmentInfo | null>(null);
  const [busRouteModalOpen, setBusRouteModalOpen] = useState(false);
  const [iqacModalOpen, setIqacModalOpen] = useState(false);
  const [accreditationModal, setAccreditationModal] = useState<{
    open: boolean;
    tab: 'naac' | 'nba' | 'nirf' | 'awards';
  }>({ open: false, tab: 'naac' });
  const [mandatoryDisclosureModalOpen, setMandatoryDisclosureModalOpen] = useState(false);
  const [coeModalOpen, setCoeModalOpen] = useState(false);
  const [erpModalOpen, setErpModalOpen] = useState(false);
  const [quickSearchOpen, setQuickSearchOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [enquiryModal, setEnquiryModal] = useState<{
    open: boolean;
    programName?: string;
  }>({ open: false });

  // Top scroll progress bar
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll listener for back-to-top
  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setShowBackToTop(latest > 350);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // URL Hash Synchronizer & Router
  const parseHash = (hash: string) => {
    const cleanHash = hash.replace(/^#\/?/, '').toLowerCase();
    if (!cleanHash || cleanHash === 'home') {
      setCurrentView('home');
      setActiveSubTab(undefined);
    } else if (cleanHash.startsWith('about')) {
      setCurrentView('about');
      if (cleanHash.includes('vision')) setActiveSubTab('vision-mission');
      else if (cleanHash.includes('admin')) setActiveSubTab('administration');
      else if (cleanHash.includes('code') || cleanHash.includes('conduct')) setActiveSubTab('code-of-conduct');
      else if (cleanHash.includes('service') || cleanHash.includes('rules')) setActiveSubTab('service-rules');
      else if (cleanHash.includes('committee')) setActiveSubTab('committees');
      else if (cleanHash.includes('audit')) setActiveSubTab('audit-statements');
      else setActiveSubTab('about-college');
    } else if (cleanHash.startsWith('admission')) {
      setCurrentView('admission');
      if (cleanHash.includes('lateral')) setActiveSubTab('lateral-entry');
      else if (cleanHash.includes('me') || cleanHash.includes('mtech')) setActiveSubTab('me-mtech');
      else if (cleanHash.includes('mba')) setActiveSubTab('mba');
      else if (cleanHash.includes('enquiry') || cleanHash.includes('hotline')) setActiveSubTab('enquiry-hotline');
      else setActiveSubTab('be-btech');
    } else if (cleanHash.startsWith('academic') || cleanHash.startsWith('courses') || cleanHash.startsWith('programs')) {
      setCurrentView('academics');
      if (cleanHash.includes('dept') || cleanHash.includes('department')) setActiveSubTab('departments');
      else if (cleanHash.includes('science') || cleanHash.includes('humanities')) setActiveSubTab('science-humanities');
      else if (cleanHash.includes('cbcs') || cleanHash.includes('regulation')) setActiveSubTab('regulations-cbcs');
      else setActiveSubTab('courses-offered');
    } else if (cleanHash.startsWith('infra') || cleanHash.startsWith('facilit')) {
      setCurrentView('infrastructure');
      if (cleanHash.includes('lib')) setActiveSubTab('library');
      else if (cleanHash.includes('hostel')) setActiveSubTab('hostels');
      else if (cleanHash.includes('class')) setActiveSubTab('classrooms');
      else if (cleanHash.includes('lab')) setActiveSubTab('laboratories');
      else if (cleanHash.includes('amenit')) setActiveSubTab('amenities');
      else if (cleanHash.includes('bus')) setActiveSubTab('bus-routes');
      else setActiveSubTab('hostels');
    } else if (cleanHash.startsWith('place') || cleanHash.startsWith('recruit')) {
      setCurrentView('placement');
      if (cleanHash.includes('train')) setActiveSubTab('training');
      else if (cleanHash.includes('record')) setActiveSubTab('records');
      else if (cleanHash.includes('career') || cleanHash.includes('higher')) setActiveSubTab('career-management');
      else if (cleanHash.includes('recruit')) setActiveSubTab('recruiters');
      else setActiveSubTab('objectives');
    } else if (cleanHash.startsWith('activit') || cleanHash.startsWith('event')) {
      setCurrentView('activities');
      if (cleanHash.includes('ncc')) setActiveSubTab('ncc');
      else if (cleanHash.includes('nss')) setActiveSubTab('nss');
      else if (cleanHash.includes('yrc')) setActiveSubTab('yrc');
      else if (cleanHash.includes('sport')) setActiveSubTab('sports');
      else if (cleanHash.includes('club')) setActiveSubTab('clubs');
      else setActiveSubTab('ncc');
    } else if (cleanHash.startsWith('external') || cleanHash.startsWith('link')) {
      setCurrentView('external-links');
      if (cleanHash.includes('erp')) setActiveSubTab('erp');
      else if (cleanHash.includes('anna')) setActiveSubTab('anna-univ');
      else if (cleanHash.includes('coe')) setActiveSubTab('coe');
      else if (cleanHash.includes('nptel')) setActiveSubTab('nptel');
      else if (cleanHash.includes('aicte')) setActiveSubTab('aicte');
      else if (cleanHash.includes('approval')) setActiveSubTab('approvals');
      else if (cleanHash.includes('prospectus')) setActiveSubTab('prospectus');
      else setActiveSubTab('erp');
    } else if (cleanHash.startsWith('gallery')) {
      setCurrentView('gallery');
      setActiveSubTab(undefined);
    } else if (cleanHash.startsWith('contact')) {
      setCurrentView('contact');
      setActiveSubTab(undefined);
    }
  };

  // Initial load hash check & popstate listener
  useEffect(() => {
    parseHash(window.location.hash);

    const handleHashChange = () => {
      parseHash(window.location.hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcut Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setQuickSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation handler
  const handleNavigate = (view: PageView, subTab?: string) => {
    setCurrentView(view);
    setActiveSubTab(subTab);
    const targetHash = subTab ? `#${view}-${subTab}` : `#${view}`;
    window.history.pushState(null, '', targetHash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDepartment = (deptId: string) => {
    const all = [...UG_DEPARTMENTS, ...PG_DEPARTMENTS];
    const found = all.find((d) => d.id === deptId);
    if (found) {
      setSelectedDepartment(found);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F4F6F9] font-body text-[#22262B] antialiased min-h-screen flex flex-col relative selection:bg-[#F0E8D5] selection:text-[#80672E] overflow-x-hidden">

      {/* Slim 3D Gold Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#80672E] via-[#B49A59] to-[#80672E] origin-left z-[100] shadow-[0_2px_8px_rgba(180,154,89,0.6)]"
        style={{ scaleX }}
      />

      {/* Navbar with 10-Item Multi-Tier Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenIQAC={() => setIqacModalOpen(true)}
        onOpenNAAC={() => setAccreditationModal({ open: true, tab: 'naac' })}
        onOpenNBA={() => setAccreditationModal({ open: true, tab: 'nba' })}
        onOpenNIRF={() => setAccreditationModal({ open: true, tab: 'nirf' })}
        onOpenMandatoryDisclosure={() => setMandatoryDisclosureModalOpen(true)}
        onOpenERP={() => setErpModalOpen(true)}
        onOpenBusRoute={() => setBusRouteModalOpen(true)}
        onOpenQuickSearch={() => setQuickSearchOpen(true)}
        onOpenEnquiry={() => setEnquiryModal({ open: true })}
      />

      {/* Main Dynamic View Area */}
      <main className="w-full bg-[#F4F6F9] flex-1 py-8 sm:py-12">
        <div className="max-w-[1760px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView + (activeSubTab || '')}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {currentView === 'home' && (
                <HomeView
                  onNavigate={handleNavigate}
                  onOpenDepartment={handleOpenDepartment}
                  onOpenEnquiry={(course) => setEnquiryModal({ open: true, programName: course })}
                  onOpenVideoModal={() => setVideoModalOpen(true)}
                  onOpenBusRoutes={() => setBusRouteModalOpen(true)}
                  onOpenAccreditation={(tab) => setAccreditationModal({ open: true, tab })}
                />
              )}

              {currentView === 'about' && (
                <AboutView
                  initialSubTab={activeSubTab as AboutSubTab}
                  onNavigate={handleNavigate}
                  onOpenEnquiry={() => setEnquiryModal({ open: true })}
                />
              )}

              {currentView === 'admission' && (
                <AdmissionView
                  initialSubTab={activeSubTab as AdmissionSubTab}
                  onNavigate={handleNavigate}
                  onOpenDepartment={handleOpenDepartment}
                />
              )}

              {currentView === 'academics' && (
                <AcademicsView
                  initialSubTab={activeSubTab as AcademicsSubTab}
                  onNavigate={handleNavigate}
                  onOpenDepartment={handleOpenDepartment}
                  onOpenEnquiry={(course) => setEnquiryModal({ open: true, programName: course })}
                />
              )}

              {currentView === 'infrastructure' && (
                <InfrastructureView
                  initialSubTab={activeSubTab as InfrastructureSubTab}
                  onNavigate={handleNavigate}
                  onOpenBusModal={() => setBusRouteModalOpen(true)}
                />
              )}

              {currentView === 'placement' && (
                <PlacementView
                  initialSubTab={activeSubTab as PlacementSubTab}
                  onNavigate={handleNavigate}
                  onOpenEnquiry={() => setEnquiryModal({ open: true })}
                />
              )}

              {currentView === 'activities' && (
                <ActivitiesView
                  initialSubTab={activeSubTab as ActivitiesSubTab}
                  onNavigate={handleNavigate}
                />
              )}

              {currentView === 'external-links' && (
                <ExternalLinksView
                  initialSubTab={activeSubTab as ExternalLinksSubTab}
                  onNavigate={handleNavigate}
                  onOpenERP={() => setErpModalOpen(true)}
                  onOpenCOE={() => setCoeModalOpen(true)}
                  onOpenMandatoryDisclosure={() => setMandatoryDisclosureModalOpen(true)}
                />
              )}

              {currentView === 'gallery' && (
                <GalleryView onNavigate={handleNavigate} />
              )}

              {currentView === 'contact' && (
                <ContactView
                  onNavigate={handleNavigate}
                  onOpenBusModal={() => setBusRouteModalOpen(true)}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Upgraded Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBusRoute={() => setBusRouteModalOpen(true)}
      />

      {/* GLOBAL MODALS */}

      {/* 1. Department Detail Modal */}
      {selectedDepartment && (
        <DepartmentDetailModal
          department={selectedDepartment}
          onClose={() => setSelectedDepartment(null)}
          onEnquire={(courseName) => {
            setSelectedDepartment(null);
            setEnquiryModal({ open: true, programName: courseName });
          }}
        />
      )}

      {/* 2. Bus Route Directory Modal */}
      {busRouteModalOpen && (
        <BusRouteDirectoryModal onClose={() => setBusRouteModalOpen(false)} />
      )}

      {/* 3. IQAC Modal */}
      {iqacModalOpen && (
        <IQACModal onClose={() => setIqacModalOpen(false)} />
      )}

      {/* 4. Accreditation & Awards Hub Modal */}
      {accreditationModal.open && (
        <AccreditationHubModal
          initialTab={accreditationModal.tab}
          onClose={() => setAccreditationModal({ open: false, tab: 'naac' })}
        />
      )}

      {/* 5. Mandatory Disclosure Modal */}
      {mandatoryDisclosureModalOpen && (
        <MandatoryDisclosureModal onClose={() => setMandatoryDisclosureModalOpen(false)} />
      )}

      {/* 6. Autonomous COE Exam Modal */}
      {coeModalOpen && (
        <AutonomousExamModal onClose={() => setCoeModalOpen(false)} />
      )}

      {/* 7. ERP Modal */}
      {erpModalOpen && (
        <ERPModal onClose={() => setErpModalOpen(false)} />
      )}

      {/* 8. Quick Search Modal (Ctrl+K) */}
      <QuickSearchModal
        isOpen={quickSearchOpen}
        onClose={() => setQuickSearchOpen(false)}
        onSelectDepartment={(deptId) => {
          setQuickSearchOpen(false);
          handleOpenDepartment(deptId);
        }}
        onOpenBusRoute={() => {
          setQuickSearchOpen(false);
          setBusRouteModalOpen(true);
        }}
        onOpenIQAC={() => {
          setQuickSearchOpen(false);
          setIqacModalOpen(true);
        }}
        onOpenAccreditation={(tab) => {
          setQuickSearchOpen(false);
          setAccreditationModal({ open: true, tab });
        }}
        onOpenMandatoryDisclosure={() => {
          setQuickSearchOpen(false);
          setMandatoryDisclosureModalOpen(true);
        }}
        onOpenCOE={() => {
          setQuickSearchOpen(false);
          setCoeModalOpen(true);
        }}
        onOpenERP={() => {
          setQuickSearchOpen(false);
          setErpModalOpen(true);
        }}
        onScrollToSection={(sectionId) => {
          setQuickSearchOpen(false);
          if (sectionId === 'about-us') handleNavigate('about');
          else if (sectionId === 'courses-matrix') handleNavigate('academics');
          else if (sectionId === 'facilities-section') handleNavigate('infrastructure');
          else if (sectionId === 'placement') handleNavigate('placement');
          else if (sectionId === 'admission-section') handleNavigate('admission');
          else handleNavigate('home');
        }}
      />

      {/* 9. Video Tour Modal */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-[#D9DCE1]"
            onClick={(e) => e.stopPropagation()}
          >
            <CampusVideoPlayer
              poster="/videos/poster.jpg"
              autoPlay={true}
              onClose={() => setVideoModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* 10. Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModal.open}
        defaultProgram={enquiryModal.programName}
        onClose={() => setEnquiryModal({ open: false })}
      />

      {/* FLOATING ACTION BUTTONS */}

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#80672E] text-white shadow-xl flex items-center justify-center border border-[#B49A59]/40 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;
