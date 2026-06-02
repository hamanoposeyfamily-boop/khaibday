'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getNeutralizedExcuse } from '@/app/actions/neutralize';
import { Sparkles, MessageSquareQuote, Loader2 } from 'lucide-react';

export function ExcuseNeutralizer() {
  const [excuse, setExcuse] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!excuse.trim()) return;
    
    setLoading(true);
    const witty = await getNeutralizedExcuse(excuse);
    setResponse(witty);
    setLoading(false);
  };

  return (
    <Card className="material-card border-none bg-[#E8F5E9] dark:bg-[#1B5E20] shadow-sm overflow-hidden h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-google-green mb-1">
          <Sparkles className="w-5 h-5 fill-current" />
          <CardTitle className="font-headline text-lg">Excuse Neutralizer</CardTitle>
        </div>
        <CardDescription className="text-green-800/70 dark:text-green-200/70">
          Trying to get out of it? Let AI handle your sibling's hesitation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Input
              placeholder="Enter their lame excuse..."
              className="rounded-xl border-google-green/30 focus-visible:ring-google-green bg-white/50 dark:bg-black/20"
              value={excuse}
              onChange={(e) => setExcuse(e.target.value)}
            />
          </div>
          <Button 
            disabled={loading || !excuse}
            className="w-full rounded-xl bg-google-green hover:bg-google-green/90 text-white font-semibold transition-all active:scale-95"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <MessageSquareQuote className="w-4 h-4 mr-2" />}
            Neutralize
          </Button>
        </form>

        {response && (
          <div className="mt-4 p-4 rounded-xl bg-white/80 dark:bg-black/30 border border-google-green/20 animate-in fade-in slide-in-from-top-2">
            <p className="text-sm font-medium italic text-green-900 dark:text-green-100">
              "{response}"
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
