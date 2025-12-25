import React from 'react';
import { CONTACT } from '../constants';
import { Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        
        <div className="mb-12 p-8 bg-gray-800/50 rounded-3xl border border-gray-700 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
             ইমার্জেন্সি হটলাইন
          </h3>
          
          <div className="flex flex-col items-center gap-4">
            <div className="text-gray-400 font-medium mb-2">{CONTACT.name}</div>
            <div className="flex flex-col sm:flex-row gap-4">
              {CONTACT.phones.map((phone, idx) => (
                <a 
                  key={idx}
                  href={`tel:${phone}`} 
                  className="flex items-center gap-3 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-bold transition-all shadow-lg shadow-primary-900/50"
                >
                  <Phone size={18} />
                  {phone}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-4">যেকোনো মুহূর্তে কল করুন</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col items-center">
          <p className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            কোডেক্স আইটি পরিবারের পক্ষ থেকে সবার জন্য রইল ভালোবাসা <Heart size={14} className="text-red-500 fill-current" />
          </p>
          <p className="text-gray-600 text-xs">
            © 2025 Codex IT Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;