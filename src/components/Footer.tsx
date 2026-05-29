import React from 'react';
import { Leaf, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Dapur', href: '#tentang' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Galeri Foto', href: '#galeri' },
    { name: 'Hubungi Kami', href: '#kontak' },
  ];

  return (
    <footer className="bg-leaf-900 text-cream-100/90 pt-16 pb-8 relative" id="layout-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-leaf-700/60 items-start">
          
          {/* Col 1: Brand description */}
          <div className="md:col-span-5 text-left">
            <a href="#beranda" className="flex items-center space-x-2 group focus:outline-none mb-5">
              <div className="bg-leaf-600 text-cream-50 p-2.5 rounded-full shadow-md group-hover:bg-leaf-500 transition-colors duration-300">
                <Leaf size={18} className="animate-leaf-float" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-cream-50 tracking-tight leading-none">
                  Ibu Sarsi
                </span>
                <span className="text-[10px] text-cream-300 font-semibold tracking-widest uppercase mt-0.5">
                  Arem Arem Tradisional
                </span>
              </div>
            </a>
            <p className="text-sm text-cream-205 leading-relaxed max-w-sm">
              Menghadirkan arem-arem tradisional berkualitas dengan cita rasa khas rumahan di kawasan Prambanan, Klaten. Dibuat premium dari daun pisang pilihan, beras segar bernutrisi, dan bumbu rempah remang murni buatan hati.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-sm font-bold text-cream-300 uppercase tracking-widest mb-5">Tautan Cepat</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-cream-400 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Business Details */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-sm font-bold text-cream-300 uppercase tracking-widest mb-5">Kontak Dapur</h4>
            <ul className="space-y-4 text-sm" id="footer-contact-items">
              <li className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-leaf-400 shrink-0 mt-0.5" />
                <span className="text-cream-205 leading-relaxed">
                  Bener, Bugisan, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone size={16} className="text-leaf-400 shrink-0" />
                <span>WhatsApp: 0895-3630-93202</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock size={16} className="text-leaf-400 shrink-0" />
                <span>Buka Setiap Pagi: 06.00 - 10.00 WIB</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom meta info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-cream-300 max-w-sm text-center sm:text-left">
            <p>&copy; {currentYear} Arem Arem Ibu Sarsi. Semua hak cipta dilindungi.</p>
            <p className="mt-1 text-[10px] text-cream-400">Dirancang secara premium dengan perpaduan warna hijau daun, putih, & cream khas food-aesthetic.</p>
          </div>
          
          {/* Scroll to top button */}
          <button
            onClick={handleScrollToTop}
            className="bg-leaf-800 hover:bg-leaf-700 text-cream-100 p-3 rounded-xl border border-leaf-700 shadow-md transition-all group-hover:scale-105"
            aria-label="Kembali ke atas"
            title="Ke Atas"
          >
            <ArrowUp size={16} className="animate-pulse" />
          </button>
        </div>

      </div>
    </footer>
  );
}
