import React from 'react';
import { testimonialsData } from '../data/portfolioData';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
            Client Endorsements
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
            What Clients & Agency Partners Say
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Endorsements from business founders, agency executives, and marketing leaders across India, USA, UK, and Australia.
          </p>
        </div>

        {/* 3-Card Grid with matched heights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex flex-col justify-between relative group hover:border-teal-500/40 transition-colors h-full"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-teal-500/30 mb-3" />

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between mt-auto">
                <div>
                  <h4 className="text-sm font-bold font-heading text-slate-900 dark:text-white">
                    {item.author}
                  </h4>
                  <p className="text-xs text-teal-700 dark:text-teal-400 font-medium">
                    {item.role}, {item.companyType}
                  </p>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
