import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  COLLEGE_DETAILS, 
  LEADERSHIP_PROFILES, 
  STATUTORY_COMMITTEES, 
  AUDIT_STATEMENTS, 
  OFFICIAL_REGULATORY_DOCS,
  INSTITUTIONAL_PILLARS
} from '../data/officialCollegeData';
import { AboutSubTab, PageView } from '../types/navigation';
import { 
  Building2, Award, Users, ShieldCheck, FileText, Download, 
  ExternalLink, ChevronRight, CheckCircle2, ArrowRight, BookOpen,
  Sparkles, Check, Phone, Mail, Quote, GraduationCap, UserCheck, Briefcase
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
  const [adminDeskTab, setAdminDeskTab] = useState<'all' | 'chairman' | 'secretary' | 'principal'>('all');

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

      {/* 2. VISION, MISSION & QUALITY POLICY */}
      {activeTab === 'vision-mission' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          
          {/* Section Header */}
          <div className="bg-gradient-to-r from-[#FAF9F6] via-white to-[#FAF9F6] border border-[#D9DCE1] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#80672E]/10 border border-[#80672E]/20 text-[#80672E] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Foundational Charter</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
                Vision, Mission & Quality Policy
              </h2>
              <p className="text-xs sm:text-sm text-[#60656C] mt-1 max-w-2xl">
                The institutional pillars formulated by St. Joan's Educational Trust to foster technical competence, innovation, and ethical human values.
              </p>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl text-xs font-bold text-[#80672E] shrink-0">
              <span>Motto: Prosperity • Solidarity • Victory</span>
            </div>
          </div>

          {/* 3 Pillars Master Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSTITUTIONAL_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white border-2 border-[#D9DCE1] hover:border-[#80672E] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FAF9F6] to-[#F0E8D5] border border-[#80672E]/30 p-3 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <img 
                        src={pillar.iconImage} 
                        alt={pillar.title} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#D9DCE1] text-[#80672E] text-[10px] font-bold uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#22262B] group-hover:text-[#80672E] transition-colors mb-1">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-bold text-[#80672E] block mb-4">
                    {pillar.subtitle}
                  </span>

                  <blockquote className="italic font-serif text-xs sm:text-sm text-[#22262B] bg-[#FAF9F6] border-l-4 border-[#80672E] p-4 rounded-r-xl leading-relaxed mb-5">
                    "{pillar.statement}"
                  </blockquote>

                  {pillar.points && (
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-bold text-[#22262B] uppercase tracking-wider block">
                        Core Focus Areas:
                      </span>
                      <ul className="space-y-2 text-xs text-[#60656C]">
                        {pillar.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#80672E] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9DCE1] flex items-center justify-between text-xs text-[#60656C]">
                  <span className="font-medium">PSVCET Autonomous Campus</span>
                  <span className="font-bold text-[#80672E]">Estd. 2008</span>
                </div>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* 3. ADMINISTRATION & LEADERSHIP */}
      {activeTab === 'administration' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          
          {/* Section Masthead */}
          <div className="bg-gradient-to-r from-[#FAF9F6] via-white to-[#FAF9F6] border border-[#D9DCE1] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#80672E]/10 border border-[#80672E]/20 text-[#80672E] text-xs font-bold uppercase tracking-wider mb-2">
                <Users className="w-3.5 h-3.5" />
                <span>Governing Council & Directorate</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
                Executive Leadership & Administration
              </h2>
              <p className="text-xs sm:text-sm text-[#60656C] mt-1">
                Guiding institutional vision, autonomous academic stewardship, and rural empowerment across 22 years of educational excellence.
              </p>
            </div>

            {/* Quick Desk Pill Selector */}
            <div className="flex items-center gap-2 p-1.5 bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl shrink-0 self-start md:self-auto">
              {[
                { id: 'chairman', label: 'Chairman Desk' },
                { id: 'secretary', label: 'Secretary Desk' },
                { id: 'principal', label: 'Principal Desk' }
              ].map((desk) => (
                <button
                  key={desk.id}
                  onClick={() => setAdminDeskTab(desk.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    (adminDeskTab === desk.id || (adminDeskTab === 'all' && desk.id === 'chairman'))
                      ? 'bg-[#80672E] text-white shadow-sm'
                      : 'text-[#60656C] hover:text-[#22262B]'
                  }`}
                >
                  {desk.label}
                </button>
              ))}
            </div>
          </div>

          {/* Equal-Height 3-Leader Executive Master Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'chairman' as const,
                profile: LEADERSHIP_PROFILES.chairman,
                role: 'Founder Chairman',
                roleColor: 'bg-[#80672E] text-white',
                subtitle: "St. Joan's Educational Trust",
                watchword: 'Prosperity • Solidarity • Victory',
                tag: 'Founded PSVCET in 2008'
              },
              {
                id: 'secretary' as const,
                profile: LEADERSHIP_PROFILES.secretary,
                role: 'Secretary',
                roleColor: 'bg-[#664F18] text-white',
                subtitle: 'Administrative Directorate',
                watchword: 'Education Means Service',
                tag: 'EDMSL (UK) • MBA (UK)'
              },
              {
                id: 'principal' as const,
                profile: LEADERSHIP_PROFILES.principal,
                role: 'Principal',
                roleColor: 'bg-[#22262B] text-white',
                subtitle: 'Academic Governance',
                watchword: 'Excellence in Engineering',
                tag: 'Serving as Principal since 2015'
              }
            ].map((leader) => {
              const isSelected = (adminDeskTab === leader.id) || (adminDeskTab === 'all' && leader.id === 'chairman');
              return (
                <div
                  key={leader.id}
                  onClick={() => setAdminDeskTab(leader.id)}
                  className={`group relative bg-white border-2 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-[#80672E] shadow-xl ring-4 ring-[#80672E]/10 bg-gradient-to-b from-[#FAF9F6] to-white'
                      : 'border-[#D9DCE1] shadow-xs hover:border-[#80672E]/50 hover:shadow-md'
                  }`}
                >
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${leader.roleColor}`}>
                      {leader.role}
                    </span>
                    {isSelected ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#80672E] bg-[#80672E]/10 px-2.5 py-0.5 rounded-full">
                        <Check className="w-3 h-3" />
                        <span>Active Desk</span>
                      </span>
                    ) : (
                      <span className="text-[11px] text-[#A0A5AD] group-hover:text-[#80672E] transition-colors font-medium">
                        Click to Read
                      </span>
                    )}
                  </div>

                  {/* Profile Portrait & Dignitary Meta */}
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="relative">
                      <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-md border-2 transition-transform duration-500 group-hover:scale-105 bg-[#FAF9F6] ${
                        isSelected ? 'border-[#80672E] ring-2 ring-[#80672E]/30' : 'border-[#D9DCE1]'
                      }`}>
                        <img
                          src={leader.profile.image}
                          alt={leader.profile.name}
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#22262B] group-hover:text-[#80672E] transition-colors leading-tight">
                        {leader.profile.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#80672E] mt-0.5">
                        {leader.profile.qualifications}
                      </p>
                      <p className="text-[11px] text-[#60656C] mt-0.5">
                        {leader.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Quote / Motto snippet */}
                  <div className="mt-4 pt-3 border-t border-[#D9DCE1]/70 text-center space-y-2">
                    <p className="text-[11px] text-[#60656C] italic line-clamp-2 px-1">
                      "{leader.profile.quote}"
                    </p>
                    <div className="inline-block px-2.5 py-1 rounded-lg bg-[#FAF9F6] border border-[#D9DCE1] text-[10px] font-bold text-[#80672E] tracking-wide">
                      {leader.watchword}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-4 pt-3 border-t border-[#D9DCE1]/50 flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setAdminDeskTab(leader.id);
                      }}
                      className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#80672E] text-white shadow-xs'
                          : 'bg-[#FAF9F6] text-[#22262B] hover:bg-[#80672E] hover:text-white border border-[#D9DCE1]'
                      }`}
                    >
                      <span>{isSelected ? 'Viewing Full Desk' : 'Open Executive Desk'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Unified Masterpiece Active Executive Desk Panel */}
          {(() => {
            const currentLeaderKey = (adminDeskTab === 'secretary' || adminDeskTab === 'principal') ? adminDeskTab : 'chairman';
            const leader = {
              chairman: {
                profile: LEADERSHIP_PROFILES.chairman,
                role: 'Founder Chairman',
                badgeText: "From the Founder Chairman's Desk",
                headerTag: 'Watchwords: Prosperity • Solidarity • Victory',
                trustPill: "St. Joan's Educational Trust (Est. 2008)",
                email: 'selvam.psv@gmail.com',
                phone: '+91 94442 73966',
                extraCredentials: [
                  { label: 'Trust', val: "St. Joan's Educational Trust" },
                  { label: 'Role', val: 'Founder & Managing Trustee' },
                  { label: 'Milestone', val: '22 Years of Institutional Leadership' }
                ]
              },
              secretary: {
                profile: LEADERSHIP_PROFILES.secretary,
                role: 'Secretary',
                badgeText: "From the Secretary's Desk",
                headerTag: 'Motto: Education Means Service',
                trustPill: 'Administrative Directorate & Global Management',
                email: 'secretary@psvcet.ac.in',
                phone: '+91 63693 42733',
                extraCredentials: [
                  { label: 'Degrees', val: 'EDMSL (UK) • MBA (UK) • Ph.D' },
                  { label: 'Role', val: 'Executive Secretary & Director' },
                  { label: 'Focus', val: 'Modern Campus Tech & Youth Innovation' }
                ]
              },
              principal: {
                profile: LEADERSHIP_PROFILES.principal,
                role: 'Principal',
                badgeText: "From the Principal's Desk",
                headerTag: 'Serving as Principal since June 2015',
                trustPill: 'Academic & Autonomous Research Stewardship',
                email: 'principal@psvcet.ac.in',
                phone: '+91 88384 28106',
                extraCredentials: [
                  { label: 'Degrees', val: 'B.E. (Mech), M.E. (Thermal), Ph.D' },
                  { label: 'Experience', val: '20+ Years in Teaching & Autonomous R&D' },
                  { label: 'Institutions', val: 'PSNA CET • SVCE • Anna University' }
                ]
              }
            }[currentLeaderKey];

            return (
              <motion.div
                key={currentLeaderKey}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-2 border-[#80672E]/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden"
              >
                {/* Decorative Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#80672E] via-[#B49A59] to-[#80672E]" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  
                  {/* Left Column: Formal Leadership Portrait & Dossier */}
                  <div className="lg:col-span-4 flex flex-col items-center text-center p-6 sm:p-8 bg-gradient-to-b from-[#FAF9F6] to-white rounded-3xl border border-[#D9DCE1] shadow-xs">
                    <div className="relative mb-5 group">
                      <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-xl border-2 border-[#80672E] ring-4 ring-[#80672E]/15 bg-[#FAF9F6]">
                        <img 
                          src={leader.profile.image} 
                          alt={leader.profile.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-[#80672E] text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md whitespace-nowrap">
                        {leader.role}
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B] mt-2">
                      {leader.profile.name}
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold text-[#80672E] mt-0.5 block">
                      {leader.profile.qualifications}
                    </span>
                    <span className="text-xs text-[#60656C] mt-1 block">
                      {leader.trustPill}
                    </span>

                    {/* Quick Dossier Chips */}
                    <div className="mt-6 pt-5 border-t border-[#D9DCE1] w-full flex flex-col gap-2.5 text-left text-xs text-[#60656C]">
                      {leader.extraCredentials.map((c, i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#D9DCE1]/70">
                          <span className="font-semibold text-[#22262B]">{c.label}:</span>
                          <span className="text-[11px] text-[#80672E] font-medium truncate ml-2">{c.val}</span>
                        </div>
                      ))}

                      <div className="flex items-center gap-2 pt-2 text-xs text-[#60656C]">
                        <Mail className="w-3.5 h-3.5 text-[#80672E] shrink-0" />
                        <a href={`mailto:${leader.email}`} className="hover:text-[#80672E] hover:underline truncate">
                          {leader.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#60656C]">
                        <Phone className="w-3.5 h-3.5 text-[#80672E] shrink-0" />
                        <a href={`tel:${leader.phone}`} className="hover:text-[#80672E] hover:underline font-semibold">
                          {leader.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Full Narrative Message & Key Strategic Commitments */}
                  <div className="lg:col-span-8 space-y-6">
                    
                    {/* Masthead Ribbon */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9DCE1] pb-4">
                      <div>
                        <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider block">
                          Official Communication
                        </span>
                        <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#22262B] mt-0.5">
                          {leader.badgeText}
                        </h4>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#80672E]/30 text-[#80672E] font-bold">
                        {leader.headerTag}
                      </span>
                    </div>

                    {/* Featured Quote Callout Banner */}
                    <div className="bg-[#FAF9F6] border-l-4 border-[#80672E] rounded-r-2xl p-5 sm:p-6 shadow-xs">
                      <div className="flex items-start gap-3.5">
                        <Quote className="w-7 h-7 text-[#80672E] shrink-0 opacity-80 mt-0.5" />
                        <div>
                          <p className="font-serif italic text-base sm:text-lg font-semibold text-[#22262B] leading-relaxed">
                            "{leader.profile.quote}"
                          </p>
                          <span className="text-xs text-[#80672E] font-bold mt-2 block tracking-wide">
                            — {leader.profile.quoteAuthor}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Special Bio Credentials for Principal */}
                    {currentLeaderKey === 'principal' && (
                      <div className="bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl p-4 sm:p-5 space-y-2">
                        <div className="flex items-center gap-2 text-[#80672E] font-bold text-xs uppercase tracking-wide">
                          <GraduationCap className="w-4 h-4" />
                          <span>Academic Leadership & Research Profile</span>
                        </div>
                        <p className="text-xs text-[#60656C] leading-relaxed">
                          {LEADERSHIP_PROFILES.principal.bio}
                        </p>
                      </div>
                    )}

                    {/* Authentic Narrative Paragraphs */}
                    <div className="space-y-4 text-xs sm:text-sm text-[#60656C] leading-relaxed">
                      {leader.profile.paragraphs?.map((p, idx) => (
                        <p key={idx} className="text-justify">{p}</p>
                      )) || <p>{leader.profile.message}</p>}
                    </div>

                    {/* Strategic Focus Areas & Institutional Commitments */}
                    <div className="pt-4 border-t border-[#D9DCE1]">
                      <span className="block text-xs font-bold text-[#22262B] uppercase tracking-wider mb-3">
                        Strategic Priorities & Institutional Pillars:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#60656C]">
                        {leader.profile.focusAreas.map((f, i) => (
                          <div key={i} className="flex items-start gap-2.5 bg-[#FAF9F6] p-3 rounded-xl border border-[#D9DCE1]/80 hover:border-[#80672E]/40 transition-colors">
                            <Check className="w-4 h-4 text-[#80672E] shrink-0 mt-0.5" />
                            <span className="font-medium text-[#22262B]">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })()}

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

            {/* Official Faculty Roster Download Callout */}
            <div className="bg-[#FAF9F6] border border-[#80672E]/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#80672E]/10 flex items-center justify-center text-[#80672E] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#22262B]">Certified Faculty Roster & Teaching Appointments</h4>
                  <p className="text-xs text-[#60656C]">AICTE & Anna University approved full faculty directory with qualifications and designations.</p>
                </div>
              </div>
              <a
                href={OFFICIAL_REGULATORY_DOCS.facultyDetails.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all shrink-0 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>View Faculty PDF</span>
              </a>
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
