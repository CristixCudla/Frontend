'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './courseteacher.css';

const CourseTeacher = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddFile = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="course-teacher-container">
      {/* Sidebar */}
      <div className="sidebar">
        <img src="/logo.png" alt="USV Logo" className="logo" />
        <ul>
          <li>
            <Link href="/dashboardteacher">
              <img src="/public/home.png" alt="Home" className="menu-icon" />
            </Link>
          </li>
          <li>
            <Link href="/calendar">
              <img src="/public/calendar.png" alt="Calendar" className="menu-icon" />
            </Link>
          </li>
          <li>
            <Link href="/teacher-announcement">
              <img src="/public/add.png" alt="Add" className="menu-icon" />
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <img src="/public/settings.png" alt="Settings" className="menu-icon" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="header">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
          />
          <button className="add-file-button" onClick={handleAddFile}>
            <img src="/add-file.png" alt="Add File" />
          </button>
        </div>

        {/* Popup Window */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3>Upload Course Material</h3>
              <div className="drag-drop-area">
                Drag and drop files here
              </div>
              <button className="close-popup" onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseTeacher;
