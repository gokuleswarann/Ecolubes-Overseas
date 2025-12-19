import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/ecolubes/Navbar";
import { Hero } from "@/components/ecolubes/Hero";
import { AboutSection } from "@/components/ecolubes/AboutSection";
import { ProductGrid } from "@/components/ecolubes/ProductGrid";
import { QuoteSidebar } from "@/components/ecolubes/QuoteSidebar";
import { ContactSection } from "@/components/ecolubes/ContactSection";
import { EcoBot } from "@/components/ecolubes/EcoBot";
import { COMPANY_CONFIG } from "@/lib/constants";

function App() {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: any) => {
    if (!cartItems.includes(product.id)) {
      setCartItems([...cartItems, product.id]);
      setIsCartOpen(true);
    }
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(cartItems.filter(itemId => itemId !== id));
  };

  const handleProceedToInquiry = () => {
    setIsCartOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background font-sans selection:bg-accent selection:text-accent-foreground">
        <Navbar 
          cartCount={cartItems.length} 
          onOpenCart={() => setIsCartOpen(true)} 
        />
        
        <main>
          <Hero />
          <AboutSection />
          <ProductGrid 
            onAddToCart={handleAddToCart} 
            cartItems={cartItems} 
          />
          <ContactSection cartItemIds={cartItems} />
        </main>

        <footer className="bg-primary/95 text-primary-foreground py-8 text-center border-t border-white/10">
          <div className="container mx-auto px-4">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} {COMPANY_CONFIG.name}. All rights reserved. 
              <br className="md:hidden"/> Exporting Excellence from Dubai.
            </p>
          </div>
        </footer>

        <QuoteSidebar 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          cartItemIds={cartItems}
          onRemoveItem={handleRemoveFromCart}
          onProceed={handleProceedToInquiry}
        />

        <EcoBot />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
