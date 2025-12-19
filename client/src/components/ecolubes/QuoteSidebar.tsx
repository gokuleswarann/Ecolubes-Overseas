import { PRODUCTS } from '@/lib/constants';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Trash2, Send } from 'lucide-react';

interface QuoteSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItemIds: number[];
  onRemoveItem: (id: number) => void;
  onProceed: () => void;
}

export function QuoteSidebar({ isOpen, onClose, cartItemIds, onRemoveItem, onProceed }: QuoteSidebarProps) {
  const cartItems = PRODUCTS.filter(p => cartItemIds.includes(p.id));

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:w-[400px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl text-primary">Your Quote Request</SheetTitle>
          <SheetDescription>
            Review the items you're interested in before sending an inquiry.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-hidden py-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-muted-foreground text-center p-4">
              <p>Your quote list is empty.</p>
              <Button variant="link" onClick={onClose} className="mt-2 text-primary">
                Browse Products
              </Button>
            </div>
          ) : (
            <ScrollArea className="h-full pr-4">
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 p-3 rounded-lg border bg-card hover:bg-muted/20 transition-colors">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-16 w-16 rounded-md object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-foreground truncate">{item.name}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{item.description}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-destructive hover:bg-destructive/10"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>

        <SheetFooter className="border-t pt-6">
          <Button 
            className="w-full h-12 text-lg font-bold bg-accent text-accent-foreground hover:bg-accent/90" 
            disabled={cartItems.length === 0}
            onClick={onProceed}
          >
            Proceed to Inquiry <Send className="ml-2 h-4 w-4" />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
