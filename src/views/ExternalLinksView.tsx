import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  OFFICIAL_REGULATORY_DOCS, 
  ACCREDITATION_DETAILS 
} from '../data/officialCollegeData';
import { ExternalLinksSubTab, PageView } from '../types/navigation';
import { 
  ExternalLink, Download, ShieldCheck, Award, 
  BookOpen, ChevronRight, ArrowRight, CheckCircle2, 
  GraduationCap, Globe, Lock, Check
} from 'lucide-react';

interface ExternalLinksViewProps {
  initialSubTab?: ExternalLinksSubTab;
  onNavigate: (view: PageView, subTab?: string) => void;
  onOpenERP: () => void;
  onOpenCOE: () => void;
  onOpenMandatoryDisclosure: () => void;
}

export const ExternalLinksView: React.FC<ExternalLinksViewProps> = ({
  initialSubTab = 'erp',
  onNavigate,
  onOpenERP,
  onOpenCOE,
  onOpenMandatoryDisclosure,
}) => {
  const [activeTab, setActiveTab] = useState<ExternalLinksSubTab>(initialSubTab);

  const subTabs = [
    { id: 'erp' as ExternalLinksSubTab, label: 'Campus Reign ERP' },
    { id: 'anna-univ' as ExternalLinksSubTab, label: 'Anna University' },
    { id: 'coe' as ExternalLinksSubTab, label: 'COE Portal' },
    { id: 'nptel' as ExternalLinksSubTab, label: 'NPTEL / SWAYAM' },
    { id: 'aicte' as ExternalLinksSubTab, label: 'AICTE Portals' },
    { id: 'approvals' as ExternalLinksSubTab, label: 'Statutory Approvals' },
    { id: 'prospectus' as ExternalLinksSubTab, label: 'Official Prospectus' },
    { id: 'professional-bodies' as ExternalLinksSubTab, label: 'Professional Bodies' },
  ];

  return (
    <div className="w-full space-y-10">

      {/* Page Masthead Banner */}
      <section className="w-full bg-[#FAF9F6] border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#80672E] uppercase tracking-wider">
              <button onClick={() => onNavigate('home')} className="hover:underline">Home</button>
              <ChevronRight className="w-3.5 h-3.5 text-[#A0A5AD]" />
              <span>External Links</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#A0A5AD]" />
              <span className="text-[#22262B] capitalize">{activeTab.replace('-', ' ')}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22262B] leading-tight">
              External Portals & Statutory Disclosures
            </h1>
            <p className="font-body text-sm sm:text-base text-[#60656C] leading-relaxed">
              Official university portals, ERP logins, Controller of Examinations (COE), AICTE mandatory disclosures, and professional body chapters.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-8 pt-6 border-t border-[#D9DCE1] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {subTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#80672E] text-white shadow-sm'
                  : 'bg-white text-[#60656C] hover:text-[#22262B] border border-[#D9DCE1]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 1. CAMPUS REIGN ERP */}
      {activeTab === 'erp' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Digital Campus System</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Campus Reign Integrated ERP Portal
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              Campus Reign is the centralized Enterprise Resource Planning (ERP) platform for PSVCET, enabling students, parents, and faculty to manage academic schedules, attendance, fees, internal marks, and course registration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#80672E] text-white flex items-center justify-center font-bold">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#22262B]">Student & Parent Login</h4>
                    <span className="text-xs text-[#60656C]">Cloud ERP Sign-In</span>
                  </div>
                </div>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Track daily attendance, view internal assessment scores, download fee receipts, and access semester timetables.
                </p>
                <a
                  href="https://psvcet.campusreign.in/CAMPS/CommonJSP/signin.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-xs"
                >
                  <span>Open Campus Reign ERP</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-6 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#664F18] text-white flex items-center justify-center font-bold">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#22262B]">Faculty & Staff Portal</h4>
                    <span className="text-xs text-[#60656C]">Intranet IP Portal</span>
                  </div>
                </div>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Attendance entry, continuous internal assessment grading, lesson plans, and student mentoring dossiers.
                </p>
                <a
                  href="http://103.170.160.68/erp/Default.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF9F6] text-[#22262B] border border-[#D9DCE1] text-xs font-semibold px-4 py-2.5 rounded-xl transition-all"
                >
                  <span>Open Staff Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. ANNA UNIVERSITY */}
      {activeTab === 'anna-univ' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Affiliating University</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Anna University, Chennai
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              P.S.V. College of Engineering and Technology is permanently affiliated to Anna University, Chennai. All autonomous degrees are conferred under the seal of Anna University with curricula benchmarked against global standards.
            </p>

            <div className="pt-4 border-t border-[#D9DCE1] flex flex-wrap gap-4">
              <a
                href="https://www.annauniv.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all shadow-xs"
              >
                <span>Visit Anna University Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://cac.annauniv.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF9F6] text-[#22262B] border border-[#D9DCE1] text-xs font-semibold px-5 py-2.5 rounded-xl transition-all"
              >
                <span>Centre for Academic Courses (CAC)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* 3. COE PORTAL */}
      {activeTab === 'coe' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Autonomous Examinations</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Office of the Controller of Examinations (COE)
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              Responsible for the fair conduct of continuous internal tests, end semester autonomous examinations, central valuation, publishing results, revaluation processing, and grade sheet distribution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Examination Timetable</span>
                <p className="text-xs text-[#60656C]">Official Nov/Dec and April/May autonomous theory and practical timetables.</p>
                <button onClick={onOpenCOE} className="text-xs font-semibold text-[#80672E] hover:underline block pt-1 cursor-pointer">
                  View Timetable Modal →
                </button>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Results & Grade Cards</span>
                <p className="text-xs text-[#60656C]">Semester GPA / CGPA publication and online grade card verification.</p>
                <button onClick={onOpenCOE} className="text-xs font-semibold text-[#80672E] hover:underline block pt-1 cursor-pointer">
                  Check Results →
                </button>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Revaluation & Photocopier</span>
                <p className="text-xs text-[#60656C]">Application forms for answer script photocopy and evaluation appeals.</p>
                <button onClick={onOpenCOE} className="text-xs font-semibold text-[#80672E] hover:underline block pt-1 cursor-pointer">
                  Apply Appeals →
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. NPTEL / SWAYAM */}
      {activeTab === 'nptel' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Online Learning Chapter</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              NPTEL & SWAYAM Local Chapter
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              PSVCET is an active local chapter of NPTEL (National Programme on Technology Enhanced Learning), an initiative by the IITs and IISc. Students earn certificates in cutting-edge computing, AI, robotics, and management, with credits transferable to autonomous electives.
            </p>

            <a
              href="https://nptel.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all shadow-xs"
            >
              <span>Visit NPTEL Online Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      )}

      {/* 5. AICTE PORTALS */}
      {activeTab === 'aicte' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Apex Technical Body</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              All India Council for Technical Education (AICTE)
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              Approved by AICTE, New Delhi for all undergraduate and postgraduate engineering courses. PSVCET strictly adheres to AICTE guidelines on curriculum, teacher-student ratios, IdeaLab facilities, and student grievance portals.
            </p>

            <div className="pt-4 border-t border-[#D9DCE1] flex flex-wrap gap-4">
              <a
                href="https://www.aicte-india.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all shadow-xs"
              >
                <span>Visit AICTE Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenMandatoryDisclosure}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF9F6] text-[#22262B] border border-[#D9DCE1] text-xs font-semibold px-5 py-2.5 rounded-xl transition-all cursor-pointer"
              >
                <span>View Mandatory Disclosure</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 6. STATUTORY APPROVALS */}
      {activeTab === 'approvals' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Accreditations & Regulatory Seals</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Institutional Accreditations & Statutory Documents
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">NAAC Accreditation</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Accredited 'A' Grade (CGPA: 3.24)</h4>
                <p className="text-xs text-[#60656C]">Conferred by National Assessment and Accreditation Council for institutional excellence in teaching, learning, and infrastructure.</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">NBA Accreditation</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">NBA Tier Accredited (Dept of CSE)</h4>
                <p className="text-xs text-[#60656C]">Valid tier-accreditation by National Board of Accreditation for Outcome-Based Education.</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Quality Certification</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">ISO 9001:2015 Certified</h4>
                <p className="text-xs text-[#60656C]">Certified for delivery of quality technical education, academic governance, and laboratory maintenance.</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">AICTE Mandatory Disclosure</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Mandatory Disclosure 2025-26</h4>
                <p className="text-xs text-[#60656C]">Complete regulatory document published in compliance with AICTE public transparency norms.</p>
                <a
                  href={OFFICIAL_REGULATORY_DOCS.mandatoryDisclosure.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#80672E] hover:underline flex items-center gap-1 pt-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. PROSPECTUS */}
      {activeTab === 'prospectus' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Admission Guide</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Official College Admissions Prospectus
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              Download the comprehensive admissions handbook featuring program details, curriculum overviews, campus life photo tours, bus schedules, and fee concession schemes.
            </p>

            <a
              href={OFFICIAL_REGULATORY_DOCS.prospectus.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Prospectus PDF</span>
            </a>
          </div>
        </section>
      )}

      {/* 8. PROFESSIONAL BODIES */}
      {activeTab === 'professional-bodies' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Professional Associations</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Active Institutional Student Chapters
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">IEEE</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">IEEE Student Branch</h4>
                <p className="text-xs text-[#60656C]">International engineering society conducting technical paper conferences and webinars.</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">ISTE</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">ISTE Chapter</h4>
                <p className="text-xs text-[#60656C]">Indian Society for Technical Education for faculty and student development workshops.</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">CSI</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Computer Society of India</h4>
                <p className="text-xs text-[#60656C]">Student chapter organizing coding competitions, hackathons, and software showcases.</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">IEI</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Institution of Engineers</h4>
                <p className="text-xs text-[#60656C]">Promoting interdisciplinary design and professional engineering ethics.</p>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
