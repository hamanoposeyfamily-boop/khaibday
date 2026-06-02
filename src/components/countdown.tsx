'use client';

import { useState, useEffect } from 'react';

const TARGET_DATE = new Date('June 15, 2026 13:00:00').getTime();

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', mins: '00' });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        setTimeLeft({ days: '00', hours: '00', mins: '00' });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        mins: minutes.toString().padStart(2, '0'),
      });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#BBDEFB] dark:bg-[#1565C0] rounded-2xl p-3 flex justify-around text-center mt-auto">
      <div>
        <span className="block text-2xl font-bold font-headline text-[#0D47A1] dark:text-white">{timeLeft.days}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1565C0] dark:text-[#90CAF9]">Days</span>
      </div>
      <div>
        <span className="block text-2xl font-bold font-headline text-[#0D47A1] dark:text-white">{timeLeft.hours}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1565C0] dark:text-[#90CAF9]">Hrs</span>
      </div>
      <div>
        <span className="block text-2xl font-bold font-headline text-[#0D47A1] dark:text-white">{timeLeft.mins}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#1565C0] dark:text-[#90CAF9]">Min</span>
      </div>
    </div>
  );
}
