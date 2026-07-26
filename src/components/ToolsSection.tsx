import React from 'react';
import { toolBadges } from '../data/portfolioData';
import { Sparkles, Award } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
            Tech Ecosystem
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
            Daily AI, Marketing & Code Stack
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Hands-on daily proficiency across leading generative AI models, advertising suites, web platforms, and automation software.
          </p>
        </div>

        {/* Tools Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {toolBadges.map((tool, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center group"
            >
              {/* Logo Code Circle */}
              <div className="w-11 h-11 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/80 flex items-center justify-center mb-2.5 font-bold font-heading text-teal-700 dark:text-teal-300 text-sm group-hover:scale-110 transition-transform shadow-2xs">
                {tool.logoCode || tool.name.substring(0, 2)}
              </div>

              {/* Tool Name */}
              <h3 className="text-xs font-bold font-heading text-slate-900 dark:text-white mb-1.5">
                {tool.name}
              </h3>

              {/* Category Pill Tag */}
              <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold border ${
                tool.category === 'AI'
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800/50'
                  : tool.category === 'Marketing'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800/50'
                  : tool.category === 'Dev'
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50'
                  : 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800/50'
              }`}>
                {tool.category}
              </span>

              {tool.description && (
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2 leading-tight hidden group-hover:block transition-all">
                  {tool.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* AI Workflow Note - Fixed Contrast & Text Visibility */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-teal-500/40 dark:border-teal-500/50 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="text-left space-y-1">
            <span className="text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-widest block font-heading">
              Daily Workflow Acceleration
            </span>
            <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
              Leveraging ChatGPT, Gemini, Grok, Perplexity, MidJourney, Leonardo, Veo, and Kling AI across copy, code, data analysis, and visual generation.
            </p>
          </div>

          <div className="shrink-0 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-300" />
            <span>Prompt Engineer Certified</span>
          </div>
        </div>

      </div>
    </section>
  );
};
