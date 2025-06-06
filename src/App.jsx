import React, { useState } from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Dashboard from './components/Dashboard';
import PujaPagi from './components/PujaPagi';
import PujaSore from './components/PujaSore';
import Meditasi from './components/Meditasi';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return (
          <>
            <HeroSection />
            <Dashboard />
          </>
        );
      case 'morning':
        return <PujaPagi />;
      case 'evening':
        return <PujaSore />;
      case 'meditation':
        return <Meditasi />;
      default:
        return (
          <>
            <HeroSection />
            <Dashboard />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      {renderContent()}
    </div>
  );
};

export default App;