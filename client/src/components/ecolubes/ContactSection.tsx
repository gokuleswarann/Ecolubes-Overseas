import { useState } from 'react';
import { COMPANY_CONFIG, PRODUCTS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { EmailDrafter } from './EmailDrafter';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface ContactSectionProps {
  cartItemIds: number[];
}

export function ContactSection({ cartItemIds }: ContactSectionProps) {
  const [message, setMessage] = useState('');
  
  const selectedProductNames = PRODUCTS
    .filter(p => cartItemIds.includes(p.id))
    .map(p => p.name);

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4 text-accent">Get in Touch</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Ready to source premium industrial oils? Contact our trading desk in Dubai for competitive quotes and logistics solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Headquarters</h4>
                  <p className="text-primary-foreground/70">{COMPANY_CONFIG.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-primary-foreground/70">{COMPANY_CONFIG.phone}</p>
                  <p className="text-sm text-primary-foreground/50">Mon-Fri, 9am - 6pm GST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-primary-foreground/70">{COMPANY_CONFIG.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white text-foreground shadow-2xl border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary">Request a Quote</CardTitle>
              <CardDescription>
                Fill out the form below or use our AI drafter to create a professional inquiry.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Company Email</label>
                <Input type="email" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <EmailDrafter 
                  productNames={selectedProductNames}
                  onDraftGenerated={setMessage}
                />
                <Textarea 
                  placeholder="Tell us about your requirements..." 
                  className="min-h-[120px] font-mono text-sm"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 text-lg">
                Send Inquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
