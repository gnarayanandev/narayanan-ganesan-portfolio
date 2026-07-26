import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Calendar, ArrowRight, Award, Globe2, Sparkles, MapPin, ShieldCheck, TrendingUp, Zap, Users } from 'lucide-react';

interface HeroSectionProps {
  onOpenBookCall: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBookCall }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Decorative gradient blur spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Copy - Left 7 cols */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>AI-Driven Digital Marketing & Full Stack Development</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

            {/* H1 */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-heading leading-tight">
                {personalInfo.name}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 bg-clip-text text-transparent">
                {personalInfo.title}
              </p>
            </div>

            {/* Lead-Gen Tagline */}
            <p className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Problem → Solution Hook */}
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {personalInfo.shortIntro}
            </p>

            {/* Proof Row - 3 real results from case studies */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 text-center">
                <div className="text-xl font-extrabold text-teal-700 dark:text-teal-300 font-heading">+340%</div>
                <div className="text-[11px] text-teal-600 dark:text-teal-400 font-medium mt-0.5 leading-tight">Organic Lead Growth</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-center">
                <div className="text-xl font-extrabold text-emerald-700 dark:text-emerald-300 font-heading">4.2x ROAS</div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 leading-tight">Return on Ad Spend</div>
              </div>
              <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 text-center">
                <div className="text-xl font-extrabold text-sky-700 dark:text-sky-300 font-heading">60+ Hrs</div>
                <div className="text-[11px] text-sky-600 dark:text-sky-400 font-medium mt-0.5 leading-tight">Saved/Month via AI</div>
              </div>
            </div>

            {/* Service Regions */}
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <Globe2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
              <span>Serving clients across <strong>{personalInfo.serviceRegions}</strong></span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBookCall}
                className="px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a FREE 30-Min Strategy Call</span>
              </button>

              <a
                href="#portfolio"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300/80 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300/60 dark:border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <span>See Real Client Results</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Certified Prompt Engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Edison Award Recipient</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Users className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">50+ Clients Globally</span>
              </div>
            </div>

          </div>

          {/* Profile Card - Right 5 cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200/80 dark:border-slate-800 overflow-hidden">

              {/* LinkedIn Cover Banner as Card Header */}
              <div className="relative w-full h-36 overflow-hidden">
                <img
                  src="/images/narayanan-ganesan-linkedin-cover.png"
                  alt="Narayanan Ganesan, Digital Marketing Specialist and Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/60" />
              </div>

              {/* Profile Photo overlapping the cover */}
              <div className="relative px-6 pb-6">
                <div className="relative -mt-14 mb-4 flex items-end justify-between">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-lg bg-slate-100">
                    <img
                      src="/images/naren-digital-marketer.jpg"
                      alt="Narayanan Ganesan"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Availability badge */}
                  <div className="mb-1 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Available Now</span>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="mb-4">
                  <h2 className="text-lg font-bold font-heading text-slate-900 dark:text-white">{personalInfo.name}</h2>
                  <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-0.5">{personalInfo.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {personalInfo.location} · Serving India & Global
                  </p>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-2.5 text-left mb-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                    <div className="flex items-center gap-1.5 mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wide">Experience</span>
                    </div>
                    <div className="text-lg font-extrabold font-heading text-teal-600 dark:text-teal-400">15+ Yrs</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Overall Technical</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wide">AI-First</span>
                    </div>
                    <div className="text-lg font-extrabold font-heading text-emerald-600 dark:text-emerald-400">Daily Use</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Claude · Gemini · Veo 3.1</div>
                  </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span className="font-medium">Core Stack:</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300 text-right">WordPress · Shopify · Laravel · Python · AI</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
