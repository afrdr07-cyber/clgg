import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BUS_ROUTES, 
  OFFICIAL_REGULATORY_DOCS 
} from '../data/officialCollegeData';
import { InfrastructureSubTab, PageView } from '../types/navigation';
import { 
  Building2, BookOpen, Compass, ShieldCheck, Download, 
  ChevronRight, ArrowRight, Search, Phone, Users, 
  Wifi, Coffee, HeartPulse, Dumbbell, Activity, CheckCircle2, Check
} from 'lucide-react';

interface InfrastructureViewProps {
  initialSubTab?: InfrastructureSubTab;
  onNavigate: (view: PageView, subTab?: string) => void;
  onOpenBusModal: () => void;
}

export const InfrastructureView: React.FC<InfrastructureViewProps> = ({
  initialSubTab = 'hostels',
  onNavigate,
  onOpenBusModal,
}) => {
  const [activeTab, setActiveTab] = useState<InfrastructureSubTab>(initialSubTab);
  const [busSearch, setBusSearch] = useState('');

  const subTabs = [
    { id: 'hostels' as InfrastructureSubTab, label: 'Hostels & Residences' },
    { id: 'library' as InfrastructureSubTab, label: 'Central Digital Library' },
    { id: 'classrooms' as InfrastructureSubTab, label: 'Smart Classrooms & Halls' },
    { id: 'laboratories' as InfrastructureSubTab, label: 'Department Laboratories' },
    { id: 'amenities' as InfrastructureSubTab, label: 'Campus Amenities' },
    { id: 'bus-routes' as InfrastructureSubTab, label: '30+ College Bus Routes' },
  ];

  const filteredBuses = BUS_ROUTES.filter((r) => {
    const q = busSearch.toLowerCase();
    return (
      r.routeNo.toLowerCase().includes(q) ||
      r.routeName.toLowerCase().includes(q) ||
      r.startingPoint.toLowerCase().includes(q) ||
      r.keyStops.some((s) => s.toLowerCase().includes(q))
    );
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
              <span>Infrastructure</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#A0A5AD]" />
              <span className="text-[#22262B] capitalize">{activeTab.replace('-', ' ')}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22262B] leading-tight">
              World-Class Campus Infrastructure
            </h1>
            <p className="font-body text-sm sm:text-base text-[#60656C] leading-relaxed">
              Spanning 30+ picturesque acres on the NH-48 Chennai-Bengaluru highway corridor. Equipped with modern digital learning environments, advanced engineering laboratories, student residences, and transportation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenBusModal}
              className="inline-flex items-center justify-center gap-2 bg-[#80672E] hover:bg-[#664F18] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>Bus Route Directory</span>
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

      {/* 1. HOSTELS */}
      {activeTab === 'hostels' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Student Living</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Separate On-Campus Residences for Men & Women
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              PSVCET offers safe, comfortable, and well-managed hostel accommodations for both boys and girls. Designed to create a home away from home, each block is equipped with spacious rooms, high-speed Wi-Fi, 24/7 security, and dedicated dining halls serving hygienic South and North Indian meals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#80672E] text-white flex items-center justify-center mb-2">
                  <Coffee className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Nutritious Mess & Dining</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Steam-cooking facilities, purified RO drinking water, balanced weekly diet charts prepared under the supervision of a student mess committee.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#80672E] text-white flex items-center justify-center mb-2">
                  <Wifi className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#22262B]">High-Speed Wi-Fi & Study Rooms</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Round-the-clock internet access for research and study, silent study halls, and continuous 24-hour generator power backup.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#80672E] text-white flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#22262B]">24/7 Security & Wardens</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  CCTV surveillance across entry points, resident residential wardens, biometric attendance, and round-the-clock medical care assistance.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. CENTRAL DIGITAL LIBRARY */}
      {activeTab === 'library' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Knowledge Resource Centre</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Central Digital Library & Research Archives
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              The Central Library of PSVCET is a modern knowledge repository holding over <strong>29,000+ volumes</strong>, 6,500+ titles, and subscriptions to 50+ national and international print journals. The digital library wing provides online access to IEEE, DELNET, ScienceDirect, and NPTEL multimedia courseware.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-4 rounded-xl text-center">
                <span className="font-serif text-2xl font-bold text-[#80672E] block">29,000+</span>
                <span className="text-xs text-[#60656C]">Books & Volumes</span>
              </div>
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-4 rounded-xl text-center">
                <span className="font-serif text-2xl font-bold text-[#80672E] block">50+</span>
                <span className="text-xs text-[#60656C]">National/Intl Journals</span>
              </div>
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-4 rounded-xl text-center">
                <span className="font-serif text-2xl font-bold text-[#80672E] block">500+</span>
                <span className="text-xs text-[#60656C]">Seating Capacity</span>
              </div>
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-4 rounded-xl text-center">
                <span className="font-serif text-2xl font-bold text-[#80672E] block">DELNET</span>
                <span className="text-xs text-[#60656C]">& IEEE Digital Access</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="font-serif text-base font-bold text-[#22262B]">Key Library Facilities:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#60656C]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#80672E]" />
                  <span>Fully barcoded book issuing & Online Public Access Catalogue (OPAC).</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#80672E]" />
                  <span>Air-conditioned digital multimedia reading zone with 40+ terminals.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#80672E]" />
                  <span>Reprographic, scanning, and printing facilities for students.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#80672E]" />
                  <span>Dedicated archive for past University question papers and project theses.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. CLASSROOMS & HALLS */}
      {activeTab === 'classrooms' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Learning Spaces</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              ICT Smart Classrooms & Central Conference Halls
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              Every academic block features well-ventilated, acoustically engineered classrooms with ergonomic seating and modern audio-visual infrastructure, enabling interactive, multimedia-assisted pedagogies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-6 rounded-2xl space-y-3">
                <h4 className="font-serif text-lg font-bold text-[#22262B]">Smart ICT Classrooms</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Equipped with high-lumen digital projectors, interactive smart display boards, Wi-Fi connectivity, and lecture capture facilities to facilitate blended and flipped classroom learning.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-6 rounded-2xl space-y-3">
                <h4 className="font-serif text-lg font-bold text-[#22262B]">Air-Conditioned Conference Hall</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Centralized conference hall with video-conferencing technology, Dolby digital audio, and comfortable seating for hosting national symposiums, FDPs, Board of Studies, and Academic Council meetings.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. LABORATORIES */}
      {activeTab === 'laboratories' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Practical Innovation</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Specialized Department Engineering Laboratories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Computer Science & IT</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Cloud & AI/GPU Laboratories</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  High-end computing machines connected via 1 Gbps fiber optic backbone, supporting deep learning frameworks, Docker, Kubernetes, and enterprise web servers.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Electronics & Comm (ECE)</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">VLSI & Embedded Systems</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Cadence EDA design tools, FPGA Spartan kits, ARM Cortex microcontrollers, microwave test benches, and digital signal processors.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Mechanical Engineering</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">CNC & Mechatronics Lab</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Production CNC milling and lathe machines, CAD/CAM Pro-E/SolidWorks design suites, thermal engineering testing rigs, and fluid mechanics flumes.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Civil Engineering</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Structural & Concrete Lab</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Universal Testing Machine (UTM), total station electronic theodolites, compression testing equipment, and environmental soil testing analyzers.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Electrical Engineering</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Power Systems & EV Testing</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  DC/AC motor-generator sets, solar photovoltaic training setups, power electronics converter modules, and EV battery testing suites.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Basic Sciences</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Physics & Chemistry Suites</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Spectrophotometers, flame photometers, laser diffraction apparatus, and water hardness titration benches.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. CAMPUS AMENITIES */}
      {activeTab === 'amenities' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Lifestyle & Health</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Sports, Wellness & Campus Amenities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#80672E] text-white flex items-center justify-center mb-2">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Grand Auditorium (1,500+)</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  State-of-the-art auditorium with acoustic treatment, grand stage, and professional lighting for convocations and cultural extravaganzas.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#80672E] text-white flex items-center justify-center mb-2">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Gymnasium & Yoga Centre</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  Modern fitness machines, free weights, and an open serene yoga pavilion encouraging healthy mental and physical balance.
                </p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#80672E] text-white flex items-center justify-center mb-2">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#22262B]">24/7 Medical Health Center</h4>
                <p className="text-xs text-[#60656C] leading-relaxed">
                  On-call medical doctor, emergency first aid ward, ambulance on standby, and tie-ups with leading hospitals in Krishnagiri.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. BUS ROUTES */}
      {activeTab === 'bus-routes' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Transit Network</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
                  Official Campus Bus Routes Directory
                </h2>
                <p className="text-xs sm:text-sm text-[#60656C] mt-1">
                  Fleet of 30+ GPS-tracked college buses covering all major corridors across Krishnagiri, Dharmapuri, and surrounding taluks.
                </p>
              </div>

              <a
                href={OFFICIAL_REGULATORY_DOCS.busRouteSchedule.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FAF9F6] hover:bg-[#80672E] hover:text-white text-[#80672E] border border-[#80672E] px-4 py-2 rounded-xl text-xs font-semibold transition-all shadow-xs shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Download Bus Schedule PDF</span>
              </a>
            </div>

            {/* Search Input */}
            <div className="relative w-full max-w-md">
              <Search className="w-4 h-4 text-[#A0A5AD] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by route, stop, or destination..."
                value={busSearch}
                onChange={(e) => setBusSearch(e.target.value)}
                className="w-full text-xs sm:text-sm pl-10 pr-3 py-2.5 rounded-xl border border-[#D9DCE1] bg-[#FAF9F6] focus:bg-white focus:outline-none focus:border-[#80672E]"
              />
            </div>

            {/* Routes Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#D9DCE1] text-[#22262B]">
                    <th className="py-3 px-4 font-bold">Route No</th>
                    <th className="py-3 px-4 font-bold">Route Name</th>
                    <th className="py-3 px-4 font-bold">Starting Point</th>
                    <th className="py-3 px-4 font-bold">Departure</th>
                    <th className="py-3 px-4 font-bold">Driver Name & Contact</th>
                    <th className="py-3 px-4 font-bold">Key En Route Stops</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D9DCE1]">
                  {filteredBuses.map((bus) => (
                    <tr key={bus.routeNo} className="hover:bg-[#FAF9F6]/60 transition-colors">
                      <td className="py-4 px-4 font-mono font-bold text-[#80672E]">{bus.routeNo}</td>
                      <td className="py-4 px-4 font-bold text-[#22262B]">{bus.routeName}</td>
                      <td className="py-4 px-4 text-[#60656C]">{bus.startingPoint}</td>
                      <td className="py-4 px-4 font-mono text-xs font-semibold text-[#80672E]">{bus.departureTime}</td>
                      <td className="py-4 px-4">
                        <span className="font-semibold block text-[#22262B]">{bus.driverName}</span>
                        <a href={`tel:${bus.contactNo}`} className="text-xs text-[#80672E] hover:underline flex items-center gap-1 mt-0.5">
                          <Phone className="w-3 h-3" />
                          <span>{bus.contactNo}</span>
                        </a>
                      </td>
                      <td className="py-4 px-4 text-xs text-[#60656C] max-w-xs">
                        {bus.keyStops.join(' → ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-4 rounded-xl flex items-center justify-between text-xs text-[#60656C]">
              <span>Need special route assistance? Contact College Transport Office: +91 94444 94360</span>
              <button onClick={onOpenBusModal} className="font-semibold text-[#80672E] hover:underline cursor-pointer">
                Full Modal Directory →
              </button>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
