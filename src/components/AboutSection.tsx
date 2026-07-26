import React from 'react';
import { careerTimeline } from '../data/portfolioData';
import { Briefcase, CheckCircle, Cpu, Award, ShieldCheck, TrendingUp, Target, Zap, BarChart3 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
            Why Clients Choose Me
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
            You Don't Need Another Agency. You Need One Partner Who Does It All, Right.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Most businesses waste money on great marketing that points to a weak website, or a beautiful site that nobody finds. I close that gap: strategy, code, and AI automation under one roof.
          </p>
        </div>

        {/* Top Grid: Bio Left, Value Prop Right - equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">

          {/* Left: Client-focused bio */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="flex flex-col justify-between h-full space-y-6">

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-slate-900 dark:text-white">Here is the problem most growing businesses face:</strong> your marketing team and your development team don't talk to each other. Campaigns go live pointing to slow pages with broken tracking. Developers build sites with no idea what keywords to rank for. The result? Wasted budget and missed revenue.
                </p>

                <p>
                  I built my career specifically to eliminate that gap. With <strong className="text-slate-900 dark:text-white">15+ years of technical experience</strong>, starting in precision engineering and evolving into full-stack web development and AI-driven digital marketing, I run your SEO, Meta Ads, Google Ads, and custom web builds as one connected growth system.
                </p>

                <p>
                  As a <strong className="text-slate-900 dark:text-white">Certified Prompt Engineer</strong> and daily user of Claude, ChatGPT, Gemini, MidJourney, Veo 3.1, and Kling AI, I operationalize AI across every deliverable, from ad creative testing and SEO content to Python automation scripts and n8n workflow builds. This means faster delivery, lower cost, and measurably better output than traditional agencies.
                </p>

                <p>
                  I work directly with <strong className="text-slate-900 dark:text-white">SMBs, e-commerce brands, SaaS companies, and marketing agencies</strong> across India, USA, UK, Australia, and Canada who need a single reliable specialist to deliver technical builds and high-ROI marketing results on time, every time.
                </p>
              </div>

              {/* Result Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span className="text-[10px] font-bold uppercase text-teal-700 dark:text-teal-400 tracking-wide">SEO Result</span>
                  </div>
                  <span className="text-xl font-extrabold font-heading text-teal-700 dark:text-teal-300">+340%</span>
                  <span className="text-[11px] text-teal-600 dark:text-teal-400 leading-tight">Organic Lead Growth</span>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-[10px] font-bold uppercase text-emerald-700 dark:text-emerald-400 tracking-wide">Paid Ads</span>
                  </div>
                  <span className="text-xl font-extrabold font-heading text-emerald-700 dark:text-emerald-300">4.2x ROAS</span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 leading-tight">Return on Ad Spend</span>
                </div>
                <div className="p-3.5 rounded-xl bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    <span className="text-[10px] font-bold uppercase text-sky-700 dark:text-sky-400 tracking-wide">AI Automation</span>
                  </div>
                  <span className="text-xl font-extrabold font-heading text-sky-700 dark:text-sky-300">60+ Hrs</span>
                  <span className="text-[11px] text-sky-600 dark:text-sky-400 leading-tight">Saved Per Month</span>
                </div>
                <div className="p-3.5 rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                    <span className="text-[10px] font-bold uppercase text-violet-700 dark:text-violet-400 tracking-wide">Local SEO</span>
                  </div>
                  <span className="text-xl font-extrabold font-heading text-violet-700 dark:text-violet-300">#1 Rank</span>
                  <span className="text-[11px] text-violet-600 dark:text-violet-400 leading-tight">Across 8 Locations</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: What You Get Card - equal height */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white shadow-xl border border-teal-500/30 relative overflow-hidden flex flex-col justify-between flex-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <h3 className="text-xl font-bold font-heading text-white mb-5 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-teal-400" />
                  <span>What You Get When You Hire Me</span>
                </h3>

                <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">One Point of Contact, Full Delivery:</strong> I manage strategy, execution, development, and reporting. No handoff gaps. No waiting on the dev team.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">SEO + Paid Ads That Actually Convert:</strong> Technical SEO audits, GEO optimization for ChatGPT/Gemini search, Meta Ads, and Google Ads managed for ROAS, not just clicks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Custom Web Builds That Earn Their Cost:</strong> WordPress plugins, Shopify apps, Laravel portals, and Chrome extensions built to drive conversions, not just impress on demo day.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">AI Acceleration on Every Project:</strong> Prompt engineering, n8n workflow automation, Python scripts, and AI chatbots that reduce your team's manual workload by 30 to 60%.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-teal-300">
                <span className="flex items-center gap-1.5 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Certified Prompt Engineer</span>
                </span>
                <span className="flex items-center gap-1.5 font-semibold">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Edison Award Recipient</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Career Timeline */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-lg font-heading">
              <Briefcase className="w-5 h-5" />
              <span>Career Timeline</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mt-1">
              15+ Years of Technical Evolution
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              From precision CAD/CAE engineering in 2011 to AI-driven digital marketing and full-stack development today, every role built the analytical and technical foundation that separates my work from typical agencies.
            </p>
          </div>

          {/* Timeline Nodes */}
          <div className="relative border-l-2 border-teal-500/40 dark:border-teal-500/30 ml-4 md:ml-36 space-y-10">
            {careerTimeline.map((item, idx) => (
              <div key={idx} className="relative pl-6 md:pl-8 group">

                {/* Node Bullet */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-teal-600 dark:border-teal-400 group-hover:scale-125 group-hover:bg-teal-600 transition-all shadow-sm" />

                {/* Year Label for desktop */}
                <div className="md:absolute md:-left-40 md:top-1.5 md:w-32 md:text-right text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-1 md:mb-0">
                  {item.year}
                </div>

                {/* Card */}
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-teal-500/50 transition-colors shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-heading">
                        {item.role}
                      </h4>
                      <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mt-0.5">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mb-4 p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/80 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] block mb-1">
                        Key Responsibilities and Capabilities:
                      </span>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs leading-relaxed">
                        {item.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-1.5 text-slate-700 dark:text-slate-300">
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
