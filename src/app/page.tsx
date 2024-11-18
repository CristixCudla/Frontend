'use client';

import React from 'react';
import Link from 'next/link';
import './globals.css';

const HomePage = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar Section */}
      <div className="sidebar">
        <Link href="/">
          <img src="/logo.png" alt="USV Logo" className="logo" />
        </Link>
        <ul>
          {/* Contact Button */}
          <li>
            <Link href="/contact">
              <img src="/info.png" alt="Contact" className="menu-icon" />
            </Link>
          </li>
          {/* Auth Button */}
          <li>
            <Link href="/login">
              <img src="/login.png" alt="Login" className="menu-icon" />
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="content">
        {/* Title and Description */}
        <div className="main-header">
          <h1 className="main-title">Programarea examenelor</h1>
          <p className="main-description">
            Gestionează programările și află informații importante despre examenele tale.
          </p>
        </div>

        {/* Announcements Section */}
        <div className="announcements">
          <div className="announcement">Anunț 1 - Important!</div>
          <div className="announcement">Anunț 2 - Verifică programările.</div>
          <div className="announcement">Anunț 3 - Modificări de sală.</div>
          <div className="announcement">Anunț 4 - Termen limită înscriere.</div>
        </div>

        {/* Useful Links Section */}
        <div className="useful-links">
          <h2>Link-uri utile</h2>
          <ul>
            <li><a href="/guide" target="_blank">Ghidul studentului</a></li>
            <li><a href="/rules" target="_blank">Regulament examene</a></li>
            <li><a href="/faq" target="_blank">Întrebări frecvente</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
