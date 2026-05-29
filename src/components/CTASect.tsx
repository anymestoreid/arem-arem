import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquarePlus, Sparkles, Clock } from 'lucide-react';

export default function CTASect() {
  const waUrl = "https://wa.me/62895363093202?text=Halo%20Ibu%20Sarsi,%20saya%20tertarik%20mencoba%20arem-arem%20hangat%20Anda.%20Boleh%20tahu%20menu%20yang%20ready%20untuk%20pagi%20ini%3F";

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-leaf-700">
      
      {/* Absolute Green Patterns & glowing nodes */}
      <div className="absolute inset-0 pattern-banana-leaf opacity-10 pointer-events-none" />
      <div className="absolute -top-24 -left-20 w-60 h-60 bg-leaf-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-20 w-65 h-65 bg-cream-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Floating star */}
        <div className="inline-flex items-center space-x-1.5 bg-leaf-800 border border-leaf-600 px-4 py-1.5 rounded-full text-cream-200 text-xs font-bold mb-6 shadow-md" id="cta-mini-tag">
          <Sparkles size={12} className="animate-spin text-cream-300" />
          <span>Praktis, Kenyang, Higienis & 100% Halal</span>
        </div>

        {/* Closing Title Statement */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-tight mb-6">
          Yuk Sarapan Arem-Arem Enak Hari Ini!
        </h2>
        
        <p className="text-cream-100 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Kami memasak arem-arem hangat bernutrisi ini khusus saat Anda memesannya saja. Hubungi Ibu Sarsi secara fleksibel untuk booking waktu kirim atau ambil, demi sajian tradisional terhangat, gurih, dan nikmat tanpa stok lama!
        </p>

        {/* Immediate CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto" id="cta-buttons-wrapper">
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-cream-100 hover:bg-cream-50 text-leaf-850 hover:text-leaf-905 font-bold px-8 py-4.5 rounded-xl text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <MessageSquarePlus size={20} />
            <span>Pesan Sekarang via WhatsApp</span>
          </a>
        </div>

        {/* Note on Delivery Times */}
        <div className="mt-8 flex items-center justify-center space-x-2 text-xs text-cream-200 uppercase tracking-widest font-mono" id="cta-operational-notif">
          <Clock size={12} />
          <span>Pengiriman / Pengambilan Mulai Jam 06.00 Pagi Setiap Hari</span>
        </div>

      </div>
    </section>
  );
}
