'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Importă useRouter
import './courses.css';

const CoursePage = () => {
  const router = useRouter(); // Inițializează router-ul

  const navigateTo = (path: string) => {
    router.push(path); // Navigare programatică
  };

  return (
    <div className="course-page-container">
      {/* Sidebar Section */}
      <div className="sidebar">
      <div
              className="menu-icon-container"
              onClick={() => navigateTo('/dashboardstudent')}
              style={{ cursor: 'pointer' }}
            >
        <img src="/logo.png" alt="USV Logo" className="logo" />
        </div>
        <ul>
          <li>
            <div
              className="menu-icon-container"
              onClick={() => navigateTo('/calendar')}
              style={{ cursor: 'pointer' }}
            >
              <img src="/calendar.png" alt="Calendar" className="menu-icon" />
              <div className='menu-tooltip'>Calendar</div>
            </div>
          </li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Caută..."
            className="search-input"
          />
          <button className="search-button">
            <img src="/public/search.png" alt="Search" />
          </button>
        </div>

        <div className="placeholder-content"></div>
      </div>
    </div>
  );
};

export default CoursePage;
