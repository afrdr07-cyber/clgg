import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BUS_ROUTES } from '../../data/officialCollegeData';

interface BusRouteDirectoryModalProps {
  onClose: () => void;
}

export const BusRouteDirectoryModal: React.FC<BusRouteDirectoryModalProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRoutes = BUS_ROUTES.filter((r) => {
    const q = searchTerm.toLowerCase();
    return (
      r.routeNo.toLowerCase().includes(q) ||
      r.routeName.toLowerCase().includes(q) ||
      r.startingPoint.toLowerCase().includes(q) ||
      r.keyStops.some((s) => s.toLowerCase().includes(q))
    );
  });

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
        className="relative w-full max-w-5xl max-h-[90vh] bg-surface-base rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.45)] border border-[#CCD2DC] overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FAF9F6] via-[#EAEFF5] to-[#FAF9F6] border-b border-[#CCD2DC] p-5 sm:p-6 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-surface-gold-pale text-accent-gold-readable font-label-eyebrow text-xs font-bold uppercase tracking-wider border border-accent-gold/40">
                Transport Department
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#E2E7F0] text-text-secondary font-label-md text-xs font-semibold">
                Fleet of 30+ GPS Enabled Buses
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Official Campus Bus Route Directory
            </h2>
            <p className="font-body-sm text-sm text-text-secondary mt-1">
              Safe, reliable transit connecting Hosur, Krishnagiri, Dharmapuri, Tirupattur, Pochampalli, Kuppam, and surrounding taluks.
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

        {/* Search Bar & Stats */}
        <div className="p-5 bg-[#F4F6F9] border-b border-[#CCD2DC] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Search by area, town, stop, or route..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-base border border-[#CCD2DC] text-sm font-body-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-text-secondary w-full sm:w-auto justify-between sm:justify-end">
            <span>Transport Helpline: <strong className="text-text-primary font-bold">8838428106 / 9444273966</strong></span>
          </div>
        </div>

        {/* Route Cards Table / Grid */}
        <div className="p-6 overflow-y-auto flex-1 max-h-[60vh] space-y-4">
          {filteredRoutes.length === 0 ? (
            <div className="text-center py-12 text-text-secondary">
              <span className="material-symbols-outlined text-4xl mb-2 text-primary opacity-60">directions_bus</span>
              <p className="font-serif text-lg font-semibold">No bus routes matching "{searchTerm}"</p>
              <p className="text-sm mt-1">Try searching for Hosur, Dharmapuri, Krishnagiri, Bargur, or Tirupattur.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredRoutes.map((route, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#CCD2DC] hover:border-accent-gold/50 shadow-xs transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-surface-gold-pale text-accent-gold-readable font-label-md text-xs font-bold border border-accent-gold/40">
                        {route.routeNo}
                      </span>
                      <h3 className="font-label-lg font-bold text-text-primary text-sm sm:text-base">
                        {route.routeName}
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#EAEFF5] text-text-primary font-mono text-xs font-semibold">
                      {route.departureTime}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-text-secondary block uppercase tracking-wider">
                      Origin: <strong className="text-text-primary">{route.startingPoint}</strong>
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {route.keyStops.map((stop, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-surface-base border border-[#D4D9E2] text-[11px] font-body-sm text-text-secondary"
                        >
                          {stop}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-[#EAEFF5] flex items-center justify-between text-xs text-text-secondary">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-primary">person</span>
                      <span>{route.driverName}</span>
                    </span>
                    <a
                      href={`tel:${route.contactNo.replace(/\s+/g, '')}`}
                      className="text-primary font-semibold hover:underline flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[15px]">call</span>
                      <span>{route.contactNo}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#FAF9F6] border-t border-[#CCD2DC] p-4 sm:p-5 flex items-center justify-between text-xs text-text-secondary">
          <span>All buses arrive at PSVCET Mittapalli Campus before 08:30 AM. Return buses depart at 04:45 PM.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-primary text-white font-label-md text-xs font-semibold hover:bg-primary-container transition-colors cursor-pointer"
          >
            Close Directory
          </button>
        </div>
      </motion.div>
    </div>
  );
};
