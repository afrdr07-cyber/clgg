import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  COLLEGE_DETAILS, 
  LEADERSHIP_PROFILES, 
  STATUTORY_COMMITTEES, 
  AUDIT_STATEMENTS, 
  OFFICIAL_REGULATORY_DOCS 
} from '../data/officialCollegeData';
import { AboutSubTab, PageView } from '../types/navigation';
import { 
  Building2, Award, Users, ShieldCheck, FileText, Download, 
  ExternalLink, ChevronRight, CheckCircle2, ArrowRight, BookOpen,
  Sparkles, Check, Phone, Mail
} from 'lucide-react';

interface AboutViewProps {
  initialSubTab?: AboutSubTab;
  onNavigate: (view: PageView, subTab?: string) => void;
  onOpenEnquiry: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  initialSubTab = 'about-college',
  onNavigate,
  onOpenEnquiry,
}) => {
  const [activeTab, setActiveTab] = useState<AboutSubTab>(initialSubTab);

  const subTabs = [
    { id: 'about-college' as AboutSubTab, label: 'About College' },
    { id: 'vision-mission' as AboutSubTab, label: 'Vision & Mission' },
    { id: 'administration' as AboutSubTab, label: 'Administration' },
    { id: 'code-of-conduct' as AboutSubTab, label: 'Code of Conduct' },
    { id: 'service-rules' as AboutSubTab, label: 'Service Rules' },
    { id: 'committees' as AboutSubTab, label: 'Committees' },
    { id: 'audit-statements' as AboutSubTab, label: 'Audit Statements (2020-2024)' },
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
              <span>About Us</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#A0A5AD]" />
              <span className="text-[#22262B] capitalize">{activeTab.replace('-', ' ')}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22262B] leading-tight">
              About PSVCET Autonomous
            </h1>
            <p className="font-body text-sm sm:text-base text-[#60656C] leading-relaxed">
              22 years of educational excellence in Krishnagiri, Tamil Nadu. Managed by St. Joan's Educational Trust with conferment of autonomous status by UGC & Anna University.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center justify-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <span>Admissions Hotline</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Bar */}
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

      {/* Content Sections */}

      {/* 1. ABOUT COLLEGE */}
      {activeTab === 'about-college' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0E8D5] text-[#80672E] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Institutional Legacy</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              A Heritage of Academic Rigor & Community Development
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#60656C] leading-relaxed">
              <p>
                <strong>P.S.V. College of Engineering and Technology</strong> was established in 2008 by <strong>St. Joan’s Educational Trust</strong> under the visionary leadership of <strong>Dr. P. Selvam, M.A., B.Ed., Ph.D.</strong>, with the resolute goal of providing world-class technological education to the student community of Krishnagiri and neighboring districts.
              </p>
              <p>
                Situated on a scenic, pollution-free 30+ acre campus on the Chennai-Bengaluru National Highway (NH-48), the institution has evolved over 22 years into one of the premier self-financing autonomous institutions in Tamil Nadu.
              </p>
              <p>
                Conferred with <strong>Autonomous Status</strong> by the University Grants Commission (UGC) and Anna University, Chennai, the college designs its own forward-looking syllabi aligned with Industry 4.0 requirements while following the Choice Based Credit System (CBCS).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl">
                <span className="text-xs uppercase font-bold text-[#80672E]">Autonomous Status</span>
                <p className="text-xs text-[#60656C] mt-1">Conferred by UGC & Anna University under 12(B) and 2(f) framework.</p>
              </div>
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl">
                <span className="text-xs uppercase font-bold text-[#80672E]">NAAC 'A' Grade</span>
                <p className="text-xs text-[#60656C] mt-1">Accredited with CGPA of 3.24 for exemplary educational standards.</p>
              </div>
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl">
                <span className="text-xs uppercase font-bold text-[#80672E]">NBA Accredited</span>
                <p className="text-xs text-[#60656C] mt-1">Tier-accreditation for Department of Computer Science & Engineering.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. VISION & MISSION */}
      {activeTab === 'vision-mission' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#80672E] text-white flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider block">Our Vision</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
                Institutional Vision
              </h2>
              <blockquote className="italic font-serif text-base text-[#22262B] bg-[#FAF9F6] border-l-4 border-[#80672E] p-4 rounded-r-xl leading-relaxed">
                "To emerge as a premier centre of excellence in engineering, technology, and management education that fosters innovative thinking, ethical responsibility, and professional leadership for global sustainable development."
              </blockquote>
              <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed pt-2">
                We are dedicated to bridging rural and urban educational frontiers, instilling entrepreneurial spirit, and cultivating ethical scientists and engineers.
              </p>
            </div>

            <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F0E8D5] text-[#80672E] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider block">Our Mission</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
                Institutional Mission
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-[#60656C]">
                {[
                  'Deliver outcome-based higher education benchmarking national and global quality standards.',
                  'Provide state-of-the-art laboratory infrastructure, computational clusters, and research ecosystems.',
                  'Cultivate strong industry-academia synergies for experiential learning, internships, and 100% placement outcomes.',
                  'Nurture ethical, societal, and environmental consciousness through holistic student development.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#80672E] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="bg-[#FAF9F6] border border-[#D9DCE1] rounded-3xl p-6 sm:p-8">
            <h3 className="font-serif text-xl font-bold text-[#22262B] mb-2">
              Quality Policy
            </h3>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              P.S.V. College of Engineering and Technology is committed to continuous enhancement of quality in technical education, research, and institutional governance through active stakeholder involvement, transparent systems, and strict compliance with statutory regulatory bodies (UGC, AICTE, Anna University, NAAC, and NBA).
            </p>
          </div>
        </section>
      )}

      {/* 3. ADMINISTRATION & LEADERSHIP */}
      {activeTab === 'administration' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          
          {/* Chairman Desk */}
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center p-4 bg-[#FAF9F6] rounded-2xl border border-[#D9DCE1]">
                <div className="w-24 h-24 rounded-full bg-[#80672E] text-white flex items-center justify-center font-serif text-3xl font-bold mb-3 shadow-md">
                  PS
                </div>
                <span className="text-xs uppercase font-bold text-[#80672E]">Founder Chairman</span>
                <h3 className="font-serif text-xl font-bold text-[#22262B] mt-1">
                  {LEADERSHIP_PROFILES.chairman.name}
                </h3>
                <span className="text-xs text-[#60656C]">{LEADERSHIP_PROFILES.chairman.qualifications}</span>
                <span className="text-[11px] text-[#A0A5AD] mt-1">{LEADERSHIP_PROFILES.chairman.trust}</span>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider block">Message from the Chairman</span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#22262B]">
                  "Empowering Rural & Suburban Talent to Compete Globally"
                </h4>
                <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
                  {LEADERSHIP_PROFILES.chairman.message}
                </p>
                <div className="pt-2">
                  <span className="block text-xs font-bold text-[#22262B] mb-1.5">Key Pillars:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#60656C]">
                    {LEADERSHIP_PROFILES.chairman.focusAreas.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secretary Desk */}
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center p-4 bg-[#FAF9F6] rounded-2xl border border-[#D9DCE1]">
                <div className="w-24 h-24 rounded-full bg-[#664F18] text-white flex items-center justify-center font-serif text-3xl font-bold mb-3 shadow-md">
                  SV
                </div>
                <span className="text-xs uppercase font-bold text-[#80672E]">Secretary</span>
                <h3 className="font-serif text-xl font-bold text-[#22262B] mt-1">
                  {LEADERSHIP_PROFILES.secretary.name}
                </h3>
                <span className="text-xs text-[#60656C]">{LEADERSHIP_PROFILES.secretary.qualifications}</span>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider block">Message from the Secretary</span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#22262B]">
                  "Accelerating Innovation in Autonomous Education"
                </h4>
                <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
                  {LEADERSHIP_PROFILES.secretary.message}
                </p>
                <div className="pt-2">
                  <span className="block text-xs font-bold text-[#22262B] mb-1.5">Focus Priorities:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#60656C]">
                    {LEADERSHIP_PROFILES.secretary.focusAreas.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Principal Desk */}
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4 flex flex-col items-center text-center p-4 bg-[#FAF9F6] rounded-2xl border border-[#D9DCE1]">
                <div className="w-24 h-24 rounded-full bg-[#80672E] text-white flex items-center justify-center font-serif text-3xl font-bold mb-3 shadow-md">
                  PL
                </div>
                <span className="text-xs uppercase font-bold text-[#80672E]">Principal</span>
                <h3 className="font-serif text-xl font-bold text-[#22262B] mt-1">
                  {LEADERSHIP_PROFILES.principal.name}
                </h3>
                <span className="text-xs text-[#60656C]">{LEADERSHIP_PROFILES.principal.qualifications}</span>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider block">Message from the Principal</span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#22262B]">
                  "Nurturing Engineers with Purpose and Competence"
                </h4>
                <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
                  {LEADERSHIP_PROFILES.principal.message}
                </p>
                <div className="pt-2">
                  <span className="block text-xs font-bold text-[#22262B] mb-1.5">Strategic Highlights:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#60656C]">
                    {LEADERSHIP_PROFILES.principal.focusAreas.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      )}

      {/* 4. CODE OF CONDUCT */}
      {activeTab === 'code-of-conduct' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Institutional Ethics</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
                  Code of Conduct & Governance
                </h2>
              </div>

              <a
                href={OFFICIAL_REGULATORY_DOCS.codeOfConduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FAF9F6] hover:bg-[#80672E] hover:text-white text-[#80672E] border border-[#80672E] px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Policy PDF (6.1.2)</span>
              </a>
            </div>

            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              The Code of Conduct of P.S.V. College of Engineering and Technology sets forth mandatory standards of academic integrity, personal accountability, and professional respect for students, faculty members, and administrative staff.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="space-y-3">
                <h4 className="font-serif text-base font-bold text-[#22262B]">For Students:</h4>
                <ul className="space-y-2 text-xs text-[#60656C]">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0 mt-0.5" />
                    <span>Mandatory 75% minimum attendance per course under autonomous regulations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0 mt-0.5" />
                    <span>Strict adherence to anti-ragging mandates with zero tolerance campus enforcement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0 mt-0.5" />
                    <span>Compliance with the formal dress code and mandatory college identity card display.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif text-base font-bold text-[#22262B]">For Faculty & Staff:</h4>
                <ul className="space-y-2 text-xs text-[#60656C]">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0 mt-0.5" />
                    <span>Commitment to Outcome-Based Education (OBE) and continuous pedagogical upgrades.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0 mt-0.5" />
                    <span>Maintaining unbiased assessment in internal examinations and continuous evaluations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0 mt-0.5" />
                    <span>Active engagement in sponsored research, patent publications, and FDP certifications.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. SERVICE RULES */}
      {activeTab === 'service-rules' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">HR & Service Regulations</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Institutional Service Rules & Employment Framework
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              Approved by the Governing Body in compliance with AICTE and Anna University norms, these rules govern recruitment, career advancement schemes (CAS), research allowances, medical leave, and provident fund provisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl">
                <span className="text-xs uppercase font-bold text-[#80672E]">Career Advancement (CAS)</span>
                <p className="text-xs text-[#60656C] mt-1">Structured promotion ladder from Assistant Professor to Associate and Professor roles based on API scores.</p>
              </div>
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl">
                <span className="text-xs uppercase font-bold text-[#80672E]">Research Seed Funding</span>
                <p className="text-xs text-[#60656C] mt-1">Annual financial grants for faculty projects, patent registrations, and publication incentives in Scopus/WoS journals.</p>
              </div>
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl">
                <span className="text-xs uppercase font-bold text-[#80672E]">Welfare & Leave Benefits</span>
                <p className="text-xs text-[#60656C] mt-1">Casual leave, academic duty leave for attending national/international conferences, and maternity benefits.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. COMMITTEES */}
      {activeTab === 'committees' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Statutory & Non-Statutory Governance</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Institutional Committees Directory
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C]">
              Established per AICTE, UGC, and Anna University regulatory mandates to ensure transparent, accountable, and safe institutional management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STATUTORY_COMMITTEES.map((comm) => (
              <div
                key={comm.name}
                className="bg-white border border-[#D9DCE1] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-[#80672E] transition-all"
              >
                <div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#FAF9F6] text-[#80672E] border border-[#D9DCE1]">
                    {comm.membersCount} Members
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#22262B] mt-2 mb-1">
                    {comm.name}
                  </h3>
                  <span className="text-xs text-[#80672E] font-medium block mb-2">
                    Chair: {comm.chairperson}
                  </span>
                  <p className="text-xs text-[#60656C] leading-relaxed">
                    {comm.purpose}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D9DCE1] flex items-center justify-between text-xs text-[#60656C]">
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Mail className="w-3 h-3 text-[#80672E]" />
                    {comm.email}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. AUDIT STATEMENTS (2020-2024) */}
      {activeTab === 'audit-statements' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Financial Transparency</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
                  Official Audited Financial Statements
                </h2>
                <p className="text-xs sm:text-sm text-[#60656C] mt-1">
                  Public disclosures of audited balance sheets and income-expenditure statements as mandated by UGC, AICTE, and NAAC.
                </p>
              </div>
            </div>

            {/* Audit PDF Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#D9DCE1] text-[#22262B]">
                    <th className="py-3 px-4 font-bold">Academic Year</th>
                    <th className="py-3 px-4 font-bold">Document Title</th>
                    <th className="py-3 px-4 font-bold">Verification Status</th>
                    <th className="py-3 px-4 font-bold text-right">Official Document</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9DCE1]">
                  {AUDIT_STATEMENTS.map((stmt) => (
                    <tr key={stmt.year} className="hover:bg-[#FAF9F6]/60 transition-colors">
                      <td className="py-4 px-4 font-bold text-[#80672E]">{stmt.year}</td>
                      <td className="py-4 px-4 font-medium text-[#22262B]">{stmt.title}</td>
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-100 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                          <CheckCircle2 className="w-3 h-3" />
                          {stmt.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <a
                          href={stmt.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#FAF9F6] hover:bg-[#80672E] hover:text-white text-[#80672E] border border-[#80672E] px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-xs"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download PDF</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-4 rounded-xl flex items-center justify-between text-xs text-[#60656C]">
              <span>Audited by Chartered Accountants in accordance with Indian Accounting Standards (Ind AS).</span>
              <span className="font-semibold text-[#80672E]">St. Joan's Educational Trust</span>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
