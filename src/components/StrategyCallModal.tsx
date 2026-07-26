import React, { useState } from 'react';
import { X, Calendar, Clock, Globe, CheckCircle2, User, Mail, Globe2, ArrowRight } from 'lucide-react';

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<string>('2026-07-28');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [selectedTimezone, setSelectedTimezone] = useState<string>('EST (US East)');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    goal: 'SEO & Organic Growth'
  });

  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const availableDates = [
    { day: 'Tue', date: 'Jul 28', value: '2026-07-28' },
    { day: 'Wed', date: 'Jul 29', value: '2026-07-29' },
    { day: 'Thu', date: 'Jul 30', value: '2026-07-30' },
    { day: 'Fri', date: 'Jul 31', value: '2026-07-31' },
    { day: 'Mon', date: 'Aug 03', value: '2026-08-03' },
  ];

  const availableTimes = [
    '09:00 AM', '10:30 AM', '01:00 PM', '03:30 PM', '05:00 PM', '07:30 PM'
  ];

  const timezones = [
    'EST (US & Canada East)',
    'PST (US & Canada West)',
    'GMT / BST (United Kingdom)',
    'AEST (Australia East)',
    'IST (India Standard Time)'
  ];

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleReset = () => {
    setStep(1);
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
              <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20">
                Calendly-Style Strategy Call Booking
              </span>
              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mt-2">
                Book a Free 30-Minute Growth Strategy Call
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Direct consultation with Narayanan Ganesan to review your SEO, paid ad funnels, or web development scope.
              </p>
            </div>

            {/* Steps Progress */}
            <div className="flex items-center justify-between mb-6 text-xs font-bold text-slate-500">
              <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-teal-600 dark:text-teal-400' : ''}`}>
                <span className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center text-[10px]">1</span>
                <span>Select Date & Time</span>
              </div>
              <div className="w-8 h-px bg-slate-200 dark:bg-slate-800" />
              <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-teal-600 dark:text-teal-400' : ''}`}>
                <span className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center text-[10px]">2</span>
                <span>Your Details</span>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                
                {/* Select Timezone */}
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2 flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>Select Timezone</span>
                  </label>
                  <select
                    value={selectedTimezone}
                    onChange={(e) => setSelectedTimezone(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {timezones.map((tz) => (
                      <option key={tz} value={tz}>{tz}</option>
                    ))}
                  </select>
                </div>

                {/* Select Date */}
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>Select Available Date</span>
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {availableDates.map((d) => (
                      <button
                        type="button"
                        key={d.value}
                        onClick={() => setSelectedDate(d.value)}
                        className={`p-2.5 rounded-xl text-center border text-xs font-bold transition-all ${
                          selectedDate === d.value
                            ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                      >
                        <span className="block text-[10px] opacity-80 uppercase">{d.day}</span>
                        <span>{d.date}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Select Time */}
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>Select Time Slot</span>
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-xl text-center border text-xs font-bold transition-all ${
                          selectedTime === time
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Next Button */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2 shadow-md"
                  >
                    <span>Next: Your Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmitBooking} className="space-y-4">
                
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">Selected Appointment:</span>
                    <span>{selectedDate} at {selectedTime} ({selectedTimezone})</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-teal-600 font-bold underline text-[11px]"
                  >
                    Change
                  </button>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Company / Website URL
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. company.com"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Primary Goal / Topic
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="SEO & Organic Growth">SEO & Organic Growth (Google & GEO)</option>
                    <option value="Paid Ads Management">Paid Ads (Meta Ads & Google Ads)</option>
                    <option value="WordPress or Shopify Site">WordPress / Shopify Web Build</option>
                    <option value="Custom Web App Development">Custom Laravel Web App</option>
                    <option value="AI Automation Setup">AI Automation & Chatbot Setup</option>
                    <option value="White-Label Delivery Partnership">White-Label Partner Inquiry</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm Strategy Call</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
              Strategy Call Scheduled!
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. A calendar invite and Google Meet room details have been generated for <strong>{selectedDate} at {selectedTime} ({selectedTimezone})</strong>.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 max-w-md mx-auto text-left space-y-1">
              <div><strong>Host:</strong> Narayanan Ganesan (Digital Marketing Specialist & PM)</div>
              <div><strong>Email:</strong> {formData.email}</div>
              <div><strong>Goal:</strong> {formData.goal}</div>
              {formData.company && <div><strong>Domain:</strong> {formData.company}</div>}
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-md"
            >
              Done / Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
