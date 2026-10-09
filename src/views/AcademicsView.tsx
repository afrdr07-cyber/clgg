import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UG_DEPARTMENTS, 
  PG_DEPARTMENTS, 
  COLLEGE_DETAILS, 
  DepartmentInfo 
} from '../data/officialCollegeData';
import { AcademicsSubTab, PageView } from '../types/navigation';
import { 
  GraduationCap, BookOpen, Layers, Award, Sparkles, 
  ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, 
  Search, Users, Building2, Check
} from 'lucide-react';

interface AcademicsViewProps {
  initialSubTab?: AcademicsSubTab;
  onNavigate: (view: PageView, subTab?: string) => void;
  onOpenDepartment: (deptId: string) => void;
  onOpenEnquiry: (programName?: string) => void;
}

export const AcademicsView: React.FC<AcademicsViewProps> = ({
  initialSubTab = 'courses-offered',
  onNavigate,
  onOpenDepartment,
  onOpenEnquiry,
}) => {
  const [activeTab, setActiveTab] = useState<AcademicsSubTab>(initialSubTab);
  const [searchFilter, setSearchFilter] = useState('');
  const [deptCategoryFilter, setDeptCategoryFilter] = useState<'all' | 'ug' | 'pg'>('all');

  const subTabs = [
    { id: 'courses-offered' as AcademicsSubTab, label: 'Courses Offered (Matrix)' },
    { id: 'departments' as AcademicsSubTab, label: 'Departments & HODs' },
    { id: 'science-humanities' as AcademicsSubTab, label: 'Science & Humanities' },
    { id: 'regulations-cbcs' as AcademicsSubTab, label: 'Autonomous Regulations (CBCS)' },
  ];

  const allDepts = [...UG_DEPARTMENTS, ...PG_DEPARTMENTS];

  const filteredDepts = allDepts.filter((dept) => {
    const matchesSearch = 
      dept.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      dept.degree.toLowerCase().includes(searchFilter.toLowerCase()) ||
      dept.headOfDepartment.toLowerCase().includes(searchFilter.toLowerCase());
    
    if (deptCategoryFilter === 'ug') return matchesSearch && dept.degree.includes('B.');
    if (deptCategoryFilter === 'pg') return matchesSearch && (dept.degree.includes('M.') || dept.degree.includes('MBA'));
    return matchesSearch;
  });

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
              <span>Academics</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#A0A5AD]" />
              <span className="text-[#22262B] capitalize">{activeTab.replace('-', ' ')}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22262B] leading-tight">
              Academic Excellence & Autonomous Curriculum
            </h1>
            <p className="font-body text-sm sm:text-base text-[#60656C] leading-relaxed">
              Offering 9 Undergraduate and 4 Postgraduate programs with Industry 4.0 experiential laboratories, Choice Based Credit System (CBCS), and outcome-based engineering education.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onNavigate('admission')}
              className="inline-flex items-center justify-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <span>Admissions 2026</span>
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

      {/* 1. COURSES OFFERED MATRIX */}
      {activeTab === 'courses-offered' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Sanctioned Intake & Matrix</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
                  Autonomous Degree Offerings
                </h2>
              </div>
              <span className="text-xs text-[#60656C] bg-[#FAF9F6] border border-[#D9DCE1] px-3 py-1.5 rounded-lg">
                TNEA College Code: <strong className="text-[#80672E]">2642</strong> / 2636
              </span>
            </div>

            {/* Undergraduate Section */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#22262B] flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#80672E]" />
                <span>Undergraduate Degree Programs (4-Year B.E. / B.Tech)</span>
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#FAF9F6] border-b border-[#D9DCE1] text-[#22262B]">
                      <th className="py-3 px-4 font-bold">Branch Code</th>
                      <th className="py-3 px-4 font-bold">Department & Degree</th>
                      <th className="py-3 px-4 font-bold">Sanctioned Intake</th>
                      <th className="py-3 px-4 font-bold">Duration</th>
                      <th className="py-3 px-4 font-bold">Accreditation</th>
                      <th className="py-3 px-4 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D9DCE1]">
                    {UG_DEPARTMENTS.map((dept) => (
                      <tr key={dept.id} className="hover:bg-[#FAF9F6]/60 transition-colors">
                        <td className="py-4 px-4 font-mono font-bold text-[#80672E] uppercase">{dept.id}</td>
                        <td className="py-4 px-4">
                          <span className="font-bold text-[#22262B] block">{dept.name}</span>
                          <span className="text-xs text-[#60656C]">{dept.degree} Degree</span>
                        </td>
                        <td className="py-4 px-4 font-semibold text-[#22262B]">{dept.intake}</td>
                        <td className="py-4 px-4 text-[#60656C]">{dept.duration}</td>
                        <td className="py-4 px-4">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            dept.category.includes('NBA') ? 'bg-emerald-100 text-emerald-800' : 'bg-[#F0E8D5] text-[#80672E]'
                          }`}>
                            {dept.category}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => onOpenDepartment(dept.id)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#80672E] hover:underline cursor-pointer"
                          >
                            <span>Inspect Syllabus</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Postgraduate Section */}
            <div className="space-y-4 pt-6 border-t border-[#D9DCE1]">
              <h3 className="font-serif text-xl font-bold text-[#22262B] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#80672E]" />
                <span>Postgraduate Degree Programs (2-Year MBA & M.E.)</span>
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#FAF9F6] border-b border-[#D9DCE1] text-[#22262B]">
                      <th className="py-3 px-4 font-bold">Branch Code</th>
                      <th className="py-3 px-4 font-bold">Program & Degree</th>
                      <th className="py-3 px-4 font-bold">Sanctioned Intake</th>
                      <th className="py-3 px-4 font-bold">Duration</th>
                      <th className="py-3 px-4 font-bold">Eligibility & Entrance</th>
                      <th className="py-3 px-4 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D9DCE1]">
                    {PG_DEPARTMENTS.map((dept) => (
                      <tr key={dept.id} className="hover:bg-[#FAF9F6]/60 transition-colors">
                        <td className="py-4 px-4 font-mono font-bold text-[#80672E] uppercase">{dept.id}</td>
                        <td className="py-4 px-4">
                          <span className="font-bold text-[#22262B] block">{dept.name}</span>
                          <span className="text-xs text-[#60656C]">{dept.degree} Degree</span>
                        </td>
                        <td className="py-4 px-4 font-semibold text-[#22262B]">{dept.intake}</td>
                        <td className="py-4 px-4 text-[#60656C]">{dept.duration}</td>
                        <td className="py-4 px-4 text-xs text-[#60656C]">
                          {dept.degree === 'MBA' ? 'Graduation + TANCET / MAT' : 'B.E./B.Tech + TANCET / GATE'}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => onOpenDepartment(dept.id)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#80672E] hover:underline cursor-pointer"
                          >
                            <span>Inspect Syllabus</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 2. DEPARTMENTS & HODS */}
      {activeTab === 'departments' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          {/* Controls & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#D9DCE1] shadow-xs">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#A0A5AD] absolute left-3 top-3.5" />
              <input
                type="text"
                placeholder="Search department, HOD, degree..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full text-xs sm:text-sm pl-9 pr-3 py-2.5 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E]"
              />
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setDeptCategoryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  deptCategoryFilter === 'all' ? 'bg-[#80672E] text-white' : 'bg-[#FAF9F6] text-[#60656C]'
                }`}
              >
                All (13)
              </button>
              <button
                onClick={() => setDeptCategoryFilter('ug')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  deptCategoryFilter === 'ug' ? 'bg-[#80672E] text-white' : 'bg-[#FAF9F6] text-[#60656C]'
                }`}
              >
                UG (9)
              </button>
              <button
                onClick={() => setDeptCategoryFilter('pg')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                  deptCategoryFilter === 'pg' ? 'bg-[#80672E] text-white' : 'bg-[#FAF9F6] text-[#60656C]'
                }`}
              >
                PG (4)
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepts.map((dept) => (
              <div
                key={dept.id}
                className="bg-white border border-[#D9DCE1] rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-[#80672E] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#FAF9F6] border border-[#D9DCE1] text-xs font-bold text-[#80672E]">
                      {dept.degree}
                    </span>
                    <span className="text-[11px] font-semibold text-[#60656C]">
                      {dept.intake}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#22262B] group-hover:text-[#80672E] transition-colors">
                    {dept.name}
                  </h3>

                  <div className="my-3 p-3 bg-[#FAF9F6] rounded-xl border border-[#D9DCE1] text-xs">
                    <span className="text-[10px] uppercase font-bold text-[#A0A5AD] block">Head of Department</span>
                    <span className="font-bold text-[#22262B]">{dept.headOfDepartment}</span>
                  </div>

                  <p className="text-xs text-[#60656C] line-clamp-3 leading-relaxed mb-4">
                    {dept.desc}
                  </p>

                  {dept.keyLabs && dept.keyLabs.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#A0A5AD] block">Laboratories</span>
                      <div className="flex flex-wrap gap-1">
                        {dept.keyLabs.slice(0, 2).map((lab) => (
                          <span key={lab} className="text-[10px] bg-[#FAF9F6] text-[#60656C] px-2 py-0.5 rounded border border-[#D9DCE1]">
                            {lab}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-[#D9DCE1] flex items-center justify-between">
                  <button
                    onClick={() => onOpenDepartment(dept.id)}
                    className="text-xs font-semibold text-[#80672E] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Department Hub</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(dept.name)}
                    className="text-xs font-medium text-[#60656C] hover:text-[#22262B]"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. SCIENCE & HUMANITIES */}
      {activeTab === 'science-humanities' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0E8D5] text-[#80672E] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Foundational Engineering Sciences</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Department of Science & Humanities
            </h2>

            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              The Department of Science and Humanities forms the robust foundational pillar of engineering pedagogy at PSVCET. It encompasses Physics, Chemistry, Mathematics, and English, preparing 1st-year students with mathematical logic, computational reasoning, linguistic competence, and applied experimental skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Mathematics</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Engineering Mathematics</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Linear algebra, calculus, transform techniques, discrete mathematics, and statistical inference for computing and data science.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Physics</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Engineering Physics & Optics</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Quantum mechanics, solid state physics, fiber optics, laser physics, and material science laboratories.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Chemistry</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Environmental & Applied Chem</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Polymer chemistry, electrochemistry, battery technologies, water testing, and green engineering synthesis.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">English & Linguistics</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Digital Language Laboratory</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Business communication, phonetics, interpersonal presentation, and IELTS/BEC training suites.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. AUTONOMOUS REGULATIONS (CBCS) */}
      {activeTab === 'regulations-cbcs' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Academic Framework 2026</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Choice Based Credit System (CBCS) Regulations
            </h2>

            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              As an Autonomous Institution affiliated to Anna University, PSVCET operates under the modern Choice Based Credit System (CBCS), providing students with multidisciplinary flexibility, open electives across engineering verticals, and continuous assessment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Continuous Assessment (CIE)</span>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  40% Continuous Internal Evaluation through cycle tests, technical seminars, laboratory performance, and mini-projects.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">End Semester Evaluation (ESE)</span>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  60% End Semester Examinations conducted by Controller of Examinations (COE) with centralized evaluation.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">NPTEL / MOOC Credit Transfer</span>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Credits earned via SWAYAM/NPTEL certified online courses can be substituted for professional and open electives.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
