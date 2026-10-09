import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DepartmentInfo } from '../../data/officialCollegeData';

interface DepartmentDetailModalProps {
  department: DepartmentInfo | null;
  onClose: () => void;
  onEnquire: (courseName: string) => void;
}

export const DepartmentDetailModal: React.FC<DepartmentDetailModalProps> = ({
  department,
  onClose,
  onEnquire,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'labs' | 'careers'>('overview');

  if (!department) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 25 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 25 }}
        transition={{ type: "spring", damping: 26, stiffness: 320 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface-base rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.45)] border border-[#CCD2DC] overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#FAF9F6] via-[#EAEFF5] to-[#FAF9F6] border-b border-[#CCD2DC] p-5 sm:p-6 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-gold-pale text-accent-gold-readable font-label-eyebrow text-xs font-bold uppercase tracking-wider border border-accent-gold/40">
                {department.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#E2E7F0] text-text-secondary font-label-md text-xs font-semibold">
                {department.degree} • {department.duration}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#E2E7F0] text-text-secondary font-label-md text-xs font-semibold">
                Intake: {department.intake}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              {department.name}
            </h2>
            <p className="font-body-sm text-sm text-text-secondary mt-1">
              {department.dept} • HOD: <strong className="text-text-primary">{department.headOfDepartment}</strong>
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-full bg-[#E2E7F0] hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-text-primary shrink-0 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#F4F6F9] px-6 border-b border-[#CCD2DC] flex gap-2 sm:gap-4 overflow-x-auto scrollbar-none">
          {[
            { id: 'overview', label: 'Overview & Vision', icon: 'info' },
            { id: 'curriculum', label: 'Curriculum & Syllabus', icon: 'menu_book' },
            { id: 'labs', label: 'Laboratories & R&D', icon: 'precision_manufacturing' },
            { id: 'careers', label: 'Careers & Recruiters', icon: 'work' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-3 sm:px-4 font-label-md text-sm font-semibold flex items-center gap-1.5 border-b-2 transition-all shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? 'border-primary text-primary bg-surface-base rounded-t-lg'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-text-primary mb-2">Program Overview</h3>
                <p className="font-body-md text-text-secondary leading-relaxed text-sm sm:text-base">
                  {department.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC]">
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                    <h4 className="font-serif text-lg font-bold">Department Vision</h4>
                  </div>
                  <p className="font-body-sm text-text-secondary text-sm leading-relaxed">
                    {department.vision}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC]">
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                    <h4 className="font-serif text-lg font-bold">Department Mission</h4>
                  </div>
                  <ul className="space-y-1.5 font-body-sm text-text-secondary text-sm">
                    {department.mission.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-accent-gold-readable font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-text-primary mb-2">
                  Program Educational Objectives (PEOs)
                </h3>
                <div className="space-y-2">
                  {department.peos.map((peo, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-surface-gold-pale/40 border border-accent-gold/30 text-text-primary text-sm font-body-sm flex items-start gap-2">
                      <span className="material-symbols-outlined text-accent-gold-readable text-[18px] shrink-0 mt-0.5">check_circle</span>
                      <span>{peo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-serif text-xl font-bold text-text-primary">
                    Autonomous Curriculum Structure
                  </h3>
                  <p className="font-body-sm text-xs text-text-secondary">
                    Based on Anna University Autonomous Regulation R-2021 / R-2024
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-surface-gold-pale text-accent-gold-readable font-label-md text-xs font-bold border border-accent-gold/40">
                  Total 165+ Credits • Choice Based Credit System (CBCS)
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {department.curriculumHighlights.map((block, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-label-lg font-bold text-primary text-sm">{block.year}</span>
                      <span className="text-xs font-medium text-text-secondary bg-[#EAEFF5] px-2 py-0.5 rounded-full">{block.focus}</span>
                    </div>
                    <ul className="space-y-1 pt-1">
                      {block.coreSubjects.map((sub, sIdx) => (
                        <li key={sIdx} className="text-xs font-body-sm text-text-secondary flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0"></span>
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-surface-gold-pale/50 border border-accent-gold/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[28px]">download_for_offline</span>
                  <div>
                    <h4 className="font-label-lg font-bold text-text-primary text-sm">Download Complete Syllabus PDF</h4>
                    <p className="font-body-sm text-xs text-text-secondary">Full course scheme, elective baskets, credit breakdowns, and lab manuals.</p>
                  </div>
                </div>
                <button
                  onClick={() => alert(`Downloading official ${department.degree} ${department.name} Syllabus PDF (Anna University Autonomous Regulations)...`)}
                  className="px-4 py-2 rounded-xl bg-primary text-white font-label-md text-xs font-semibold hover:bg-primary-container transition-colors shrink-0 cursor-pointer shadow-sm"
                >
                  Download Syllabus
                </button>
              </div>
            </div>
          )}

          {activeTab === 'labs' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-text-primary mb-2">
                  Specialized Laboratory Infrastructure
                </h3>
                <p className="font-body-sm text-sm text-text-secondary">
                  Equipped with high-end workstations, licensed enterprise software suites, testing benches, and industrial prototype rigs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {department.keyLabs.map((lab, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#CCD2DC] flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-surface-gold-pale flex items-center justify-center text-primary shrink-0 border border-accent-gold/40 shadow-xs">
                      <span className="material-symbols-outlined text-[18px]">terminal</span>
                    </div>
                    <div>
                      <h4 className="font-label-md font-bold text-text-primary text-sm">{lab}</h4>
                      <p className="font-body-sm text-xs text-text-secondary mt-0.5">High-speed gigabit LAN • 24/7 power backup • Industry standard kits</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#EAEFF5] border border-[#CCD2DC] flex items-center gap-3 text-text-secondary text-xs">
                <span className="material-symbols-outlined text-primary text-[22px] shrink-0">verified</span>
                <span>All laboratories adhere strictly to AICTE and NBA outcome-based practical assessment guidelines with continuous lab viva and project reviews.</span>
              </div>
            </div>
          )}

          {activeTab === 'careers' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-text-primary mb-2">
                  Career Pathways & Top Recruiters
                </h3>
                <p className="font-body-sm text-sm text-text-secondary">
                  Graduates of this specialization secure engineering, consulting, and research positions in leading global enterprises.
                </p>
              </div>

              <div>
                <h4 className="font-label-md font-bold text-text-primary text-sm mb-2 uppercase tracking-wider">
                  Target Job Profiles
                </h4>
                <div className="flex flex-wrap gap-2">
                  {department.careerOpportunities.map((role, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-[#FAF9F6] border border-[#CCD2DC] text-text-primary font-body-sm text-xs font-medium">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-label-md font-bold text-text-primary text-sm mb-2 uppercase tracking-wider">
                  Key Recruiting Partners
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {department.topRecruiters.map((rec, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-surface-base text-center border border-[#CCD2DC] font-label-md text-xs font-bold text-text-primary shadow-xs">
                      {rec}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div className="bg-[#FAF9F6] border-t border-[#CCD2DC] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-text-secondary">
            TNEA Counselling Code: <strong className="text-primary font-bold">2642</strong> • Admissions Open for 2025–26
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#EAEFF5] text-text-primary font-label-md text-xs font-semibold hover:bg-[#D8DDE6] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire(`${department.degree} ${department.name}`);
              }}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-primary-container to-primary text-white font-label-md text-xs font-bold shadow-md hover:brightness-110 transition-all cursor-pointer border border-accent-gold/40 flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">school</span>
              <span>Apply / Enquire for this Course</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
