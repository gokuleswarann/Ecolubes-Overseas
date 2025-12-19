import { Users, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import workerImage from '@assets/stock_images/professional_industr_8cbf9505.jpg';

export function AboutSection() {
  const stats = [
    { number: '7+', label: 'Base Oil Products', icon: Zap },
    { number: '7+', label: 'Hydrocarbon Products', icon: Globe }
  ];

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
    <section id="about" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
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
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                Powering Industries Globally
              </h2>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Ecolubes Overseas is a premier exporter based in Dubai, specializing in the supply of high-grade Base Oils and Hydrocarbons. Leveraging Dubai's strategic position as a global trade hub, we connect quality manufacturers with industries worldwide.
            </motion.p>

            {/* Mission & Vision Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-blue-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-primary">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To deliver superior petroleum products with unmatched reliability, fostering long-term partnerships through transparency and excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                    <Globe className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg font-bold text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To become the world's preferred bridge for energy solutions, setting the benchmark for quality in the petrochemical export industry.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-serif font-bold text-accent mb-1">
                      {stat.number}
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  </div>
                );
              })}
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
            {/* Overlay with stats card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-4 backdrop-blur-sm bg-white/95">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">7+</div>
                  <p className="text-xs font-medium text-muted-foreground">Base Oil Products</p>
                </div>
                <div className="text-center border-l border-border">
                  <div className="text-2xl font-bold text-accent">7+</div>
                  <p className="text-xs font-medium text-muted-foreground">Hydrocarbon Products</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
