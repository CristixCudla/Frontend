'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const ScheduleExamPage = () => {
  const searchParams = useSearchParams();
  const [examDate, setExamDate] = useState<string | null>(null);

  useEffect(() => {
    const date = searchParams.get('date');
    if (date) {
      setExamDate(new Date(date).toLocaleString());
    }
  }, [searchParams]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-[#4a3fd6]">Schedule Exam</h1>
      {examDate ? (
        <div>
          <p className="text-lg">You have selected the exam date: {examDate}</p>
          {/* Add more form elements or details for scheduling the exam */}
        </div>
      ) : (
        <p className="text-lg text-red-500">No date selected.</p>
      )}
    </div>
  );
};

export default ScheduleExamPage;
