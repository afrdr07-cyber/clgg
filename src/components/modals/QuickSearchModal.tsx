import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UG_DEPARTMENTS, PG_DEPARTMENTS, BUS_ROUTES } from '../../data/officialCollegeData';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDepartment: (deptId: string) => void;
  onOpenBusRoute: () => void;
  onOpenIQAC: () => void;
  onOpenAccreditation: (tab: 'naac' | 'nba' | 'nirf' | 'awards') => void;
  onOpenMandatoryDisclosure: () => void;
  onOpenCOE: () => void;
  onOpenERP: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDepartment,
  onOpenBusRoute,
  onOpenIQAC,
  onOpenAccreditation,
  onOpenMandatoryDisclosure,
  onOpenCOE,
  onOpenERP,
  onScrollToSection,
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut support (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const allDepts = [...UG_DEPARTMENTS, ...PG_DEPARTMENTS];
  const q = query.toLowerCase().trim();

  const searchResults = [
    // Static navigation items
    { title: 'Admissions Enquiry 2025-26', category: 'Admissions', icon: 'school', action: () => { onClose(); onScrollToSection('admission-section'); } },
    { title: 'Central Library & IEEE Resource Centre', category: 'Facilities', icon: 'local_library', action: () => { onClose(); onScrollToSection('facilities-section'); } },
    { title: 'Training & Placement Cell Statistics', category: 'Placements', icon: 'work', action: () => { onClose(); onScrollToSection('placement'); } },
    { title: 'Campus Video Showcase (1080p FHD)', category: 'Showcase', icon: 'play_circle', action: () => { onClose(); onScrollToSection('home'); } },
    { title: 'Internal Quality Assurance Cell (IQAC)', category: 'Governance', icon: 'verified', action: () => { onClose(); onOpenIQAC(); } },
    { title: 'NAAC "A" Grade Accreditation Dossier', category: 'Accreditation', icon: 'verified_user', action: () => { onClose(); onOpenAccreditation('naac'); } },
    { title: 'NBA Tier Accreditation (Dept of CSE)', category: 'Accreditation', icon: 'workspace_premium', action: () => { onClose(); onOpenAccreditation('nba'); } },
    { title: 'NIRF Ranking Data Sheets 2024', category: 'Accreditation', icon: 'analytics', action: () => { onClose(); onOpenAccreditation('nirf'); } },
    { title: 'AICTE Mandatory Disclosure 2024-25', category: 'Compliance', icon: 'description', action: () => { onClose(); onOpenMandatoryDisclosure(); } },
    { title: 'Controller of Examinations (COE) & Regulations', category: 'Academics', icon: 'assignment', action: () => { onClose(); onOpenCOE(); } },
    { title: 'Campus ERP Portal (Student/Staff Login)', category: 'Portal', icon: 'vpn_key', action: () => { onClose(); onOpenERP(); } },
    { title: 'Campus Bus Route Directory (30+ Routes)', category: 'Transport', icon: 'directions_bus', action: () => { onClose(); onOpenBusRoute(); } },
    // Departments
    ...allDepts.map((d) => ({
      title: `${d.degree} ${d.name} (${d.category})`,
      category: 'Department & Syllabus',
      icon: 'menu_book',
      action: () => { onClose(); onSelectDepartment(d.id); },
    })),
    // Bus routes
    ...BUS_ROUTES.map((b) => ({
      title: `${b.routeNo}: ${b.routeName} (via ${b.startingPoint})`,
      category: 'Bus Route',
      icon: 'directions_bus',
      action: () => { onClose(); onOpenBusRoute(); },
    })),
  ].filter((item) => {
    if (!q) return true;
    return item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
  });

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-surface-base rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-[#CCD2DC] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Header */}
          <div className="p-4 border-b border-[#CCD2DC] flex items-center gap-3 bg-[#FAF9F6]">
            <span className="material-symbols-outlined text-primary text-[24px]">search</span>
            <input
              type="text"
              autoFocus
              placeholder="Type to search courses, departments, syllabi, bus routes, or compliance..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-text-primary text-base font-body-md focus:outline-none placeholder:text-text-secondary/70"
            />
            <span className="text-[11px] font-mono px-2 py-1 rounded bg-[#EAEFF5] text-text-secondary border border-[#CCD2DC] hidden sm:inline">
              ESC to close
            </span>
          </div>

          {/* Results List */}
          <div className="p-3 max-h-96 overflow-y-auto space-y-1 divide-y divide-[#EAEFF5]">
            {searchResults.length === 0 ? (
              <div className="py-8 text-center text-text-secondary text-sm">
                No matching results found for "{query}".
              </div>
            ) : (
              searchResults.slice(0, 10).map((res, idx) => (
                <button
                  key={idx}
                  onClick={res.action}
                  className="w-full p-3 rounded-xl hover:bg-[#FAF9F6] text-left flex items-center justify-between gap-3 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-gold-pale flex items-center justify-center text-primary group-hover:scale-105 transition-transform border border-accent-gold/30 shrink-0">
                      <span className="material-symbols-outlined text-[18px]">{res.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-label-md font-bold text-text-primary text-sm group-hover:text-primary transition-colors">
                        {res.title}
                      </h4>
                      <span className="text-[11px] text-text-secondary font-semibold">{res.category}</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all text-[18px]">
                    arrow_forward
                  </span>
                </button>
              ))
            )}
          </div>

          {/* Search Footer */}
          <div className="p-3 bg-[#FAF9F6] border-t border-[#CCD2DC] flex items-center justify-between text-[11px] text-text-secondary">
            <span>P.S.V College of Engineering and Technology (Autonomous)</span>
            <span>Showing top {Math.min(searchResults.length, 10)} results</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
