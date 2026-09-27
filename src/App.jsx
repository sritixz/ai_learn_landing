import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import QuickNavFloatingDock from './components/QuickNavFloatingDock';
import HomePage from './pages/HomePage';
import SyllabusPage from './pages/SyllabusPage';
import ToolsPage from './pages/ToolsPage';
import EnterprisePage from './pages/EnterprisePage';
import FAQPage from './pages/FAQPage';
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
    <Router>
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

        {/* Multi-Page Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenDemo={handleOpenDemo}
                scrollToSection={scrollToSection}
              />
            }
          />
          <Route
            path="/curriculum"
            element={
              <SyllabusPage
                onOpenDemo={handleOpenDemo}
                scrollToSection={scrollToSection}
              />
            }
          />
          <Route
            path="/tools"
            element={
              <ToolsPage
                onOpenDemo={handleOpenDemo}
                scrollToSection={scrollToSection}
              />
            }
          />
          <Route
            path="/enterprise"
            element={
              <EnterprisePage
                onOpenDemo={handleOpenDemo}
                scrollToSection={scrollToSection}
              />
            }
          />
          <Route
            path="/faq"
            element={
              <FAQPage
                onOpenDemo={handleOpenDemo}
                scrollToSection={scrollToSection}
              />
            }
          />
        </Routes>

        {/* Global Footer */}
        <Footer
          onOpenDemo={handleOpenDemo}
          scrollToSection={scrollToSection}
        />

        {/* Floating Quick Nav Control */}
        <QuickNavFloatingDock
          scrollToSection={scrollToSection}
          onOpenDemo={handleOpenDemo}
        />

        {/* Consultation Modal */}
        <DemoModal
          isOpen={isDemoOpen}
          onClose={() => setIsDemoOpen(false)}
          initialGoal={demoInitialGoal}
        />
      </div>
    </Router>
  );
}
