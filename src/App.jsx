import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustStrip from './components/TrustStrip';
import ToolTicker from './components/ToolTicker';
import BusinessCase from './components/BusinessCase';
import RoleAcademies from './components/RoleAcademies';
import CurriculumArchitecture from './components/CurriculumArchitecture';
import ToolEcosystem from './components/ToolEcosystem';
import EnterpriseDelivery from './components/EnterpriseDelivery';
import ROIAndPackages from './components/ROIAndPackages';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import QuickNavFloatingDock from './components/QuickNavFloatingDock';
import './App.css';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoInitialGoal, setDemoInitialGoal] = useState("");

  const handleOpenDemo = (goal = "") => {
    setDemoInitialGoal(goal);
    setIsDemoOpen(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      color: "#0F172A",
      background: "#FFFFFF",
      minHeight: "100vh",
      WebkitFontSmoothing: "antialiased"
    }}>
      {/* Navigation Header */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenDemo={handleOpenDemo}
        scrollToSection={scrollToSection}
      />

      {/* Hero Trust Strip */}
      <div className="reveal-on-scroll">
        <TrustStrip
          onOpenDemo={handleOpenDemo}
        />
      </div>

      {/* Infinite AI Tool & Framework Logo Ticker */}
      <div className="reveal-on-scroll">
        <ToolTicker
          onOpenDemo={handleOpenDemo}
        />
      </div>

      {/* Business Case & Organizational ROI */}
      <div className="reveal-on-scroll">
        <BusinessCase />
      </div>

      {/* 10 Role-Based Academies */}
      <div className="reveal-on-scroll">
        <RoleAcademies
          onOpenDemo={handleOpenDemo}
        />
      </div>

      {/* 10-Module Curriculum Architecture */}
      <div className="reveal-on-scroll">
        <CurriculumArchitecture
          onOpenDemo={handleOpenDemo}
        />
      </div>

      {/* Evaluated Tools Matrix & Agentic Systems Hub (Tabbed) */}
      <div className="reveal-on-scroll">
        <ToolEcosystem
          onOpenDemo={handleOpenDemo}
        />
      </div>

      {/* Enterprise Delivery & Security Governance Hub (Tabbed) */}
      <div className="reveal-on-scroll">
        <EnterpriseDelivery />
      </div>

      {/* Enterprise ROI & Packages */}
      <div className="reveal-on-scroll">
        <ROIAndPackages
          onOpenDemo={handleOpenDemo}
        />
      </div>

      {/* FAQ Accordion */}
      <div className="reveal-on-scroll">
        <FAQSection />
      </div>

      {/* Final Conversion CTA */}
      <div className="reveal-on-scroll">
        <FinalCTA
          onOpenDemo={handleOpenDemo}
          scrollToSection={scrollToSection}
        />
      </div>

      {/* Enterprise Footer */}
      <Footer
        onOpenDemo={handleOpenDemo}
        scrollToSection={scrollToSection}
      />

      {/* Floating Quick Navigation & Back-To-Top Dock */}
      <QuickNavFloatingDock
        scrollToSection={scrollToSection}
        onOpenDemo={handleOpenDemo}
      />

      {/* Consultation Demo Modal */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        initialGoal={demoInitialGoal}
      />
    </div>
  );
}
