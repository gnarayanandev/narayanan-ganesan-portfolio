import React, { useState } from 'react';
import { caseStudiesData } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, CheckCircle2, Tag } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenBookCall: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenBookCall }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const categories = ['all', 'SEO', 'Paid Ads', 'E-Commerce', 'Web App & AI', 'Local SEO'];

  const filteredCaseStudies = caseStudiesData.filter((cs) => {
    if (activeCategory === 'all') return true;
    return cs.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <section id="portfolio" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
            Case Studies & Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
            Proven Client Growth & Technical Impact
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Real-world results delivered across SEO, paid advertising, e-commerce builds, custom web applications, and AI integrations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all capitalize cursor-pointer ${
                activeCategory === cat
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Case Studies' : cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid (Matched heights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredCaseStudies.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-teal-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-teal-500/10 text-teal-700 dark:text-teal-300">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4">
                  Client Type: {item.clientType}
                </p>

                {/* Result Metric Banner */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 mb-4">
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-teal-600 dark:text-teal-400">
                    {item.resultMetric}
                  </div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-0.5">
                    {item.metricLabel}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              {/* Bottom Read Case Study Link */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                <button
                  onClick={() => setSelectedCaseStudy(item)}
                  className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1 hover:gap-2 transition-all focus:outline-none cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex gap-1">
                  {item.toolsUsed.slice(0, 2).map((tool, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenBookCall={onOpenBookCall}
      />
    </section>
  );
};
