import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Leaf, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Lokasi & Kontak', href: '#kontak' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-100/90 backdrop-blur-md shadow-md py-3 border-b border-leaf-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#beranda');
            }}
            className="flex items-center space-x-2 group focus:outline-none"
            id="nav-brand-logo"
          >
            <div className="bg-leaf-600 text-cream-50 p-2 rounded-full shadow-md group-hover:bg-leaf-500 transition-colors duration-300">
              <Leaf size={18} className="animate-leaf-float" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold text-leaf-700 tracking-tight leading-none">
                Ibu Sarsi
              </span>
              <span className="text-[10px] text-leaf-600 font-semibold tracking-widest uppercase mt-0.5">
                Arem Arem Tradisional
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8" id="desktop-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-earth-800 hover:text-leaf-600 font-medium text-sm transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-leaf-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center space-x-3" id="desktop-actions">
            <a
              href="https://wa.me/62895363093202?text=Halo%2520Ibu%2520Sarsi,%2520saya%2520ingin%2520memesan%2520arem-arem."
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 bg-leaf-600 hover:bg-leaf-700 text-cream-50 font-bold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <PhoneCall size={14} />
              <span>Ibu Sarsi</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-leaf-700 hover:text-leaf-600 p-2 rounded-lg bg-cream-200/50 hover:bg-cream-200 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] bg-cream-50 z-40 border-t border-cream-200 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
        id="mobile-nav-drawer"
      >
        <div className="px-4 py-6 space-y-3 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="block px-4 py-3 rounded-xl bg-cream-100 hover:bg-leaf-50 text-earth-900 hover:text-leaf-700 font-semibold text-base transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-cream-200 space-y-3">
            <div className="bg-leaf-50 p-4 rounded-xl border border-leaf-100">
              <span className="block text-xs text-leaf-700 font-semibold tracking-wider uppercase mb-1">
                Jam Buka
              </span>
              <span className="text-sm font-bold text-earth-800">06.00 - 10.00 WIB setiap pagi</span>
            </div>
            <a
              href="https://wa.me/62895363093202?text=Halo%2520Ibu%2520Sarsi,%2520saya%2520ingin%2520memesan%2520arem-arem."
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center space-x-2 bg-leaf-600 hover:bg-leaf-700 text-cream-50 font-bold p-4 rounded-xl shadow-md text-base transition-all duration-200"
            >
              <PhoneCall size={18} />
              <span>Hubungi Ibu Sarsi (WhatsApp)</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
