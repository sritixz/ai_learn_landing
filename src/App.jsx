import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeroSectionExtended from './components/HeroSectionExtended';
import TrustStrip from './components/TrustStrip';
import BusinessCase from './components/BusinessCase';
import RoleAcademies from './components/RoleAcademies';
import CurriculumArchitecture from './components/CurriculumArchitecture';
import ToolEcosystem from './components/ToolEcosystem';
import AdvancedCapability from './components/AdvancedCapability';
import EnterpriseDelivery from './components/EnterpriseDelivery';
import ResponsibleAI from './components/ResponsibleAI';
import ROIAndPackages from './components/ROIAndPackages';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
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
          obs.unobserve(entry.target); // Trigger only once, static afterwards
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
      color: "#F8FAFC",
      background: "#050B1A",
      minHeight: "100vh",
      WebkitFontSmoothing: "antialiased"
    }}>
      {/* Navigation Header */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section & Value Pillars */}
      <HeroSection
        onOpenDemo={handleOpenDemo}
        scrollToSection={scrollToSection}
      />

      <div className="reveal-on-scroll">
        <HeroSectionExtended />
      </div>

      {/* Hero Trust Strip & Microcopy CTA Box */}
      <div className="reveal-on-scroll">
        <TrustStrip
          onOpenDemo={handleOpenDemo}
        />
      </div>

      {/* Section 02 - Business Case & Employee Outcomes */}
      <div className="reveal-on-scroll">
        <BusinessCase />
      </div>

      {/* Section 03 - 10 Role-Based Academies */}
      <div className="reveal-on-scroll">
        <RoleAcademies
          onOpenDemo={handleOpenDemo}
        />
      </div>

      {/* Section 04 - 10 Curriculum Architecture Modules */}
      <div className="reveal-on-scroll">
        <CurriculumArchitecture
          onOpenDemo={handleOpenDemo}
        />
      </div>

      {/* Section 05 - 50+ Tool Ecosystem (67 Tools across 9 categories) */}
      <div className="reveal-on-scroll">
        <ToolEcosystem />
      </div>

      {/* Section 06 - Advanced Capability (Agents & Automations) */}
      <div className="reveal-on-scroll">
        <AdvancedCapability
          onOpenDemo={handleOpenDemo}
        />
      </div>

      {/* Section 07 - Enterprise Delivery & 5-Stage Journey */}
      <div className="reveal-on-scroll">
        <EnterpriseDelivery />
      </div>

      {/* Section 08 - Responsible Enterprise AI Governance */}
      <div className="reveal-on-scroll">
        <ResponsibleAI />
      </div>

      {/* Section 09 - Business ROI & Enterprise Packages */}
      <div className="reveal-on-scroll">
        <ROIAndPackages
          onOpenDemo={handleOpenDemo}
        />
      </div>

      {/* Section 10 - Enterprise Buyer FAQ Accordion */}
      <div className="reveal-on-scroll">
        <FAQSection />
      </div>

      {/* Final Conversion Section */}
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

      {/* Enterprise Lead Consultation Demo Modal */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        initialGoal={demoInitialGoal}
      />
    </div>
  );
}
