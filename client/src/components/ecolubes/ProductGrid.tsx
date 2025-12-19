import { PRODUCTS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductGridProps {
  onAddToCart: (product: typeof PRODUCTS[0]) => void;
  cartItems: number[]; // IDs of items in cart
}

export function ProductGrid({ onAddToCart, cartItems }: ProductGridProps) {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">Our Product Catalog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            High-grade petrochemical products sourced directly from top refineries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => {
            const isInCart = cartItems.includes(product.id);
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-xl font-bold text-primary">{product.name}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/50 text-secondary-foreground/80 hover:bg-secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    {/* Spacer content is handled by flex-grow */}
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button 
                      className={`w-full font-semibold shadow-sm transition-all duration-300 ${
                        isInCart 
                          ? 'bg-green-600 hover:bg-green-700 text-white' 
                          : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      }`}
                      onClick={() => onAddToCart(product)}
                      disabled={isInCart}
                    >
                      {isInCart ? (
                        <>
                          <Check className="mr-2 h-4 w-4" /> Added to Quote
                        </>
                      ) : (
                        <>
                          <Plus className="mr-2 h-4 w-4" /> Add to Quote
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
