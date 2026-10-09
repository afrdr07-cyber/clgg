import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ACCREDITATION_DETAILS } from '../../data/officialCollegeData';

interface AccreditationHubModalProps {
  initialTab?: 'naac' | 'nba' | 'nirf' | 'awards';
  onClose: () => void;
}

export const AccreditationHubModal: React.FC<AccreditationHubModalProps> = ({
  initialTab = 'naac',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'naac' | 'nba' | 'nirf' | 'awards'>(initialTab);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 25 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 25 }}
        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface-base rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.45)] border border-[#CCD2DC] overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FAF9F6] via-[#EAEFF5] to-[#FAF9F6] border-b border-[#CCD2DC] p-5 sm:p-6 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-gold-pale text-accent-gold-readable font-label-eyebrow text-xs font-bold uppercase tracking-wider border border-accent-gold/40">
                Institutional Recognitions
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#E2E7F0] text-text-secondary font-label-md text-xs font-semibold">
                Autonomous Quality Standard
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Accreditations, NIRF & National Accolades
            </h2>
            <p className="font-body-sm text-sm text-text-secondary mt-1">
              Peer-reviewed academic quality, outcome-based education benchmarks, and institutional rankings.
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

        {/* Tabs */}
        <div className="bg-[#F4F6F9] px-6 border-b border-[#CCD2DC] flex gap-2 sm:gap-4 overflow-x-auto scrollbar-none">
          {[
            { id: 'naac', label: "NAAC 'A' Grade", icon: 'verified' },
            { id: 'nba', label: 'NBA Accredited (CSE)', icon: 'workspace_premium' },
            { id: 'nirf', label: 'NIRF Reports', icon: 'analytics' },
            { id: 'awards', label: 'Awards & ISO 9001', icon: 'military_tech' },
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

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 max-h-[60vh]">
          {activeTab === 'naac' && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-surface-gold-pale/50 border border-accent-gold/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-surface-gold-pale flex items-center justify-center text-primary font-serif text-2xl font-bold border border-accent-gold/50 shadow-sm shrink-0">
                    A
                  </div>
                  <div>
                    <span className="text-xs font-bold text-accent-gold-readable uppercase tracking-wider block">Institutional Accreditation</span>
                    <h3 className="font-serif text-xl font-bold text-text-primary">National Assessment & Accreditation Council (NAAC)</h3>
                    <span className="text-xs font-semibold text-text-secondary">{ACCREDITATION_DETAILS.naac.cgpa} • UGC Autonomous</span>
                  </div>
                </div>
                <button
                  onClick={() => alert("Viewing official NAAC 'A' Grade Accreditation Certificate (UGC/NAAC)...")}
                  className="px-4 py-2 rounded-xl bg-primary text-white font-label-md text-xs font-semibold hover:bg-primary-container transition-colors shrink-0 shadow-sm cursor-pointer"
                >
                  View Certificate
                </button>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold text-text-primary mb-3">
                  Criterion-Wise Institutional Quality Highlights
                </h4>
                <div className="space-y-2">
                  {ACCREDITATION_DETAILS.naac.features.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#CCD2DC] text-sm font-body-sm text-text-primary flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">check_circle</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'nba' && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-accent-gold-readable uppercase tracking-wider block">Outcome Based Education (OBE)</span>
                  <h3 className="font-serif text-xl font-bold text-text-primary">NBA Tier Accreditation: Dept of Computer Science & Engineering</h3>
                  <span className="text-xs text-text-secondary">{ACCREDITATION_DETAILS.nba.authority}</span>
                </div>
                <button
                  onClick={() => alert("Viewing official NBA Accreditation Certificate for B.E. Computer Science and Engineering...")}
                  className="px-4 py-2 rounded-xl bg-primary text-white font-label-md text-xs font-semibold hover:bg-primary-container transition-colors shrink-0 shadow-sm cursor-pointer"
                >
                  View NBA Order
                </button>
              </div>

              <div className="space-y-2">
                {ACCREDITATION_DETAILS.nba.features.map((feat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-surface-base border border-[#CCD2DC] text-sm font-body-sm text-text-primary flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">workspace_premium</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'nirf' && (
            <div className="space-y-5">
              <div>
                <h3 className="font-serif text-xl font-bold text-text-primary mb-1">
                  National Institutional Ranking Framework (NIRF)
                </h3>
                <p className="font-body-sm text-sm text-text-secondary">
                  Annual data capture reports submitted to Ministry of Education, Government of India.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] space-y-3">
                  <span className="text-xs font-bold text-accent-gold-readable uppercase tracking-wider block">Category: Engineering</span>
                  <h4 className="font-label-lg font-bold text-text-primary text-base">NIRF Engineering Data 2024</h4>
                  <p className="text-xs text-text-secondary font-body-sm">Teaching learning resources, research output, student intake, and graduation outcomes.</p>
                  <button
                    onClick={() => alert("Downloading NIRF 2024 Engineering Data Report PDF...")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    <span>Download Engineering DCS PDF</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] space-y-3">
                  <span className="text-xs font-bold text-accent-gold-readable uppercase tracking-wider block">Category: Management (MBA)</span>
                  <h4 className="font-label-lg font-bold text-text-primary text-base">NIRF Management Data 2024</h4>
                  <p className="text-xs text-text-secondary font-body-sm">Executive placement packages, corporate consultancies, and student diversity metrics.</p>
                  <button
                    onClick={() => alert("Downloading NIRF 2024 Management Data Report PDF...")}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">download</span>
                    <span>Download Management DCS PDF</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'awards' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-gold-pale flex items-center justify-center text-primary shrink-0 border border-accent-gold/40">
                  <span className="material-symbols-outlined text-[22px]">park</span>
                </div>
                <div>
                  <h4 className="font-label-lg font-bold text-text-primary text-base">{ACCREDITATION_DETAILS.greenAward.title}</h4>
                  <span className="text-xs font-semibold text-accent-gold-readable block">{ACCREDITATION_DETAILS.greenAward.conferredBy}</span>
                  <p className="font-body-sm text-xs text-text-secondary mt-1">{ACCREDITATION_DETAILS.greenAward.highlights}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAEFF5] flex items-center justify-center text-primary shrink-0 border border-[#CCD2DC]">
                  <span className="material-symbols-outlined text-[22px]">verified</span>
                </div>
                <div>
                  <h4 className="font-label-lg font-bold text-text-primary text-base">ISO 9001:2015 Certification</h4>
                  <span className="text-xs font-semibold text-text-secondary block">Bureau of Quality Certification</span>
                  <p className="font-body-sm text-xs text-text-secondary mt-1">{ACCREDITATION_DETAILS.iso.scope}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#FAF9F6] border-t border-[#CCD2DC] p-4 sm:p-5 flex items-center justify-between text-xs text-text-secondary">
          <span>All statutory accreditations are valid for Academic Year 2024–2025.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-primary text-white font-label-md text-xs font-semibold hover:bg-primary-container transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
