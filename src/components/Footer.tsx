import React from 'react';
import { 
  Phone, Mail, MapPin, ShieldCheck, Award, 
  ExternalLink, ArrowUp, Globe, Compass 
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
    <footer className="bg-[#181C21] text-white pt-16 pb-8 border-t border-[#2D3136]">
      <div className="max-w-[1760px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2D3136]">
          
          {/* Col 1: College Identity & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#80672E] border-2 border-[#B49A59] p-1 flex items-center justify-center text-white font-headline font-bold text-center flex-shrink-0">
                <div className="text-[13px] leading-tight text-[#ffdf9d]">PSV<span className="block text-[7px] tracking-widest">CET</span></div>
              </div>
              <div>
                <h3 className="font-headline font-bold text-base sm:text-lg text-white leading-tight">
                  P.S.V. College of Engineering and Technology
                </h3>
                <span className="text-xs text-[#B49A59] font-label font-semibold block uppercase tracking-wider">
                  An Autonomous Institution
                </span>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-[#A0A5AD] leading-relaxed">
              Approved by AICTE, New Delhi, Affiliated to Anna University, Chennai, and Accredited 'A' Grade by NAAC. Conferred Autonomous status by UGC. Managed by St. Joan's Educational Trust.
            </p>

            {/* Address & Direct Hotlines */}
            <div className="space-y-2.5 pt-2 text-xs text-[#A0A5AD]">
              <a 
                href="https://maps.app.goo.gl/WKEqs8KqW6csb7oi7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#B49A59] transition-colors group cursor-pointer"
                title="View on Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#B49A59] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>
                  Mittapalli, Balinayanapalli Post, Elathagiri SO, Krishnagiri - 635108, Tamil Nadu, India.
                  <span className="text-[#B49A59] hover:underline ml-1.5 inline-block font-medium">(Google Maps ↗)</span>
                </span>
              </a>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B49A59] flex-shrink-0" />
                <span>+91 88384 28106 / +91 94442 73966 / +91 63693 42733</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B49A59] flex-shrink-0" />
                <span>selvam.psv@gmail.com / principal@psvcet.ac.in / admissions@psvcet.ac.in</span>
              </div>
            </div>

            {/* TNEA Code Pill */}
            <div className="pt-2 flex items-center gap-2">
              <span className="inline-block bg-[#2D3136] text-[#B49A59] border border-[#B49A59]/40 text-xs px-3 py-1 rounded-full font-bold">
                TNEA Counselling Code: 2642
              </span>
              <span className="inline-block bg-[#2D3136] text-[#A0A5AD] text-xs px-2.5 py-1 rounded-full">
                Code: 2636
              </span>
            </div>
          </div>

          {/* Col 2: Academic Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-headline font-bold text-base text-white border-b border-[#2D3136] pb-2">
              Academic Departments
            </h4>
            <ul className="space-y-2 text-xs text-[#A0A5AD]">
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  B.E. Computer Science & Engineering (NBA)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  B.Tech Artificial Intelligence & Data Science
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  B.Tech Information Technology
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  B.E. Electronics & Communication (ECE)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  B.E. Mechanical & Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  B.E. Electrical & Electronics (EEE)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  Master of Business Administration (MBA)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics', 'departments')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  M.E. Computer Science & Engineering
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory & Institutional Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-headline font-bold text-base text-white border-b border-[#2D3136] pb-2">
              Governance & Policies
            </h4>
            <ul className="space-y-2 text-xs text-[#A0A5AD]">
              <li>
                <button onClick={() => handleNav('about', 'vision-mission')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  Vision & Mission
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'administration')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  Administration Desks
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'code-of-conduct')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  Code of Conduct Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'committees')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  Statutory Committees
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about', 'audit-statements')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  Audit Statements 2020-2024
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('external-links', 'aicte')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  AICTE Mandatory EOA
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Portals & Campus Life (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-headline font-bold text-base text-white border-b border-[#2D3136] pb-2">
              Portals & Campus Services
            </h4>
            <ul className="space-y-2 text-xs text-[#A0A5AD]">
              <li>
                <button onClick={() => handleNav('external-links', 'erp')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  Campus Reign ERP Portal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('external-links', 'coe')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  COE Examination Timetables
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('infrastructure', 'library')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  Central Digital Library (DELNET / IEEE)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('placement')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  Training & Placement Records (85%)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('activities')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  NCC, NSS, YRC & Sports
                </button>
              </li>
              <li>
                <button onClick={onOpenBusRoute || (() => handleNav('infrastructure', 'bus-routes'))} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  30+ Bus Transit Network
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-[#B49A59] transition-colors text-left cursor-pointer">
                  Campus Photo Gallery
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
            className="flex items-center gap-1.5 bg-[#2D3136] hover:bg-[#80672E] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border border-[#B49A59]/30 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
