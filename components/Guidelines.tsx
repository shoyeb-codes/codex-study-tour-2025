import React from 'react';
import { RULES } from '../constants';

const Guidelines: React.FC = () => {
  return (
    <section id="rules" className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">গোল্ডেন রুলস</h2>
          <p className="text-gray-500">স্মরণীয় সফরের জন্য কিছু নির্দেশনাবলী</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RULES.map((rule) => {
            const Icon = rule.icon;
            return (
              <div key={rule.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{rule.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {rule.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Guidelines;