import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, MessageSquare, Clock, MapPin, Award } from 'lucide-react';

export default function Hero() {
  const handleScrollToKeunggulan = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#keunggulan');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative overflow-hidden pt-28 pb-16 md:py-32 flex items-center bg-cream-50">
      
      {/* Leaves background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-leaf-100/30 rounded-bl-full pointer-events-none blur-2xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-leaf-200/20 rounded-tr-full pointer-events-none blur-3xl" />
      
      {/* Core content wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6" id="hero-left-col">
            
            {/* Made by Order Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-leaf-100 border border-leaf-200 px-3.5 py-1.5 rounded-full text-leaf-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-leaf-500 animate-ping" />
              <span>Sistem Terima Pesanan (Made-by-Order) — Dijamin Selalu Fresh!</span>
            </motion.div>
            
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-leaf-900 leading-tight text-left mt-2"
            >
              Arem Arem Tradisional <br className="hidden sm:inline" />
              <span className="text-leaf-600 relative">
                Enak & Fresh
                <svg className="absolute left-0 bottom-[-8px] w-full h-[12px] text-cream-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span> Setiap Hari
            </motion.h1>
            
            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-earth-800 text-base sm:text-lg md:text-xl font-normal mt-6 max-w-2xl text-left"
            >
              Arem Arem Ibu Sarsi hadir dengan konsep <strong>Made-by-Order</strong>. Kami tidak menyimpan stok demi menjaga kesegaran hidangan; setiap pesanan yang masuk baru akan kami proses dan kukus khusus untuk Anda.
            </motion.p>
            
            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-8 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/62895363093202?text=Halo%20Ibu%20Sarsi,%20saya%20ingin%20memesan%20arem-arem%20fresh%20hari%20ini."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 bg-leaf-600 hover:bg-leaf-700 text-cream-50 hover:text-white font-bold px-7 py-4 rounded-xl shadow-food-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageSquare size={18} />
                <span>Pesan via WhatsApp</span>
              </a>
              <a
                href="#keunggulan"
                onClick={handleScrollToKeunggulan}
                className="flex items-center justify-center space-x-2 bg-cream-100 hover:bg-cream-200 text-leaf-800 border border-cream-300 hover:border-leaf-200 font-bold px-7 py-4 rounded-xl shadow-sm transition-all duration-300"
              >
                <span>Lihat Keunggulan Kami</span>
                <ChevronRight size={16} />
              </a>
            </motion.div>

            {/* Quick Micro Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 w-full sm:max-w-xl mt-12 pt-8 border-t border-cream-200"
            >
              <div className="flex items-start space-x-2">
                <div className="text-leaf-600 p-1 bg-leaf-50 rounded-lg">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-earth-900">Buka Pagi</h4>
                  <p className="text-[10px] text-earth-600">06.00 - 10.00 WIB</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="text-leaf-600 p-1 bg-leaf-50 rounded-lg">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-earth-900">Klaten</h4>
                  <p className="text-[10px] text-earth-600">Prambanan, Klaten</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="text-leaf-600 p-1 bg-leaf-50 rounded-lg">
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-earth-900">Bahan Premium</h4>
                  <p className="text-[10px] text-earth-600">Alami Tanpa Pengawet</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Visual Frame */}
          <div className="lg:col-span-5 relative flex justify-center" id="hero-right-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md aspect-square bg-cover bg-center rounded-3xl"
            >
              {/* Main Decorative Leaf Block */}
              <div className="absolute inset-4 bg-leaf-700/10 rounded-[2.5rem] border-2 border-dashed border-leaf-500/20 pointer-events-none" />
              
              {/* Outer Glowing Gradient */}
              <div className="absolute -inset-1 rounded-[3rem] bg-gradient-to-tr from-leaf-200 to-cream-200 blur-xl opacity-40 -z-10 animate-pulse" />

              {/* Delicious Food Image */}
              <div className="w-full h-full p-4">
                <img
                  src="https://i.imgur.com/c1RibaU.jpeg"
                  alt="Aesthetic traditional rice rolls wrapped in green leaves"
                  className="w-full h-full object-cover rounded-[2rem] shadow-food-lg group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
