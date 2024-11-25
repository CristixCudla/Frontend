'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const ScheduleExamPage = () => {
  const searchParams = useSearchParams();
  const [examDate, setExamDate] = useState<string | null>(null);
  const [examDetails, setExamDetails] = useState({
    subject: '',
    studentCount: 0,
    examTime: '',
    room: '',
  });

  const router = useRouter();

  // Setează data examenului din URL
  useEffect(() => {
    const date = searchParams.get('date');
    if (date) {
      setExamDate(new Date(date).toLocaleString());
    }
  }, [searchParams]);

  // Gestionează schimbările din formular
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExamDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Salvează examenul și redirecționează înapoi la calendar
  const handleSaveExam = () => {
    if (!examDate) return; // Dacă nu este setată data, nu putem salva examenul
    // Salvează detaliile examenului în localStorage
    const savedExams = localStorage.getItem('scheduledExams');
    const exams = savedExams ? JSON.parse(savedExams) : [];
    exams.push({ ...examDetails, date: examDate });
    localStorage.setItem('scheduledExams', JSON.stringify(exams)); // Salvează examenele

    alert('Exam scheduled!');
    router.push('/calendar'); // Redirecționează la calendar
  };

  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4 text-[#4a3fd6]">Schedule Exam</h1>
      {examDate && (
        <div>
          <p className="text-lg">Exam Date: {examDate}</p>
          <form className="space-y-4">
            <label className="block">
              Subject:
              <input
                type="text"
                name="subject"
                value={examDetails.subject}
                onChange={handleInputChange}
                className="input-field"
                required
              />
            </label>
            <label className="block">
              Number of Students:
              <input
                type="number"
                name="studentCount"
                value={examDetails.studentCount}
                onChange={handleInputChange}
                className="input-field"
                required
              />
            </label>
            <label className="block">
              Exam Time:
              <input
                type="time"
                name="examTime"
                value={examDetails.examTime}
                onChange={handleInputChange}
                className="input-field"
                required
              />
            </label>
            <label className="block">
              Room:
              <input
                type="text"
                name="room"
                value={examDetails.room}
                onChange={handleInputChange}
                className="input-field"
                required
              />
            </label>
            <button
              type="button"
              onClick={handleSaveExam}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save Exam
            </button>
          </form>
        </div>
      )}
      {!examDate && <p>No date selected.</p>}
    </div>
  );
};

export default ScheduleExamPage;
