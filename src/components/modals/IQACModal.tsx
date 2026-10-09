import React from 'react';
import { motion } from 'framer-motion';
import { STATUTORY_COMMITTEES } from '../../data/officialCollegeData';

interface IQACModalProps {
  onClose: () => void;
}

export const IQACModal: React.FC<IQACModalProps> = ({ onClose }) => {
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
                Academic Governance
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#E2E7F0] text-text-secondary font-label-md text-xs font-semibold">
                NAAC 'A' Grade Benchmark
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Internal Quality Assurance Cell (IQAC)
            </h2>
            <p className="font-body-sm text-sm text-text-secondary mt-1">
              Steering institutional quality, continuous pedagogical improvements, and accreditation compliance across all autonomous departments.
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
          {/* Objectives */}
          <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] space-y-3">
            <h3 className="font-serif text-lg font-bold text-text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">verified</span>
              <span>Prime Objectives of IQAC</span>
            </h3>
            <ul className="space-y-2 text-sm font-body-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent-gold font-bold">1.</span>
                <span>To develop a conscious, consistent, and catalytic action plan towards improving the academic and administrative performance of PSVCET.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-gold font-bold">2.</span>
                <span>To institutionalize best pedagogical practices, student-centric ICT learning systems, and outcome-based engineering rubrics.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-gold font-bold">3.</span>
                <span>To conduct regular Academic & Administrative Audits (AAA) and monitor Annual Quality Assurance Reports (AQAR).</span>
              </li>
            </ul>
          </div>

          {/* Committee Composition */}
          <div>
            <h3 className="font-serif text-xl font-bold text-text-primary mb-3">
              IQAC Composition & Key Office Bearers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { role: "Chairperson", name: "Dr. P. Lawrence", title: "Principal, PSVCET" },
                { role: "Management Representative", name: "Dr. S. Vivek", title: "Secretary, St. Joan's Educational Trust" },
                { role: "IQAC Coordinator", name: "Dr. K. Ramesh", title: "Professor & HOD, Computer Science & Engg" },
                { role: "Senior Administrative Officer", name: "Prof. S. Natarajan", title: "Administrative Officer" },
                { role: "Faculty Member - Circuit Branches", name: "Dr. R. Balaji", title: "Professor & HOD, ECE" },
                { role: "Faculty Member - Core Branches", name: "Dr. K. Jayakumar", title: "Professor & HOD, Mechanical Engg" },
                { role: "Industry Representative", name: "Mr. G. Anand", title: "Technical Director, Hexaware Technologies" },
                { role: "Alumni Representative", name: "Er. K. Vigneshwaran", title: "Senior Lead Architect (Alumnus)" },
              ].map((member, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-surface-base border border-[#CCD2DC] shadow-xs flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-accent-gold-readable uppercase tracking-wider block">{member.role}</span>
                    <h4 className="font-label-lg font-bold text-text-primary text-sm mt-0.5">{member.name}</h4>
                    <span className="text-xs text-text-secondary">{member.title}</span>
                  </div>
                  <span className="material-symbols-outlined text-[#CBD2DC] text-[24px]">account_circle</span>
                </div>
              ))}
            </div>
          </div>

          {/* Statutory Cells & AQAR Reports */}
          <div>
            <h3 className="font-serif text-xl font-bold text-text-primary mb-3">
              Monitored Statutory Committees
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {STATUTORY_COMMITTEES.map((comm, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#CCD2DC] space-y-1">
                  <h4 className="font-label-md font-bold text-text-primary text-xs line-clamp-1">{comm.name}</h4>
                  <p className="text-[11px] text-text-secondary line-clamp-2">{comm.purpose}</p>
                  <span className="text-[11px] font-semibold text-primary block pt-1">{comm.email}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FAF9F6] border-t border-[#CCD2DC] p-4 sm:p-5 flex items-center justify-between text-xs text-text-secondary">
          <span>Official IQAC Email: <strong className="text-primary">iqac@psvcet.ac.in</strong></span>
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
