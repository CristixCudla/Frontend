'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Observăm schimbările în URL folosind un event listener
    const handlePopState = () => {
      console.log('Navigare înapoi sau înainte');
      // Poți adăuga logica pentru resetarea layout-ului aici
    };

    // Ascultăm evenimentele de navigare
    window.addEventListener('popstate', handlePopState);

    // Curățăm listener-ul când componenta este demontată
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (path: string) => {
    router.push(path); // Navighează către ruta specificată
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Section */}
      <div className="sidebar">
        <div>
          <img src="/logo.png" alt="USV Logo" className="logo" />
        </div>
        <ul>
          {/* Contact Button */}
          <li>
            <div
              className="menu-icon-container"
              onClick={() => navigateTo('/contact')}
              style={{ cursor: 'pointer' }}
            >
              <img src="/info.png" alt="Info" className="menu-icon" />
              <div className="menu-tooltip">Informații de contact</div>
            </div>
          </li>
          {/* Auth Button */}
          <li>
            <div
              className="menu-icon-container"
              onClick={() => navigateTo('/login')}
              style={{ cursor: 'pointer' }}
            >
              <img src="/login.png" alt="Login" className="menu-icon" />
              <div className="menu-tooltip">Conectare la cont</div>
            </div>
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
            <li>
              <a
                href="https://fiesc.usv.ro/wp-content/uploads/sites/17/2024/10/Ghidul_Studentului_FIESC_2024_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ghidul studentului
              </a>
            </li>
            <li>
              <a href="/rules" target="_blank">
                Regulament examene
              </a>
            </li>
            <li>
              <a href="/faq" target="_blank">
                Întrebări frecvente
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
