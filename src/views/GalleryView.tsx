import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageView } from '../types/navigation';
import {
  ChevronRight,
  ChevronLeft,
  Search,
  X,
  ZoomIn,
  Filter,
  Grid3X3,
  LayoutGrid,
  Sparkles,
  Camera,
  ExternalLink,
  Tag,
  Building2,
  Cpu,
  Trophy,
  Shield,
  Briefcase,
  Award,
  SlidersHorizontal,
  Check
} from 'lucide-react';
import { REAL_GALLERY_COLLECTION, GalleryItem } from '../data/galleryData';

interface GalleryViewProps {
  onNavigate: (view: PageView, subTab?: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [gridColumns, setGridColumns] = useState<3 | 4>(3);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Category list with dedicated icons and labels
  const categories = [
    { id: 'all', label: 'All Photos', icon: Sparkles },
    { id: 'academics', label: 'Academic & Labs', icon: Cpu },
    { id: 'campus', label: 'Campus & Infrastructure', icon: Building2 },
    { id: 'sports', label: 'Sports & Athletics', icon: Trophy },
    { id: 'ncc_nss', label: 'NCC & Outreach', icon: Shield },
    { id: 'placements', label: 'Placement Drives', icon: Briefcase },
    { id: 'events', label: 'Events & Awards', icon: Award },
  ];

  // Filtered images calculation
  const filteredItems = useMemo(() => {
    return REAL_GALLERY_COLLECTION.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query) ||
        (item.badge && item.badge.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Active category object
  const activeCategoryObj = categories.find((c) => c.id === selectedCategory) || categories[0];

  // Active image object
  const activeImage = activeImageIndex !== null && filteredItems[activeImageIndex] ? filteredItems[activeImageIndex] : null;

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, filteredItems.length]);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  return (
    <div className="w-full space-y-8 pb-16">

      {/* Page Masthead Banner */}
      <section className="relative overflow-hidden w-full bg-[#FAF9F6] border border-[#D9DCE1] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#80672E]/5 blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#80672E] uppercase tracking-wider">
              <button onClick={() => onNavigate('home')} className="hover:underline cursor-pointer">Home</button>
              <ChevronRight className="w-3.5 h-3.5 text-[#A0A5AD]" />
              <span>Campus Life</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#A0A5AD]" />
              <span className="text-[#22262B]">Photographic Archives</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#80672E]/10 border border-[#80672E]/20 text-[#80672E] text-xs font-bold">
              <Camera className="w-3.5 h-3.5" />
              <span>Official Campus & Student Life Collection ({REAL_GALLERY_COLLECTION.length} Photographs)</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22262B] leading-tight">
              Life at PSV College of Engineering & Technology
            </h1>
            <p className="font-body text-sm sm:text-base text-[#60656C] leading-relaxed">
              Explore authentic high-resolution moments captured directly across our 30-acre autonomous campus — from high-performance AI labs and engineering workshops to Anna University Zonal sports triumphs, NCC parade drills, and tier-1 corporate placement drives.
            </p>
          </div>

          {/* Quick Stats Pill Panel */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 min-w-[280px]">
            <div className="p-3.5 bg-white rounded-2xl border border-[#D9DCE1] text-center shadow-xs">
              <span className="block font-serif text-2xl font-bold text-[#80672E]">30+</span>
              <span className="text-[11px] font-semibold text-[#60656C] uppercase">Acres Campus</span>
            </div>
            <div className="p-3.5 bg-white rounded-2xl border border-[#D9DCE1] text-center shadow-xs">
              <span className="block font-serif text-2xl font-bold text-[#22262B]">45+</span>
              <span className="text-[11px] font-semibold text-[#60656C] uppercase">Modern Labs</span>
            </div>
            <div className="p-3.5 bg-white rounded-2xl border border-[#D9DCE1] text-center shadow-xs col-span-2 sm:col-span-1 lg:col-span-2">
              <span className="block font-serif text-2xl font-bold text-[#80672E]">100%</span>
              <span className="text-[11px] font-semibold text-[#60656C] uppercase">Authentic Photographs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Category Navigation Hub (No scrollbars, clean wrap-around cards) */}
      <section className="bg-white border border-[#D9DCE1] rounded-3xl p-5 sm:p-6 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#D9DCE1]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#80672E]/10 flex items-center justify-center text-[#80672E]">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-sm sm:text-base font-bold text-[#22262B]">
                Filter by Category
              </h2>
              <p className="text-[11px] text-[#60656C]">
                Select a department or campus activity to browse photographs
              </p>
            </div>
          </div>

          <span className="text-xs text-[#60656C] bg-[#FAF9F6] px-3 py-1.5 rounded-xl border border-[#D9DCE1] self-start sm:self-auto font-medium">
            Active: <strong className="text-[#80672E] font-semibold">{activeCategoryObj.label}</strong> ({filteredItems.length} photos)
          </span>
        </div>

        {/* Categories Grid / Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const count = cat.id === 'all'
              ? REAL_GALLERY_COLLECTION.length
              : REAL_GALLERY_COLLECTION.filter((i) => i.category === cat.id).length;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`group relative px-4 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2.5 border ${
                  isActive
                    ? 'bg-[#80672E] text-white border-[#80672E] shadow-sm scale-[1.02]'
                    : 'bg-[#FAF9F6] text-[#22262B] hover:bg-white hover:border-[#80672E]/50 border-[#D9DCE1]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-[#ffdf9d]' : 'text-[#80672E] group-hover:text-[#80672E]'}`} />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-white text-[#60656C] border border-[#D9DCE1] group-hover:border-[#80672E]/30'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Layout Control Toolbar */}
        <div className="pt-4 border-t border-[#D9DCE1] flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Active Filter Description */}
          <div className="flex items-center gap-2 text-xs text-[#60656C]">
            <Filter className="w-3.5 h-3.5 text-[#80672E]" />
            <span>
              Showing <strong className="text-[#22262B]">{filteredItems.length}</strong> of {REAL_GALLERY_COLLECTION.length} photos
            </span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1 bg-[#80672E]/10 text-[#80672E] px-2 py-0.5 rounded-md font-semibold text-[11px]">
                Matching "{searchQuery}"
                <button onClick={() => setSearchQuery('')} className="hover:text-black cursor-pointer">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>

          {/* Search Box and Grid Switcher */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-72">
              <Search className="w-4 h-4 text-[#A0A5AD] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search labs, sports, campus..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-[#FAF9F6] rounded-xl border border-[#D9DCE1] text-xs text-[#22262B] placeholder:text-[#A0A5AD] focus:bg-white focus:outline-none focus:border-[#80672E] focus:ring-1 focus:ring-[#80672E] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#A0A5AD] hover:text-[#22262B] p-0.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Grid Columns Toggle */}
            <div className="flex items-center p-1 bg-[#FAF9F6] border border-[#D9DCE1] rounded-xl shrink-0">
              <button
                onClick={() => setGridColumns(3)}
                title="3 Columns (Comfortable View)"
                className={`p-2 rounded-lg transition-all cursor-pointer flex items-center gap-1 text-xs font-semibold ${
                  gridColumns === 3 ? 'bg-[#80672E] text-white shadow-xs' : 'text-[#60656C] hover:text-[#22262B]'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
                <span className="hidden sm:inline text-[11px]">3 Col</span>
              </button>
              <button
                onClick={() => setGridColumns(4)}
                title="4 Columns (Compact View)"
                className={`p-2 rounded-lg transition-all cursor-pointer flex items-center gap-1 text-xs font-semibold ${
                  gridColumns === 4 ? 'bg-[#80672E] text-white shadow-xs' : 'text-[#60656C] hover:text-[#22262B]'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline text-[11px]">4 Col</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      {filteredItems.length === 0 ? (
        <div className="p-16 bg-[#FAF9F6] border border-[#D9DCE1] rounded-3xl text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-white border border-[#D9DCE1] flex items-center justify-center mx-auto text-[#80672E]">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#22262B]">No Photographs Found</h3>
          <p className="text-xs sm:text-sm text-[#60656C] max-w-md mx-auto">
            No matching images were found for "{searchQuery}". Try searching for another lab, sport, or select "All Photos".
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 rounded-xl bg-[#80672E] text-white text-xs font-semibold hover:bg-[#664F18] transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <section
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            gridColumns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
          } gap-6`}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
              key={item.id}
              onClick={() => setActiveImageIndex(index)}
              className="group relative bg-white border border-[#D9DCE1] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#80672E]/40 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Gradient Overlay & Hover Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-md">
                      <ZoomIn className="w-4 h-4 text-[#ffdf9d]" />
                    </span>
                  </div>
                  <span className="text-white text-xs font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#ffdf9d]" />
                    <span>Click to View Full Photo</span>
                  </span>
                </div>

                {/* Category Pill Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide border border-white/10">
                  {item.categoryLabel}
                </span>

                {/* Distinctive Feature Badge */}
                {item.badge && (
                  <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-md bg-[#80672E]/90 backdrop-blur-md text-white text-[10px] font-bold shadow-xs">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-serif text-sm font-bold text-[#22262B] group-hover:text-[#80672E] transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#60656C] mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#80672E] font-semibold">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    <span>{item.category.toUpperCase()}</span>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                    <span>Inspect</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      )}

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeImage && activeImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full bg-[#1A1D20] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Control Bar */}
              <div className="px-6 py-4 bg-[#111315] border-b border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#80672E]/30 border border-[#80672E]/40 text-[#ffdf9d] text-xs font-bold">
                    {activeImage.categoryLabel}
                  </span>
                  {activeImage.badge && (
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-md bg-white/10 text-white/90 text-xs font-semibold">
                      {activeImage.badge}
                    </span>
                  )}
                  <span className="text-xs text-white/50">
                    Photo {activeImageIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeImage.image}
                    target="_blank"
                    rel="noreferrer"
                    download
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                    title="Open Original Photo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setActiveImageIndex(null)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-red-500/80 text-white transition-colors cursor-pointer"
                    title="Close (ESC)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Photo Display Frame with Navigation Chevrons */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[340px] max-h-[60vh] select-none">
                <img
                  key={activeImage.id}
                  src={activeImage.image}
                  alt={activeImage.title}
                  className="max-h-[58vh] max-w-full object-contain mx-auto"
                />

                {/* Left Previous Button */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#80672E] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/15 shadow-xl hover:scale-110"
                  title="Previous Photo (Left Arrow)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Next Button */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#80672E] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/15 shadow-xl hover:scale-110"
                  title="Next Photo (Right Arrow)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Description Footer */}
              <div className="p-6 bg-[#16181A] border-t border-white/10 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-white">
                    {activeImage.title}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-4xl">
                  {activeImage.description}
                </p>

                {/* Quick-Access Thumbnail Strip */}
                <div className="pt-2 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {filteredItems.map((thumb, idx) => (
                    <button
                      key={thumb.id}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative shrink-0 w-16 h-11 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-[#ffdf9d] scale-105 shadow-md'
                          : 'border-transparent opacity-50 hover:opacity-90'
                      }`}
                    >
                      <img src={thumb.image} alt={thumb.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
