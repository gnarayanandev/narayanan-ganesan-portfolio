import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { SeoAuditCalculator } from './components/SeoAuditCalculator';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ToolsSection } from './components/ToolsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StrategyCallModal } from './components/StrategyCallModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState('');

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (darkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      
      {/* Sticky Header Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenBookCall={() => setIsBookCallOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenBookCall={() => setIsBookCallOpen(true)} />

        {/* 2. About & Career Timeline Section */}
        <AboutSection />

        {/* 3. Skills Section */}
        <SkillsSection />

        {/* 4. Services Section */}
        <ServicesSection
          onOpenBookCall={() => setIsBookCallOpen(true)}
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* Interactive SEO & AI Audit Calculator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoAuditCalculator onOpenBookCall={() => setIsBookCallOpen(true)} />
        </div>

        {/* 5. Portfolio & Case Studies Section */}
        <PortfolioSection onOpenBookCall={() => setIsBookCallOpen(true)} />

        {/* 6. Testimonials Section */}
        <TestimonialsSection />

        {/* 7. Tools & Tech Stack Section */}
        <ToolsSection />

        {/* 8. Contact Section */}
        <ContactSection
          onOpenBookCall={() => setIsBookCallOpen(true)}
          selectedServiceTitle={selectedServiceForContact}
        />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Strategy Call Booking Modal */}
      <StrategyCallModal
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />

    </div>
  );
}
