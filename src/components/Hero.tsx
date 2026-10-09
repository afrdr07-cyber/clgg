import React, { useState } from 'react';
import {
  ArrowRight, Sparkles, Play, ShieldCheck, Award,
  GraduationCap, TrendingUp, Building2, CheckCircle2,
  FileText, Download, Compass, ChevronRight
} from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const stats = [
    {
      value: '96.4%',
      label: 'Placement Record',
      desc: 'Over 580+ Offers in 2025-26',
      icon: TrendingUp,
    },
    {
      value: '45.0 LPA',
      label: 'Highest Package',
      desc: 'International & Top Tech CTC',
      icon: Award,
    },
    {
      value: '180+',
      label: 'Tier-1 Recruiters',
      desc: 'TCS, Infosys, Amazon, Zoho & More',
      icon: Building2,
    },
    {
      value: '25+',
      label: 'Centers of Excellence',
      desc: 'AI, Robotics, VLSI & IoT Labs',
      icon: Sparkles,
    },
    {
      value: '40+',
      label: 'Patents Published',
      desc: 'Funded R&D & Tech Incubation',
      icon: GraduationCap,
    }
  ];

  return (
    <section id="home" className="relative pt-6 pb-20 md:pt-10 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6]">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1760px] h-96 bg-gradient-to-b from-[#F0E8D5]/30 to-transparent pointer-events-none rounded-full blur-3xl -z-10"></div>

      <div className="max-w-[1760px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* 1. Hero Content Header */}
        <div className="text-center max-w-5xl mx-auto space-y-5">
          {/* Eyebrow Accreditation Tag */}
          <div className="inline-flex items-center gap-2 bg-[#F0E8D5] text-[#80672E] px-4 py-1.5 rounded-full font-label text-xs sm:text-xs font-bold tracking-widest uppercase border border-[#B49A59]/40 shadow-sm animate-in fade-in duration-500">
            <ShieldCheck className="w-4 h-4 text-[#80672E]" />
            <span>NAAC 'A' Grade • NBA Tier • Autonomous Institution</span>
          </div>

          {/* Headline Display */}
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight leading-[1.15] sm:leading-[1.12]">
            Pioneering Excellence in <span className="gold-gradient-text">Engineering</span>, Autonomous Learning & Global Leadership
          </h1>

          {/* Subtitle / Lead Paragraph */}
          <p className="font-body text-[#60656C] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
            Welcome to <strong className="text-charcoal font-semibold">P.S.V. College of Engineering and Technology (PSVCET)</strong>. Empowering the next generation of engineers with flexible autonomous CBCS curricula, cutting-edge research laboratories, and world-class placement pathways.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onOpenEnquiry}
              className="btn-gold flex items-center gap-2.5 text-sm sm:text-base px-6 py-3 rounded-xl shadow-lg hover:shadow-xl"
            >
              <span>Explore Admissions 2026</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#programs"
              className="btn-secondary flex items-center gap-2 text-sm sm:text-base px-5 py-3 rounded-xl"
            >
              <Compass className="w-4 h-4 text-[#80672E]" />
              <span>View 8+ B.E. / B.Tech Programs</span>
            </a>
            <a
              href="#prospectus"
              onClick={(e) => {
                e.preventDefault();
                onOpenEnquiry();
              }}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#80672E] hover:underline px-3 py-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download Prospectus</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2. Hero Media Showcase & Visual Frame (Stitch Specification: 20px-24px rounded panel, 1px silver outline, gold ambient glow) */}
        <div className="mt-12 relative">
          <div className="relative rounded-2xl md:rounded-panel overflow-hidden border border-[#D9DCE1] bg-white shadow-tier-2 group">
            {/* Cinematic Campus Visual Overlay */}
            <div className="relative h-[340px] sm:h-[460px] lg:h-[540px] w-full bg-gradient-to-tr from-charcoal/90 via-charcoal/40 to-transparent flex flex-col justify-between p-6 sm:p-10 text-white">

              {/* Background Campus Illustration / Visual */}
              <div
                className="absolute inset-0 bg-cover bg-center -z-10 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(rgba(24, 28, 33, 0.4), rgba(24, 28, 33, 0.75)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80')`,
                }}
              />

              {/* Top Frame Tag */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white border border-white/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Autonomous Campus 2026-27</span>
                </div>
                <span className="text-xs text-white/80 font-medium hidden sm:inline-block">
                  Krishnagiri, Tamil Nadu • 30+ Acre Eco-Campus
                </span>
              </div>

              {/* Center Play Button for Campus Virtual Tour */}
              <div className="my-auto text-center flex flex-col items-center">
                <button
                  onClick={() => setIsPlayingVideo(true)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 text-[#80672E] hover:bg-white hover:scale-110 flex items-center justify-center shadow-2xl transition-all duration-300 group/btn"
                  aria-label="Play Campus Video Tour"
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-[#80672E] ml-1 group-hover/btn:scale-110 transition-transform" />
                </button>
                <p className="mt-3 text-xs sm:text-sm font-semibold tracking-wide text-white/95 uppercase drop-shadow">
                  Watch Autonomous Campus Tour (3 mins)
                </p>
              </div>

              {/* Bottom Frame Details */}
              <div className="flex flex-wrap items-end justify-between gap-4 border-t border-white/20 pt-4">
                <div>
                  <h3 className="font-headline text-lg sm:text-2xl font-bold text-white">
                    Center for Advanced Engineering & Applied Research
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-light mt-0.5">
                    Affiliated to Anna University • AICTE Approved • ISO 9001:2015 Certified
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[#80672E] text-white px-3 py-1.5 rounded-lg font-semibold">
                    Code: 2636
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Floating Key Institutional Milestones Strip (Stitch Spec: Platinum/Pearl Container, Silver Borders, Tier-2 Shadow) */}
        <div className="mt-8 lg:-mt-10 relative z-20 max-w-[1760px] w-full mx-auto">
          <div className="bg-white/95 backdrop-blur-lg border border-[#D9DCE1] rounded-2xl p-4 sm:p-6 lg:p-8 shadow-tier-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D9DCE1]">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className={`flex flex-col items-center text-center px-2 ${idx > 0 ? 'pt-4 sm:pt-0' : ''}`}>
                    <div className="w-8 h-8 rounded-full bg-[#F0E8D5] flex items-center justify-center text-[#80672E] mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-headline font-bold text-2xl sm:text-3xl text-charcoal tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#80672E] mt-0.5">
                      {stat.label}
                    </span>
                    <span className="text-[11px] text-[#60656C] mt-0.5 leading-tight">
                      {stat.desc}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal */}
      {isPlayingVideo && (
        <div className="fixed inset-0 bg-charcoal/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl border border-[#D9DCE1]">
            <div className="p-4 bg-[#FAF9F6] border-b border-[#D9DCE1] flex items-center justify-between">
              <span className="font-headline font-bold text-charcoal">PSVCET Autonomous Campus Showcase</span>
              <button
                onClick={() => setIsPlayingVideo(false)}
                className="text-charcoal hover:text-[#80672E] font-bold text-sm"
              >
                Close ✕
              </button>
            </div>
            <div className="aspect-video bg-charcoal flex items-center justify-center p-8 text-center text-white">
              <div className="space-y-3">
                <Play className="w-12 h-12 text-[#B49A59] mx-auto animate-pulse" />
                <p className="text-lg font-headline font-semibold">PSV College of Engineering and Technology</p>
                <p className="text-xs text-white/70 max-w-md">
                  Experience our 30-acre autonomous eco-campus, state-of-the-art robotic centers, smart computing clusters, and vibrant student community in Krishnagiri.
                </p>
                <button
                  onClick={() => setIsPlayingVideo(false)}
                  className="btn-gold text-xs mt-2"
                >
                  Return to Overview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
