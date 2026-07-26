import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, MapPin, Calendar, Send, CheckCircle2, Globe2, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onOpenBookCall: () => void;
  selectedServiceTitle: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenBookCall,
  selectedServiceTitle
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedServiceTitle || 'SEO, Local SEO & GEO',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
            Let's Scale Your Digital Growth & Code Architecture
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Available for direct client engagements, custom web engineering, plugin/app builds, and long-term white-label agency partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Direct Info & Quick Call Booking (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
            
            {/* Direct Contact Card */}
            <div className="p-7 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-5 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <span>Direct Contact Options</span>
                </h3>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 hover:border-teal-500 transition-colors group"
                  >
                    <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-semibold block">Email Direct</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors break-all">
                        {personalInfo.email}
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 hover:border-teal-500 transition-colors group"
                  >
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-semibold block">LinkedIn Profile</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        linkedin.com/in/narayananganesandm
                      </span>
                    </div>
                  </a>

                  {/* Location & Client Regions */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 font-semibold block">Location & Service Regions</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white block">
                        {personalInfo.location}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">
                        Serving India, USA, UK, Australia, Canada, New Zealand
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fast Strategy Call Banner */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-teal-900 via-slate-900 to-slate-950 text-white shadow-xl border border-teal-500/30 text-center space-y-4">
              <h4 className="text-lg font-bold font-heading">
                Prefer a Direct Strategy Consultation?
              </h4>
              <p className="text-xs text-slate-300">
                Book a 30-minute discovery call to discuss your growth goals, SEO audits, or custom web projects.
              </p>
              <button
                onClick={onOpenBookCall}
                className="w-full py-3 px-5 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Strategy Call</span>
              </button>
            </div>

          </div>

          {/* Contact Form (Right 7 cols) */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-6">
                Send a Direct Inquiry Message
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="WordPress Plugin Development">WordPress Plugin Development</option>
                        <option value="Shopify App Development">Shopify App Development</option>
                        <option value="Google Chrome Extension Development">Google Chrome Extension Development</option>
                        <option value="SEO, Local SEO & GEO">SEO, Local SEO & GEO</option>
                        <option value="Meta Ads & Google Ads Management">Meta Ads & Google Ads Management</option>
                        <option value="WordPress & Shopify Website Design">WordPress & Shopify Website Design</option>
                        <option value="Custom Web App Development (Laravel)">Custom Web App Development (Laravel)</option>
                        <option value="AI Automation Setup (n8n, Chatbots)">AI Automation Setup (n8n, Chatbots)</option>
                        <option value="Technical SEO Audits">Technical SEO Audits</option>
                        <option value="White-Label Agency Partner">White-Label Agency Partner</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                        Estimated Project Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Project Goals & Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share details about your business goals, target audience, or technical specifications..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Narayanan</span>
                  </button>

                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                    Inquiry Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <strong>{formData.service}</strong> has been received. Narayanan will reply directly to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-bold text-teal-600 dark:text-teal-400 underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
