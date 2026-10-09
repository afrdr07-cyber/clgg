import React from 'react';
import { 
  Phone, Mail, MapPin, ShieldCheck, Award, 
  ExternalLink, ArrowUp, Globe, Compass, ChevronRight 
} from 'lucide-react';
import { PageView } from '../types/navigation';
import { COLLEGE_DETAILS } from '../data/officialCollegeData';

interface FooterProps {
  onNavigate?: (view: PageView, subTab?: string) => void;
  onOpenBusRoute?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBusRoute }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (view: PageView, subTab?: string) => {
    if (onNavigate) {
      onNavigate(view, subTab);
      scrollToTop();
    }
  };

  return (
    <footer className="bg-[#14171A] text-white pt-16 pb-8 border-t border-[#2D3136] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#80672E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1760px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#262A2F]">
          
          {/* Col 1: College Identity & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              {/* Constrained Official Logo Container */}
              <div className="w-14 h-14 min-w-[56px] min-h-[56px] max-w-[56px] max-h-[56px] rounded-full bg-white border-2 border-[#B49A59] p-1 flex items-center justify-center shadow-lg shrink-0 overflow-hidden">
                <img
                  src="/images/logo/logo_seal_round.png"
                  alt="PSVCET Official College Logo"
                  className="w-full h-full object-contain max-w-[48px] max-h-[48px] block"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-headline font-bold text-base sm:text-lg text-white leading-tight">
                  P.S.V. College of Engineering and Technology
                </h3>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="text-[11px] text-[#ffdf9d] font-label font-bold uppercase tracking-wider bg-[#80672E]/30 px-2 py-0.5 rounded-md border border-[#80672E]/40">
                    Autonomous
                  </span>
                  <span className="text-[11px] text-[#A0A5AD]">
                    NAAC 'A' Grade
                  </span>
                </div>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-[#A0A5AD] leading-relaxed">
              Approved by AICTE, New Delhi, Affiliated to Anna University, Chennai, and Accredited 'A' Grade by NAAC. Conferred Autonomous status by UGC. Managed by St. Joan's Educational Trust.
            </p>

            {/* Address & Direct Hotlines */}
            <div className="space-y-3 pt-1 text-xs text-[#A0A5AD]">
              <a 
                href="https://maps.app.goo.gl/WKEqs8KqW6csb7oi7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#ffdf9d] transition-colors group cursor-pointer"
                title="View on Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#B49A59] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>
                  Mittapalli, Balinayanapalli Post, Elathagiri SO, Krishnagiri - 635108, Tamil Nadu, India.
                  <span className="text-[#ffdf9d] hover:underline ml-1.5 inline-block font-medium">(Google Maps ↗)</span>
                </span>
              </a>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B49A59] shrink-0" />
                <span>+91 88384 28106 / +91 94442 73966 / +91 63693 42733</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B49A59] shrink-0" />
                <span className="truncate">selvam.psv@gmail.com / principal@psvcet.ac.in</span>
              </div>
            </div>

            {/* TNEA Code Pills */}
            <div className="pt-2 flex items-center gap-2 flex-wrap">
              <span className="inline-block bg-[#1F2328] text-[#ffdf9d] border border-[#B49A59]/40 text-xs px-3 py-1 rounded-full font-bold shadow-xs">
                TNEA Code: 2642
              </span>
              <span className="inline-block bg-[#1F2328] text-[#A0A5AD] border border-white/10 text-xs px-2.5 py-1 rounded-full">
                Code: 2636
              </span>
            </div>
          </div>

          {/* Col 2: Academic Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-headline font-bold text-sm sm:text-base text-white border-b border-[#262A2F] pb-2 flex items-center justify-between">
              <span>Academic Departments</span>
              <span className="text-[10px] text-[#B49A59] font-normal uppercase">UG & PG</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0A5AD]">
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>B.E. Computer Science & Engg (NBA)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>B.Tech AI & Data Science</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>B.Tech Information Technology</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>B.E. Electronics & Communication (ECE)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>B.E. Mechanical Engineering</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>B.E. Electrical & Electronics (EEE)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>Master of Business Admin (MBA)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>M.E. Computer Science & Engg</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory & Institutional Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-headline font-bold text-sm sm:text-base text-white border-b border-[#262A2F] pb-2">
              Governance & Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0A5AD]">
              <li>
                <button onClick={() => handleNav('about', 'vision-mission')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>Vision & Mission</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'administration')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>Administration Desks</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'code-of-conduct')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>Code of Conduct</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'committees')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>Statutory Committees</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'audit-statements')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>Audit Statements</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('external-links', 'aicte')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>AICTE Mandatory EOA</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Portals & Campus Life (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-headline font-bold text-sm sm:text-base text-white border-b border-[#262A2F] pb-2">
              Portals & Campus Life
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A0A5AD]">
              <li>
                <button onClick={() => handleNav('external-links', 'erp')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>Campus Reign ERP Portal</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('external-links', 'coe')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>COE Autonomous Exams</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('infrastructure', 'library')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>Central Digital Library</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('placement')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>Training & Placement Cell</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('activities')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>NCC, NSS & Sports Units</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenBusRoute || (() => handleNav('infrastructure', 'bus-routes'))} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>30+ Bus Transit Network</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-[#ffdf9d] transition-colors text-left cursor-pointer flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#80672E]" />
                  <span>Official Photo Archives</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A5AD]">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} P.S.V. College of Engineering and Technology (Autonomous). All Rights Reserved.</p>
            <p className="text-[11px] text-[#71767E]">
              Autonomous Institution Conferred by UGC • Affiliated to Anna University, Chennai • Accredited NAAC 'A' Grade
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-[#1F2328] hover:bg-[#80672E] text-white px-4 py-2 rounded-full text-xs font-semibold transition-all border border-[#B49A59]/30 shadow-xs cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

