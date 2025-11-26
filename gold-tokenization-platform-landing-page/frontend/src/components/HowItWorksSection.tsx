import { useEffect, useRef, useState } from 'react';
import { useHowItWorksSteps, useRelatedTechnologies } from '../hooks/useQueries';
import { Shield, Coins, Network, ArrowRight, CheckCircle2 } from 'lucide-react';

const stepIcons = [Shield, Coins, Network, CheckCircle2];

export function HowItWorksSection() {
  const { data: steps } = useHowItWorksSteps();
  const { data: technologies } = useRelatedTechnologies();
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps?.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [steps]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-background via-black/50 to-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/assets/generated/blockchain-network.dim_1024x768.jpg"
          alt="Blockchain Network"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm mb-4">
              <Network className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">The Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform physical gold into digital tokens on the XRP Ledger with complete transparency
              and security
            </p>
          </div>

          {/* Process Diagram */}
          <div className="mb-16">
            <img
              src="/assets/generated/tokenization-process.dim_1200x400.jpg"
              alt="Tokenization Process"
              className="w-full h-auto rounded-2xl border border-gold/30 shadow-2xl"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {steps?.map((step, index) => {
              const Icon = stepIcons[index] || Shield;
              const isVisible = visibleSteps.includes(index);

              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-black/60 to-black/40 border border-gold/20 backdrop-blur-sm hover:border-gold/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 inline-flex p-4 rounded-xl bg-gold/10 border border-gold/30">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>

                    {/* Content */}
                    <p className="text-lg text-foreground leading-relaxed">{step}</p>

                    {/* Arrow for non-last items */}
                    {index < (steps?.length || 0) - 1 && (
                      <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-gold/50">
                        <ArrowRight className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Related Technologies */}
          <div className="text-center space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gold">Powered By</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {/* XRP Logo */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full group-hover:bg-gold/30 transition-all" />
                <div className="relative flex items-center gap-4 px-8 py-4 rounded-xl bg-black/60 border border-gold/30 backdrop-blur-sm hover:border-gold/50 transition-all">
                  <img
                    src="/assets/generated/xrp-icon-transparent.dim_200x200.png"
                    alt="XRP Ledger"
                    className="w-12 h-12"
                  />
                  <span className="text-xl font-semibold text-gold">XRP Ledger</span>
                </div>
              </div>

              {/* Related Technologies */}
              {technologies?.map((tech, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full group-hover:bg-gold/30 transition-all" />
                  <div className="relative px-8 py-4 rounded-xl bg-black/60 border border-gold/30 backdrop-blur-sm hover:border-gold/50 transition-all">
                    <span className="text-xl font-semibold text-gold">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
