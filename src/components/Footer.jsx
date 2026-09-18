import React from 'react';
import { MapPin, User, Navigation, MessageCircle } from 'lucide-react';
import { SHOP_INFO } from '../data/defaultData';

export default function Footer({ onOpenOperator }) {
  const mapEmbedUrl = `https://maps.google.com/maps?q=Tejesh+zerox+killari@18.0733342,76.5932256&t=&z=17&ie=UTF8&iwloc=&output=embed`;

  return (
    <footer className="bg-white pt-8 pb-6 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Logo Section */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <img src="/logo.jpg" alt="Store Logo" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-amber-500 shadow-sm object-cover mb-2" />
            <h3 className="font-display font-black text-slate-800 text-lg">{SHOP_INFO.nameEn}</h3>
            <p className="text-xs text-slate-500 mt-2 max-w-xs font-marathi">
              The premium destination for dairy products, fresh ice cream, and digital services in Killari.
            </p>
          </div>

          {/* Contact Details Section */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-slate-400" />
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Proprietor</div>
                <div className="text-base font-black text-slate-900">{SHOP_INFO.ownerEn}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Address & Contact</div>
                <div className="text-sm text-slate-900 font-medium">{SHOP_INFO.nameEn}</div>
                <div className="text-sm text-slate-700 font-mono">Mob: {SHOP_INFO.phonePrimary}</div>

              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-slate-400"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Follow Us on Instagram</div>
                <a href="https://www.instagram.com/tejesh_xerox_and_dairy_killari?stkn=d2Q2cmR5MHVmNTB0" target="_blank" rel="noopener noreferrer" className="text-sm font-black text-slate-900 hover:text-pink-600 transition-colors">
                  @tejesh_xerox_and_dairy_killari
                </a>
              </div>
            </div>
          </div>

          {/* Map and Socials */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="bg-slate-50 rounded-2xl p-2 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between text-slate-800 font-black text-xs mb-2 px-1">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-amber-500 animate-pulse" />
                  <span>Live Google Map</span>
                </div>
                <a
                  href={SHOP_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-amber-700 hover:text-amber-900 font-bold underline"
                >
                  View Full Map ↗
                </a>
              </div>
              <a
                href={SHOP_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden border border-slate-200 h-[140px] relative group"
                title="Click to open Tejesh Xerox on Google Maps"
              >
                <iframe title="Live Map - Tejesh Xerox Killari" src={mapEmbedUrl} className="w-full h-full border-0 pointer-events-none" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                    Open Live Location ↗
                  </span>
                </div>
              </a>
            </div>
            
          </div>

        </div>
      </div>

      {/* Bottom bar — Operator Login + Developer Credit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={onOpenOperator}
          className="text-xs text-slate-300 hover:text-amber-500 transition-colors tracking-wider uppercase"
        >
          Operator Login
        </button>
        <a
          href="https://www.instagram.com/mangesh.l_0081?stkn=cXg3N2Y5b2xtZnc5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-300 hover:text-pink-500 transition-colors"
        >
          Developed by <span className="font-bold">@mangesh.l_0081</span> ↗
        </a>
      </div>
    </footer>
  );
}
