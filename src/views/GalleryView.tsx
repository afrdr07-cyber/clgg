import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageView } from '../types/navigation';
import { ChevronRight, Image as ImageIcon, Sparkles, X, ZoomIn } from 'lucide-react';

interface GalleryViewProps {
  onNavigate: (view: PageView, subTab?: string) => void;
}

interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'labs' | 'convocation' | 'culturals' | 'placements';
  categoryLabel: string;
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Aerial View of PSVCET Autonomous 30-Acre Campus',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format&fit=crop',
    description: 'Picturesque green campus located on the Chennai-Bengaluru NH-48 corridor in Krishnagiri.'
  },
  {
    id: 'gal-2',
    title: 'Central Digital Library & Reading Pavilion',
    category: 'campus',
    categoryLabel: 'Campus & Infrastructure',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
    description: 'Over 29,000+ volumes, automated OPAC, and digital IEEE/DELNET terminals.'
  },
  {
    id: 'gal-3',
    title: 'AI & GPU High Performance Computing Laboratory',
    category: 'labs',
    categoryLabel: 'Academic & Labs',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    description: 'Advanced GPU clusters and cloud computing microservices development.'
  },
  {
    id: 'gal-4',
    title: 'Electronics & Embedded VLSI Systems Lab',
    category: 'labs',
    categoryLabel: 'Academic & Labs',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop',
    description: 'FPGA kits, Cadence software, and IoT sensor design suites.'
  },
  {
    id: 'gal-5',
    title: 'Annual Autonomous Graduation Day Ceremony',
    category: 'convocation',
    categoryLabel: 'Convocation & Events',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    description: 'Conferment of autonomous engineering and MBA degrees by distinguished dignitaries.'
  },
  {
    id: 'gal-6',
    title: 'Annual Cultural Festival & Fine Arts Showcase',
    category: 'culturals',
    categoryLabel: 'Sports & Culturals',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    description: 'Vibrant music, classical dance, Tamil Mandram, and inter-collegiate performances.'
  },
  {
    id: 'gal-7',
    title: 'Annual Sports Day & Athletic Meet',
    category: 'culturals',
    categoryLabel: 'Sports & Culturals',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop',
    description: 'Track and field events, cricket championships, and volleyball matches.'
  },
  {
    id: 'gal-8',
    title: 'On-Campus Placement Drive with Tier-1 Recruiters',
    category: 'placements',
    categoryLabel: 'Placement Drives',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    description: 'Students receiving on-campus offer letters from multinational recruitment partners.'
  },
  {
    id: 'gal-9',
    title: 'Mechanical Engineering CNC & Robotics Centre',
    category: 'labs',
    categoryLabel: 'Academic & Labs',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    description: 'Industry 4.0 automated machinery, CAD/CAM suites, and additive manufacturing.'
  }
];

export const GalleryView: React.FC<GalleryViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos (9)' },
    { id: 'campus', label: 'Campus & Drone' },
    { id: 'labs', label: 'Academic & Labs' },
    { id: 'convocation', label: 'Convocation' },
    { id: 'culturals', label: 'Culturals & Sports' },
    { id: 'placements', label: 'Placement Drives' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

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
              <span>Campus Gallery</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22262B] leading-tight">
              Campus Moments & Photographic Archives
            </h1>
            <p className="font-body text-sm sm:text-base text-[#60656C] leading-relaxed">
              Experience the vibrant life at PSVCET — from high-tech laboratories and academic convocation to sports triumphs and cultural festivals.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 pt-6 border-t border-[#D9DCE1] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#80672E] text-white shadow-sm'
                  : 'bg-white text-[#60656C] hover:text-[#22262B] border border-[#D9DCE1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group relative bg-white border border-[#D9DCE1] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                  <ZoomIn className="w-4 h-4 text-[#ffdf9d]" />
                  <span>Click to Expand</span>
                </span>
              </div>
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold">
                {item.categoryLabel}
              </span>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-sm font-bold text-[#22262B] group-hover:text-[#80672E] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#60656C] mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Fullscreen Preview Modal */}
      <AnimatePresence>
        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#D9DCE1]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full overflow-hidden bg-black">
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-[#FAF9F6]">
                <span className="text-xs uppercase font-bold text-[#80672E]">{activeImage.categoryLabel}</span>
                <h3 className="font-serif text-xl font-bold text-[#22262B] mt-1">
                  {activeImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#60656C] mt-2 leading-relaxed">
                  {activeImage.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
