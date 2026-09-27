import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustStrip from '../components/TrustStrip';
import ToolTicker from '../components/ToolTicker';
import BusinessCase from '../components/BusinessCase';
import RoleAcademies from '../components/RoleAcademies';
import ROIAndPackages from '../components/ROIAndPackages';
import FinalCTA from '../components/FinalCTA';
import { useNavigate } from 'react-router-dom';

export default function HomePage({ onOpenDemo, scrollToSection }) {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        onOpenDemo={onOpenDemo}
        scrollToSection={scrollToSection}
      />

      {/* Hero Trust Strip */}
      <div className="reveal-on-scroll">
        <TrustStrip onOpenDemo={onOpenDemo} />
      </div>

      {/* Infinite AI Tool & Framework Logo Ticker */}
      <div className="reveal-on-scroll">
        <ToolTicker onOpenDemo={onOpenDemo} />
      </div>

      {/* Business Case & Executive ROI Overview */}
      <div className="reveal-on-scroll">
        <BusinessCase />
      </div>

      {/* 10 Role-Based Academies Highlight */}
      <div className="reveal-on-scroll">
        <RoleAcademies onOpenDemo={onOpenDemo} />
        
        {/* Navigation Link to Dedicated Syllabus Page */}
        <div style={{ textAlign: "center", paddingBottom: 64, background: "#FFFFFF" }}>
          <button
            onClick={() => {
              navigate("/curriculum");
              window.scrollTo(0, 0);
            }}
            className="btn-orange-pill"
            style={{ fontSize: 15, padding: "14px 32px" }}
          >
            EXPLORE FULL 10-MODULE SYLLABUS & CURRICULUM →
          </button>
        </div>
      </div>

      {/* Business ROI & Enterprise Packages */}
      <div className="reveal-on-scroll">
        <ROIAndPackages onOpenDemo={onOpenDemo} />
      </div>

      {/* Final Conversion Section */}
      <div className="reveal-on-scroll">
        <FinalCTA
          onOpenDemo={onOpenDemo}
          scrollToSection={scrollToSection}
        />
      </div>
    </div>
  );
}
