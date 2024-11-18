'use client';

import React from 'react';
import Link from 'next/link';
import './dashboardteacher.css';

const TeacherDashboard = () => {
  // Example courses
  const courses = [
    { id: 1, name: 'Mathematics', slug: 'mathematics' },
    { id: 2, name: 'Physics', slug: 'physics' },
    { id: 3, name: 'Chemistry', slug: 'chemistry' },
    { id: 4, name: 'Biology', slug: 'biology' },
  ];
  

  return (
    <div className="teacher-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <img src="/logo.png" alt="USV Logo" className="sidebar-logo" />
        <ul className="sidebar-menu">
          <li>
            <Link href="/dashboardteacher">
              <img src="/public/home.png" alt="Home" className="sidebar-icon" />
            </Link>
          </li>
          <li>
            <Link href="/calendarpage">
              <img src="/public/calendar.png" alt="Calendar" className="sidebar-icon" />
            </Link>
          </li>
          <li>
            <Link href="/teacher-announcement">
              <img src="/public/add.png" alt="Add" className="sidebar-icon" />
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <img src="/public/settings.png" alt="Settings" className="sidebar-icon" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Hinted search text"
            className="search-input"
          />
          <button className="search-button">
            <img src="/public/search.png" alt="Search" />
          </button>
        </div>

        {/* Courses Section */}
        <div className="courses">
        {courses.map((course) => (
            <Link key={course.slug} href={`/courseteacher/`}>
              <div className="course-card">
                <p>{course.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
