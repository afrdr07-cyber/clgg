import React from 'react';
import { 
  Briefcase, TrendingUp, Award, Building2, CheckCircle2, 
  ArrowRight, Users, Sparkles, Star, ChevronRight 
} from 'lucide-react';

interface PlacementsProps {
  onOpenEnquiry: () => void;
}

export const PlacementsSection: React.FC<PlacementsProps> = ({ onOpenEnquiry }) => {
  const recruiters = [
    { name: 'Tata Consultancy Services', short: 'TCS', hires: '110+ Offers', ctc: '9.0 LPA Digital' },
    { name: 'Infosys Limited', short: 'Infosys', hires: '85+ Offers', ctc: '9.5 LPA Specialist' },
    { name: 'Zoho Corporation', short: 'Zoho', hires: '42+ Offers', ctc: '12.0 LPA' },
    { name: 'Cognizant', short: 'CTS', hires: '78+ Offers', ctc: '8.4 LPA GenC Next' },
    { name: 'Wipro Technologies', short: 'Wipro', hires: '65+ Offers', ctc: '7.5 LPA Turbo' },
    { name: 'Amazon', short: 'Amazon', hires: '18+ Offers', ctc: '45.0 LPA International' },
    { name: 'Capgemini', short: 'Capgemini', hires: '38+ Offers', ctc: '7.5 LPA' },
    { name: 'Bosch India', short: 'Bosch', hires: '22+ Offers', ctc: '10.2 LPA' },
    { name: 'Larsen & Toubro', short: 'L&T', hires: '19+ Offers', ctc: '8.0 LPA' },
    { name: 'Hyundai Motors', short: 'Hyundai', hires: '16+ Offers', ctc: '7.8 LPA' },
    { name: 'HCL Technologies', short: 'HCLTech', hires: '44+ Offers', ctc: '7.0 LPA' },
    { name: 'TVS Motors', short: 'TVS', hires: '15+ Offers', ctc: '7.2 LPA' },
  ];

  const pillars = [
    {
      title: 'Full-Stack Coding Bootcamps',
      desc: 'Intensive algorithm design, system design, and competitive coding sprints starting from Year 2.',
    },
    {
      title: 'Industry Certifications',
      desc: 'Sponsored certification pathways across AWS Cloud, Google Cloud, Cisco CCNA, and RedHat.',
    },
    {
      title: 'Mock Technical Panels',
      desc: 'Multi-stage interview simulations led by senior tech leads, HR executives, and alumni mentors.',
    },
    {
      title: 'Corporate Soft Skills & Leadership',
      desc: 'Executive communication, negotiation, corporate etiquette, and global business acumen.',
    }
  ];

  return (
    <section id="placements" className="py-20 bg-white">
      <div className="max-w-[1760px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="tag-accreditation inline-block">
              Career Trajectory & Placements
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
              Transforming Ambition into High-Impact Global Careers
            </h2>
          </div>
          <p className="font-body text-[#60656C] text-sm sm:text-base max-w-md">
            Our autonomous Training and Placement Cell (T&P) bridges the gap between academic theory and high-paying corporate roles.
          </p>
        </div>

        {/* 4 Placement Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className="p-6 bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl text-center space-y-1">
            <span className="font-headline font-bold text-3xl sm:text-4xl text-[#80672E]">
              96.4%
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-charcoal">Placement Rate</h4>
            <p className="text-[11px] text-[#60656C]">Consistent 5-Year Average</p>
          </div>

          <div className="p-6 bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl text-center space-y-1">
            <span className="font-headline font-bold text-3xl sm:text-4xl text-[#80672E]">
              45.0 LPA
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-charcoal">Highest Package</h4>
            <p className="text-[11px] text-[#60656C]">Global & Tier-1 Offers</p>
          </div>

          <div className="p-6 bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl text-center space-y-1">
            <span className="font-headline font-bold text-3xl sm:text-4xl text-[#80672E]">
              7.8 LPA
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-charcoal">Average CTC</h4>
            <p className="text-[11px] text-[#60656C]">Engineering Cohort 2025</p>
          </div>

          <div className="p-6 bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl text-center space-y-1">
            <span className="font-headline font-bold text-3xl sm:text-4xl text-[#80672E]">
              180+
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-charcoal">Recruiting Partners</h4>
            <p className="text-[11px] text-[#60656C]">MNCs & Tech Unicorns</p>
          </div>
        </div>

        {/* Recruiters Marquee / Grid */}
        <div className="pearl-card p-6 sm:p-8 mb-12">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D9DCE1]">
            <div>
              <h3 className="font-headline font-bold text-xl text-charcoal">
                Leading Recruiters at PSVCET
              </h3>
              <p className="text-xs text-[#60656C] mt-0.5">
                Top corporate organizations that hire our graduates every academic cycle
              </p>
            </div>
            <span className="hidden sm:inline-flex tag-accreditation">
              180+ Corporate Tie-ups
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {recruiters.map((r, i) => (
              <div 
                key={i}
                className="p-3.5 bg-[#FAF9F6] border border-[#D9DCE1] rounded-xl hover:border-[#80672E] hover:bg-white transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="font-headline font-bold text-base text-charcoal group-hover:text-[#80672E] transition-colors block">
                    {r.short}
                  </span>
                  <span className="text-[11px] text-[#60656C] line-clamp-1 mt-0.5">
                    {r.name}
                  </span>
                </div>
                <div className="mt-3 pt-2 border-t border-[#D9DCE1]/50 flex items-center justify-between text-[10px]">
                  <span className="font-semibold text-[#80672E]">{r.hires}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Ecosystem 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div key={idx} className="p-6 bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F0E8D5] flex items-center justify-center text-[#80672E] font-bold text-xs">
                0{idx + 1}
              </div>
              <h4 className="font-headline font-bold text-base text-charcoal">
                {item.title}
              </h4>
              <p className="font-body text-xs text-[#60656C] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Placement Action Banner */}
        <div className="mt-12 text-center">
          <button 
            onClick={onOpenEnquiry}
            className="btn-gold inline-flex items-center gap-2 text-sm px-6 py-3"
          >
            <span>Download Detailed Placement Report 2025-26</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
