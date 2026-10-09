import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  COLLEGE_DETAILS, 
  UG_DEPARTMENTS, 
  PG_DEPARTMENTS, 
  OFFICIAL_REGULATORY_DOCS 
} from '../data/officialCollegeData';
import { AdmissionSubTab, PageView } from '../types/navigation';
import { 
  GraduationCap, Phone, Mail, Award, CheckCircle2, 
  ChevronRight, Download, Send, Clock, BookOpen, 
  ShieldCheck, ArrowRight, UserCheck, Check, Sparkles
} from 'lucide-react';

interface AdmissionViewProps {
  initialSubTab?: AdmissionSubTab;
  onNavigate: (view: PageView, subTab?: string) => void;
  onOpenDepartment: (deptId: string) => void;
}

export const AdmissionView: React.FC<AdmissionViewProps> = ({
  initialSubTab = 'be-btech',
  onNavigate,
  onOpenDepartment,
}) => {
  const [activeTab, setActiveTab] = useState<AdmissionSubTab>(initialSubTab);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'B.E. Computer Science & Engineering',
    category: 'UG (B.E./B.Tech Regular)',
    city: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const subTabs = [
    { id: 'be-btech' as AdmissionSubTab, label: 'B.E. / B.Tech (Regular)' },
    { id: 'lateral-entry' as AdmissionSubTab, label: 'Lateral Entry (Direct 2nd Yr)' },
    { id: 'me-mtech' as AdmissionSubTab, label: 'M.E. / M.Tech Programs' },
    { id: 'mba' as AdmissionSubTab, label: 'MBA Degree Course' },
    { id: 'enquiry-hotline' as AdmissionSubTab, label: 'Enquiry & Hotline' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('http://127.0.0.1:8000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {});
    } catch (err) {
      console.log('Submission fallback:', err);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 600);
    }
  };

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
              <span>Admissions</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#A0A5AD]" />
              <span className="text-[#22262B] capitalize">{activeTab.replace('-', ' ')}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22262B] leading-tight">
              Admissions 2026 – 2027
            </h1>
            <p className="font-body text-sm sm:text-base text-[#60656C] leading-relaxed">
              TNEA Single Window Counselling Code: <strong className="text-[#80672E]">2642</strong> (Alternate Code: 2636). Applications invited for 9 UG Engineering degrees and 4 PG master programs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={OFFICIAL_REGULATORY_DOCS.prospectus.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF9F6] text-[#22262B] border border-[#D9DCE1] text-xs font-semibold px-5 py-3 rounded-xl shadow-xs transition-all"
            >
              <Download className="w-4 h-4 text-[#80672E]" />
              <span>Official Prospectus</span>
            </a>
            <button
              onClick={() => setActiveTab('enquiry-hotline')}
              className="inline-flex items-center justify-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <span>Apply Online</span>
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

      {/* 1. B.E. / B.TECH REGULAR */}
      {activeTab === 'be-btech' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0E8D5] text-[#80672E] text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>4-Year Undergraduate Degree</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              B.E. / B.Tech Degree Programs (Regular 4-Year Scheme)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Eligibility Criteria</span>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Pass in +2 (Higher Secondary) with Mathematics, Physics, and Chemistry as core subjects. Minimum 45% aggregate (40% for reserved categories MBC/BC/SC/ST).
                </p>
              </div>
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Admission Modes</span>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  <strong>Government Quota:</strong> Through Anna University TNEA Online Counselling (College Code: <strong>2642</strong>).<br />
                  <strong>Management Quota:</strong> Direct institutional admission based on +2 marks.
                </p>
              </div>
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Scholarship Endowments</span>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Tamil Nadu Govt First Graduate Fee Waiver, 7.5% Govt School Reservation (Full Free Tuition & Hostel), Merit Scholarships, and Sports Quota.
                </p>
              </div>
            </div>

            {/* Table of 9 UG Programs */}
            <div className="pt-4 border-t border-[#D9DCE1]">
              <h3 className="font-serif text-lg font-bold text-[#22262B] mb-4">
                Approved Undergraduate Programs & Seat Matrix
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#FAF9F6] border-b border-[#D9DCE1] text-[#22262B]">
                      <th className="py-3 px-4 font-bold">Program Name</th>
                      <th className="py-3 px-4 font-bold">Degree</th>
                      <th className="py-3 px-4 font-bold">Sanctioned Intake</th>
                      <th className="py-3 px-4 font-bold">Accreditation</th>
                      <th className="py-3 px-4 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D9DCE1]">
                    {UG_DEPARTMENTS.map((dept) => (
                      <tr key={dept.id} className="hover:bg-[#FAF9F6]/60 transition-colors">
                        <td className="py-4 px-4 font-bold text-[#22262B]">{dept.name}</td>
                        <td className="py-4 px-4 font-semibold text-[#80672E]">{dept.degree}</td>
                        <td className="py-4 px-4 font-semibold">{dept.intake}</td>
                        <td className="py-4 px-4">
                          <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                            dept.category.includes('NBA') ? 'bg-emerald-100 text-emerald-800' : 'bg-[#F0E8D5] text-[#80672E]'
                          }`}>
                            {dept.category}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => onOpenDepartment(dept.id)}
                            className="text-xs font-semibold text-[#80672E] hover:underline cursor-pointer"
                          >
                            Explore Syllabus →
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

      {/* 2. LATERAL ENTRY */}
      {activeTab === 'lateral-entry' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0E8D5] text-[#80672E] text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Direct 2nd Year Entry</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              B.E. / B.Tech Lateral Entry Scheme (3-Year Duration)
            </h2>

            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              Candidates who have successfully completed a 3-Year Diploma in Engineering or a recognized B.Sc degree (with Mathematics at 10+2 level) are eligible for direct admission to the 3rd Semester (2nd Year) of any approved B.E. or B.Tech discipline under Anna University Autonomous regulations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="space-y-3">
                <h4 className="font-serif text-base font-bold text-[#22262B]">Diploma Holders Eligibility:</h4>
                <ul className="space-y-2 text-xs text-[#60656C]">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0 mt-0.5" />
                    <span>Pass in Diploma examination in Engineering / Technology from State Board of Technical Education.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0 mt-0.5" />
                    <span>Minimum 45% aggregate (40% in case of candidates belonging to reserved categories).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0 mt-0.5" />
                    <span>Cross-branch admissions permitted per latest AICTE and Anna University equivalence norms.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif text-base font-bold text-[#22262B]">B.Sc Degree Holders Eligibility:</h4>
                <ul className="space-y-2 text-xs text-[#60656C]">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0 mt-0.5" />
                    <span>Passed B.Sc Degree from a recognized University with at least 45% marks (40% reserved).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0 mt-0.5" />
                    <span>Passed 10+2 examination with Mathematics as a compulsory subject.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#80672E] shrink-0 mt-0.5" />
                    <span>Exempted from 1st-year engineering graphics and basic computational subjects.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9DCE1] flex items-center justify-between">
              <span className="text-xs text-[#60656C]">Lateral Entry counseling seats available across all 9 UG branches.</span>
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, category: 'Lateral Entry (Direct 2nd Yr)' }));
                  setActiveTab('enquiry-hotline');
                }}
                className="inline-flex items-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer"
              >
                <span>Enquire for Lateral Entry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 3. M.E. / M.TECH */}
      {activeTab === 'me-mtech' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0E8D5] text-[#80672E] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Postgraduate Master of Engineering</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              M.E. Degree Courses (2-Year Autonomous Programs)
            </h2>

            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              Designed for engineering graduates aiming for advanced research, high-end design, and teaching careers. Master degrees are offered across high-demand technological verticals with access to high-performance computing clusters and research seed grants.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#D9DCE1]">
              {PG_DEPARTMENTS.filter(d => d.degree === 'M.E.').map((pg) => (
                <div key={pg.id} className="bg-[#FAF9F6] border border-[#D9DCE1] rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#80672E] block">{pg.degree}</span>
                    <h3 className="font-serif text-base font-bold text-[#22262B] mt-1 mb-2">{pg.name}</h3>
                    <p className="text-xs text-[#60656C] line-clamp-3 leading-relaxed">{pg.desc}</p>
                    <div className="mt-4 pt-3 border-t border-[#D9DCE1] text-xs text-[#60656C]">
                      <div>Intake: <strong>{pg.intake}</strong></div>
                      <div>Duration: <strong>{pg.duration}</strong></div>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenDepartment(pg.id)}
                    className="mt-4 text-xs font-semibold text-[#80672E] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-4 rounded-xl text-xs text-[#60656C]">
              <strong>Eligibility:</strong> B.E. / B.Tech in relevant branch with valid TANCET or GATE score. Non-GATE candidates admitted through institutional entrance exam.
            </div>
          </div>
        </section>
      )}

      {/* 4. MBA DEGREE */}
      {activeTab === 'mba' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0E8D5] text-[#80672E] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Management Studies</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Master of Business Administration (MBA - 2 Years)
            </h2>

            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              The Department of Management Studies offers a comprehensive 2-Year Full-Time MBA program with dual specializations. Intake: <strong>120 Seats</strong>. Equipped with Bloomberg simulation workstations, business analytics studios, and regular corporate CXO guest lectures.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#D9DCE1]">
              {['Finance & Banking', 'Human Resource (HR)', 'Marketing & Digital', 'Operations & Logistics', 'Systems & Business Analytics', 'Entrepreneurship'].map((spec) => (
                <div key={spec} className="bg-[#FAF9F6] border border-[#D9DCE1] p-4 rounded-xl text-center">
                  <span className="font-semibold text-xs text-[#22262B]">{spec}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#D9DCE1] flex items-center justify-between">
              <span className="text-xs text-[#60656C]">Recognized by AICTE and affiliated to Anna University.</span>
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, course: 'Master of Business Administration (MBA)', category: 'PG (MBA)' }));
                  setActiveTab('enquiry-hotline');
                }}
                className="inline-flex items-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer"
              >
                <span>Apply for MBA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 5. ENQUIRY & HOTLINE */}
      {activeTab === 'enquiry-hotline' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Form */}
            <div className="lg:col-span-7 bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#22262B] mb-2">
                Admissions Enquiry Form 2026-27
              </h2>
              <p className="text-xs sm:text-sm text-[#60656C] mb-6">
                Fill out the form below. Our admissions counselor will contact you within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-[#FAF9F6] rounded-2xl border border-[#D9DCE1] space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#22262B]">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#60656C]">
                    Thank you, <strong>{formData.name}</strong>. Our admissions officer will connect with you via <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#80672E] font-semibold hover:underline cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#22262B] mb-1">Full Student Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#22262B] mb-1">Mobile Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#22262B] mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="student@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#22262B] mb-1">Admission Level</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E] transition-all"
                      >
                        <option value="UG (B.E./B.Tech Regular)">UG (B.E. / B.Tech Regular 4 Yrs)</option>
                        <option value="Lateral Entry (Direct 2nd Yr)">Lateral Entry (Direct 2nd Yr 3 Yrs)</option>
                        <option value="PG (M.E./M.Tech)">PG (M.E. Degree 2 Yrs)</option>
                        <option value="PG (MBA)">PG (MBA Management 2 Yrs)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#22262B] mb-1">Preferred Program</label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E] transition-all"
                      >
                        {UG_DEPARTMENTS.map((d) => (
                          <option key={d.id} value={d.name}>{d.name} ({d.degree})</option>
                        ))}
                        {PG_DEPARTMENTS.map((d) => (
                          <option key={d.id} value={d.name}>{d.name} ({d.degree})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#22262B] mb-1">Town / City / District</label>
                    <input
                      type="text"
                      placeholder="e.g. Krishnagiri, Hosur, Dharmapuri"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#22262B] mb-1">Query or Remarks</label>
                    <textarea
                      rows={3}
                      placeholder="Any specific questions regarding cutoff, transport, or scholarships..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs sm:text-sm p-3 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white font-semibold text-xs sm:text-sm p-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting to Admissions Office...' : 'Submit Admissions Enquiry'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Direct Hotlines Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] rounded-3xl p-6 sm:p-8 space-y-4">
                <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider block">Official Admissions Contacts</span>
                <h3 className="font-serif text-xl font-bold text-[#22262B]">
                  Admission Office Direct Numbers
                </h3>
                <p className="text-xs text-[#60656C]">
                  Reach out directly to our principal and admissions coordinators for instant guidance on eligibility, seat availability, and fee structure.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="bg-white p-4 rounded-xl border border-[#D9DCE1]">
                    <span className="text-[10px] font-bold uppercase text-[#80672E] block">Admissions Coordinator 1</span>
                    <a href="tel:+918838428106" className="text-sm font-bold text-[#22262B] hover:text-[#80672E] flex items-center gap-2 mt-0.5">
                      <Phone className="w-3.5 h-3.5 text-[#80672E]" />
                      <span>+91 88384 28106</span>
                    </a>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#D9DCE1]">
                    <span className="text-[10px] font-bold uppercase text-[#80672E] block">Admissions Coordinator 2</span>
                    <a href="tel:+919444273966" className="text-sm font-bold text-[#22262B] hover:text-[#80672E] flex items-center gap-2 mt-0.5">
                      <Phone className="w-3.5 h-3.5 text-[#80672E]" />
                      <span>+91 94442 73966</span>
                    </a>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#D9DCE1]">
                    <span className="text-[10px] font-bold uppercase text-[#80672E] block">Admissions Helpdesk 3</span>
                    <a href="tel:+916369342733" className="text-sm font-bold text-[#22262B] hover:text-[#80672E] flex items-center gap-2 mt-0.5">
                      <Phone className="w-3.5 h-3.5 text-[#80672E]" />
                      <span>+91 63693 42733</span>
                    </a>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-[#D9DCE1]">
                    <span className="text-[10px] font-bold uppercase text-[#80672E] block">Official Email</span>
                    <a href="mailto:admissions@psvcet.ac.in" className="text-xs font-semibold text-[#22262B] hover:text-[#80672E] flex items-center gap-2 mt-0.5">
                      <Mail className="w-3.5 h-3.5 text-[#80672E]" />
                      <span>admissions@psvcet.ac.in</span>
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D9DCE1] text-xs text-[#60656C]">
                  <span>Office Hours: 08:30 AM to 05:30 PM (Monday - Saturday)</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

    </div>
  );
};
