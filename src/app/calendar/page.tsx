'use client';

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useRouter } from 'next/navigation';
import { EventClickArg } from '@fullcalendar/core';  // Asigură-te că ai acest import

// Define an interface for storing exam details
interface ExamDetails {
  subject: string;
  studentCount: number;
  examTime: string;
  room: string;
  date: string;
}

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [exams, setExams] = useState<ExamDetails[]>([]); // Store scheduled exams
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newExam, setNewExam] = useState<ExamDetails>({
    subject: '',
    studentCount: 0,
    examTime: '',
    room: '',
    date: '',
  });
  const router = useRouter();

  // Handle date selection from the calendar
  const handleDateClick = (info: { date: Date }) => {
    setSelectedDate(info.date);
    setIsModalOpen(true); // Open the modal to set exam details
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewExam((prevState) => ({
      ...prevState,
      [name]: value,
      date: selectedDate ? selectedDate.toISOString() : prevState.date,
    }));
  };

  // Save the exam details and close the modal
  const handleSaveExam = () => {
    if (selectedDate) {
      setExams([...exams, newExam]);
      setIsModalOpen(false); // Close the modal
    }
  };

  // Handle schedule exam button click
  const handleScheduleExam = () => {
    if (selectedDate) {
      console.log('Scheduling exam on:', selectedDate);
      router.push(`/schedule-exam?date=${selectedDate.toISOString()}`);
    }
  };

  // Render modal with form to input exam details
  const renderModal = () => {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Schedule Exam</h2>
          <form>
            <label>
              Subject:
              <input
                type="text"
                name="subject"
                value={newExam.subject}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Number of Students:
              <input
                type="number"
                name="studentCount"
                value={newExam.studentCount}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Exam Time:
              <input
                type="time"
                name="examTime"
                value={newExam.examTime}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Room:
              <input
                type="text"
                name="room"
                value={newExam.room}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="button" onClick={handleSaveExam}>
              Save Exam
            </button>
          </form>
        </div>
      </div>
    );
  };

  // Handle event click on the calendar to show exam details
  const handleEventClick = (info: EventClickArg) => {
    const selectedExam = exams.find(
      (exam) => exam.date === info.event.startStr
    );
    if (selectedExam) {
      alert(
        `Subject: ${selectedExam.subject}\nStudent Count: ${selectedExam.studentCount}\nTime: ${selectedExam.examTime}\nRoom: ${selectedExam.room}`
      );
    }
  };
  

  // Convert exams to FullCalendar events
  const calendarEvents = exams.map((exam) => ({
    title: `${exam.subject} - ${exam.examTime}`,
    start: exam.date,
    backgroundColor: 'red', // Red background for exam events
    borderColor: 'darkred',
  }));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-[#4a3fd6]">Select a Date for Exam Scheduling</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={calendarEvents}
        eventClick={handleEventClick}
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
      {isModalOpen && renderModal()}
    </div>
  );
};

export default CalendarPage;
