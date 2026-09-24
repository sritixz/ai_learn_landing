import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
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

  return (
    <div style={{
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      color: "#0F1F3D", background: "#FFFFFF", minHeight: "100vh",
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

      {/* Hero Trust Strip & Microcopy CTA Box */}
      <TrustStrip
        onOpenDemo={handleOpenDemo}
      />

      {/* Section 02 - Business Case & Employee Outcomes */}
      <BusinessCase />

      {/* Section 03 - 10 Role-Based Academies */}
      <RoleAcademies
        onOpenDemo={handleOpenDemo}
      />

      {/* Section 04 - 10 Curriculum Architecture Modules */}
      <CurriculumArchitecture
        onOpenDemo={handleOpenDemo}
      />

      {/* Section 05 - 50+ Tool Ecosystem (67 Tools across 9 categories) */}
      <ToolEcosystem />

      {/* Section 06 - Advanced Capability (Agents & Automations) */}
      <AdvancedCapability
        onOpenDemo={handleOpenDemo}
      />

      {/* Section 07 - Enterprise Delivery & 5-Stage Journey */}
      <EnterpriseDelivery />

      {/* Section 08 - Responsible Enterprise AI Governance */}
      <ResponsibleAI />

      {/* Section 09 - Business ROI & Enterprise Packages */}
      <ROIAndPackages
        onOpenDemo={handleOpenDemo}
      />

      {/* Section 10 - Enterprise Buyer FAQ Accordion */}
      <FAQSection />

      {/* Final Conversion Section */}
      <FinalCTA
        onOpenDemo={handleOpenDemo}
        scrollToSection={scrollToSection}
      />

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
