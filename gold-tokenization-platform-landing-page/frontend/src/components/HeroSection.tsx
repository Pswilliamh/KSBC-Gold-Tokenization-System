import { useEffect, useState } from 'react';
import { useHeroSection, useTagline } from '../hooks/useQueries';
import { Sparkles, TrendingUp } from 'lucide-react';

export function HeroSection() {
  const { data: heroTitle } = useHeroSection();
  const { data: tagline } = useTagline();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1920x1080.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, #FFD700 1px, transparent 1px), linear-gradient(to bottom, #FFD700 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 110%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 70%, transparent 110%)'
          }}
        />
      </div>

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-gold">Blockchain Innovation</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent animate-shimmer">
                  {heroTitle || 'Gold on the Blockchain'}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {tagline || 'Secure, transparent gold tokenization using blockchain technology'}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#how-it-works"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-black font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
                >
                  Learn More
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gold/20">
                <div>
                  <div className="text-3xl font-bold text-gold">100%</div>
                  <div className="text-sm text-muted-foreground">Secure</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold">24/7</div>
                  <div className="text-sm text-muted-foreground">Trading</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold">Real</div>
                  <div className="text-sm text-muted-foreground">Gold Backed</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="relative">
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />

                {/* Gold Bars Image */}
                <div className="relative rounded-2xl overflow-hidden border border-gold/30 backdrop-blur-sm bg-black/40 p-8">
                  <img
                    src="/assets/generated/gold-bars.dim_800x600.jpg"
                    alt="Gold Bars"
                    className="w-full h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
                  />

                  {/* Transformation Arrow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-black/80 backdrop-blur-sm border-2 border-gold rounded-full p-4 animate-pulse">
                      <svg
                        className="w-8 h-8 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Digital Tokens Overlay */}
                  <div className="absolute bottom-4 right-4 w-32 h-32 rounded-lg overflow-hidden border-2 border-gold shadow-2xl">
                    <img
                      src="/assets/generated/digital-tokens.dim_800x600.jpg"
                      alt="Digital Tokens"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
