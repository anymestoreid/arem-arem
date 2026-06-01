import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Sparkles, Heart, Utensils, CheckCircle } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Utensils className="text-leaf-600" size={20} />,
      title: 'Resep Asli Ibu Sarsi',
      desc: 'Bumbu rempah meresap warisan keluarga yang dipertahankan keaslian rasanya.',
    },
    {
      icon: <CheckCircle className="text-leaf-600" size={20} />,
      title: 'Beras Bulog & Pulen Pilihan',
      desc: 'Tekstur arem-arem padat namun lembut saat digigit, tidak lembek maupun keras.',
    },
    {
      icon: <Leaf className="text-leaf-600" size={20} />,
      title: 'Bahan Alami 100%',
      desc: 'Tanpa pengawet sintetik, penyedap rasa berlebih, maupun pewarna buatan.',
    },
    {
      icon: <Sparkles className="text-leaf-600" size={20} />,
      title: 'Baru Diproses Saat Dipesan',
      desc: 'Sistem order eksklusif menjamin kualitas rasa prima. Begitu pesanan masuk, barulah dapur kami memproses dan mengukus arem-arem Anda.',
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-cream-100 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Traditional Kitchen Imagery */}
          <div className="lg:col-span-5 relative" id="about-left-col">
            <div className="relative group">
              <div className="absolute top-4 left-4 -right-4 -bottom-4 bg-leaf-600/10 rounded-2xl -z-10 transition-all group-hover:bg-leaf-650/15" />
              <img
                src="https://i.imgur.com/c1RibaU.jpeg"
                alt="Traditional cooking of Indonesian snacks with rice and direct spices"
                className="w-full h-[450px] object-cover rounded-2xl shadow-food border border-cream-300 transform transition duration-500 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlaid Banner inside Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-cream-50/95 backdrop-blur-md p-5 rounded-xl shadow-lg border border-leaf-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-leaf-600 text-cream-50 p-2.5 rounded-lg">
                    <Heart size={20} className="fill-cream-50" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-leaf-800 text-sm">Dimasak dengan Kasih</h4>
                    <p className="text-xs text-earth-800">Menjaga resep rumahan untuk sarapan terbaik Anda.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Pure Storytelling */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="about-right-col">
            <h3 className="text-xs font-bold tracking-widest text-leaf-600 uppercase mb-2">Cerita Dibalik Rasa</h3>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-leaf-900 leading-tight">
              Kelezatan Tradisional dari Dapur Ibu Sarsi
            </h2>
            <div className="w-20 h-1 bg-leaf-600 my-6 rounded-full" />
            
            <p className="text-earth-800 text-base leading-relaxed mb-6">
              Arem-arem di Bener Bugisan, Prambanan, Klaten bukan sekadar makanan pengganjal perut. Bagi kami, ia adalah harmoni rasa pagi hari. Dimasak dengan resep turun-temurun, bumbu arem-arem tumis kami dipadukan dengan beras pulen gurih bersantan kelapa murni, dibungkus daun pisang kepok segar yang telah dilayukan di atas tungku api kecil agar menghasilkan aroma wangi khas yang semerbak.
            </p>
            <p className="text-earth-800 text-base leading-relaxed mb-8">
              Sangat cocok dinikmati hangat sebagai sarapan praktis sebelum beraktivitas, bekal perjalanan wisata ke Candi Prambanan, santapan arisan, syukuran, rapat kantor, maupun hantaran masjid. Ibu Sarsi berkomitmen untuk selalu menyajikan kualitas terbaik, fresh, padat, gurih melimpah setiap hari.
            </p>

            {/* Quick 2x2 Grid of Product Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="about-highlights-grid">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 bg-cream-50 hover:bg-leaf-50 p-4 rounded-xl border border-cream-200 hover:border-leaf-200 transition-all duration-300 shadow-sm"
                >
                  <div className="bg-leaf-100 p-2 rounded-lg mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-leaf-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-earth-800 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
