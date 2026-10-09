import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { TiltCard } from '../components/TiltCard';
import { 
  COLLEGE_DETAILS, 
  UG_DEPARTMENTS, 
  PG_DEPARTMENTS, 
  LIVE_ANNOUNCEMENTS, 
  RECRUITERS_DATA,
  INSTITUTIONAL_STATISTICS,
  LEADERSHIP_PROFILES
} from '../data/officialCollegeData';
import { PageView } from '../types/navigation';
import { 
  ShieldCheck, Award, ArrowRight, Play, Pause, Volume2, 
  Sparkles, GraduationCap, Building2, BookOpen, Users, 
  Briefcase, CheckCircle2, Calendar, Megaphone, ExternalLink,
  ChevronRight, PhoneCall, Compass, Check, MapPin
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: PageView, subTab?: string) => void;
  onOpenDepartment: (deptId: string) => void;
  onOpenEnquiry: (programName?: string) => void;
  onOpenVideoModal: () => void;
  onOpenBusRoutes: () => void;
  onOpenAccreditation: (tab: 'naac' | 'nba' | 'nirf' | 'awards') => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
};

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenDepartment,
  onOpenEnquiry,
  onOpenVideoModal,
  onOpenBusRoutes,
  onOpenAccreditation,
}) => {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeCourseTab, setActiveCourseTab] = useState<'all' | 'ug' | 'pg'>('all');
  const [activeAnnouncementIdx, setActiveAnnouncementIdx] = useState(0);

  // Autoplay hero video
  useEffect(() => {
    const video = heroVideoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleVideo = () => {
    if (heroVideoRef.current) {
      if (heroVideoRef.current.paused) {
        heroVideoRef.current.play();
        setIsPlaying(true);
      } else {
        heroVideoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const displayedPrograms = 
    activeCourseTab === 'all' 
      ? [...UG_DEPARTMENTS.slice(0, 4), ...PG_DEPARTMENTS.slice(0, 2)]
      : activeCourseTab === 'ug'
      ? UG_DEPARTMENTS
      : PG_DEPARTMENTS;

  return (
    <div className="w-full space-y-16 md:space-y-24">

      {/* 1. CINEMATIC 3D HERO SECTION */}
      <section className="relative w-full rounded-3xl overflow-hidden shadow-[0_22px_60px_rgba(0,0,0,0.18)] min-h-[540px] sm:min-h-[620px] lg:min-h-[700px] xl:min-h-[760px] flex flex-col justify-end p-6 sm:p-10 md:p-14 lg:p-18 2xl:p-20 border border-[#CCD2DC] group bg-black">
        {/* Background Looping Campus Video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <video
            ref={heroVideoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/poster.jpg"
            src="/videos/video-final.mp4"
            className="w-full h-full object-cover scale-105 transition-transform duration-700"
          >
            <source src="/videos/video-final.mp4" type="video/mp4" />
            <source src="/video-final.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />

        {/* Top Floating Badge & Video Controls */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-3 z-20">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium border border-white/20 shadow-lg"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#B49A59] animate-pulse" />
            <span>NH-48 Krishnagiri Corridor • Autonomous</span>
          </motion.div>

          <button
            onClick={toggleVideo}
            className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/25 shadow-md cursor-pointer"
            title={isPlaying ? "Pause Ambient Video" : "Play Ambient Video"}
            aria-label="Toggle hero video"
          >
            {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white ml-0.5" />}
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl xl:max-w-5xl space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#80672E]/90 text-white text-xs font-semibold uppercase tracking-wider shadow-md border border-[#B49A59] backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ffdf9d]" />
            <span>Accredited NAAC 'A' Grade • NBA Tier CSE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] drop-shadow-lg"
          >
            A campus of infinite possibilities.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="font-body text-sm sm:text-base md:text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow"
          >
            Conferred Autonomous status by UGC & Anna University. Empowering over 1,500+ aspiring engineers across 9 industry-driven undergraduate and 4 postgraduate disciplines with 22 years of educational excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
          >
            <button
              onClick={() => onNavigate('academics')}
              className="inline-flex items-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg transition-all border border-[#B49A59]/40 hover:scale-[1.02] cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Explore All Programs</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={onOpenVideoModal}
              className="inline-flex items-center gap-2 bg-black/60 hover:bg-black/80 text-white font-medium text-sm px-5 py-3 rounded-xl backdrop-blur-md transition-all border border-white/20 hover:scale-[1.02] cursor-pointer"
            >
              <Play className="w-4 h-4 text-[#B49A59]" />
              <span>Watch Campus Video</span>
            </button>

            <button
              onClick={() => onNavigate('admission')}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-5 py-3 rounded-xl backdrop-blur-md transition-all border border-white/20 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#ffdf9d]" />
              <span>Admissions Hotline 2026</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. LIVE ANNOUNCEMENTS TICKER & NOTICE BANNER */}
      <section className="w-full bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#80672E] text-white text-xs font-bold uppercase tracking-wider">
              <Megaphone className="w-3.5 h-3.5 text-[#ffdf9d]" />
              Official Notices
            </span>
            <span className="hidden sm:inline-block text-xs text-[#60656C] font-medium">
              Live updates from psvcet.ac.in
            </span>
          </div>

          {/* Marquee / Active ticker item */}
          <div className="flex-1 w-full overflow-hidden">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#22262B]">
              <span className="inline-block px-2 py-0.5 rounded bg-[#F0E8D5] text-[#80672E] font-semibold text-xs shrink-0">
                {LIVE_ANNOUNCEMENTS[activeAnnouncementIdx].date}
              </span>
              <span className="font-semibold truncate">
                {LIVE_ANNOUNCEMENTS[activeAnnouncementIdx].title}
              </span>
              <span className="text-xs text-[#60656C] hidden lg:inline truncate">
                — {LIVE_ANNOUNCEMENTS[activeAnnouncementIdx].description}
              </span>
            </div>
          </div>

          {/* Ticker controls & full notices modal trigger */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveAnnouncementIdx((prev) => (prev > 0 ? prev - 1 : LIVE_ANNOUNCEMENTS.length - 1))}
              className="p-1 rounded-md hover:bg-[#EAEFF5] text-[#60656C] cursor-pointer"
              title="Previous Notice"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
            </button>
            <span className="text-xs text-[#60656C] font-mono">
              {activeAnnouncementIdx + 1} / {LIVE_ANNOUNCEMENTS.length}
            </span>
            <button
              onClick={() => setActiveAnnouncementIdx((prev) => (prev < LIVE_ANNOUNCEMENTS.length - 1 ? prev + 1 : 0))}
              className="p-1 rounded-md hover:bg-[#EAEFF5] text-[#60656C] cursor-pointer"
              title="Next Notice"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs text-[#80672E] font-semibold hover:underline ml-2 flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. AUTHENTIC INSTITUTIONAL COUNTERS (7 OFFICIAL METRICS) */}
      <section className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {[
            { label: 'Placement Success', value: '85', suffix: '%', subtext: 'Top Tier Recruiters' },
            { label: 'Academic Legacy', value: '22', suffix: ' Yrs', subtext: 'Estd. by St. Joan\'s' },
            { label: 'Placement Offers', value: '453', suffix: '+', subtext: 'Annual Campus Drives' },
            { label: 'Active Scholars', value: '1500', suffix: '+', subtext: 'Across 13 Disciplines' },
            { label: 'Library Volumes', value: '29000', suffix: '+', subtext: 'Digital DELNET & IEEE' },
            { label: 'Dedicated Faculty', value: '130', suffix: '+', subtext: 'PhD & Research Mentors' },
            { label: 'Successful Alumni', value: '3500', suffix: '+', subtext: 'Global Industry Leaders' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i}
              className="bg-white border border-[#D9DCE1] rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#80672E]/50 transition-all shadow-xs hover:shadow-md"
            >
              <span className="text-xs font-semibold text-[#60656C] uppercase tracking-wider">
                {stat.label}
              </span>
              <div className="my-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#80672E]">
                  {stat.value}{stat.suffix}
                </span>
              </div>
              <span className="text-[11px] text-[#60656C] leading-tight">
                {stat.subtext}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. VISIONARY LEADERSHIP & INSTITUTIONAL NARRATIVE */}
      <section className="w-full bg-[#FAF9F6] border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0E8D5] text-[#80672E] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>St. Joan's Educational Trust</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#22262B] leading-tight">
              Where tradition meets technological transformation.
            </h2>

            <p className="font-body text-sm sm:text-base text-[#60656C] leading-relaxed">
              Established in 2008 by visionary educationalist <strong className="text-[#22262B]">Dr. P. Selvam</strong>, P.S.V College of Engineering and Technology stands on an expansive 30+ acre eco-friendly campus along the Chennai-Bengaluru NH-48 highway corridor.
            </p>

            <p className="font-body text-sm sm:text-base text-[#60656C] leading-relaxed">
              Conferred <strong className="text-[#22262B]">Autonomous status</strong> by UGC and Anna University, PSVCET integrates modern Industry 4.0 curriculum with Outcome-Based Education (OBE), advanced research laboratories, and dedicated placement training from semester one.
            </p>

            {/* Core Values Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'UGC Conferred Autonomous Institution',
                'Accredited by NAAC with \'A\' Grade',
                'NBA Tier Accredited (Dept of CSE)',
                'ISO 9001:2015 Certified Operations',
                'District Green Champion Award by MoE',
                '180+ Recruiter Network & 85% Placements'
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#22262B]">
                  <Check className="w-4 h-4 text-[#80672E] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('about', 'about-college')}
                className="inline-flex items-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Read Institutional History</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('about', 'administration')}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF9F6] text-[#22262B] text-sm font-semibold px-5 py-2.5 rounded-xl border border-[#D9DCE1] transition-all cursor-pointer"
              >
                <span>Leadership Messages</span>
              </button>
            </div>
          </div>

          {/* Right: Chairman & Administration Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#D9DCE1] rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF9F6] rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-[#80672E] text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md shrink-0">
                  PS
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-[#80672E] block">
                    Founder Chairman
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#22262B]">
                    {LEADERSHIP_PROFILES.chairman.name}
                  </h3>
                  <span className="text-xs text-[#60656C]">
                    {LEADERSHIP_PROFILES.chairman.qualifications}
                  </span>
                </div>
              </div>

              <blockquote className="italic text-xs sm:text-sm text-[#60656C] leading-relaxed border-l-2 border-[#80672E] pl-3 mb-5">
                "{LEADERSHIP_PROFILES.chairman.message.slice(0, 240)}..."
              </blockquote>

              <div className="space-y-2 pt-2 border-t border-[#D9DCE1]">
                <div className="flex items-center justify-between text-xs text-[#22262B]">
                  <span className="font-medium">Secretary:</span>
                  <span className="font-bold text-[#80672E]">{LEADERSHIP_PROFILES.secretary.name}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#22262B]">
                  <span className="font-medium">Principal:</span>
                  <span className="font-bold text-[#80672E]">{LEADERSHIP_PROFILES.principal.name}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#22262B]">
                  <span className="font-medium">TNEA Counselling Code:</span>
                  <span className="px-2 py-0.5 bg-[#FAF9F6] border border-[#80672E]/40 rounded font-bold text-[#80672E]">
                    {COLLEGE_DETAILS.counsellingCode}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#D9DCE1] flex items-center justify-between">
                <button
                  onClick={() => onNavigate('about', 'audit-statements')}
                  className="text-xs text-[#80672E] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Audit Statements 2020-2024</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <button
                  onClick={() => onNavigate('about', 'committees')}
                  className="text-xs text-[#60656C] hover:text-[#22262B] font-medium"
                >
                  Statutory Committees
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. ACADEMIC PROGRAMS SHOWCASE (9 UG & 4 PG) */}
      <section className="w-full space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0E8D5] text-[#80672E] text-xs font-bold uppercase tracking-wider mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Degree Matrix</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#22262B]">
              Academic Programs Offered
            </h2>
            <p className="text-sm text-[#60656C] mt-1 max-w-xl">
              All undergraduate and postgraduate degrees operate under our flexible Choice Based Credit System (CBCS) autonomous curriculum.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-[#FAF9F6] p-1.5 rounded-xl border border-[#D9DCE1] shrink-0">
            <button
              onClick={() => setActiveCourseTab('all')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeCourseTab === 'all'
                  ? 'bg-[#80672E] text-white shadow-xs'
                  : 'text-[#60656C] hover:text-[#22262B]'
              }`}
            >
              Featured (6)
            </button>
            <button
              onClick={() => setActiveCourseTab('ug')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeCourseTab === 'ug'
                  ? 'bg-[#80672E] text-white shadow-xs'
                  : 'text-[#60656C] hover:text-[#22262B]'
              }`}
            >
              B.E. / B.Tech (9)
            </button>
            <button
              onClick={() => setActiveCourseTab('pg')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeCourseTab === 'pg'
                  ? 'bg-[#80672E] text-white shadow-xs'
                  : 'text-[#60656C] hover:text-[#22262B]'
              }`}
            >
              PG (MBA / M.E.) (4)
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPrograms.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i}
              className="bg-white border border-[#D9DCE1] rounded-2xl p-6 flex flex-col justify-between hover:border-[#80672E] hover:shadow-lg transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#FAF9F6] border border-[#D9DCE1] text-xs font-bold text-[#80672E]">
                    {prog.degree}
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                    prog.category.includes('NBA') 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-[#F0E8D5] text-[#80672E]'
                  }`}>
                    {prog.category}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#22262B] group-hover:text-[#80672E] transition-colors line-clamp-2">
                  {prog.name}
                </h3>

                <p className="font-body text-xs text-[#60656C] mt-2 line-clamp-3 leading-relaxed">
                  {prog.desc}
                </p>

                <div className="grid grid-cols-2 gap-2 my-4 pt-3 border-t border-[#D9DCE1] text-xs text-[#60656C]">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#A0A5AD]">Sanctioned Intake</span>
                    <span className="font-semibold text-[#22262B]">{prog.intake}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#A0A5AD]">Duration</span>
                    <span className="font-semibold text-[#22262B]">{prog.duration}</span>
                  </div>
                </div>

                {prog.keyLabs && prog.keyLabs.length > 0 && (
                  <div className="space-y-1 mb-4">
                    <span className="block text-[10px] uppercase font-bold text-[#A0A5AD]">Key Facilities</span>
                    <div className="flex flex-wrap gap-1">
                      {prog.keyLabs.slice(0, 2).map((lab) => (
                        <span key={lab} className="text-[10px] bg-[#FAF9F6] text-[#60656C] px-2 py-0.5 rounded border border-[#D9DCE1]">
                          {lab}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#D9DCE1] flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenDepartment(prog.id)}
                  className="text-xs font-semibold text-[#80672E] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Syllabus & Labs</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  onClick={() => onOpenEnquiry(prog.name)}
                  className="text-xs font-semibold bg-[#FAF9F6] hover:bg-[#80672E] hover:text-white text-[#22262B] px-3 py-1.5 rounded-lg border border-[#D9DCE1] transition-all cursor-pointer"
                >
                  Enquire
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('academics')}
            className="inline-flex items-center gap-2 bg-[#FAF9F6] hover:bg-white text-[#80672E] border border-[#80672E]/50 font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-xs cursor-pointer"
          >
            <span>View Complete Academic Catalog & Syllabi</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. INFRASTRUCTURE & CAMPUS LIFE PREVIEW (BENTO HIGHLIGHT) */}
      <section className="w-full space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0E8D5] text-[#80672E] text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Campus Ecosystem</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#22262B]">
              World-Class Infrastructure
            </h2>
          </div>

          <button
            onClick={() => onNavigate('infrastructure')}
            className="text-xs sm:text-sm font-semibold text-[#80672E] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Explore All Facilities</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Central Digital Library (2 cols) */}
          <div className="md:col-span-2 bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#80672E] text-white flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Resource Center</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#22262B] mt-1">
                Central Digital Library
              </h3>
              <p className="text-xs sm:text-sm text-[#60656C] mt-2 leading-relaxed">
                Housing over 29,000+ volumes, 50+ national & international journals, automated barcoded cataloging, and high-speed digital library terminals with IEEE, DELNET, and NPTEL access.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#D9DCE1] flex items-center justify-between text-xs font-semibold text-[#80672E]">
              <span>500+ Seating Capacity • Automated OPAC</span>
              <button onClick={() => onNavigate('infrastructure', 'library')} className="hover:underline cursor-pointer">
                Learn More →
              </button>
            </div>
          </div>

          {/* Card 2: 30+ GPS Bus Fleet */}
          <div className="bg-white border border-[#D9DCE1] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F0E8D5] text-[#80672E] flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Transit</span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#22262B] mt-1">
                30+ GPS College Buses
              </h3>
              <p className="text-xs text-[#60656C] mt-2 leading-relaxed">
                Extensive fleet serving Hosur, Krishnagiri, Dharmapuri, Tirupattur, Bargur, and interstate corridors with live driver contacts.
              </p>
            </div>
            <button
              onClick={onOpenBusRoutes}
              className="mt-4 text-xs font-semibold text-[#80672E] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Search Bus Routes</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Card 3: Student Residences */}
          <div className="bg-white border border-[#D9DCE1] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F0E8D5] text-[#80672E] flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Residential</span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#22262B] mt-1">
                Modern Hostels & Dining
              </h3>
              <p className="text-xs text-[#60656C] mt-2 leading-relaxed">
                Separate residential blocks for boys and girls with RO purified drinking water, Wi-Fi connectivity, and hygienic dining hall.
              </p>
            </div>
            <button
              onClick={() => onNavigate('infrastructure', 'hostels')}
              className="mt-4 text-xs font-semibold text-[#80672E] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Hostels</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </section>

      {/* 7. PLACEMENTS & CORPORATE RECRUITERS MARQUEE */}
      <section className="w-full bg-[#FAF9F6] border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0E8D5] text-[#80672E] text-xs font-bold uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Advantage</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#22262B]">
              85% Placement Success & Top MNCs
            </h2>
            <p className="text-sm text-[#60656C] mt-1">
              453+ offers handed annually with 180+ visiting corporate recruitment partners.
            </p>
          </div>

          <button
            onClick={() => onNavigate('placement')}
            className="inline-flex items-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <span>Placement Matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Recruiter Marquee Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {RECRUITERS_DATA.map((rec) => (
            <div
              key={rec.name}
              className="bg-white border border-[#D9DCE1] rounded-xl p-3.5 text-center flex flex-col items-center justify-center hover:border-[#80672E] transition-all shadow-xs"
            >
              <span className="font-serif text-xs font-bold text-[#22262B] line-clamp-1">
                {rec.name}
              </span>
              <span className="text-[10px] text-[#80672E] font-medium mt-1">
                {rec.tier}
              </span>
              <span className="text-[10px] text-[#A0A5AD] mt-0.5">
                {rec.package}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CAMPUS LOCATION & HIGHWAY CONNECTIVITY */}
      <section className="w-full bg-[#FAF9F6] border border-[#CCD2DC] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-[#F0E8D5] text-[#80672E] text-xs font-bold uppercase tracking-wider border border-[#80672E]/30 inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Strategic Location on NH-48 Expressway Corridor
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22262B]">
              Visit Our 30+ Acre Autonomous Campus
            </h2>
            <p className="text-sm text-[#60656C] leading-relaxed">
              Mittapalli, Balinayanapalli Post, Elathagiri SO, Krishnagiri - Chennai National Highway (NH-48), Krishnagiri - 635 108, Tamil Nadu.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <a
              href="https://maps.app.goo.gl/WKEqs8KqW6csb7oi7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#80672E] hover:bg-[#664F18] text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md transition-all hover:scale-105 cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Open in Google Maps ↗</span>
            </a>
            <button
              onClick={onOpenBusRoutes}
              className="inline-flex items-center gap-2 px-4 py-3 bg-white hover:bg-[#F0E8D5] border border-[#CCD2DC] text-[#22262B] rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>30+ Bus Routes</span>
            </button>
          </div>
        </div>

        {/* Connectivity Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white border border-[#D9DCE1] rounded-2xl p-4 text-center space-y-1">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#80672E]">12 km</span>
            <span className="text-xs text-[#60656C] block font-medium">Krishnagiri Town & Bus Stand</span>
          </div>
          <div className="bg-white border border-[#D9DCE1] rounded-2xl p-4 text-center space-y-1">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#80672E]">45 km</span>
            <span className="text-xs text-[#60656C] block font-medium">Hosur Industrial & IT Hub</span>
          </div>
          <div className="bg-white border border-[#D9DCE1] rounded-2xl p-4 text-center space-y-1">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#80672E]">85 km</span>
            <span className="text-xs text-[#60656C] block font-medium">Bengaluru Electronic City</span>
          </div>
          <div className="bg-white border border-[#D9DCE1] rounded-2xl p-4 text-center space-y-1">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#80672E]">NH-48</span>
            <span className="text-xs text-[#60656C] block font-medium">Chennai-Bengaluru Highway</span>
          </div>
        </div>

        {/* Live Map Frame */}
        <div className="w-full aspect-[21/9] min-h-[300px] rounded-2xl overflow-hidden border border-[#D9DCE1] shadow-xs relative group">
          <iframe
            title="PSV College of Engineering and Technology Campus Map"
            src="https://maps.google.com/maps?q=PSV+College+of+Engineering+and+Technology+Mittapalli&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://maps.app.goo.gl/WKEqs8KqW6csb7oi7"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white/95 hover:bg-white text-[#22262B] border border-[#CCD2DC] shadow-lg px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all hover:scale-105"
          >
            <MapPin className="w-4 h-4 text-[#80672E]" />
            <span>Open in Google Maps Application ↗</span>
          </a>
        </div>
      </section>

      {/* 9. ADMISSION HOTLINE & ENQUIRY CALLOUT */}
      <section className="w-full bg-gradient-to-r from-[#80672E] via-[#664F18] to-[#80672E] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-white/20 text-[#ffdf9d] text-xs font-bold uppercase tracking-wider border border-white/25">
              Admissions Open 2026-2027
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Begin your autonomous engineering journey today.
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              TNEA Counselling Code: <strong className="text-[#ffdf9d]">2642</strong> (Alternate: 2636). Direct admission assistance available for B.E., B.Tech, M.E., and MBA degree courses.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#ffdf9d]" />
                <span>Merit & First Graduate Scholarships</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#ffdf9d]" />
                <span>Govt 7.5% School Quota Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#ffdf9d]" />
                <span>Sports Quota Facilities</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={() => onNavigate('admission', 'enquiry-hotline')}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#664F18] hover:bg-[#FAF9F6] font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#80672E]" />
              <span>Submit Admission Enquiry</span>
            </button>
            <a
              href="tel:+918838428106"
              className="inline-flex items-center justify-center gap-2 bg-black/30 hover:bg-black/50 text-white font-medium text-xs px-5 py-3 rounded-xl border border-white/25 transition-all text-center"
            >
              <span>Direct Helpline: +91 88384 28106</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
