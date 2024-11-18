'use client';

import React from 'react';
import Link from 'next/link';
import './courses.css';

const CoursePage = () => {
  return (
    <div className="course-page-container">
      {/* Sidebar Section */}
      <div className="sidebar">
        <img src="/logo.png" alt="USV Logo" className="logo" />
        <ul>
          <li>
            <Link href="/dashboardstudent">
              <img src="/public/home.png" alt="Home" className="menu-icon" />
            </Link>
          </li>
          <li>
            <Link href="/calendar">
              <img src="/public/calendar.png" alt="Calendar" className="menu-icon" />
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <img src="/public/curs.png" alt="Courses" className="menu-icon active" />
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <img src="/public/settings.png" alt="Settings" className="menu-icon" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="content">
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

        <div className="placeholder-content"></div>
      </div>
    </div>
  );
};

export default CoursePage;
