import { useState } from 'react';
import { useCallToAction } from '../hooks/useQueries';
import { Sparkles, ArrowRight, Mail, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function CallToActionSection() {
  const { data: ctaText } = useCallToAction();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setName('');
    }, 3000);
  };

  return (
    <section id="cta" className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gold/5 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-gold/30 backdrop-blur-sm bg-gradient-to-br from-black/80 to-black/60 p-12 md:p-16 shadow-2xl">
            {/* Glow Effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold/20 rounded-full blur-3xl" />

            <div className="relative space-y-8 text-center">
              {/* Icon */}
              <div className="inline-flex p-4 rounded-2xl bg-gold/10 border border-gold/30">
                <Sparkles className="w-12 h-12 text-gold animate-pulse" />
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                  Ready to Get Started?
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {ctaText || 'Explore or simulate gold tokenization now!'}
              </p>

              {/* Form or Success Message */}
              {isSubmitted ? (
                <div className="py-8 space-y-4 animate-in fade-in duration-500">
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold/20 border border-gold/50">
                    <Sparkles className="w-5 h-5 text-gold" />
                    <span className="text-gold font-semibold">Thank you for your interest!</span>
                  </div>
                  <p className="text-muted-foreground">
                    We'll be in touch soon with more information about our platform.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 pt-4">
                  <div className="space-y-2 text-left">
                    <Label htmlFor="name" className="text-foreground">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="pl-10 bg-black/40 border-gold/30 focus:border-gold text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 text-left">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10 bg-black/40 border-gold/30 focus:border-gold text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full group bg-gold hover:bg-gold-light text-black font-semibold py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gold/20">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-gold">Secure</div>
                  <div className="text-sm text-muted-foreground">Blockchain Protected</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-gold">Transparent</div>
                  <div className="text-sm text-muted-foreground">Full Visibility</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-gold">Trusted</div>
                  <div className="text-sm text-muted-foreground">Real Gold Backed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
