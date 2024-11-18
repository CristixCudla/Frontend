'use client';

import React from 'react';
import Link from 'next/link';
import './teacher-announcement.css';

const TeacherAnnouncementPage = () => {
  return (
    <div className="teacher-announcement">
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
              <img src="/public/add.png" alt="Add" className="sidebar-icon active" />
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
        <div className="form-container">
          <form className="announcement-form">
            <label>
              Curs
              <input type="text" name="curs" placeholder="Value" />
            </label>
            <label>
              Title
              <input type="text" name="title" />
            </label>
            <label>
              Message
              <textarea name="message"></textarea>
            </label>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherAnnouncementPage;
