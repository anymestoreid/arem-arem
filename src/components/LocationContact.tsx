import React from 'react';
import { Mail, Phone, MapPin, Clock, ExternalLink, CalendarDays, Share2 } from 'lucide-react';

export default function LocationContact() {
  const addressQuery = "Bener, Bugisan, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454";
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(addressQuery)}`;
  const waUrl = "https://wa.me/62895363093202?text=Halo%20Ibu%20Sarsi,%20bisa%20tolong%20kirimkan%20share%20lokasi%20Google%20Maps%20ke%20saya%3F";

  const contactsInfo = [
    {
      icon: <MapPin className="text-leaf-600" size={22} />,
      title: 'Alamat Usaha',
      lines: ['Bener, Bugisan', 'Kec. Prambanan, Kabupaten Klaten', 'Jawa Tengah 57454'],
      color: 'bg-leaf-50',
    },
    {
      icon: <Phone className="text-leaf-600" size={22} />,
      title: 'WhatsApp Pemesanan',
      lines: ['0895-3630-93202', 'Disarankan memesan H-1 untuk event besar', 'Menerima sistem titip jual / reseller'],
      color: 'bg-cream-100',
    },
    {
      icon: <Clock className="text-leaf-600" size={22} />,
      title: 'Jam Operasional Toko',
      lines: ['Setiap Pagi: 06.00 - 10.00 WIB', 'Minggu & Tanggal Merah tetap buka', 'Datang lebih pagi agar tidak kehabisan !'],
      color: 'bg-leaf-50',
    },
  ];

  return (
    <section id="kontak" className="py-20 bg-cream-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-xs font-bold tracking-widest text-leaf-600 uppercase mb-2">Lokasi & Pemesanan</h3>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-leaf-955">Kunjungi Dapur Kami</h2>
          <div className="w-16 h-1 bg-leaf-500 mx-auto mt-4 rounded-full" />
          <p className="text-earth-800 text-sm sm:text-base mt-4">
            Ingin mampir membeli langsung hangat-hangat atau butuh share lokasii akurat? Di bawah ini adalah detail rincian peta dapur kami.
          </p>
        </div>

        {/* Contact info cards + Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="location-cards-and-map">
          
          {/* Left Columns - Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {contactsInfo.map((info, index) => (
              <div
                key={index}
                className="bg-cream-50 p-6 rounded-2xl border border-cream-200 hover:border-leaf-200 shadow-sm hover:shadow-food transition-all duration-300 flex items-start space-x-4 text-left"
              >
                <div className={`p-3 rounded-xl ${info.color} text-leaf-500 shrink-0`}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-leaf-905">{info.title}</h3>
                  <div className="mt-2 space-y-1">
                    {info.lines.map((line, lIdx) => (
                      <p key={lIdx} className="text-xs sm:text-sm text-earth-800">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Columns - Stylized interactive maps placeholder with CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between" id="location-map">
            <div className="bg-cream-50 p-4 rounded-3xl border border-cream-200 shadow-food h-full flex flex-col justify-between relative overflow-hidden min-h-[350px]">
              
              {/* Artistic Vector Styled Map Graphics */}
              <div className="absolute inset-0 bg-cream-100 opacity-80 z-0 pattern-banana-leaf pointer-events-none" />
              
              {/* Visual Map graphic overlay box */}
              <div className="relative z-10 w-full h-full flex-1 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-leaf-600 text-cream-50 flex items-center justify-center shadow-lg mb-4 animate-bounce">
                  <MapPin size={28} className="fill-leaf-600" />
                </div>
                
                <h4 className="font-serif font-bold text-lg text-leaf-950">Bener, Bugisan, Prambanan</h4>
                <p className="text-xs text-earth-800 mt-2 max-w-md">
                  Berlokasi strategis di Klaten, dekat daerah objek bersejarah Candi Plaosan & Candi Prambanan. Sangat mudah dicari via Google Maps.
                </p>

                {/* Simulated Map Visual Card with Leaf Theme */}
                <div className="mt-6 w-full max-w-sm bg-cream-50/90 backdrop-blur border border-leaf-200 p-4 rounded-xl shadow-md text-left text-xs text-earth-800 space-y-2">
                  <div className="flex justify-between font-bold text-leaf-800">
                    <span>📍 Arem Arem Ibu Sarsi</span>
                    <span className="text-[10px] text-emerald-600 uppercase tracking-widest">● Buka Sekarang</span>
                  </div>
                  <p>Bener, Bugisan, Kec. Prambanan, Kabupaten Klaten, Jawa Tengah 57454</p>
                  <p className="font-mono text-[10px] text-earth-600">Koordinat: -7.747120, 110.495030 (Sekitar Candi Plaosan)</p>
                </div>

                {/* Practical Direction actions */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-leaf-600 hover:bg-leaf-700 text-cream-50 hover:text-white font-bold py-3.5 px-5 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <ExternalLink size={16} />
                    <span>Buka Google Maps</span>
                  </a>
                  
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-cream-100 hover:bg-cream-200 border border-cream-300 text-leaf-800 font-bold py-3.5 px-5 rounded-xl shadow-sm transition-all"
                  >
                    <Share2 size={16} />
                    <span>Minta Share Lokasi WA</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
