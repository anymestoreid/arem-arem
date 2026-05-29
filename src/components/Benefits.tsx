import React from 'react';
import { motion } from 'motion/react';
import { Flame, Star, Coins, Sun, Boxes, ShieldAlert } from 'lucide-react';
import { Benefit } from '../types';

export default function Benefits() {
  const benefitsList = [
    {
      id: 'fresh',
      title: 'Terima Pesanan (Made-by-Order)',
      desc: 'Kami tidak menyimpan stok jadi demi menjaga kualitas rasa. Setiap pesanan yang masuk baru akan diproses dan matang pas saat Anda butuhkan.',
      icon: <Flame className="text-leaf-600" size={24} />,
      color: 'bg-leaf-105',
    },
    {
      id: 'rasa',
      title: 'Gurih Tradisional Alami',
      desc: 'Menggunakan santan kental dari perasan kelapa murni, dipadu racikan rempah khas resep dapur Ibu Sarsi.',
      icon: <Star className="text-leaf-600 fill-leaf-600" size={24} />,
      color: 'bg-cream-100',
    },
    {
      id: 'harga',
      title: 'Sangat Terjangkau',
      desc: 'Kualitas premium rasa bintang lima dengan segelas harga kaki lima, mulai dari Rp 3.000 saja.',
      icon: <Coins className="text-leaf-600" size={24} />,
      color: 'bg-leaf-105',
    },
    {
      id: 'sarapan',
      title: 'Solusi Sarapan Praktis',
      desc: 'Mengenyangkan, padat gizi, praktis dilalap langsung tanpa perlu sendok piring. Solusi bagi kaum komuter pagi.',
      icon: <Sun className="text-leaf-600" size={24} />,
      color: 'bg-cream-100',
    },
    {
      id: 'banyak',
      title: 'Melayani Pesanan Banyak',
      desc: 'Terbiasa melayani pesanan ratusan pcs untuk syukuran, arisan, rapat dinas, rombongan piknik, atau besek hantaran.',
      icon: <Boxes className="text-leaf-600" size={24} />,
      color: 'bg-leaf-105',
    },
    {
      id: 'fast',
      title: 'Fast Response & Ramah',
      desc: 'Pemesanan digital sangat mudah disepakati, responsif menentukan jam delivery atau pengambilan.',
      icon: <ShieldAlert className="text-leaf-600" size={24} />,
      color: 'bg-cream-100',
    },
  ];

  return (
    <section id="keunggulan" className="py-20 bg-cream-100 relative scroll-mt-16">
      
      {/* Background Graphic Lines */}
      <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-leaf-200 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-leaf-200 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-xs font-bold tracking-widest text-leaf-600 uppercase mb-2">Mengapa Memilih Kami</h3>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-leaf-950">Keunggulan Dapur Ibu Sarsi</h2>
          <div className="w-16 h-1 bg-leaf-500 mx-auto mt-4 rounded-full" />
          <p className="text-earth-800 text-sm sm:text-base mt-4">
            Kami menjaga kualitas setiap lembar daun dan butir beras untuk menjamin hidangan tradisional paling memuaskan di wilayah Prambanan & Klaten.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="benefits-grid">
          {benefitsList.map((bnf, idx) => (
            <motion.div
              key={bnf.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cream-50 p-8 rounded-2xl border border-cream-200 shadow-sm hover:shadow-food hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${bnf.color}`}>
                  {bnf.icon}
                </div>
                
                {/* Card Title */}
                <h4 className="font-serif font-bold text-lg text-leaf-950 mb-3 group-hover:text-leaf-600 transition-colors duration-200 text-left">
                  {bnf.title}
                </h4>
                
                {/* Description */}
                <p className="text-earth-800 text-sm leading-relaxed text-left">
                  {bnf.desc}
                </p>
              </div>

              {/* Little leafy graphic marker */}
              <div className="flex justify-end mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-lg text-leaf-300">🍃</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
