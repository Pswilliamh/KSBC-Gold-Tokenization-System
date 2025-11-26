import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-gold/20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>© 2025. Built with</span>
            <Heart className="w-4 h-4 text-gold fill-gold animate-pulse" />
            <span>using</span>
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors font-semibold"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gold transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
