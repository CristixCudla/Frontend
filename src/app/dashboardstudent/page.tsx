'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import './dashboardstudent.css';

const DashboardStudent = () => {
  const router = useRouter(); // Initialize the router

  const handleLogout = () => {
    // Redirect to the homepage (page.tsx)
    router.push('/');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Section */}
      <div className="sidebar">
        <img src="/logo.png" alt="USV Logo" className="logo" />
        <ul>
          {/* Dashboard (Home) Button */}
          <li>
            <Link href="/dashboardstudent">
              <img src="/public/home.png" alt="Home" className="menu-icon" />
            </Link>
          </li>
          {/* Calendar Button */}
          <li>
            <Link href="/calendarpage">
              <img src="/public/calendar.png" alt="Calendar" className="menu-icon" />
            </Link>
          </li>
          {/* Courses Button */}
          <li>
            <Link href="/courses">
              <img src="/public/curs.png" alt="Courses" className="menu-icon" />
            </Link>
          </li>
          {/* Settings Button */}
          <li>
            <Link href="/settings">
              <img src="/public/settings.png" alt="Settings" className="menu-icon" />
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>
            <img src="/logout.png" alt="Logout Icon" className="menu-icon" />
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="content">
        <div className="announcements">
          <div className="announcement">Anunț 1</div>
          <div className="announcement">Anunț 2</div>
          <div className="announcement">Anunț 3</div>
          <div className="announcement">Anunț 4</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStudent;
