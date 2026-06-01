import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      caption: 'Arem Arem Gurih hangat baru dikukus',
      image: 'https://i.imgur.com/GFh0ilZ.jpeg',
      category: 'makanan',
    },
    {
      id: 'gal-2',
      caption: 'Tungku pengukusan uap air tradisional',
      image: 'https://i.imgur.com/1KYQqBC.jpeg',
      category: 'proses',
    },
    {
      id: 'gal-3',
      caption: 'Kemasan box anyaman besek organik',
      image: 'https://i.imgur.com/lCPIl57.jpeg',
      category: 'packaging',
    },
    {
      id: 'gal-4',
      caption: 'Pesanan ratusan pcs arem-arem siap hantaran arisan',
      image: 'https://i.imgur.com/dxDOJLF.jpeg',
      category: 'pembeli',
    },
    {
      id: 'gal-5',
      caption: 'Seleksi daun pisang kepok muda berkualitas dari kebun',
      image: 'https://i.imgur.com/ok3L8vN.jpeg',
      category: 'proses',
    },
    {
      id: 'gal-6',
      caption: 'Keluarga berkumpul menikmati sarapan arem-arem hangat',
      image: 'https://i.imgur.com/cMHvbjz.jpeg',
      category: 'pembeli',
    },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="galeri" className="py-20 bg-cream-50 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-leaf-950">Galeri</h2>
          <div className="w-16 h-1 bg-leaf-500 mx-auto mt-4 rounded-full" />
          <p className="text-earth-800 text-sm sm:text-base mt-4">
            Dokumentasi proses masak higienis, pengemasan ramah lingkungan, serta keceriaan penikmat Arem Arem Ibu Sarsi di Klaten & Prambanan.
          </p>
        </div>

        {/* Polaroid Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="gallery-polaroid-grid">
          <AnimatePresence mode="popLayout">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-cream-50 p-3 rounded-2xl border border-cream-200 shadow-sm hover:shadow-food transition-all duration-300 cursor-pointer group"
                onClick={() => setLightboxIndex(idx)}
              >
                {/* Photo crop */}
                <div className="relative aspect-square overflow-hidden rounded-xl bg-cream-100">
                  <img
                    src={item.image}
                    alt={item.id}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover Eye Overlay overlay */}
                  <div className="absolute inset-0 bg-leaf-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="bg-cream-50 text-leaf-700 p-3 rounded-full shadow-lg">
                      <Eye size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox pop-up Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div
              className="fixed inset-0 bg-black/92 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8"
              onClick={() => setLightboxIndex(null)}
              id="gallery-lightbox-modal"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors duration-200"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>

              {/* Prev click Button */}
              <button
                className="absolute left-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
                onClick={handlePrev}
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main spotlight container */}
              <div
                className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={galleryItems[lightboxIndex].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={galleryItems[lightboxIndex].image}
                  alt={galleryItems[lightboxIndex].id}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next click Button */}
              <button
                className="absolute right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
                onClick={handleNext}
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
