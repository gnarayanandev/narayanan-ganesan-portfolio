import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { TrendingUp, Target, Code, Palette, Bot, Search, Check, Filter } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Target': return <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Code': return <Code className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Search': return <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default: return <TrendingUp className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
  };

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeTab !== 'all' && cat.id !== activeTab) return false;
    if (searchQuery.trim() === '') return true;
    const query = searchQuery.toLowerCase();
    const matchesTitle = cat.title.toLowerCase().includes(query);
    const matchesSkill = cat.skills.some((s) => s.toLowerCase().includes(query));
    return matchesTitle || matchesSkill;
  });

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
            Technical Stack & Capabilities
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
            Core Skills & Specializations
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Categorized technical capabilities bridging digital growth, custom code, and AI automation.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>

            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === cat.id
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g., SEO, Shopify, Python)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-teal-500/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20">
                    {getIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] text-teal-700 dark:text-teal-400 font-semibold">
                      {cat.skills.length} Capabilities
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Items List */}
                <ul className="space-y-2">
                  {cat.skills.map((skill, sIdx) => {
                    const isMatched = searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase());
                    return (
                      <li
                        key={sIdx}
                        className={`flex items-center gap-2 text-xs font-medium p-1.5 rounded-lg transition-colors ${
                          isMatched
                            ? 'bg-teal-500/15 text-teal-800 dark:text-teal-200 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Category: {cat.title}</span>
                <span className="font-semibold text-teal-600 dark:text-teal-400">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              No skills found matching "{searchQuery}". Try clearing your search query.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="mt-3 text-xs font-bold text-teal-600 dark:text-teal-400 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
