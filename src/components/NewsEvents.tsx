import React from 'react';
import { 
  Calendar, Bell, ArrowRight, Sparkles, Trophy, 
  ExternalLink, Clock, Tag 
} from 'lucide-react';

export const NewsEvents: React.FC = () => {
  const events = [
    {
      date: 'OCT 24-25, 2026',
      category: 'International Conference',
      title: 'ICAISE 2026: 4th International Conference on AI & Sustainable Engineering',
      desc: 'Keynotes from IEEE fellows, paper presentations published in Scopus-indexed proceedings.',
      status: 'Call for Papers Open',
      href: '#conference',
    },
    {
      date: 'NOV 12-13, 2026',
      category: 'Hackathon & Innovation',
      title: 'PSV HACK 2026: 36-Hour National Level Student Hackathon',
      desc: '₹3,00,000 prize pool with direct recruitment offers from leading tech sponsors.',
      status: 'Registrations Open',
      href: '#hackathon',
    },
    {
      date: 'DEC 01, 2026',
      category: 'Campus Placements',
      title: 'Phase-2 Day-1 On-Campus Placement Drives 2026',
      desc: 'Tier-1 tech leaders visiting campus for final round technical and HR interviews.',
      status: 'Placement Cell',
      href: '#placements',
    }
  ];

  const notices = [
    {
      date: 'Today',
      text: 'Admissions 2026-27: Application portal for B.E. / B.Tech Autonomous programs is now live.',
      important: true,
    },
    {
      date: 'Oct 06',
      text: 'Autonomous End Semester Examination Schedule (Regulation 2026) released on portal.',
      important: false,
    },
    {
      date: 'Sep 28',
      text: 'PSVCET Robotics Club wins First Prize at National Smart Mobility Championship.',
      important: false,
    },
    {
      date: 'Sep 15',
      text: 'AICTE / Anna University mandatory disclosure data updated for the academic year 2026-27.',
      important: false,
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-[1760px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="tag-accreditation inline-block">
              Campus Buzz & Updates
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
              Latest News, Events & Announcements
            </h2>
          </div>
          <p className="font-body text-[#60656C] text-sm sm:text-base max-w-md">
            Stay updated with academic conferences, national hackathons, placement announcements, and campus milestones.
          </p>
        </div>

        {/* Grid: Events (7 cols) + Notice Board (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Events (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-headline font-bold text-xl text-charcoal flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#80672E]" />
              <span>Upcoming Campus Events & Symposia</span>
            </h3>

            <div className="space-y-4">
              {events.map((ev, i) => (
                <div 
                  key={i}
                  className="pearl-card p-6 border border-[#D9DCE1] bg-[#FAF9F6]/50 hover:bg-white transition-all group flex flex-col sm:flex-row gap-5 items-start"
                >
                  {/* Date badge */}
                  <div className="w-28 sm:w-24 bg-white border border-[#D9DCE1] p-3 rounded-xl text-center flex-shrink-0 group-hover:border-[#80672E] transition-colors">
                    <span className="text-[11px] font-bold text-[#80672E] uppercase tracking-wider block font-label">
                      {ev.date.split(',')[0]}
                    </span>
                    <span className="font-headline font-bold text-base text-charcoal">
                      {ev.date.split(',')[1] || '2026'}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#80672E] bg-[#F0E8D5] px-2 py-0.5 rounded-full">
                        {ev.category}
                      </span>
                    </div>
                    <h4 className="font-headline font-bold text-lg text-charcoal group-hover:text-[#80672E] transition-colors">
                      {ev.title}
                    </h4>
                    <p className="text-xs text-[#60656C] leading-relaxed">
                      {ev.desc}
                    </p>
                    <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-[#80672E]">
                      <span>{ev.status}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notice Board (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-headline font-bold text-xl text-charcoal flex items-center gap-2">
              <Bell className="w-5 h-5 text-[#80672E]" />
              <span>Official Circulars & Notice Board</span>
            </h3>

            <div className="bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl p-6 space-y-4 shadow-tier-1">
              {notices.map((n, idx) => (
                <div 
                  key={idx}
                  className={`p-3.5 rounded-xl transition-all ${
                    n.important 
                      ? 'bg-white border-2 border-[#80672E]/40 shadow-sm' 
                      : 'bg-white/70 border border-[#D9DCE1] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold text-[#80672E] flex items-center gap-1 font-label">
                      {n.important && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
                      {n.date}
                    </span>
                    {n.important && (
                      <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold uppercase">
                        Important
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-charcoal font-medium leading-relaxed">
                    {n.text}
                  </p>
                </div>
              ))}

              <div className="pt-2">
                <a 
                  href="#all-circulars"
                  className="btn-secondary w-full text-xs flex items-center justify-center gap-2"
                >
                  <span>View All Circulars & Archives</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#80672E]" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
