import React from 'react';
import { EVENT_DETAILS } from '../constants';
import { Bus, Map } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-primary-900 text-white rounded-b-[3rem] shadow-xl">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1200/800?grayscale&blur=2')] bg-cover bg-center" />
      
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <Map size={300} />
      </div>

      <div className="relative z-10 px-6 py-16 md:py-24 text-center container mx-auto max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-white/20 animate-fade-in-up">
          <Bus size={16} className="text-yellow-400" />
          <span>{EVENT_DETAILS.organizer}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
          {EVENT_DETAILS.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-100 font-light mb-8 italic">
          "{EVENT_DETAILS.slogan}"
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
           <a href="#itinerary" className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-primary-900 font-bold rounded-full transition-all shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-1">
             ট্যুর প্ল্যান দেখুন
           </a>
           <a href="#rules" className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full transition-all">
             নির্দেশনাবলী
           </a>
        </div>
      </div>
    </div>
  );
};

export default Header;