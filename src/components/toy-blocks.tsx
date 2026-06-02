'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ToyBlockProps {
  char: string;
  colorClass: string;
}

export function ToyBlock({ char, colorClass }: ToyBlockProps) {
  const [isJiggling, setIsJiggling] = useState(false);

  const handleClick = () => {
    setIsJiggling(true);
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(40);
    }
    setTimeout(() => setIsJiggling(false), 500);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "toy-block w-14 h-14 sm:w-16 sm:h-16 rounded-[1rem] flex items-center justify-center text-white text-3xl sm:text-4xl font-headline font-bold",
        colorClass,
        isJiggling && "animate-jiggle"
      )}
    >
      {char}
    </div>
  );
}

export function ToyBlocksRow() {
  return (
    <div className="flex gap-2 mx-1">
      <ToyBlock char="T" colorClass="bg-google-red" />
      <ToyBlock char="W" colorClass="bg-google-blue" />
      <ToyBlock char="O" colorClass="bg-google-yellow !text-[#3E2723]" />
    </div>
  );
}
