import React from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle, ExternalLink, Calendar, Layers, ShieldAlert, Cpu } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenBookCall: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenBookCall
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close case study modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Placeholder banner notice */}
        {caseStudy.isPlaceholder && (
          <div className="mb-4 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-semibold flex items-center justify-between">
            <span>Sample Portfolio Case Study (Placeholder data to swap with real client metrics)</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 font-mono">EDITABLE</span>
          </div>
        )}

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
              {caseStudy.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Client: {caseStudy.clientType}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
            {caseStudy.title}
          </h3>
        </div>

        {/* Metric Highlight Box */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-900 via-slate-900 to-slate-900 text-white mb-6 border border-teal-500/30 shadow-md flex items-center justify-between">
          <div>
            <span className="text-xs text-teal-300 font-medium block">Key Impact Metric</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-teal-400">
              {caseStudy.resultMetric}
            </div>
            <span className="text-xs text-slate-300 font-medium">
              {caseStudy.metricLabel}
            </span>
          </div>
          <div className="hidden sm:block text-right">
            <span className="text-xs px-3 py-1 rounded-full bg-teal-500/20 text-teal-200 border border-teal-500/30">
              Verified Growth Case
            </span>
          </div>
        </div>

        {/* Challenge vs Solution */}
        <div className="space-y-5 mb-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              <span>Initial Challenge</span>
            </h4>
            <p>{caseStudy.challenge}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" />
              <span>Executed Strategy & Solution</span>
            </h4>
            <p>{caseStudy.solution}</p>
          </div>
        </div>

        {/* Key Measurable Results */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
            Key Measurable Results
          </h4>
          <ul className="space-y-2 text-xs font-medium text-slate-800 dark:text-slate-200">
            {caseStudy.results.map((res, rIdx) => (
              <li key={rIdx} className="flex items-start gap-2.5 p-2 rounded-lg bg-teal-500/5 border border-teal-500/10">
                <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Used */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Tools & Tech Stack Used
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {caseStudy.toolsUsed.map((tool, tIdx) => (
              <span key={tIdx} className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Want similar growth metrics for your business?
          </span>

          <button
            onClick={() => {
              onClose();
              onOpenBookCall();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Strategy Call For Your Project</span>
          </button>
        </div>

      </div>
    </div>
  );
};
