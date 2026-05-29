import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingWhatsApp() {
  const [showNotification, setShowNotification] = useState(false);
  const waUrl = "https://wa.me/62895363093202?text=Halo%20Ibu%20Sarsi,%20saya%20ingin%20bertanya%20mengenai%20menu%2520arem-arem%20yang%20masih%20tersedia%20untuk%20pagi%20ini.%20Terima%20kasih!";

  useEffect(() => {
    // Show a nice notification tooltip bubble after 4 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end" id="floating-whatsapp-container">
      
      {/* Animated notification tooltip popup bubble */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mb-3 bg-cream-50 border border-leaf-200 py-2.5 px-4 rounded-xl shadow-food max-w-[210px] text-right pointer-events-auto"
          >
            <div className="relative">
              {/* Close notification trigger */}
              <button
                onClick={() => setShowNotification(false)}
                className="absolute -top-1 -left-2 text-[10px] text-earth-800 hover:text-leaf-600 bg-cream-100 p-0.5 rounded"
                title="Tutup"
              >
                ✕
              </button>
              <h4 className="text-[11px] font-bold text-leaf-700 uppercase tracking-wider">Ibu Sarsi Online</h4>
              <p className="text-[10px] text-earth-800 mt-0.5">Sudah sarapan hari ini? Silakan tanya menu hangat pagi ya! 🍃</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating green button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all text-white focus:outline-none ring-4 ring-emerald-650/10"
        title="Hubungi Ibu Sarsi di WhatsApp"
        id="floating-wa-btn"
      >
        <MessageCircle size={28} className="fill-current" />
        
        {/* Notification notification bubble badge */}
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cream-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-cream-800 border border-cream-50 text-[9px] text-cream-50 font-bold items-center justify-center">
            1
          </span>
        </span>
      </a>

    </div>
  );
}
