import React from 'react';
import { ToyBlocksRow } from '@/components/toy-blocks';
import { Countdown } from '@/components/countdown';
import { ExcuseNeutralizer } from '@/components/excuse-neutralizer';
import { RSVPAction } from '@/components/rsvp-action';
import { 
  Calendar, 
  MapPin, 
  Plus, 
  ArrowUpRight, 
  BookOpen, 
  Info, 
  Map as MapIcon, 
  Pizza, 
  Smile, 
  AlertTriangle 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-hidden bg-background">
      
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[8%] left-[10%] animate-float-slow opacity-20 dark:opacity-40">
           <div className="w-24 h-32 bg-google-red rounded-[50%_50%_50%_50%/40%_40%_60%_60%] relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-t-[15px] after:border-t-google-red" />
        </div>
        <div className="absolute top-[25%] right-[8%] animate-float-slower opacity-20 dark:opacity-40">
           <div className="w-32 h-40 bg-google-blue rounded-[50%_50%_50%_50%/40%_40%_60%_60%] relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-t-[15px] after:border-t-google-blue" />
        </div>
        <div className="absolute bottom-[35%] left-[5%] animate-float-slowest opacity-20 dark:opacity-40">
           <div className="w-20 h-28 bg-google-yellow rounded-[50%_50%_50%_50%/40%_40%_60%_60%] relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-t-[15px] after:border-t-google-yellow" />
        </div>
        
        {/* Red Wagon Driving Animation */}
        <div className="absolute bottom-12 left-0 w-32 h-32 animate-wagon-drive opacity-50">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 85 45 L 95 15" stroke="#444" strokeWidth="5" strokeLinecap="round" />
            <circle cx="95" cy="15" r="5" fill="#EA4335" />
            <path d="M 10 45 L 85 45 C 90 45 92 48 90 55 L 80 75 L 15 75 L 5 55 C 3 48 5 45 10 45 Z" fill="#EA4335" />
            <circle cx="25" cy="80" r="12" fill="#202124" />
            <circle cx="25" cy="80" r="4" fill="#F8F9FA" />
            <circle cx="70" cy="80" r="12" fill="#202124" />
            <circle cx="70" cy="80" r="4" fill="#F8F9FA" />
          </svg>
        </div>
      </div>

      {/* Bento Grid Container */}
      <main className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(140px,auto)] gap-4 sm:gap-6">
        
        {/* 1. Hero Block */}
        <div className="material-card p-8 md:col-span-12 lg:col-span-8 flex flex-col justify-center items-center text-center bg-[#FFF8E1] dark:bg-[#3E2723] shadow-sm">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-google-yellow/20 dark:bg-google-yellow/10 text-google-yellow dark:text-[#FFE082] text-sm font-semibold tracking-wide uppercase mb-4">
            <AlertTriangle className="w-4 h-4 fill-current" />
            Family Obligation
          </div>
          
          <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mb-6">
            <span className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-[#3E2723] dark:text-[#FFE082]">Khai is</span>
            <ToyBlocksRow />
            <span className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-[#3E2723] dark:text-[#FFE082]">Much Fun!</span>
          </div>
          
          <p className="text-lg md:text-xl font-medium text-[#5D4037] dark:text-[#D7CCC8] max-w-2xl">
            An intimate park day with the people who have to be around one another 'cause we're family. We’re keeping it small and family-only for a sweet, simple celebration.
          </p>
        </div>

        {/* 2. Date & Time Block */}
        <div className="material-card p-6 md:col-span-6 lg:col-span-4 flex flex-col justify-between bg-[#E3F2FD] dark:bg-[#0D47A1] shadow-sm min-h-[220px]">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-[#1565C0] flex items-center justify-center text-google-blue dark:text-[#90CAF9] shadow-sm">
              <Calendar className="w-6 h-6" />
            </div>
            <button className="text-xs font-semibold bg-white dark:bg-[#1976D2] text-[#0D47A1] dark:text-[#E3F2FD] px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
              <Plus className="w-3.5 h-3.5" /> Sigh & Save
            </button>
          </div>
          
          <div>
            <h3 className="text-2xl font-headline font-semibold text-[#0D47A1] dark:text-[#BBDEFB] mb-1">Sun, June 15</h3>
            <p className="text-[17px] font-medium text-[#1565C0] dark:text-[#90CAF9] mb-4">1:00 PM - 4:00 PM</p>
            <Countdown />
          </div>
        </div>

        {/* 3. Location Block */}
        <a 
          href="https://maps.google.com/?q=Kenneth+Hahn+Upper+Park,+4100+S+La+Cienega+Blvd,+Los+Angeles,+CA+90056" 
          target="_blank" 
          rel="noopener noreferrer"
          className="material-card md:col-span-6 lg:col-span-5 relative overflow-hidden group min-h-[200px] block no-underline focus:outline-none focus:ring-4 focus:ring-google-green/50 shadow-sm"
        >
          <div className="absolute inset-0 map-bg transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-x-0 bottom-0 p-5 bg-white dark:bg-[#1B5E20] border-t border-gray-100 dark:border-green-900 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-google-red flex items-center justify-center text-white flex-shrink-0">
                <MapPin className="w-6 h-6 fill-current" />
              </div>
              <div>
                <h3 className="text-lg font-headline font-semibold text-[#1B5E20] dark:text-[#C8E6C9]">Kenneth Hahn</h3>
                <p className="text-sm text-[#2E7D32] dark:text-[#A5D6A7] font-medium flex items-center gap-1">
                  Neutral Territory <ArrowUpRight className="w-3.5 h-3.5" />
                </p>
              </div>
            </div>
          </div>
        </a>

        {/* 4. AI Excuse Neutralizer */}
        <div className="md:col-span-12 lg:col-span-7">
          <ExcuseNeutralizer />
        </div>

        {/* 5. Details Block */}
        <div className="material-card p-6 md:col-span-12 lg:col-span-8 flex flex-col bg-[#FFEBEE] dark:bg-[#4A148C] shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#FFCDD2] dark:bg-[#6A1B9A] flex items-center justify-center text-[#B71C1C] dark:text-[#E1BEE7]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-headline font-semibold text-[#B71C1C] dark:text-[#F3E5F5]">Terms & Conditions</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#C62828] dark:text-[#E1BEE7] font-medium text-[15px] leading-relaxed">
            <div className="flex gap-3">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p><strong>What:</strong> Picnic, cake, and casual uncomfortable memory-making.</p>
            </div>
            <div className="flex gap-3">
              <MapIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p><strong>The Setup:</strong> Shady spot near the big oak trees to avoid overheating and eye contact.</p>
            </div>
            <div className="flex gap-3">
              <Pizza className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p><strong>Provisions:</strong> Kid snacks, smash cake, and adult "coping" refreshments.</p>
            </div>
            <div className="flex gap-3">
              <Smile className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p><strong>Bring:</strong> A blanket, comfort clothes, and your best fake smiles.</p>
            </div>
          </div>
        </div>

        {/* 6. Smart RSVP Hub */}
        <RSVPAction />
        
      </main>
    </div>
  );
}
