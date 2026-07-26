import React, { useState } from 'react';
import { servicesData } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { Search, TrendingUp, Layout, Code, Bot, FileText, ArrowRight, Puzzle, ShoppingBag, Chrome } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBookCall: () => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBookCall,
  onSelectServiceForContact
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Puzzle': return <Puzzle className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Chrome': return <Chrome className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Search': return <Search className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Code': return <Code className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Bot': return <Bot className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      default: return <Code className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
            Growth & Technical Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
            Full-Stack Development & Digital Marketing Services
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Custom web engineering, plugin/app development, search engine rankings, paid media management, and automated AI systems.
          </p>
        </div>

        {/* 3 Columns Desktop / 1 Column Mobile Grid with matched heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="group p-7 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-teal-500/50 hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/20 group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 font-heading">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              {/* Card Bottom CTA */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between mt-auto">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1.5 hover:gap-2.5 transition-all focus:outline-none"
                >
                  <span>Learn Scope & Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="#contact"
                  onClick={() => onSelectServiceForContact(service.title)}
                  className="text-[11px] font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                >
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBookCall={onOpenBookCall}
        onSelectServiceForContact={onSelectServiceForContact}
      />
    </section>
  );
};
