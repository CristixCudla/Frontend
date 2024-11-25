'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Importă useRouter
import './courses.css';

const CoursePage = () => {
  const router = useRouter(); // Inițializează router-ul

  return (
    <div className="course-page-container">
      {/* Sidebar Section */}
      <div className="sidebar">
        {/* Logo-ul cu navigare la dashboard */}
        <div
          className="menu-icon-container"
          onClick={() => router.push('/dashboardstudent')} // Navigare cu router.push
          style={{ cursor: 'pointer' }}
        >
          <img src="/logo.png" alt="USV Logo" className="logo" />
        </div>
        <ul>
          {/* Calendar Button */}
          <li>
            <div
              className="menu-icon-container"
              onClick={() => router.push('/calendar')} // Navigare cu router.push
              style={{ cursor: 'pointer' }}
            >
              <img src="/calendar.png" alt="Calendar" className="menu-icon" />
              <div className="menu-tooltip">Calendar</div>
            </div>
          </li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="content">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Caută..."
            className="search-input"
          />
          <button className="search-button">
            <img src="/search.png" alt="Search" className="search-icon" />
          </button>
        </div>

        {/* Placeholder Content */}
        <div className="placeholder-content"></div>
      </div>
    </div>
  );
};

export default CoursePage;
