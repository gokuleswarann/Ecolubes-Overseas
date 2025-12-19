import { HERO_IMAGE } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ArrowRight, Anchor } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 text-center text-white space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 backdrop-blur-sm text-accent font-medium text-sm mb-4"
        >
          <Anchor className="h-4 w-4" />
          <span>Exporting Globally from Dubai</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-tight drop-shadow-xl"
        >
          Premium Industrial Oils <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
            & Bitumen Export
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 font-light leading-relaxed"
        >
          Your trusted partner for Virgin Base Oils, Recycled Oils, and Bitumen. 
          Connecting the Middle East's energy resources to the world.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
        >
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 h-12 font-bold shadow-lg shadow-accent/20">
            Request Quote
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:text-white text-lg px-8 h-12 backdrop-blur-sm">
            View Catalog <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent mx-auto" />
      </motion.div>
    </div>
  );
}
