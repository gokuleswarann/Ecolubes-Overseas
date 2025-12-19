import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Sparkles, Loader2 } from 'lucide-react';
import { generateContent } from '@/lib/gemini';
import { toast } from '@/hooks/use-toast';

interface EmailDrafterProps {
  onDraftGenerated: (draft: string) => void;
  productNames: string[];
}

export function EmailDrafter({ onDraftGenerated, productNames }: EmailDrafterProps) {
  const [notes, setNotes] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!notes.trim() && productNames.length === 0) {
      toast({
        title: "Input needed",
        description: "Please enter some notes or add products to cart first.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    const prompt = `Write a professional B2B inquiry email for Ecolubes Overseas.
    User context/notes: "${notes}"
    Interested Products: ${productNames.join(', ')}
    
    Requirements:
    - Formal, professional tone
    - Request specific quotes (CIF/FOB)
    - Ask for availability and lead times
    - Keep it concise`;

    try {
      const draft = await generateContent(prompt);
      onDraftGenerated(draft);
      toast({
        title: "Email Drafted!",
        description: "AI has generated a professional inquiry for you.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate draft. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4 border rounded-lg p-4 bg-muted/20">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Sparkles className="h-3 w-3 text-accent" /> AI Assistant
        </Label>
      </div>
      
      <Textarea 
        placeholder="Enter rough notes here (e.g., 'Need 500 drums of SN 150 for Vietnam, monthly supply')..." 
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="min-h-[80px] text-sm bg-background"
      />

      <Button 
        onClick={handleGenerate} 
        disabled={isGenerating}
        variant="outline" 
        size="sm"
        className="w-full text-primary border-primary/20 hover:bg-primary/5 hover:text-primary"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-3 w-3 animate-spin" /> Drafting...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-3 w-3" /> Generate Professional Inquiry
          </>
        )}
      </Button>
    </div>
  );
}
