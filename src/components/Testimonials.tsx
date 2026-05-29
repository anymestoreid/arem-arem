import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Heart } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: 'test-1',
      name: 'Mas Boni Prasetyo',
      role: 'Koordinator Wisata Rombongan (Jogja/Solo)',
      rating: 5,
      comment: 'Rasa arem-arem daging ayam merconnya luar biasa nendang! Gurih nasinya pas dan aromanya harum daun kelapa murni. Kami order 150 pcs kemarin untuk rombongan wisata Candi Prambanan, semuanya ludes habis tak bersisa dan tamu-tamu sangat puas.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 'test-2',
      name: 'Ibu Siti Wahyuni',
      role: 'Ibu Rumah Tangga & Komuter (Bugisan, Klaten)',
      rating: 5,
      comment: 'Penyelamat sarapan praktis anak-anak sebelum berangkat sekolah! Setiap fajar jam 6 pagi arem-arem arem sayur wortel kentangnya sudah ready hangat-hangat di etalase. Isinya tebal melimpah, nasinya padat lembut bersahabat untuk anak kecil.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 'test-3',
      name: 'Pak Hendrawan, S.E.',
      role: 'Panitia Keagamaan & Syukuran Masjid (Prambanan)',
      rating: 5,
      comment: 'Kami sudah berlangganan bertahun-tahun dengan Ibu Sarsi untuk konsumsi rutin pengajian dan hantaran masjid. Pengemasan dalam Besek Bambu sangat elok, bernuansa adat premium, bersih, dan rasanya gurih mantap tanpa pengawet sintetik.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="testimoni" className="py-20 bg-cream-100 border-y border-cream-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title elements */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-xs font-bold tracking-widest text-leaf-600 uppercase mb-2">Kata Pelanggan</h3>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-leaf-955">Testimoni Jujur Rasa</h2>
          <div className="w-16 h-1 bg-leaf-500 mx-auto mt-4 rounded-full" />
          <p className="text-earth-800 text-sm sm:text-base mt-4">
            Penilaian autentik dari pelanggan setia kami di Klaten dan sekitarnya yang menyukai cita rasa sarapan arem-arem hangat dapur Ibu Sarsi.
          </p>
        </div>

        {/* Testimonials Masonry Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-cream-50 p-8 rounded-2xl border border-cream-200 hover:border-leaf-200 shadow-sm hover:shadow-food transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Backquote decorative icon */}
              <div className="absolute top-6 right-8 text-leaf-100 group-hover:text-leaf-200 transition-colors duration-300 pointer-events-none">
                <Quote size={40} className="stroke-none fill-current" />
              </div>

              <div>
                {/* 5-Star Rating row */}
                <div className="flex space-x-1 mb-5" aria-label={`Rating ${rev.rating} bintang`}>
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-cream-800 fill-cream-800" />
                  ))}
                </div>

                {/* Comment body */}
                <p className="text-earth-800 text-sm leading-relaxed mb-6 italic text-left relative z-10">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author footer banner */}
              <div className="flex items-center space-x-3.5 pt-5 border-t border-cream-100 mt-auto">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-leaf-100"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <h4 className="font-bold text-leaf-950 text-sm">{rev.name}</h4>
                  <p className="text-[11px] text-earth-800 font-medium mt-0.5">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local endorsement summary info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-leaf-50 border border-leaf-100 py-2.5 px-6 rounded-full text-xs text-leaf-700 font-bold shadow-sm" id="customer-love-banner">
            <Heart size={14} className="fill-leaf-600 text-leaf-600 animate-pulse" />
            <span>Lebih dari 10.000+ arem-arem terjual habis untuk berbagai event di Prambanan !</span>
          </div>
        </div>

      </div>
    </section>
  );
}
