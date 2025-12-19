import { HERO_IMAGE } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[90vh] min-h-[650px] w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background Image with Professional Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-primary/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/95" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 px-4 max-w-4xl">
        <div className="space-y-8">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent/25 border border-accent/40 rounded-full px-4 py-2 backdrop-blur-md text-accent font-semibold text-sm tracking-wide"
          >
            <Globe className="h-4 w-4" />
            <span>Exporting Globally from Dubai</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-3"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white drop-shadow-lg">
              Industrial Composite Solvents
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-accent drop-shadow-lg">
              & Petroleum Products
            </h2>
          </motion.div>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-lg md:text-xl text-white/95 font-light leading-relaxed tracking-wide"
          >
            Your trusted partner for premium industrial solvents and petroleum solutions. Connecting the Middle East's finest chemical products to global markets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button 
              size="lg" 
              className="bg-accent text-primary font-bold text-base px-8 h-12 rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl hover:shadow-accent/30 border-0"
              data-testid="button-request-quote"
              onClick={() => handleScrollToSection('contact')}
            >
              Request Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white/40 border-2 hover:bg-white/15 hover:border-white/60 text-base px-8 h-12 rounded-lg backdrop-blur-sm font-semibold transition-all"
              data-testid="button-view-catalog"
              onClick={() => handleScrollToSection('products')}
            >
              View Catalog <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/40"
        >
          <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
