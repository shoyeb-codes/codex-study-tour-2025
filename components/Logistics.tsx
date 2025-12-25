import React from 'react';
import { Clock, MapPin, AlertCircle, Bus } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

const Logistics: React.FC = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 -mt-10 relative z-20">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 grid md:grid-cols-3 gap-8">
        
        {/* Reporting Time */}
        <div className="flex flex-col items-center text-center md:border-r border-gray-100">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
            <Clock size={24} />
          </div>
          <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">রিপোর্টিং টাইম</h3>
          <p className="text-xl font-bold text-gray-800">{EVENT_DETAILS.reportingTime}</p>
        </div>

        {/* Departure Time */}
        <div className="flex flex-col items-center text-center md:border-r border-gray-100">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
            <Bus size={24} /> 
            {/* Bus icon replaced pure text for visual clarity in code, although Bus component imported locally */}
          </div>
          <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">বাস ছাড়ার সময়</h3>
          <p className="text-xl font-bold text-red-600">{EVENT_DETAILS.departureTime}</p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
            <MapPin size={24} />
          </div>
          <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">পিকআপ পয়েন্ট</h3>
          <p className="text-lg font-bold text-gray-800 leading-snug">{EVENT_DETAILS.location}</p>
        </div>

      </div>

      <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg flex items-start gap-3 shadow-sm">
        <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={20} />
        <p className="text-amber-800 font-medium text-sm md:text-base">
          {EVENT_DETAILS.warning}
        </p>
      </div>
    </div>
  );
};

export default Logistics;