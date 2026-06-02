
'use client';

import React from 'react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Plus, Calendar, Download } from 'lucide-react';

const EVENT_DETAILS = {
  title: "Khai's 2nd Birthday - Two Much Fun",
  description: "An intimate family celebration for Khai's second birthday. Picnic, cake, and casual uncomfortable memory-making. Directions: https://maps.google.com/?q=Kenneth+Hahn+Upper+Park,+4100+S+La+Cienega+Blvd,+Los+Angeles,+CA+90056",
  location: "Kenneth Hahn Upper Park, 4100 S La Cienega Blvd, Los Angeles, CA 90056",
  startDate: "20260615T130000",
  endDate: "20260615T160000",
};

export function CalendarActions() {
  const handleGoogleCalendar = () => {
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(EVENT_DETAILS.title)}&details=${encodeURIComponent(EVENT_DETAILS.description)}&location=${encodeURIComponent(EVENT_DETAILS.location)}&dates=${EVENT_DETAILS.startDate}/${EVENT_DETAILS.endDate}`;
    window.open(url, '_blank');
  };

  const handleICalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${EVENT_DETAILS.startDate}`,
      `DTEND:${EVENT_DETAILS.endDate}`,
      `SUMMARY:${EVENT_DETAILS.title}`,
      `DESCRIPTION:${EVENT_DETAILS.description.replace(/\n/g, '\\n')}`,
      `LOCATION:${EVENT_DETAILS.location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'khai-birthday.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-xs font-semibold bg-white dark:bg-[#1976D2] text-[#0D47A1] dark:text-[#E3F2FD] px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2 outline-none">
          <Plus className="w-3.5 h-3.5" /> Sigh & Save
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-2xl p-2 border-none shadow-xl bg-white dark:bg-[#0D47A1]">
        <DropdownMenuItem 
          onClick={handleGoogleCalendar}
          className="rounded-xl cursor-pointer flex items-center gap-3 py-3 text-sm font-medium hover:bg-google-blue/10 dark:hover:bg-blue-900/40 text-google-blue dark:text-blue-100"
        >
          <Calendar className="w-4 h-4" /> Add to Google Calendar
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={handleICalendar}
          className="rounded-xl cursor-pointer flex items-center gap-3 py-3 text-sm font-medium hover:bg-google-blue/10 dark:hover:bg-blue-900/40 text-google-blue dark:text-blue-100"
        >
          <Download className="w-4 h-4" /> Download iCal File
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
