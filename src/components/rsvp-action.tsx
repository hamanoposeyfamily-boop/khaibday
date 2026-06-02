'use client';

import { useState } from 'react';
import { CheckCircle2, ThumbsUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function RSVPAction() {
  const [confirmed, setConfirmed] = useState(false);

  const handleRSVP = () => {
    if (confirmed) return;
    setConfirmed(true);
    
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate([30, 40, 30]);
    }

    // Since we don't have canvas-confetti in package.json, 
    // we'll just handle the state change for now. 
    // In a real app we'd add the library.

    setTimeout(() => {
      window.open('https://forms.gle/cCnZcMJueU4WSbGP8', '_blank');
    }, 1200);
  };

  return (
    <div className="md:col-span-12 flex justify-center mt-4">
      <button
        onClick={handleRSVP}
        className={cn(
          "group relative overflow-hidden rounded-full w-full max-w-[320px] h-16 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-4 flex items-center justify-center gap-3 shadow-lg",
          confirmed 
            ? "bg-google-green text-white focus:ring-google-green/50" 
            : "bg-google-blue hover:bg-[#2b6ada] text-white dark:bg-google-blue dark:hover:bg-[#2b6ada] focus:ring-google-blue/50"
        )}
      >
        {confirmed ? (
          <ThumbsUp className="w-6 h-6 animate-bounce" />
        ) : (
          <CheckCircle2 className="w-6 h-6 transition-transform group-hover:scale-110" />
        )}
        <span className="text-xl font-headline font-bold tracking-wide">
          {confirmed ? "Grudgingly Confirmed." : "Fine, We'll Be There."}
        </span>
      </button>
    </div>
  );
}
