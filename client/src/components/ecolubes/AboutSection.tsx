import { Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import workerImage from '@assets/stock_images/professional_industr_8cbf9505.jpg';

export function AboutSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Industrial texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" /%3E%3C/svg%3E")'
      }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Header */}
            <div className="space-y-3">
              <p className="text-sm font-bold text-accent tracking-widest uppercase">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                Powering Industries Globally
              </h2>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Ecolubes Overseas is a premier exporter based in Dubai, specializing in the supply of high-grade Base Oils and Hydrocarbons. Leveraging Dubai's strategic position as a global trade hub, we connect quality manufacturers with industries worldwide.
            </motion.p>

            {/* Mission & Vision Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-slate-800/80 border border-slate-700/50 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-2">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg font-bold text-white">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    To deliver superior petroleum products with unmatched reliability, fostering long-term partnerships through transparency and excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/80 border border-slate-700/50 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-2">
                    <Globe className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg font-bold text-white">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    To become the world's preferred bridge for energy solutions, setting the benchmark for quality in the petrochemical export industry.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={workerImage} 
              alt="Industrial professional at work" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
