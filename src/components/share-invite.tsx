'use client';

import { Share2, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function ShareInvite() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: 'Two Much Fun - Khai is 2!',
      text: "You're invited to Khai's 2nd Birthday Party!",
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User likely cancelled share, no need to show error
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        toast({
          title: "Link Copied!",
          description: "Invite link copied to clipboard. Send it to the family!",
        });
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        toast({
          variant: "destructive",
          title: "Failed to copy",
          description: "Please copy the URL manually from your browser.",
        });
      }
    }
  };

  return (
    <Button 
      variant="outline"
      size="sm"
      onClick={handleShare}
      className="rounded-full bg-white/80 dark:bg-white/10 border-google-blue/20 hover:bg-google-blue/10 text-google-blue dark:text-blue-300 font-semibold gap-2 transition-all active:scale-95 shadow-sm"
    >
      {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
      {copied ? 'Copied!' : 'Share Invite'}
    </Button>
  );
}
