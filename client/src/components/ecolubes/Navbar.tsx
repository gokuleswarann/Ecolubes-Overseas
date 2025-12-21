import { useState, useEffect } from 'react';
import { Menu, ShoppingCart, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { COMPANY_CONFIG } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1 md:gap-2">
          <img 
            src={COMPANY_CONFIG.logoUrl} 
            alt="Logo" 
            className="h-10 w-10 md:h-16 md:w-16 object-contain drop-shadow-md" 
          />
          <div className={`font-serif font-bold text-4xl tracking-tight transition-colors ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}>
            {COMPANY_CONFIG.name}
          </div>
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-8 font-medium transition-colors ${
            isScrolled ? 'text-foreground' : 'text-white/90'
        }`}>
          <a href="#products" className="hover:text-accent transition-colors">Products</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className={`relative ${!isScrolled && 'text-white hover:bg-white/10 hover:text-white'}`}
            onClick={onOpenCart}
          >
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full animate-in zoom-in">
                {cartCount}
              </span>
            )}
          </Button>

          {/* Mobile Menu (simplified) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`md:hidden ${!isScrolled && 'text-white hover:bg-white/10'}`}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-left font-serif text-primary">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <a href="#products" className="text-lg font-medium hover:text-primary">Products</a>
                <a href="#about" className="text-lg font-medium hover:text-primary">About Us</a>
                <a href="#contact" className="text-lg font-medium hover:text-primary">Contact</a>
                <div className="border-t pt-4 mt-4 space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-4 w-4" /> <span>{COMPANY_CONFIG.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="h-4 w-4" /> <span>{COMPANY_CONFIG.email}</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
