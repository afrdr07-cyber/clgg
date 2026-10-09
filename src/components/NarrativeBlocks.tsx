import React from 'react';
import { 
  BookOpen, Compass, Users, Sparkles, ArrowRight, 
  ShieldCheck, Cpu, Trophy, HeartHandshake, CheckCircle2 
} from 'lucide-react';

interface NarrativeBlocksProps {
  onOpenEnquiry: () => void;
}

export const NarrativeBlocks: React.FC<NarrativeBlocksProps> = ({ onOpenEnquiry }) => {
  const blocks = [
    {
      number: '01',
      tag: 'Academic Mastery',
      title: 'Learn with Autonomous Freedom',
      description: 'Experience an empowered Choice-Based Credit System (CBCS) tailored with top industrial partners. Choose interdisciplinary minors, industry electives, and flexible graduation pathways.',
      icon: BookOpen,
      highlights: [
        'Industry 4.0 & AI-integrated Curriculum',
        'Direct Electives from AWS, IBM & Oracle',
        'Continuous Experiential Assessment Model',
        'Fast-Track Final Semester Industry Internships'
      ],
      linkText: 'Explore Academic Matrix',
      href: '#programs',
    },
    {
      number: '02',
      tag: 'Research & Innovation',
      title: 'Discover Breakthrough Solutions',
      description: 'Engage with funded research laboratories, patent incubation centers, and international hackathons. Turn your engineering ideas into real-world patented technologies.',
      icon: Cpu,
      highlights: [
        '25+ Specialized Research Labs & CoEs',
        '40+ Patents Published & Commercialized',
        'Grants from AICTE, DST & MSME Incubators',
        'Student Robotics & Electric Mobility Projects'
      ],
      linkText: 'Discover Research Hub',
      href: '#research',
    },
    {
      number: '03',
      tag: 'Campus Community',
      title: 'Belong to a Thriving Ecosystem',
      description: 'Flourish within a serene 30-acre eco-friendly campus with over 20+ cultural societies, athletic arenas, modern residence halls, and a collaborative global alumni network.',
      icon: Users,
      highlights: [
        '30-Acre Lush Green Autonomous Campus',
        '20+ Student Clubs & Innovation Chapters',
        'State-of-the-Art Sports Complex & Gymnasium',
        'Dedicated Career Guidance & Mentorship'
      ],
      linkText: 'Experience Campus Life',
      href: '#campus-life',
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#FAF9F6] border-t border-b border-[#D9DCE1]">
      <div className="max-w-[1760px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="tag-accreditation inline-block">
              Institutional Pillars
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
              Crafting Tomorrow's Innovators Through Autonomy & Excellence
            </h2>
          </div>
          <p className="font-body text-[#60656C] text-sm sm:text-base max-w-md">
            At PSVCET, autonomous status means academic agility, real-world industry immersion, and an unyielding commitment to student success.
          </p>
        </div>

        {/* 3 Flagship Storytelling Cards (Stitch Spec: 20px radius, white surface, silver border, tier-1 to tier-2 hover) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <div 
                key={block.number}
                className="pearl-card p-8 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative Top Counter */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] border border-[#D9DCE1] flex items-center justify-center text-[#80672E] group-hover:bg-[#80672E] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-headline font-bold text-3xl text-[#B49A59]/70 group-hover:text-[#80672E] transition-colors">
                    {block.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#80672E] font-label">
                    {block.tag}
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-charcoal group-hover:text-[#80672E] transition-colors">
                    {block.title}
                  </h3>
                  <p className="font-body text-sm text-[#60656C] leading-relaxed">
                    {block.description}
                  </p>

                  {/* Highlights List */}
                  <div className="pt-2 space-y-2 border-t border-[#D9DCE1]/60">
                    {block.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-charcoal font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#80672E] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-6 mt-6 border-t border-[#D9DCE1]">
                  <a 
                    href={block.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#80672E] group-hover:text-[#664f18] transition-colors"
                  >
                    <span>{block.linkText}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
