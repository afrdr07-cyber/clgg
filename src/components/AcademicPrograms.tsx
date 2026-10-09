import React, { useState } from 'react';
import { 
  GraduationCap, Clock, Users, ArrowRight, ShieldCheck, 
  Sparkles, BookOpen, Layers, CheckCircle2, ChevronRight, FileText 
} from 'lucide-react';

interface AcademicProgramsProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const AcademicPrograms: React.FC<AcademicProgramsProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ug' | 'pg' | 'research'>('all');

  const programs = [
    {
      id: 'aids',
      category: 'ug',
      code: 'B.Tech',
      title: 'Artificial Intelligence and Data Science',
      shortTitle: 'AI & Data Science',
      duration: '4 Years (8 Semesters)',
      intake: '120 Seats',
      badge: 'High Demand',
      description: 'Master machine learning, deep neural networks, predictive analytics, natural language processing, and big data architectures with hands-on GPU computing clusters.',
      highlights: ['Generative AI & LLM Systems', 'Computer Vision & Robotics', 'Big Data Engineering on AWS', 'Industry Capstone Projects'],
      curriculum: 'Autonomous CBCS 2026',
    },
    {
      id: 'cse',
      category: 'ug',
      code: 'B.E.',
      title: 'Computer Science and Engineering',
      shortTitle: 'Computer Science (CSE)',
      duration: '4 Years (8 Semesters)',
      intake: '180 Seats',
      badge: 'NBA Accredited',
      description: 'Comprehensive software engineering foundation spanning full-stack web development, cloud computing, cybersecurity, distributed algorithms, and microservices.',
      highlights: ['Full Stack Web & Mobile Architecture', 'Cloud DevOps (Docker, Kubernetes)', 'Cybersecurity & Cryptography', 'Competitive Coding Bootcamp'],
      curriculum: 'Autonomous CBCS 2026',
    },
    {
      id: 'ece',
      category: 'ug',
      code: 'B.E.',
      title: 'Electronics and Communication Engineering',
      shortTitle: 'Electronics & Comm (ECE)',
      duration: '4 Years (8 Semesters)',
      intake: '120 Seats',
      badge: 'NBA Accredited',
      description: 'Design next-generation hardware systems, VLSI microchips, embedded IoT controllers, RF communication networks, and 5G wireless protocols.',
      highlights: ['VLSI Chip Design & Cadence Tools', 'Embedded IoT & Edge AI Controllers', '5G Wireless & Optical Networks', 'Signal & Image Processing'],
      curriculum: 'Autonomous CBCS 2026',
    },
    {
      id: 'mech',
      category: 'ug',
      code: 'B.E.',
      title: 'Mechanical Engineering (Industry 4.0)',
      shortTitle: 'Mechanical Engineering',
      duration: '4 Years (8 Semesters)',
      intake: '60 Seats',
      badge: 'NBA Accredited',
      description: 'Integrates classical mechanical principles with modern digital manufacturing, 3D printing, CAD/CAM automation, robotics, and thermal engineering.',
      highlights: ['Robotics & Industrial Automation', 'Electric Vehicle Design & Powertrains', 'Advanced CNC & 3D Prototyping', 'Computational Fluid Dynamics (CFD)'],
      curriculum: 'Autonomous CBCS 2026',
    },
    {
      id: 'eee',
      category: 'ug',
      code: 'B.E.',
      title: 'Electrical and Electronics Engineering',
      shortTitle: 'Electrical & Electronics (EEE)',
      duration: '4 Years (8 Semesters)',
      intake: '60 Seats',
      badge: 'Core Engineering',
      description: 'Power systems engineering, smart grids, renewable solar/wind energy generation, electric vehicle battery management, and industrial power electronics.',
      highlights: ['Smart Grid & Microgrid Systems', 'EV Battery & Motor Drives', 'Industrial PLC & SCADA Systems', 'Renewable Energy Integration'],
      curriculum: 'Autonomous CBCS 2026',
    },
    {
      id: 'civil',
      category: 'ug',
      code: 'B.E.',
      title: 'Civil Engineering & Infrastructure',
      shortTitle: 'Civil Engineering',
      duration: '4 Years (8 Semesters)',
      intake: '60 Seats',
      badge: 'Core Engineering',
      description: 'Design sustainable urban infrastructure, structural analysis, GIS surveying, environmental engineering, smart city planning, and geotechnical modeling.',
      highlights: ['Structural BIM & AutoCAD Software', 'Geotechnical & Soil Testing Lab', 'GIS & Satellite Remote Sensing', 'Green Building & Sustainability'],
      curriculum: 'Autonomous CBCS 2026',
    },
    {
      id: 'mba',
      category: 'pg',
      code: 'M.B.A.',
      title: 'Master of Business Administration',
      shortTitle: 'Management Studies (MBA)',
      duration: '2 Years (4 Semesters)',
      intake: '60 Seats',
      badge: 'Dual Specialization',
      description: 'Executive management program offering dual specializations across Financial Management, Human Resources, Digital Marketing, and Business Analytics.',
      highlights: ['FinTech & Investment Analysis', 'Digital Marketing & Growth Strategies', 'HR Analytics & Talent Management', 'Corporate Leadership Seminars'],
      curriculum: 'Autonomous CBCS 2026',
    },
    {
      id: 'me-cse',
      category: 'pg',
      code: 'M.E.',
      title: 'M.E. Computer Science and Engineering',
      shortTitle: 'M.E. Computer Science',
      duration: '2 Years (4 Semesters)',
      intake: '18 Seats',
      badge: 'Postgraduate Research',
      description: 'Postgraduate program focusing on advanced research in distributed systems, machine learning theory, privacy-preserving cryptography, and thesis work.',
      highlights: ['Advanced Machine Learning & AI', 'High Performance Cloud Systems', 'Funded Thesis Research Projects', 'Academic & Industry Publication'],
      curriculum: 'Autonomous CBCS 2026',
    },
    {
      id: 'phd',
      category: 'research',
      code: 'Ph.D.',
      title: 'Doctoral Research Programs (Ph.D. / M.S.)',
      shortTitle: 'Doctoral Studies',
      duration: 'Full-time / Part-time',
      intake: 'As per Anna Univ',
      badge: 'Recognized Research Center',
      description: 'Recognized Research Center by Anna University for full-time and part-time doctoral scholars in CSE, ECE, Mechanical, and Basic Sciences.',
      highlights: ['Anna University Recognized Guides', 'Modern R&D Equipment & Grants', 'Scopus / SCI Indexed Publications', 'Patent Filing Support'],
      curriculum: 'Research Protocol',
    }
  ];

  const filteredPrograms = programs.filter(p => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-[1760px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="font-sans font-bold uppercase tracking-widest text-xs text-[#80672E] inline-block">
            Degree Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
            Autonomous Academic Programs for Modern Industry
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
            Explore our accredited undergraduate and postgraduate degrees, designed in synergy with premier technology enterprises and regulatory guidelines.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[#FAF9F6] border border-[#CCD2DC] rounded-full overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-primary hover:text-primary'
              }`}
            >
              All Programs ({programs.length})
            </button>
            <button
              onClick={() => setActiveTab('ug')}
              className={`px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'ug'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-primary hover:text-primary'
              }`}
            >
              Undergraduate (B.E./B.Tech)
            </button>
            <button
              onClick={() => setActiveTab('pg')}
              className={`px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'pg'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-primary hover:text-primary'
              }`}
            >
              Postgraduate (M.E./MBA)
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`px-5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'research'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-primary hover:text-primary'
              }`}
            >
              Doctoral (Ph.D.)
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPrograms.map((prog) => (
            <div 
              key={prog.id}
              className="pearl-card p-6 sm:p-7 flex flex-col justify-between group relative border border-[#CCD2DC] bg-white hover:border-accent-gold/60 transition-all rounded-2xl shadow-sm"
            >
              <div>
                {/* Top Meta Chips */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 bg-[#F2F3F5] text-text-primary font-sans font-semibold text-xs px-3 py-1 rounded-md border border-[#CCD2DC]">
                    {prog.code}
                  </span>
                  <span className="inline-flex items-center text-[11px] font-sans font-bold uppercase tracking-wider text-accent-gold-readable bg-surface-gold-pale px-2.5 py-0.5 rounded-full border border-accent-gold/30">
                    {prog.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2 tracking-tight">
                  {prog.title}
                </h3>

                {/* Intake & Duration Info */}
                <div className="flex items-center gap-4 text-xs font-sans text-text-secondary mt-3 py-2 border-y border-[#CCD2DC]/50">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-accent-gold-readable" />
                    {prog.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-accent-gold-readable" />
                    {prog.intake}
                  </span>
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-text-secondary mt-3 leading-relaxed">
                  {prog.description}
                </p>

                {/* Key Course Highlights */}
                <div className="mt-4 pt-3 border-t border-[#CCD2DC]/40 space-y-1.5">
                  <span className="text-[11px] font-sans font-bold text-text-primary uppercase tracking-wider">
                    Core Specializations:
                  </span>
                  {prog.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-sans text-text-primary font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-[#CCD2DC] flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenEnquiry(prog.title)}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary-container to-primary text-on-primary font-sans font-semibold text-xs px-3.5 py-2 rounded-lg shadow-sm hover:brightness-110 cursor-pointer"
                >
                  <span>Apply 2026</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenEnquiry(prog.title)}
                  className="text-xs font-sans font-semibold text-primary hover:text-accent-gold-readable flex items-center gap-1 cursor-pointer"
                >
                  <span>Syllabus & Info</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#FAF9F6] border border-[#CCD2DC] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-text-primary">
              Need assistance choosing the right engineering specialization?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
              Our academic counselors provide personalized one-on-one guidance based on your career ambitions.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('General Counseling')}
            className="btn-gold flex-shrink-0 flex items-center gap-2 text-xs sm:text-sm"
          >
            <span>Request Academic Counseling</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
