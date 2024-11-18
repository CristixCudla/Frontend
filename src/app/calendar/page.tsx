'use client';

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useRouter } from 'next/navigation';
/*import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/interaction/main.css';*/
import './calendar.css';


const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const router = useRouter();

  // Type the event parameter here
  const handleDateClick = (info: { date: Date }) => {
    setSelectedDate(info.date);
  };

  const handleScheduleExam = () => {
    if (selectedDate) {
      console.log('Scheduling exam on:', selectedDate);
      router.push(`/schedule-exam?date=${selectedDate.toISOString()}`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-[#4a3fd6]">Select a Date for Exam Scheduling</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
      />
      {selectedDate && (
        <div className="mt-4">
          <p className="text-lg">Selected Date: {selectedDate.toLocaleDateString()}</p>
          <button
            onClick={handleScheduleExam}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Schedule Exam
          </button>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
