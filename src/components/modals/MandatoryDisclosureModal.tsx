import React from 'react';
import { motion } from 'framer-motion';
import { COLLEGE_DETAILS, STATUTORY_COMMITTEES } from '../../data/officialCollegeData';

interface MandatoryDisclosureModalProps {
  onClose: () => void;
}

export const MandatoryDisclosureModal: React.FC<MandatoryDisclosureModalProps> = ({ onClose }) => {
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
                AICTE Compliance
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#E2E7F0] text-text-secondary font-label-md text-xs font-semibold">
                Mandatory Public Disclosure 2024–25
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              AICTE Mandatory Disclosure
            </h2>
            <p className="font-body-sm text-sm text-text-secondary mt-1">
              Statutory institutional details, land & building infrastructure, approved intake, faculty profiles, and anti-ragging committees.
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

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 max-h-[60vh]">
          {/* Institutional Blueprint */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] space-y-2 text-xs font-body-sm">
              <h3 className="font-label-lg font-bold text-text-primary text-sm text-primary">1. Institution & Sponsoring Body</h3>
              <p><strong className="text-text-primary">Name:</strong> {COLLEGE_DETAILS.name}</p>
              <p><strong className="text-text-primary">Trust:</strong> {COLLEGE_DETAILS.trustName}</p>
              <p><strong className="text-text-primary">Founder Chairman:</strong> {COLLEGE_DETAILS.founderChairman}</p>
              <p><strong className="text-text-primary">Secretary:</strong> {COLLEGE_DETAILS.secretary}</p>
              <p><strong className="text-text-primary">Principal:</strong> {COLLEGE_DETAILS.principal}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] space-y-2 text-xs font-body-sm">
              <h3 className="font-label-lg font-bold text-text-primary text-sm text-primary">2. Affiliation & Approvals</h3>
              <p><strong className="text-text-primary">AICTE File No:</strong> Southern/1-3652874112</p>
              <p><strong className="text-text-primary">Affiliating University:</strong> Anna University, Chennai</p>
              <p><strong className="text-text-primary">Autonomous Status:</strong> UGC Letter No. F.22-1/2022(AC)</p>
              <p><strong className="text-text-primary">Counselling Code:</strong> TNEA 2642 / 2636</p>
              <p><strong className="text-text-primary">Campus Area:</strong> {COLLEGE_DETAILS.campusArea}</p>
            </div>
          </div>

          {/* Statutory Committees */}
          <div>
            <h3 className="font-serif text-xl font-bold text-text-primary mb-3">
              Statutory Committees & Compliance Cells
            </h3>
            <div className="space-y-2.5">
              {STATUTORY_COMMITTEES.map((comm, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-surface-base border border-[#CCD2DC] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <h4 className="font-label-md font-bold text-text-primary text-sm">{comm.name}</h4>
                    <span className="text-text-secondary">{comm.purpose}</span>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="font-semibold text-text-primary block">Chairperson: {comm.chairperson}</span>
                    <a href={`mailto:${comm.email}`} className="text-primary hover:underline">{comm.email}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Official Disclosure File */}
          <div className="p-4 rounded-2xl bg-surface-gold-pale/50 border border-accent-gold/40 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[28px]">description</span>
              <div>
                <h4 className="font-label-lg font-bold text-text-primary text-sm">Download Official AICTE Mandatory Disclosure Document (PDF)</h4>
                <p className="text-xs text-text-secondary font-body-sm">Complete 48-page compliance filing for academic year 2024–2025.</p>
              </div>
            </div>
            <button
              onClick={() => alert("Downloading official AICTE Mandatory Disclosure 2024-25 PDF for PSVCET...")}
              className="px-4 py-2 rounded-xl bg-primary text-white font-label-md text-xs font-semibold hover:bg-primary-container transition-colors shrink-0 shadow-sm cursor-pointer"
            >
              Download PDF
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FAF9F6] border-t border-[#CCD2DC] p-4 sm:p-5 flex items-center justify-between text-xs text-text-secondary">
          <span>Updated as per AICTE Approval Process Handbook (APH) guidelines.</span>
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
