import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ActivitiesSubTab, PageView } from '../types/navigation';
import { 
  ShieldCheck, Heart, Award, Trophy, Users, 
  ChevronRight, ArrowRight, CheckCircle2, Check, Sparkles, Activity
} from 'lucide-react';

interface ActivitiesViewProps {
  initialSubTab?: ActivitiesSubTab;
  onNavigate: (view: PageView, subTab?: string) => void;
}

export const ActivitiesView: React.FC<ActivitiesViewProps> = ({
  initialSubTab = 'ncc',
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<ActivitiesSubTab>(initialSubTab);

  const subTabs = [
    { id: 'ncc' as ActivitiesSubTab, label: 'NCC (Cadet Corps)' },
    { id: 'nss' as ActivitiesSubTab, label: 'NSS (Service Scheme)' },
    { id: 'yrc' as ActivitiesSubTab, label: 'YRC (Youth Red Cross)' },
    { id: 'sports' as ActivitiesSubTab, label: 'Sports & Athletics' },
    { id: 'clubs' as ActivitiesSubTab, label: 'Student Co-Curricular Clubs' },
  ];

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
              <span>Activities</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#A0A5AD]" />
              <span className="text-[#22262B] capitalize">{activeTab.replace('-', ' ')}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22262B] leading-tight">
              Co-Curricular & Student Life Activities
            </h1>
            <p className="font-body text-sm sm:text-base text-[#60656C] leading-relaxed">
              Fostering leadership, civic duty, discipline, and sportsmanship through the National Cadet Corps (NCC), National Service Scheme (NSS), Youth Red Cross (YRC), and vibrant technical and cultural clubs.
            </p>
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

      {/* 1. NCC */}
      {activeTab === 'ncc' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">National Discipline</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              National Cadet Corps (NCC - Army Wing)
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              The NCC unit of PSVCET instills patriotic devotion, leadership, secular outlook, and ideals of selfless service among our students. Cadets undergo regular physical conditioning, drill practice, weapon training, obstacle courses, and participate in Combined Annual Training Camps (CATC).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">B & C Certificates</span>
                <p className="text-xs text-[#60656C]">Eligible cadets appear for official NCC 'B' and 'C' Certificate examinations granting direct entry opportunities in the Indian Armed Forces.</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Republic Day Parade (RDC)</span>
                <p className="text-xs text-[#60656C]">Cadets represent the institution at state-level and national Republic Day camps, showcasing marching excellence and ceremonial honor.</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Social Service Drives</span>
                <p className="text-xs text-[#60656C]">Active community involvement in traffic awareness campaigns, pulse polio immunization, and disaster relief drills.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. NSS */}
      {activeTab === 'nss' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Community Upliftment</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              National Service Scheme (NSS - "Not Me But You")
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              With over 200 registered student volunteers, the NSS unit at PSVCET organizes annual 7-day special rural development camps in adopted villages around Krishnagiri district, conducting health checkups, environmental literacy, tree plantation, and digital awareness drives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Annual Blood Donation Camps</span>
                <p className="text-xs text-[#60656C]">Collecting over 300+ units of blood annually in partnership with Krishnagiri Government Headquarters Hospital.</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Green Plantation & Cleanliness</span>
                <p className="text-xs text-[#60656C]">Mass sapling planting across highway corridors and Swachh Bharat Abhiyan plastic-free cleanliness missions.</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Adopted Village Camps</span>
                <p className="text-xs text-[#60656C]">Educational coaching for village children, repair of school premises, and health hygiene education for rural families.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. YRC */}
      {activeTab === 'yrc' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Humanitarian Action</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Youth Red Cross (YRC)
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              The Youth Red Cross chapter at PSVCET focuses on the protection of health and life, service to the sick and suffering, and the promotion of international human dignity and peace.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <h4 className="font-serif text-base font-bold text-[#22262B]">First-Aid Certification Training</h4>
                <p className="text-xs text-[#60656C]">Professional St. John Ambulance certified training in CPR, burn treatment, trauma management, and emergency response.</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <h4 className="font-serif text-base font-bold text-[#22262B]">Disaster Management Mock Drills</h4>
                <p className="text-xs text-[#60656C]">Simulated fire safety drills, earthquake evacuation procedures, and emergency relief coordination workshops.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. SPORTS */}
      {activeTab === 'sports' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Athletic Excellence</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Department of Physical Education & Sports
            </h2>
            <p className="text-xs sm:text-sm text-[#60656C] leading-relaxed">
              Physical fitness is celebrated at PSVCET with full-sized outdoor fields and indoor courts. Our athletes regularly secure trophies in Anna University Zonal and Inter-Zonal tournaments.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#D9DCE1]">
              {['Standard Cricket Ground', 'Football Stadium', 'Volleyball & Kabaddi Courts', 'Basketball Court (Synthetic)', 'Indoor Badminton Hall', 'Table Tennis Arena', '400m Athletic Track', 'Chess & Carrom Hall'].map((sport) => (
                <div key={sport} className="bg-[#FAF9F6] border border-[#D9DCE1] p-4 rounded-xl text-center">
                  <span className="text-xs font-semibold text-[#22262B]">{sport}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CLUBS */}
      {activeTab === 'clubs' && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="bg-white border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <span className="text-xs uppercase font-bold text-[#80672E] tracking-wider">Student Innovation & Expression</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#22262B]">
              Technical, Cultural & Innovation Clubs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#D9DCE1]">
              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Technical</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Robotics & AI Club</h4>
                <p className="text-xs text-[#60656C]">Autonomous bots, drone design, computer vision competitions, and national hackathon hackathons.</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Coding</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Competitive Coders Guild</h4>
                <p className="text-xs text-[#60656C]">LeetCode / CodeChef marathons, algorithm reviews, open-source development, and GitHub masterclasses.</p>
              </div>

              <div className="bg-[#FAF9F6] border border-[#D9DCE1] p-5 rounded-2xl space-y-2">
                <span className="text-xs uppercase font-bold text-[#80672E]">Cultural</span>
                <h4 className="font-serif text-base font-bold text-[#22262B]">Fine Arts & Music Club</h4>
                <p className="text-xs text-[#60656C]">Classical & western music, drama, debate, Tamil Mandram elocution, and annual college cultural festival.</p>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
