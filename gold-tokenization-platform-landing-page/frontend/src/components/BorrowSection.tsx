import { useEffect, useRef, useState } from 'react';
import {
  useBorrowSectionTitle,
  useBorrowSectionDescription,
  useBorrowingSteps,
  useTrustIndicators,
  useLoanCalculatorParams,
  useCalculateLoanAmount,
  useCalculateRepaymentAmount,
} from '../hooks/useQueries';
import {
  Shield,
  Lock,
  Calculator,
  TrendingUp,
  CheckCircle2,
  DollarSign,
  Clock,
  BadgeCheck,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';

const stepIcons = [BadgeCheck, Lock, Calculator, DollarSign, Clock];

export function BorrowSection() {
  const { data: title } = useBorrowSectionTitle();
  const { data: description } = useBorrowSectionDescription();
  const { data: steps } = useBorrowingSteps();
  const { data: trustIndicators } = useTrustIndicators();
  const { data: loanParams } = useLoanCalculatorParams();
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Loan calculator state
  const [goldAmount, setGoldAmount] = useState<string>('');
  const [termMonths, setTermMonths] = useState<number>(12);
  const goldAmountNum = parseFloat(goldAmount) || 0;

  const { data: loanAmount } = useCalculateLoanAmount(goldAmountNum);
  const { data: repaymentAmount } = useCalculateRepaymentAmount(
    loanAmount || 0,
    BigInt(termMonths)
  );

  // Get LTV and interest rate from params
  const ltvRatio = loanParams?.find(([key]) => key === 'loanToValueRatio')?.[1] || 0.7;
  const interestRate = loanParams?.find(([key]) => key === 'interestRate')?.[1] || 0.05;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps?.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 150);
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
      id="borrow"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-background via-black/40 to-background overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/assets/generated/loan-calculator-mockup.dim_600x400.png"
          alt="Loan Calculator"
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
            backgroundSize: '3rem 3rem',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 50%, #000 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm mb-4">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Secure Lending</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                {title || 'Borrow Against Your Gold'}
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {description ||
                'Use your tokenized gold as collateral to borrow funds through our KYC-approved lending service.'}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {trustIndicators?.map((indicator, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm border-gold/50 text-gold bg-gold/5 backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  {indicator}
                </Badge>
              ))}
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Borrowing Process Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gold mb-8">How Borrowing Works</h3>

              {/* Process Diagram Image */}
              <div className="mb-8 rounded-xl overflow-hidden border border-gold/30">
                <img
                  src="/assets/generated/borrowing-process-steps.dim_1000x300.png"
                  alt="Borrowing Process Steps"
                  className="w-full h-auto"
                />
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {steps?.map((step, index) => {
                  const Icon = stepIcons[index] || Shield;
                  const isVisible = visibleSteps.includes(index);

                  return (
                    <div
                      key={index}
                      className={`group relative transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-black/60 to-black/40 border border-gold/20 backdrop-blur-sm hover:border-gold/50 transition-all duration-300">
                        {/* Step Number & Icon */}
                        <div className="shrink-0">
                          <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-gold" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gold flex items-center justify-center text-black text-xs font-bold">
                              {index + 1}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-2">
                          <p className="text-white leading-relaxed">{step}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Loan Calculator */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gold mb-8">Loan Calculator</h3>

              <div className="relative rounded-2xl overflow-hidden border-2 border-gold/40 backdrop-blur-sm bg-gradient-to-br from-black/90 to-black/70 p-8 shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />

                <div className="relative space-y-6">
                  {/* Trust Badges */}
                  <div className="flex gap-3 mb-6">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gold/10 border border-gold/30">
                      <img
                        src="/assets/generated/kyc-verified-badge-transparent.dim_150x150.png"
                        alt="KYC Verified"
                        className="w-6 h-6"
                      />
                      <span className="text-xs font-medium text-gold">KYC Verified</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gold/10 border border-gold/30">
                      <img
                        src="/assets/generated/secure-lending-shield-transparent.dim_150x150.png"
                        alt="Secure Lending"
                        className="w-6 h-6"
                      />
                      <span className="text-xs font-medium text-gold">Secure</span>
                    </div>
                  </div>

                  {/* Gold Amount Input */}
                  <div className="space-y-2">
                    <Label htmlFor="goldAmount" className="text-white flex items-center gap-2 font-medium">
                      <TrendingUp className="w-4 h-4 text-gold" />
                      Tokenized Gold Amount (oz)
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                      <Input
                        id="goldAmount"
                        type="number"
                        placeholder="Enter gold amount"
                        value={goldAmount}
                        onChange={(e) => setGoldAmount(e.target.value)}
                        min="0"
                        step="0.01"
                        className="pl-10 bg-black/60 border-gold/40 focus:border-gold text-white placeholder:text-white/40 h-12 text-lg"
                      />
                    </div>
                  </div>

                  {/* Loan Term Slider */}
                  <div className="space-y-3">
                    <Label htmlFor="termMonths" className="text-white flex items-center gap-2 font-medium">
                      <Clock className="w-4 h-4 text-gold" />
                      Loan Term: <span className="text-gold">{termMonths} months</span>
                    </Label>
                    <Slider
                      id="termMonths"
                      value={[termMonths]}
                      onValueChange={(value) => setTermMonths(value[0])}
                      min={3}
                      max={36}
                      step={3}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-white/60">
                      <span>3 months</span>
                      <span>36 months</span>
                    </div>
                  </div>

                  {/* Results */}
                  {goldAmountNum > 0 && (
                    <div className="space-y-4 pt-6 border-t border-gold/30 animate-in fade-in duration-500">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-gold/10 border-2 border-gold/30">
                        <div className="space-y-1">
                          <p className="text-sm text-white/70 font-medium">Loan Amount (LTV {(ltvRatio * 100).toFixed(0)}%)</p>
                          <p className="text-3xl font-bold text-gold">
                            ${loanAmount?.toFixed(2) || '0.00'}
                          </p>
                        </div>
                        <Calculator className="w-8 h-8 text-gold/50" />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-gold/10 border-2 border-gold/30">
                        <div className="space-y-1">
                          <p className="text-sm text-white/70 font-medium">
                            Total Repayment ({(interestRate * 100).toFixed(1)}% APR)
                          </p>
                          <p className="text-3xl font-bold text-white">
                            ${repaymentAmount?.toFixed(2) || '0.00'}
                          </p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-gold/50" />
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="p-3 rounded-lg bg-black/60 border border-gold/20">
                          <p className="text-white/70 mb-1 font-medium">Monthly Payment</p>
                          <p className="font-bold text-white text-lg">
                            ${((repaymentAmount || 0) / termMonths).toFixed(2)}
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-black/60 border border-gold/20">
                          <p className="text-white/70 mb-1 font-medium">Interest</p>
                          <p className="font-bold text-white text-lg">
                            ${((repaymentAmount || 0) - (loanAmount || 0)).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <Button className="w-full group bg-gold hover:bg-gold-light text-black font-semibold py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]">
                        Apply for Loan
                        <CheckCircle2 className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                      </Button>
                    </div>
                  )}

                  {goldAmountNum === 0 && (
                    <div className="text-center py-8 text-white/60">
                      <Calculator className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p className="text-lg">Enter your gold amount to see loan estimates</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-lg bg-black/60 border border-gold/30 backdrop-blur-sm">
                  <Lock className="w-5 h-5 text-gold mb-2" />
                  <p className="font-semibold text-white mb-1">Secure Collateral</p>
                  <p className="text-white/70 text-xs">
                    Your gold remains safely stored and tokenized
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-black/60 border border-gold/30 backdrop-blur-sm">
                  <Shield className="w-5 h-5 text-gold mb-2" />
                  <p className="font-semibold text-white mb-1">KYC Protected</p>
                  <p className="text-white/70 text-xs">
                    Fully compliant lending service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

