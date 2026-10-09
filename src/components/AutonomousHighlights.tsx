import React from 'react';
import { 
  Sparkles, CheckCircle2, Award, Zap, BookOpen, 
  Layers, Compass, Clock, GraduationCap, ShieldCheck 
} from 'lucide-react';

export const AutonomousHighlights: React.FC = () => {
  const benefits = [
    {
      title: 'Choice-Based Credit System (CBCS)',
      desc: 'Customize your academic trajectory. Select open electives, advanced minors, and self-paced online certifications (NPTEL / Coursera).',
      icon: Layers,
    },
    {
      title: 'Industry-Integrated Syllabi',
      desc: 'Curriculum co-designed and reviewed annually with engineering leaders from TCS, Zoho, Bosch, and Anna University experts.',
      icon: Zap,
    },
    {
      title: 'Interdisciplinary Honors & Minors',
      desc: 'Major in Core Engineering while earning an accredited Minor in Artificial Intelligence, Cyber Defense, or Financial Management.',
      icon: Award,
    },
    {
      title: 'Full-Semester Industry Immersion',
      desc: 'Dedicated 8th-semester industry internship model enabling students to work full-time at top tech companies before graduation.',
      icon: Clock,
    },
    {
      title: 'Experiential & Continuous Assessment',
      desc: 'Continuous evaluations through lab projects, hackathons, and design thinking challenges instead of high-stress rote exams.',
      icon: Sparkles,
    },
    {
      title: 'Accelerated Degree Pathway',
      desc: 'High-performing students can complete required credits early to dedicate their final year to research, startups, or employment.',
      icon: GraduationCap,
    }
  ];

  return (
    <section id="autonomous" className="py-20 bg-[#FAF9F6] border-t border-b border-[#D9DCE1]">
      <div className="max-w-[1760px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#F0E8D5] text-[#80672E] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-label">
            <ShieldCheck className="w-3.5 h-3.5 text-[#80672E]" />
            <span>Autonomous Academic Freedom</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            The Autonomous Advantage at PSVCET
          </h2>
          <p className="font-body text-sm sm:text-base text-[#60656C]">
            Autonomous status granted by UGC & Anna University gives PSVCET students the competitive edge of modern curriculum, agile learning, and fast-track career opportunities.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="pearl-card p-6 sm:p-7 bg-white flex flex-col justify-between group hover:border-[#80672E] transition-all"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF9F6] border border-[#D9DCE1] flex items-center justify-center text-[#80672E] group-hover:bg-[#80672E] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-headline text-lg sm:text-xl font-bold text-charcoal group-hover:text-[#80672E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#60656C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D9DCE1]/50 flex items-center text-xs font-semibold text-[#80672E]">
                  <span>Autonomous Regulation 2026</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory Governance Seal Box */}
        <div className="mt-12 bg-white border border-[#D9DCE1] rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F0E8D5] flex items-center justify-center text-[#80672E] font-headline font-bold text-lg flex-shrink-0">
              UGC
            </div>
            <div>
              <h4 className="font-headline font-bold text-base text-charcoal">
                Autonomous Status Conferred by UGC, New Delhi
              </h4>
              <p className="text-xs text-[#60656C]">
                Concurred by Anna University, Chennai & Government of Tamil Nadu
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="tag-accreditation">NAAC 'A' Grade</span>
            <span className="tag-accreditation">NBA Accredited</span>
            <span className="tag-accreditation">ISO 9001:2015</span>
          </div>
        </div>

      </div>
    </section>
  );
};
