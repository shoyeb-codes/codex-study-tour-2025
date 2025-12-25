import React from 'react';
import { ITINERARY } from '../constants';

const Itinerary: React.FC = () => {
  return (
    <section id="itinerary" className="py-16 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">আমাদের অ্যাডভেঞ্চার প্ল্যান</h2>
          <div className="h-1.5 w-24 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {ITINERARY.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;
              
              return (
                <div key={item.id} className={`relative flex items-center md:justify-between ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Icon/Marker */}
                  <div className="absolute left-8 md:left-1/2 w-8 h-8 md:w-12 md:h-12 bg-primary-500 text-white rounded-full flex items-center justify-center border-4 border-white shadow-lg transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                    <Icon size={20} />
                  </div>

                  {/* Spacer for the other side on Desktop */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Content Card */}
                  <div className="ml-16 md:ml-0 w-full md:w-5/12">
                    <div className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                         <img 
                           src={item.image} 
                           alt={item.location} 
                           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                         />
                         <div className="absolute bottom-4 left-4 z-20">
                            <h3 className="text-xl font-bold text-white mb-1">{item.location}</h3>
                            <p className="text-white/90 text-sm font-light">{item.description}</p>
                         </div>
                      </div>
                      
                      <div className="p-5">
                        <ul className="space-y-2">
                          {item.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm md:text-base">
                              <span className="mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full shrink-0"></span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                        {item.isOptional && (
                          <div className="mt-3 inline-block px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full font-medium">
                            *সময়সাপেক্ষ
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;