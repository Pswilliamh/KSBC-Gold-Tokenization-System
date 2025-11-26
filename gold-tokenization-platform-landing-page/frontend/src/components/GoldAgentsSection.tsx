import { useEffect, useRef, useState } from 'react';
import {
  useGoldAgentsSectionTitle,
  useGoldAgentsDescription,
  useGoldAgentServices,
  useGoldAgentSubcards,
  useGoldAgentTrustStatement,
} from '../hooks/useQueries';
import {
  Shield,
  CheckCircle2,
  Package,
  ShoppingCart,
  Truck,
  Lock,
  FileCheck,
  Network,
  BadgeCheck,
} from 'lucide-react';
import { Badge } from './ui/badge';

const serviceIcons = [ShoppingCart, FileCheck, Lock, Network, Shield];

export function GoldAgentsSection() {
  const { data: title } = useGoldAgentsSectionTitle();
  const { data: description } = useGoldAgentsDescription();
  const { data: services } = useGoldAgentServices();
  const { data: subcards } = useGoldAgentSubcards();
  const { data: trustStatement } = useGoldAgentTrustStatement();
  const [visibleServices, setVisibleServices] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Convert subcards array to object for easier access
  const subcardsMap = subcards?.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services?.forEach((_, index) => {
              setTimeout(() => {
                setVisibleServices((prev) => [...prev, index]);
              }, index * 100);
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
  }, [services]);

  return (
    <section
      id="gold-agents"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-background via-black/30 to-background overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/assets/generated/secure-vault-interior.dim_800x600.jpg"
          alt="Secure Vault"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #FFD700 1px, transparent 1px), linear-gradient(to bottom, #FFD700 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm mb-4">
              <BadgeCheck className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Trusted Partners</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                {title || 'Gold Acquisition & Verification Agents'}
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {description ||
                'KSBC partners with accredited, insured gold dealers and vault operators to provide professional gold purchasing, purity testing, secure storage, and API-based verification for blockchain tokenization.'}
            </p>
          </div>

          {/* Hero Images Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="relative rounded-xl overflow-hidden border border-gold/30 shadow-xl group">
              <img
                src="/assets/generated/gold-dealer-verification.dim_800x600.jpg"
                alt="Gold Dealer Verification"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold text-gold">Accredited Dealers</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-gold/30 shadow-xl group">
              <img
                src="/assets/generated/gold-testing-equipment.dim_600x400.jpg"
                alt="Gold Testing Equipment"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold text-gold">Purity Testing</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-gold/30 shadow-xl group">
              <img
                src="/assets/generated/secure-vault-interior.dim_800x600.jpg"
                alt="Secure Vault Interior"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold text-gold">Secure Storage</p>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gold mb-8 text-center">Our Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services?.map((service, index) => {
                const Icon = serviceIcons[index] || Shield;
                const isVisible = visibleServices.includes(index);

                return (
                  <div
                    key={index}
                    className={`group relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="h-full p-6 rounded-xl bg-gradient-to-br from-black/60 to-black/40 border border-gold/20 backdrop-blur-sm hover:border-gold/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 p-3 rounded-lg bg-gold/10 border border-gold/30">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white leading-relaxed">{service}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subcards - Two Options */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Already Have Gold */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-2xl group-hover:bg-gold/30 transition-all" />
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-black/80 to-black/60 border border-gold/30 backdrop-blur-sm hover:border-gold/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="shrink-0 p-4 rounded-xl bg-gold/10 border border-gold/30">
                    <Package className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gold mb-2">If You Already Have Gold</h3>
                    <Badge variant="outline" className="border-gold/50 text-gold bg-gold/5">
                      <Truck className="w-3 h-3 mr-1" />
                      Insured Shipping
                    </Badge>
                  </div>
                </div>

                <div className="mb-6 rounded-xl overflow-hidden border border-gold/30">
                  <img
                    src="/assets/generated/armored-courier-transport.dim_600x400.jpg"
                    alt="Armored Courier Transport"
                    className="w-full h-48 object-cover"
                  />
                </div>

                <p className="text-lg text-white leading-relaxed">
                  {subcardsMap?.alreadyHaveGold ||
                    'Ship your gold via insured courier to our accredited vaults for verification and secure storage.'}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-gold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Fully insured during transit</span>
                </div>
              </div>
            </div>

            {/* Need to Purchase Gold */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-2xl group-hover:bg-gold/30 transition-all" />
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-black/80 to-black/60 border border-gold/30 backdrop-blur-sm hover:border-gold/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="shrink-0 p-4 rounded-xl bg-gold/10 border border-gold/30">
                    <ShoppingCart className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gold mb-2">If You Need to Purchase Gold</h3>
                    <Badge variant="outline" className="border-gold/50 text-gold bg-gold/5">
                      <BadgeCheck className="w-3 h-3 mr-1" />
                      Full Service
                    </Badge>
                  </div>
                </div>

                <div className="mb-6 rounded-xl overflow-hidden border border-gold/30">
                  <img
                    src="/assets/generated/gold-dealer-verification.dim_800x600.jpg"
                    alt="Gold Dealer Verification"
                    className="w-full h-48 object-cover"
                  />
                </div>

                <p className="text-lg text-white leading-relaxed">
                  {subcardsMap?.needToPurchaseGold ||
                    'Our partners handle purchasing, automatic testing, registration, storage, and tokenization.'}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-gold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>End-to-end service included</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Statement */}
          <div className="relative">
            <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-2xl" />
            <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-black/90 to-black/70 border-2 border-gold/40 backdrop-blur-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 border-2 border-gold/50 mb-6">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gold mb-4">The No Scam Zone</h3>
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
                {trustStatement ||
                  "KSBC is committed to working only with vetted, integrity-certified partners under our 'No Scam Zone' standard, ensuring the highest level of trust and security for all clients."}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Badge variant="outline" className="px-4 py-2 border-gold/50 text-gold bg-gold/5">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Vetted Partners
                </Badge>
                <Badge variant="outline" className="px-4 py-2 border-gold/50 text-gold bg-gold/5">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Integrity Certified
                </Badge>
                <Badge variant="outline" className="px-4 py-2 border-gold/50 text-gold bg-gold/5">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Fully Insured
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

