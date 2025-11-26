import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { GoldAgentsSection } from './components/GoldAgentsSection';
import { BorrowSection } from './components/BorrowSection';
import { CallToActionSection } from './components/CallToActionSection';
import { ArticlesSection } from './components/ArticlesSection';
import { Footer } from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState<'home' | 'articles'>('home');

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection={currentSection} onNavigate={setCurrentSection} />
      
      {currentSection === 'home' ? (
        <>
          <HeroSection />
          <HowItWorksSection />
          <GoldAgentsSection />
          <BorrowSection />
          <CallToActionSection />
        </>
      ) : (
        <ArticlesSection onBackToHome={() => setCurrentSection('home')} />
      )}
      
      <Footer />
    </div>
  );
}

export default App;
