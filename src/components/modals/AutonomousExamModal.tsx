import React from 'react';
import { motion } from 'framer-motion';

interface AutonomousExamModalProps {
  onClose: () => void;
}

export const AutonomousExamModal: React.FC<AutonomousExamModalProps> = ({ onClose }) => {
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
                Examination Governance
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#E2E7F0] text-text-secondary font-label-md text-xs font-semibold">
                Autonomous Regulations R-2021 / R-2024
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Controller of Examinations (COE)
            </h2>
            <p className="font-body-sm text-sm text-text-secondary mt-1">
              Autonomous examination cell, continuous internal assessments, semester schedules, credit evaluation, and result publishing.
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
          {/* Assessment Structure */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] text-center space-y-1">
              <span className="font-serif text-2xl font-bold text-primary block">40%</span>
              <span className="font-label-md text-xs font-bold text-text-primary block">Continuous Internal Assessment</span>
              <p className="text-[11px] text-text-secondary">3 Internal tests, model exams, assignments & seminar rubrics</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] text-center space-y-1">
              <span className="font-serif text-2xl font-bold text-primary block">60%</span>
              <span className="font-label-md text-xs font-bold text-text-primary block">End Semester Examination</span>
              <p className="text-[11px] text-text-secondary">Centralized evaluation with external Anna University examiners</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] text-center space-y-1">
              <span className="font-serif text-2xl font-bold text-primary block">10.0</span>
              <span className="font-label-md text-xs font-bold text-text-primary block">Letter Grading (O to U)</span>
              <p className="text-[11px] text-text-secondary">Standard 10-point GPA & CGPA relative performance scale</p>
            </div>
          </div>

          {/* Key Services for Students */}
          <div>
            <h3 className="font-serif text-xl font-bold text-text-primary mb-3">
              Examination Cell Student Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { title: "Semester Exam Time Tables", desc: "Download approved schedule for Nov/Dec and April/May autonomous theory & lab exams.", action: "View Timetable" },
                { title: "Autonomous Results Portal", desc: "Access secure individual semester grade cards and marks statements.", action: "Check Results" },
                { title: "Revaluation & Photocopy Desk", desc: "Apply online for answer script photocopy and external revaluation.", action: "Apply Revaluation" },
                { title: "Academic Regulations (PDF)", desc: "Complete official handbook of Anna University Autonomous Rules.", action: "Download R-2021" },
              ].map((srv, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-surface-base border border-[#CCD2DC] shadow-xs flex flex-col justify-between gap-3">
                  <div>
                    <h4 className="font-label-lg font-bold text-text-primary text-sm">{srv.title}</h4>
                    <p className="text-xs text-text-secondary font-body-sm mt-1">{srv.desc}</p>
                  </div>
                  <button
                    onClick={() => alert(`Launching ${srv.title} portal service...`)}
                    className="self-start text-xs font-bold text-primary hover:text-accent-gold-readable flex items-center gap-1 cursor-pointer"
                  >
                    <span>{srv.action}</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* COE Office Contacts */}
          <div className="p-4 rounded-2xl bg-[#EAEFF5] border border-[#CCD2DC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-text-primary block">Controller of Examinations Office</span>
              <span className="text-text-secondary">Direct Tel: 04343 - 268333 (Ext. 104) • Email: <strong className="text-primary">coe@psvcet.ac.in</strong></span>
            </div>
            <button
              onClick={() => alert("Connecting with COE Helpdesk...")}
              className="px-4 py-2 rounded-xl bg-surface-base border border-[#CCD2DC] font-semibold text-text-primary hover:border-primary shrink-0 cursor-pointer"
            >
              Contact COE Desk
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FAF9F6] border-t border-[#CCD2DC] p-4 sm:p-5 flex items-center justify-between text-xs text-text-secondary">
          <span>Office of Controller of Examinations • P.S.V College of Engineering and Technology (Autonomous)</span>
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
