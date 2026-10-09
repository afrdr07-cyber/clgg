import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Award, BookOpen, GraduationCap, 
  Building2, Users, Briefcase, Sparkles, ChevronDown, 
  Menu, X, ArrowRight, ShieldCheck, Search, ExternalLink,
  ChevronRight, Compass, FileText
} from 'lucide-react';
import { PageView } from '../types/navigation';
import { COLLEGE_DETAILS } from '../data/officialCollegeData';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView, subTab?: string) => void;
  onOpenIQAC: () => void;
  onOpenNAAC: () => void;
  onOpenNBA: () => void;
  onOpenNIRF: () => void;
  onOpenMandatoryDisclosure: () => void;
  onOpenERP: () => void;
  onOpenBusRoute: () => void;
  onOpenQuickSearch: () => void;
  onOpenEnquiry: () => void;
}

interface NavSubItem {
  title: string;
  desc?: string;
  subTab?: string;
  isExternal?: boolean;
  href?: string;
}

interface NavRootItem {
  id: PageView;
  label: string;
  submenu?: NavSubItem[];
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenIQAC,
  onOpenNAAC,
  onOpenNBA,
  onOpenNIRF,
  onOpenMandatoryDisclosure,
  onOpenERP,
  onOpenBusRoute,
  onOpenQuickSearch,
  onOpenEnquiry,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  const navItems: NavRootItem[] = [
    {
      id: 'home',
      label: 'Home',
    },
    {
      id: 'about',
      label: 'About Us',
      submenu: [
        { title: 'About College', desc: 'History, 22-year legacy & campus overview', subTab: 'about-college' },
        { title: 'Vision & Mission', desc: 'Institutional ethos, core values & quality policy', subTab: 'vision-mission' },
        { title: 'Administration', desc: 'Chairman, Secretary & Principal desks', subTab: 'administration' },
        { title: 'Code of Conduct', desc: 'Rules & delegation of powers policy (PDF)', subTab: 'code-of-conduct' },
        { title: 'Service Rules', desc: 'Faculty & staff employment regulations', subTab: 'service-rules' },
        { title: 'Committees', desc: 'Statutory bodies & non-statutory cells', subTab: 'committees' },
        { title: 'Audit Statements (2020-2024)', desc: 'Official annual audited balance sheets', subTab: 'audit-statements' },
      ]
    },
    {
      id: 'admission',
      label: 'Admission',
      submenu: [
        { title: 'B.E. / B.Tech (Regular)', desc: '4-Year UG degree programs & cutoff matrix', subTab: 'be-btech' },
        { title: 'B.E. / B.Tech Lateral Entry', desc: 'Direct 2nd-year admissions for diploma & B.Sc', subTab: 'lateral-entry' },
        { title: 'M.E. / M.Tech Programs', desc: 'Advanced postgraduate engineering degrees', subTab: 'me-mtech' },
        { title: 'MBA Degree Course', desc: '2-Year full-time MBA with dual specialization', subTab: 'mba' },
        { title: 'Enquiry & Direct Hotline', desc: 'Connect with admissions counselors (+91 8838428106)', subTab: 'enquiry-hotline' },
      ]
    },
    {
      id: 'academics',
      label: 'Academics',
      submenu: [
        { title: 'Courses Offered (Matrix)', desc: 'Sanctioned intake & degree catalog for 13 programs', subTab: 'courses-offered' },
        { title: 'Departments & HODs', desc: 'Deep dive into 9 UG and 4 PG departments', subTab: 'departments' },
        { title: 'Science & Humanities', desc: 'Mathematics, Physics, Chemistry & English foundation', subTab: 'science-humanities' },
        { title: 'Autonomous Regulations (CBCS)', desc: 'Choice Based Credit System & evaluation framework', subTab: 'regulations-cbcs' },
      ]
    },
    {
      id: 'infrastructure',
      label: 'Infrastructure',
      submenu: [
        { title: 'Hostels & Residences', desc: 'Separate on-campus living blocks with dining', subTab: 'hostels' },
        { title: 'Central Digital Library', desc: '29,000+ volumes, automated OPAC & DELNET/IEEE', subTab: 'library' },
        { title: 'Smart Classrooms & Halls', desc: 'ICT digital learning spaces & seminar hall', subTab: 'classrooms' },
        { title: 'Department Laboratories', desc: 'AI/GPU, VLSI, CNC, structural & power test suites', subTab: 'laboratories' },
        { title: 'Campus Amenities', desc: '1,500-seat auditorium, medical centre, gym & cafeteria', subTab: 'amenities' },
        { title: '30+ College Bus Routes', desc: 'GPS-tracked transit covering all surrounding taluks', subTab: 'bus-routes' },
      ]
    },
    {
      id: 'placement',
      label: 'Placement',
      submenu: [
        { title: 'Objectives & Team', desc: 'Training & Placement Directorate mission', subTab: 'objectives' },
        { title: '4-Year Training Model', desc: 'Progressive aptitude, coding & interview bootcamps', subTab: 'training' },
        { title: 'Placement Records & Stats', desc: '85% placement rate, 453+ offers & 45 LPA top package', subTab: 'records' },
        { title: 'Career Management & Higher Ed', desc: 'GATE, GRE, CAT, overseas studies & public service', subTab: 'career-management' },
        { title: 'Our Recruiters (180+)', desc: 'Hexaware, Movate, Foxconn, Mitsuba, M-Core, etc.', subTab: 'recruiters' },
      ]
    },
    {
      id: 'activities',
      label: 'Activities',
      submenu: [
        { title: 'NCC (National Cadet Corps)', desc: 'Army wing unit, drills & B/C certificate exams', subTab: 'ncc' },
        { title: 'NSS (National Service Scheme)', desc: 'Village adoption camps, blood donation & green drives', subTab: 'nss' },
        { title: 'YRC (Youth Red Cross)', desc: 'First-aid certification & humanitarian service', subTab: 'yrc' },
        { title: 'Sports & Athletics', desc: 'Cricket ground, football, indoor badminton & courts', subTab: 'sports' },
        { title: 'Student Co-Curricular Clubs', desc: 'Robotics, Coding Guild, Fine Arts & Tamil Mandram', subTab: 'clubs' },
      ]
    },
    {
      id: 'external-links',
      label: 'External Link',
      submenu: [
        { title: 'Campus Reign ERP', desc: 'Student, parent & staff academic portal', subTab: 'erp' },
        { title: 'Anna University, Chennai', desc: 'Affiliating university portal & circulars', subTab: 'anna-univ' },
        { title: 'COE Portal (Examinations)', desc: 'Autonomous examination timetables & grade cards', subTab: 'coe' },
        { title: 'NPTEL / SWAYAM', desc: 'Online certification courses & credit transfer', subTab: 'nptel' },
        { title: 'AICTE Portals & Disclosures', desc: 'Apex council approvals & regulatory notifications', subTab: 'aicte' },
        { title: 'Statutory Approvals', desc: 'NAAC A Grade, NBA Tier CSE & ISO certificates', subTab: 'approvals' },
        { title: 'Official Prospectus (PDF)', desc: 'Download comprehensive admission handbook', subTab: 'prospectus' },
        { title: 'Professional Bodies', desc: 'IEEE, ISTE, CSI, and IEI student chapters', subTab: 'professional-bodies' },
      ]
    },
    {
      id: 'gallery',
      label: 'Gallery',
    },
    {
      id: 'contact',
      label: 'Contact Us',
    },
  ];

