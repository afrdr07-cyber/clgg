import React, { useState } from 'react';
import { 
  Building2, BookOpen, Utensils, Trophy, Users, 
  Bus, Wifi, Shield, Sparkles, CheckCircle2, ChevronRight 
} from 'lucide-react';

export const CampusLife: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'infrastructure' | 'residence' | 'sports' | 'clubs'>('infrastructure');

  const facilities = {
    infrastructure: [
      {
        title: 'Central Digital Library',
        desc: 'Over 50,000 printed volumes, 2,500+ e-journals (IEEE, ScienceDirect, Springer), DELNET connectivity, and dedicated research cubicles.',
        metric: '50,000+ Books & Journals',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Smart Multimedia Classrooms',
        desc: 'Acoustically treated lecture halls equipped with interactive smart boards, lecture recording systems, and high-speed campus Wi-Fi.',
        metric: '60+ Smart Theatres',
        image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Advanced AI & Supercomputing Labs',
        desc: 'High-end GPU-powered server rigs for deep learning, computer vision, robotics simulations, and VLSI microchip design.',
        metric: '500+ High-End Workstations',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      },
    ],
    residence: [
      {
        title: 'Modern Student Residences',
        desc: 'Separate secure hostels for men and women with furnished rooms, 24/7 power backup, solar hot water, and dedicated study halls.',
        metric: '1,200+ Resident Capacity',
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Nutritious Multi-Cuisine Dining',
        desc: 'Hygienic mechanized kitchens serving wholesome vegetarian and non-vegetarian balanced diets supervised by professional dieticians.',
        metric: 'FSSAI Certified Kitchens',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: '24/7 Healthcare & Wellness Center',
        desc: 'On-campus medical clinic with resident medical officer, emergency ambulance service, and counseling support.',
        metric: '24/7 Medical Clinic',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      }
    ],
    sports: [
      {
        title: 'Athletic Arena & Cricket Ground',
        desc: 'Full-sized cricket oval, football field, 400m running track, and floodlit basketball, volleyball, and tennis courts.',
        metric: '10+ Acres Sports Fields',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Indoor Sports & Fitness Gymnasium',
        desc: 'Modern gymnasium with cardio and strength equipment, table tennis halls, and badminton courts with international synthetic flooring.',
        metric: 'State-of-Art Fitness Center',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Anna University Zonal Champions',
        desc: 'Consistent medalists in state and national inter-collegiate tournaments in cricket, athletics, kabaddi, and chess.',
        metric: '25+ Zonal Trophies',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
      }
    ],
    clubs: [
      {
        title: 'IEEE & CSI Technical Chapters',
        desc: 'Student chapters organizing international paper presentations, robotics competitions, and coding hackathons.',
        metric: '15+ Professional Chapters',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Robotics & SAE Formula Club',
        desc: 'Hands-on design and fabrication of electric all-terrain vehicles, drones, and autonomous rover prototypes.',
        metric: 'National Level Racing Teams',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Fine Arts & Rotaract Club',
        desc: 'Nurturing music, theatre, literary debates, social outreach initiatives, and annual flagship cultural festivals.',
        metric: 'Annual Cultural Fest "PSV FEST"',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      }
    ]
  };

  return (
    <section id="campus-life" className="py-20 bg-[#FAF9F6] border-t border-b border-[#D9DCE1]">
      <div className="max-w-[1760px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="tag-accreditation inline-block">
            Campus Ecosystem
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Life on our 30-Acre Autonomous Eco-Campus
          </h2>
          <p className="font-body text-sm sm:text-base text-[#60656C]">
            Experience a balanced collegiate journey blending academic rigor with cutting-edge infrastructure, sports excellence, and creative societies.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white border border-[#D9DCE1] rounded-full shadow-sm overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('infrastructure')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'infrastructure'
                  ? 'bg-[#80672E] text-white shadow-sm'
                  : 'text-charcoal hover:text-[#80672E]'
              }`}
            >
              Academic Infrastructure
            </button>
            <button
              onClick={() => setActiveCategory('residence')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'residence'
                  ? 'bg-[#80672E] text-white shadow-sm'
                  : 'text-charcoal hover:text-[#80672E]'
              }`}
            >
              Hostels & Dining
            </button>
            <button
              onClick={() => setActiveCategory('sports')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'sports'
                  ? 'bg-[#80672E] text-white shadow-sm'
                  : 'text-charcoal hover:text-[#80672E]'
              }`}
            >
              Sports & Fitness
            </button>
            <button
              onClick={() => setActiveCategory('clubs')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'clubs'
                  ? 'bg-[#80672E] text-white shadow-sm'
                  : 'text-charcoal hover:text-[#80672E]'
              }`}
            >
              Clubs & Student Societies
            </button>
          </div>
        </div>

        {/* 3 Active Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities[activeCategory].map((item, idx) => (
            <div 
              key={idx}
              className="pearl-card overflow-hidden bg-white border border-[#D9DCE1] flex flex-col justify-between group"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-charcoal/10">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#80672E] border border-[#D9DCE1]">
                  {item.metric}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-xl font-bold text-charcoal group-hover:text-[#80672E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#60656C] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9DCE1]/60 flex items-center justify-between text-xs font-semibold text-[#80672E]">
                  <span>Explore Facilities</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transportation & Transit Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-[#D9DCE1] rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F0E8D5] flex items-center justify-center text-[#80672E] flex-shrink-0">
              <Bus className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-headline font-bold text-lg text-charcoal">
                Comprehensive Campus Transit Fleet (40+ Buses)
              </h4>
              <p className="text-xs sm:text-sm text-[#60656C] mt-0.5">
                Connecting Bangalore, Hosur, Krishnagiri, Dharmapuri, Vaniyambadi, Tirupattur, and Bargur with GPS-enabled transit.
              </p>
            </div>
          </div>
          <a 
            href="#transport-routes"
            className="btn-secondary text-xs flex items-center gap-1.5 flex-shrink-0"
          >
            <span>View Bus Routes & Schedules</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
