import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  RECRUITERS_DATA, 
  INSTITUTIONAL_STATISTICS 
} from '../data/officialCollegeData';
import { PlacementSubTab, PageView } from '../types/navigation';
import { 
  Briefcase, Award, TrendingUp, Users, CheckCircle2, 
  ChevronRight, ArrowRight, Building2, Phone, Mail, 
  Check, Sparkles, BookOpen, GraduationCap
} from 'lucide-react';

interface PlacementViewProps {
  initialSubTab?: PlacementSubTab;
  onNavigate: (view: PageView, subTab?: string) => void;
  onOpenEnquiry: () => void;
}

export const PlacementView: React.FC<PlacementViewProps> = ({
  initialSubTab = 'objectives',
  onNavigate,
  onOpenEnquiry,
}) => {
  const [activeTab, setActiveTab] = useState<PlacementSubTab>(initialSubTab);

  const subTabs = [
    { id: 'objectives' as PlacementSubTab, label: 'Objectives & Team' },
    { id: 'training' as PlacementSubTab, label: '4-Year Training Model' },
    { id: 'records' as PlacementSubTab, label: 'Placement Records & Stats' },
    { id: 'career-management' as PlacementSubTab, label: 'Career Management & Higher Ed' },
    { id: 'recruiters' as PlacementSubTab, label: 'Our Recruiters (180+)' },
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
              <span>Placement</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#A0A5AD]" />
              <span className="text-[#22262B] capitalize">{activeTab.replace('-', ' ')}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22262B] leading-tight">
              Training & Placement Centre
            </h1>
            <p className="font-body text-sm sm:text-base text-[#60656C] leading-relaxed">
              Bridging engineering scholars with industry leaders. Achieving an <strong className="text-[#80672E]">85% placement success rate</strong> with 453+ offers handed annually across 180+ visiting corporate multinational recruitment partners.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center justify-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <span>Recruiter Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
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

      {/* 1. OBJECTIVES & TEAM */}
      {activeTab === 'objectives' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0E8D5] text-[#80672E] text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Placement Vision & Objectives</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Empowering Students for Career Leadership
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <h4 className="font-serif text-base font-bold text-[#22262B]">Core Objectives:</h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#60656C]">
                  {[
                    'Achieve 100% placement facilitation for all eligible students across IT, Core Engineering, and Management branches.',
                    'Provide continuous training in communicative English, analytical problem solving, and full-stack coding from 1st year.',
                    'Establish long-term corporate partnerships and industry MoUs for stipend internships and capstone projects.',
                    'Organize on-campus pooled recruitment drives with Tier-1 MNCs and high-growth technology startups.'
                  ].map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#80672E] shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Placement Officer Contact */}
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl p-6 space-y-4">
                <span className="text-xs uppercase font-bold text-[#80672E]">Training & Placement Cell</span>
                <h4 className="font-serif text-lg font-bold text-[#22262B]">Placement Directorate</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Head of Training and Placement Cell coordinates campus drives, student assessments, and corporate relations.
                </p>
                <div className="space-y-2 text-xs text-[#22262B] pt-2 border-t border-[#D9DCE1]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#80672E]" />
                    <span>Office: +91 88384 28106 / +91 94442 73966</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#80672E]" />
                    <span>Email: placement@psvcet.ac.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. 4-YEAR TRAINING MODEL */}
      {activeTab === 'training' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Holistic Skill Progression</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              4-Year Progressive Career Preparation Framework
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              At PSVCET, placement training is an integral part of the academic curriculum from Semester 1, ensuring students systematically mature from foundational communication to advanced industry competence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#80672E] text-white text-[10px] font-bold uppercase">Year 1 (Sem 1 & 2)</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Foundational Communication</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  LSRW skills in digital language labs, interpersonal etiquette, phonetics, self-presentation, and computational thinking logic.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#80672E] text-white text-[10px] font-bold uppercase">Year 2 (Sem 3 & 4)</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Aptitude & Algorithms</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Quantitative aptitude, logical reasoning, data structures & algorithms (C++, Java, Python), and competitive coding bootcamps.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#80672E] text-white text-[10px] font-bold uppercase">Year 3 (Sem 5 & 6)</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Domain Specialization</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Cloud DevOps, Full-Stack development, VLSI/Embedded, AICTE IdeaLab capstone projects, and industry internship placements.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#80672E] text-white text-[10px] font-bold uppercase">Year 4 (Sem 7 & 8)</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Campus Drives & Interviews</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Company-specific mock technical and HR interviews, group discussions, on-campus recruitments, and final offer onboarding.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. PLACEMENT RECORDS */}
      {activeTab === 'records' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Placement Benchmark</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Official Placement Records & Annual Highlights
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl text-center">
                <span className="font-serif text-3xl font-bold text-[#80672E] block">85%</span>
                <span className="text-xs text-[#60656C] mt-1 block">Placement Rate</span>
              </div>
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl text-center">
                <span className="font-serif text-3xl font-bold text-[#80672E] block">453+</span>
                <span className="text-xs text-[#60656C] mt-1 block">Offers Handed</span>
              </div>
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl text-center">
                <span className="font-serif text-3xl font-bold text-[#80672E] block">45 LPA</span>
                <span className="text-xs text-[#60656C] mt-1 block">Highest Package</span>
              </div>
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl text-center">
                <span className="font-serif text-3xl font-bold text-[#80672E] block">7.8 LPA</span>
                <span className="text-xs text-[#60656C] mt-1 block">Average Package</span>
              </div>
            </div>

            <div className="p-4 bg-[#FAF9F6] rounded-xl border border-[#D9DCE1] text-xs text-[#60656C] leading-relaxed">
              Consistently high placement percentages across circuit branches (CSE, IT, AI&DS, ECE, EEE) and robust core placements for Mechanical and Civil engineers in manufacturing, construction, and automation companies.
            </div>
          </div>
        </section>
      )}

      {/* 4. CAREER MANAGEMENT & HIGHER ED */}
      {activeTab === 'career-management' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Higher Education & Public Services</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Career Guidance & Higher Studies Cell
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              For scholars aspiring towards postgraduate education and national competitive examinations, our Career Management Cell provides specialized coaching, mentorship, and recommendation credentials.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">GATE & TANCET Coaching</span>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Weekly faculty-guided problem solving sessions for engineering students aiming for M.E./M.Tech seats in IITs, NITs, and Anna University.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Overseas Studies (GRE/TOEFL)</span>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Guidance on Statement of Purpose (SOP), Letters of Recommendation (LOR), and university applications for USA, UK, Germany, and Australia.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Civil & Defense Services</span>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Mentorship for TNPSC, UPSC, Indian Engineering Services (IES), and direct technical commissions into Indian Army, Navy, and Air Force.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. RECRUITERS */}
      {activeTab === 'recruiters' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Corporate Roster</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Visiting Tier-1 MNCs & Industry Partners
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-2">
              {RECRUITERS_DATA.map((rec) => (
                <div
                  key={rec.name}
                  className="bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl p-4 text-center flex flex-col items-center justify-center hover:border-[#80672E] transition-all"
                >
                  <h4 className="font-serif text-sm font-bold text-[#22262B] line-clamp-1">{rec.name}</h4>
                  <span className="text-xs text-[#80672E] font-medium mt-1">{rec.tier}</span>
                  <span className="text-[11px] text-[#60656C] mt-0.5">{rec.role}</span>
                  <span className="text-[10px] text-[#A0A5AD] mt-1 bg-white px-2 py-0.5 rounded border border-[#D9DCE1]">
                    {rec.package}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
