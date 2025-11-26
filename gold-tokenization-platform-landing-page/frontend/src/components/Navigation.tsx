import { useState, useEffect } from 'react';
import { Menu, X, Home, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentSection: 'home' | 'articles';
  onNavigate: (section: 'home' | 'articles') => void;
}

export function Navigation({ currentSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (section: 'home' | 'articles') => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-gold/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/ksbc-logo-transparent.dim_200x200.png"
              alt="KSBC Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              KSBC Gold
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant={currentSection === 'home' ? 'default' : 'ghost'}
              onClick={() => handleNavigation('home')}
              className={
                currentSection === 'home'
                  ? 'bg-gold text-black hover:bg-gold-light'
                  : 'text-foreground hover:text-gold hover:bg-gold/10'
              }
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button
              variant={currentSection === 'articles' ? 'default' : 'ghost'}
              onClick={() => handleNavigation('articles')}
              className={
                currentSection === 'articles'
                  ? 'bg-gold text-black hover:bg-gold-light'
                  : 'text-foreground hover:text-gold hover:bg-gold/10'
              }
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Articles
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gold/10 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gold" />
            ) : (
              <Menu className="w-6 h-6 text-gold" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gold/20 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-2">
              <Button
                variant={currentSection === 'home' ? 'default' : 'ghost'}
                onClick={() => handleNavigation('home')}
                className={`w-full justify-start ${
                  currentSection === 'home'
                    ? 'bg-gold text-black hover:bg-gold-light'
                    : 'text-foreground hover:text-gold hover:bg-gold/10'
                }`}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
              <Button
                variant={currentSection === 'articles' ? 'default' : 'ghost'}
                onClick={() => handleNavigation('articles')}
                className={`w-full justify-start ${
                  currentSection === 'articles'
                    ? 'bg-gold text-black hover:bg-gold-light'
                    : 'text-foreground hover:text-gold hover:bg-gold/10'
                }`}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Articles
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