  const handleRootClick = (item: NavRootItem) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(item.id);
  };

  const handleSubItemClick = (rootId: PageView, subTab?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(rootId, subTab);
  };

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      
      {/* 1. TOP UTILITY BAR (Live Badges & Instant Trigger Actions) */}
      <div className="bg-[#FAF9F6] border-b border-[#D9DCE1] text-xs text-[#60656C] py-1.5 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-[1760px] w-full mx-auto flex flex-wrap items-center justify-between gap-2">
          
          {/* Left: Badges */}
          <div className="flex items-center space-x-2.5 overflow-x-auto scrollbar-none py-0.5">
            <span className="inline-flex items-center gap-1.5 bg-[#F0E8D5] text-[#80672E] px-2.5 py-0.5 rounded-full font-bold text-[11px] tracking-wider uppercase border border-[#80672E]/30 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
              Autonomous Institution
            </span>
            <span className="hidden md:inline-block text-[#D9DCE1]">•</span>
            <span className="hidden md:inline-flex items-center gap-1 font-semibold text-[#22262B] text-xs">
              <Award className="w-3.5 h-3.5 text-[#80672E]" />
              NAAC 'A' Grade (CGPA: 3.24)
            </span>
            <span className="hidden lg:inline-block text-[#D9DCE1]">•</span>
            <span className="hidden lg:inline-block text-[#60656C]">Approved by AICTE | Affiliated to Anna University</span>
            <span className="hidden xl:inline-block text-[#D9DCE1]">•</span>
            <span className="hidden xl:inline-block text-[#80672E] font-bold">TNEA Counselling Code: 2642 / 2636</span>
          </div>

          {/* Right: Quick Action Triggers */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 text-xs font-semibold ml-auto flex-wrap">
            <button onClick={onOpenIQAC} className="hover:text-[#80672E] transition-colors cursor-pointer">
              IQAC
            </button>
            <span className="text-[#D9DCE1]">|</span>
            <button onClick={onOpenNAAC} className="hover:text-[#80672E] transition-colors cursor-pointer">
              NAAC
            </button>
            <span className="text-[#D9DCE1]">|</span>
            <button onClick={onOpenNBA} className="hover:text-[#80672E] transition-colors cursor-pointer">
              NBA
            </button>
            <span className="text-[#D9DCE1]">|</span>
            <button onClick={onOpenMandatoryDisclosure} className="hover:text-[#80672E] transition-colors cursor-pointer">
              Disclosure
            </button>
            <span className="text-[#D9DCE1]">|</span>
            <button onClick={onOpenERP} className="hover:text-[#80672E] transition-colors cursor-pointer">
              ERP
            </button>
            <span className="text-[#D9DCE1]">|</span>
            <button onClick={onOpenBusRoute} className="hover:text-[#80672E] transition-colors cursor-pointer">
              Bus Route
            </button>
            <span className="text-[#D9DCE1]">|</span>
            <a 
              href="https://maps.app.goo.gl/WKEqs8KqW6csb7oi7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#80672E] transition-colors inline-flex items-center gap-1 cursor-pointer font-bold text-[#80672E]"
              title="Open Campus Location on Google Maps"
            >
              <MapPin className="w-3 h-3 text-[#80672E]" />
              <span>Location (Maps)</span>
            </a>
            <span className="text-[#D9DCE1]">|</span>
            <button onClick={onOpenNIRF} className="text-[#80672E] hover:underline cursor-pointer">
              NIRF
            </button>
            <span className="hidden sm:inline-block text-[#D9DCE1]">|</span>
            <a href="tel:+918838428106" className="hidden sm:inline-flex items-center gap-1 text-[#22262B] hover:text-[#80672E]">
              <Phone className="w-3 h-3 text-[#80672E]" />
              <span>+91 88384 28106</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MASTHEAD BRANDING */}
      <div className="w-full bg-[#FAF9F6] border-b border-[#D8DDE6] py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-[1760px] w-full mx-auto flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Left Logo */}
          <div 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 shrink-0 cursor-pointer group"
          >
            <img
              alt="PSVCET Official Seal"
              className="h-12 sm:h-16 lg:h-18 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
              src="/images/logo/logo_seal_round.png"
            />
            <img
              alt="AICTE & Anna University Affiliation"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain hidden md:block border-l border-[#D2D7E0] pl-3"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD350xFsvzEQQq5XpR0vl2tAFubuK1frcEAgCeYO7Qsc9OSD_Aq53ePw0bLKMoCzIpb8XcX253A9C-Myqzl3htqI7i7vN4wV0Brlm_akfyGqt7OnMZbEchWIo3EnyJCRm7nrtnwvG_1bLBiuhYqHHiiZbMu1Idop8B1Q9AKpUHeHuc9LCLTY5P2Fyahhm3Q620luPmj0oXWZCcx-dJLnOG07DOVS4Diy-olUZ2CuMy-JCR5G3ytF84C1A"
            />
          </div>

          {/* Center College Title */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex-1 text-center px-2 sm:px-4 flex flex-col items-center justify-center min-w-0 cursor-pointer"
          >
            <h1 className="font-serif text-[15px] xs:text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-bold text-[#22262B] tracking-tight leading-tight uppercase">
              P.S.V COLLEGE OF ENGINEERING AND TECHNOLOGY
            </h1>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 mt-1 flex-wrap">
              <span className="inline-block px-3 py-0.5 rounded-full bg-[#F0E8D5] text-[#80672E] text-[11px] font-bold tracking-widest uppercase border border-[#80672E]/30">
                (AUTONOMOUS)
              </span>
              <span className="text-[#CCD2DC] hidden sm:inline">•</span>
              <span className="text-xs text-[#60656C] font-medium hidden xs:inline">
                ISO 9001:2015 Certified | Krishnagiri, Tamil Nadu
              </span>
            </div>
          </div>

          {/* Right Accreditations & Fast Actions */}
          <div className="flex items-center justify-end gap-2.5 sm:gap-3.5 shrink-0">
            <img
              alt="ISO 9001 and NAAC A Grade Accreditation"
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain hidden md:block border-r border-[#D2D7E0] pr-3"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE5X1U-7CKkF2q42OgRgwd7hVReSpv9cugYHf5-IquguOLkdYRD05X-c2zEjFkgrLo4a1S53VNALXZO4SKZonbOpmzFDA8gyYEBU-grLE5FAJa_IedZr8tllPVt6A1y4nMUzWPEASLRex7Aa6eLKUqhX2eQv1xJZQfZHGd_t1Wh0ES2blOKvCF4Rb2HWKWKLmWzoc9TcNKKsqtlqFlDeaPP-5q23KafjZ_HCIYnpQz4H4IKPdXXjRgCA"
            />
            
            <div className="hidden xl:flex flex-col items-end text-right">
              <span className="text-[10px] text-[#80672E] font-bold uppercase tracking-wider">Counselling Code</span>
              <span className="font-serif text-lg font-bold text-[#22262B] leading-none">2642</span>
              <span className="text-[10px] text-[#60656C]">Anna Univ. / TNEA</span>
            </div>

            {/* Quick Search Button (Ctrl+K) */}
            <button
              onClick={onOpenQuickSearch}
              className="w-10 h-10 rounded-full bg-[#EAEFF5] hover:bg-[#F0E8D5] text-[#22262B] hover:text-[#80672E] flex items-center justify-center transition-all border border-[#CCD2DC] cursor-pointer"
              title="Quick Search (Ctrl+K)"
              aria-label="Quick Search courses and pages"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Direct Enquiry Button */}
            <button
              onClick={onOpenEnquiry}
              className="w-10 h-10 rounded-full bg-[#80672E] hover:bg-[#664F18] text-white flex items-center justify-center shadow-md transition-all border border-[#B49A59]/40 cursor-pointer shrink-0"
              title="Admissions Enquiry"
              aria-label="Admissions Enquiry"
            >
              <Phone className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* 3. MAIN NAVIGATION BAR (10 ROOT ITEMS + MULTI-TIER DROPDOWNS) */}
      <div className="w-full bg-white border-b border-[#D4D9E2] backdrop-blur-md bg-white/98 shadow-sm">
        <div className="max-w-[1760px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-1.5 flex items-center justify-between gap-4">
          
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isHovered = activeDropdown === item.id;

              return (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => hasSubmenu && setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleRootClick(item)}
                    className={`inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-[#F0E8D5] text-[#80672E]' 
                        : 'text-[#22262B] hover:text-[#80672E] hover:bg-[#FAF9F6]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasSubmenu && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`} />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {hasSubmenu && (
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute top-full left-0 w-72 sm:w-80 bg-white border border-[#D9DCE1] rounded-2xl shadow-xl p-2 z-50 overflow-hidden"
                        >
                          <div className="space-y-1">
                            {item.submenu!.map((sub, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleSubItemClick(item.id, sub.subTab)}
                                className="w-full text-left p-2.5 rounded-xl hover:bg-[#FAF9F6] group/sub transition-all flex items-start gap-2.5 cursor-pointer"
                              >
                                <div className="w-2 h-2 rounded-full bg-[#80672E]/40 group-hover/sub:bg-[#80672E] mt-1.5 shrink-0" />
                                <div>
                                  <span className="font-serif text-xs font-bold text-[#22262B] group-hover/sub:text-[#80672E] block">
                                    {sub.title}
                                  </span>
                                  {sub.desc && (
                                    <span className="text-[11px] text-[#60656C] block leading-tight mt-0.5">
                                      {sub.desc}
                                    </span>
                                  )}
                                </div>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center justify-between xl:justify-end w-full xl:w-auto gap-3">
            {/* Mobile menu toggle */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#80672E] hover:bg-[#FAF9F6] transition-colors flex items-center justify-center border border-[#D9DCE1]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <span className="font-serif font-bold text-[#22262B] text-sm">PSVCET</span>
              <span className="text-xs text-[#80672E] font-bold">(Autonomous)</span>
            </div>

            <button
              onClick={() => onNavigate('admission', 'enquiry-hotline')}
              className="inline-flex items-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white font-semibold text-xs px-4 py-2 rounded-xl shadow-xs transition-all cursor-pointer border border-[#B49A59]/40"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Admission Enquiry</span>
            </button>
          </div>

        </div>

        {/* 4. MOBILE DRAWER MENU (ACCORDION WITH SUBMENUS) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="xl:hidden border-t border-[#D9DCE1] bg-[#FAF9F6] px-4 py-4 overflow-hidden shadow-xl max-h-[80vh] overflow-y-auto"
            >
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = currentView === item.id;
                  const hasSubmenu = item.submenu && item.submenu.length > 0;
                  const isExpanded = expandedMobileSection === item.id;

                  return (
                    <div key={item.id} className="bg-white rounded-xl border border-[#D9DCE1] overflow-hidden">
                      <div className="flex items-center justify-between p-3">
                        <button
                          onClick={() => handleRootClick(item)}
                          className={`font-serif text-sm font-bold text-left flex-1 cursor-pointer ${
                            isActive ? 'text-[#80672E]' : 'text-[#22262B]'
                          }`}
                        >
                          {item.label}
                        </button>
                        
                        {hasSubmenu && (
                          <button
                            onClick={() => setExpandedMobileSection(isExpanded ? null : item.id)}
                            className="p-1 text-[#60656C] hover:text-[#22262B]"
                          >
                            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>

                      {hasSubmenu && isExpanded && (
                        <div className="bg-[#FAF9F6] px-4 py-2 border-t border-[#D9DCE1] space-y-2">
                          {item.submenu!.map((sub, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => handleSubItemClick(item.id, sub.subTab)}
                              className="w-full text-left py-1.5 text-xs text-[#22262B] hover:text-[#80672E] flex items-center justify-between"
                            >
                              <span>{sub.title}</span>
                              <ChevronRight className="w-3.5 h-3.5 text-[#A0A5AD]" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Quick Utility Links in Mobile */}
                <div className="pt-3 border-t border-[#D9DCE1] flex flex-wrap gap-2">
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenBusRoute(); }}
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#D9DCE1] text-xs font-semibold text-[#22262B]"
                  >
                    Bus Routes
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenIQAC(); }}
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#D9DCE1] text-xs font-semibold text-[#22262B]"
                  >
                    IQAC
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenNAAC(); }}
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#D9DCE1] text-xs font-semibold text-[#22262B]"
                  >
                    NAAC
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenERP(); }}
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#D9DCE1] text-xs font-semibold text-[#22262B]"
                  >
                    Campus ERP
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenMandatoryDisclosure(); }}
                    className="px-3 py-1.5 rounded-lg bg-white border border-[#D9DCE1] text-xs font-semibold text-[#22262B]"
                  >
                    AICTE Disclosure
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </header>
  );
};
