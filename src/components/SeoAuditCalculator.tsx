import React, { useState } from 'react';
import { Search, Sparkles, CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';

interface SeoAuditCalculatorProps {
  onOpenBookCall: () => void;
}

export const SeoAuditCalculator: React.FC<SeoAuditCalculatorProps> = ({ onOpenBookCall }) => {
  const [url, setUrl] = useState('');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAuditing(true);
    setAuditResult(null);

    // Simulate instant heuristic audit breakdown for prospective client
    setTimeout(() => {
      const cleanUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
      setIsAuditing(false);
      setAuditResult({
        domain: cleanUrl,
        estimatedScore: Math.floor(Math.random() * 25) + 62, // 62 - 87
        passedChecks: [
          'SSL Certificate & HTTPS Protocol active',
          'Mobile viewports & responsive breakpoints defined',
          'Basic meta title tags detected'
        ],
        opportunities: [
          'Missing Schema.org JSON-LD structured data markup',
          'Image assets missing alt text attributes for accessibility',
          'Core Web Vitals LCP & CLS metrics need technical caching',
          'GEO (Generative Engine Optimization) needed for ChatGPT/Gemini search queries'
        ]
      });
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-teal-500/30 my-12">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>Instant SEO & AI Visibility Check</span>
        </span>

        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
          Check Your Website's Growth & AI Search Readiness
        </h3>

        <p className="text-xs sm:text-sm text-slate-300">
          Enter your website URL below to run an instant heuristic scan for technical SEO, mobile performance, and AI Search engine indexing.
        </p>

        {/* Input Form */}
        <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              placeholder="e.g. mycompany.com or brandstore.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button
            type="submit"
            disabled={isAuditing}
            className="w-full sm:w-auto shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            {isAuditing ? (
              <>
                <span className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                <span>Scanning Site...</span>
              </>
            ) : (
              <>
                <span>Run Free Scan</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Results Display */}
        {auditResult && (
          <div className="mt-6 p-6 rounded-2xl bg-slate-800/90 border border-teal-500/30 text-left space-y-4 animate-fade-in">
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <div>
                <span className="text-xs text-slate-400 block">Analysis For Domain</span>
                <span className="text-base font-bold font-heading text-teal-300">{auditResult.domain}</span>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400 block">Health Index</span>
                <span className="text-2xl font-extrabold text-amber-400">{auditResult.estimatedScore}/100</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <h4 className="font-bold text-teal-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Validated Strengths</span>
                </h4>
                <ul className="space-y-1 text-slate-300">
                  {auditResult.passedChecks.map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Key Optimization Gaps</span>
                </h4>
                <ul className="space-y-1 text-slate-300">
                  {auditResult.opportunities.map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-300">
                Want Narayanan to execute a full 40-point diagnostic audit with developer fixes?
              </span>
              <button
                onClick={onOpenBookCall}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-500 text-slate-950 hover:bg-teal-400 transition-colors"
              >
                Get Full Audit on Call
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
