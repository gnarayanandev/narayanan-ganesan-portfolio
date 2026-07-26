import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 pb-12 border-b border-slate-800">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center font-heading font-bold text-base shadow-sm">
                NG
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="pt-1 text-xs text-teal-400 font-medium">
              Certified Prompt Engineer | Edison Award Recipient
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About & Timeline</a></li>
              <li><a href="#skills" className="hover:text-teal-400 transition-colors">Technical Skills</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Services Offered</a></li>
              <li><a href="#portfolio" className="hover:text-teal-400 transition-colors">Portfolio Case Studies</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact Narayanan</a></li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-heading">
              Connect Directly
            </h4>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-colors flex items-center gap-2 text-xs font-medium"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-teal-500 transition-colors flex items-center gap-2 text-xs font-medium"
                aria-label="Email Direct"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Email</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Location: Tamil Nadu, India</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
