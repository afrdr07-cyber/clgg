import React from 'react';
import { motion } from 'framer-motion';

interface ERPModalProps {
  onClose: () => void;
}

export const ERPModal: React.FC<ERPModalProps> = ({ onClose }) => {
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
        className="relative w-full max-w-3xl max-h-[90vh] bg-surface-base rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.45)] border border-[#CCD2DC] overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FAF9F6] via-[#EAEFF5] to-[#FAF9F6] border-b border-[#CCD2DC] p-5 sm:p-6 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-gold-pale text-accent-gold-readable font-label-eyebrow text-xs font-bold uppercase tracking-wider border border-accent-gold/40">
                Digital Campus
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#E2E7F0] text-text-secondary font-label-md text-xs font-semibold">
                PSVCET Cloud ERP
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Integrated Campus ERP Portal
            </h2>
            <p className="font-body-sm text-sm text-text-secondary mt-1">
              Centralized cloud portal for students, faculty, and administration to access academic records and fee portals.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Student Login */}
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-surface-gold-pale flex items-center justify-center text-primary border border-accent-gold/40">
                  <span className="material-symbols-outlined text-[22px]">school</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-text-primary">Student Academic Portal</h3>
                <p className="text-xs text-text-secondary font-body-sm leading-relaxed">
                  View daily attendance percentages, internal assessment scores, semester grade sheets, course registrations, and timetable.
                </p>
              </div>
              <button
                onClick={() => alert("Redirecting to PSVCET Student ERP Login Gateway...")}
                className="w-full py-2.5 rounded-xl bg-primary text-white font-label-md text-xs font-semibold hover:bg-primary-container transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Student Login</span>
                <span className="material-symbols-outlined text-[16px]">login</span>
              </button>
            </div>

            {/* Faculty Login */}
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#EAEFF5] flex items-center justify-center text-primary border border-[#CCD2DC]">
                  <span className="material-symbols-outlined text-[22px]">badge</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-text-primary">Faculty & Staff Portal</h3>
                <p className="text-xs text-text-secondary font-body-sm leading-relaxed">
                  Enter student attendance, upload continuous internal assessment marks, submit lesson plans, and track research publications.
                </p>
              </div>
              <button
                onClick={() => alert("Redirecting to PSVCET Faculty ERP Login Gateway...")}
                className="w-full py-2.5 rounded-xl bg-surface-base border border-[#CCD2DC] text-text-primary font-label-md text-xs font-semibold hover:border-primary transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Staff Login</span>
                <span className="material-symbols-outlined text-[16px]">login</span>
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-gold-pale/40 border border-accent-gold/30 flex items-center gap-3 text-xs text-text-secondary">
            <span className="material-symbols-outlined text-accent-gold-readable text-[24px] shrink-0">lock</span>
            <span>
              For ERP password reset or initial student login credentials, contact the PSVCET Computer Centre / HOD Office.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FAF9F6] border-t border-[#CCD2DC] p-4 sm:p-5 flex items-center justify-between text-xs text-text-secondary">
          <span>ERP Technical Helpdesk: <strong className="text-primary">erp@psvcet.ac.in</strong></span>
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
