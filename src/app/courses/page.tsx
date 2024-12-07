'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'; // Importă useRouter
import './courses.css';

function ExamFetcher() {
  const router = useRouter(); // Inițializează router-ul
  const [data, setData] = useState([]); // Initial state is null
  const [loading, setLoading] = useState(false); // Loading indicator
  const [error, setError] = useState(null); // Error state
  const [searchTerm, setSearchTerm] = useState(""); // Termenul de căutare
  const [userRole, setUserRole] = useState<string | null>(null); // Rolul utilizatorului

  // Funcție pentru a verifica rolul utilizatorului din cookie-uri
  useEffect(() => {
    const checkUserRole = () => {
      const cookies = document.cookie.split('; ');
      const roleCookie = cookies.find((cookie) => cookie.startsWith('userRole='));
      if (roleCookie) {
        const role = roleCookie.split('=')[1];
        setUserRole(role); // Setează rolul utilizatorului
      }
    };
    checkUserRole();
  }, []);

  const fetchExams = async () => {
    setLoading(true); // Pornește indicatorul de încărcare
    setError(null); // Resetează eroarea

    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/examen/?query=${searchTerm}`); // Endpoint corect
      console.log("Raspuns APIII", response.data); // Verifică ce răspuns primești de la API
      console.log("Search term sent to backend:", searchTerm);
      setData(response.data); // Stochează datele
    } catch (err) {
      setError("Eroare la încărcarea datelor!"); // Setează mesajul de eroare
      console.error("Eroare:", err);
    } finally {
      setLoading(false); // Dezactivează indicatorul de încărcare
    }
  };

  useEffect(() => {
    fetchExams(); // Apelează funcția de fetch când componenta este montată
  }, []); // Lista goală ca dependență înseamnă că efectul va fi apelat doar o singură dată când pagina se încarcă

  // Funcția care se apelează la apăsarea tastelor
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchExams(); // Apelează funcția de fetch cu termenul de căutare când se apasă Enter
    }
  };

  // Funcția care decide unde navighează butonul "Calendar" în funcție de rol
  const navigateToCalendar = () => {
    if (userRole === 'profesor') {
      router.push('/calendarteacher'); // Navighează la pagina profesorului
    } else if (userRole === 'student') {
      router.push('/calendarstudent'); // Navighează la pagina studentului
    } else {
      alert('Rol necunoscut! Contactează administratorul.'); // Mesaj de eroare pentru rol necunoscut
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Section */}
      <div className="sidebar-courses">
        <img
          src="/logo.png"
          alt="USV Logo"
          className="logo"
          onClick={() => router.push('/dashboardteacher')} // Navigare la pagina principală a profesorului
          style={{ cursor: 'pointer' }}
        />
        <ul>
          {/* Calendar Button */}
          <li>
            <div
              className="menu-icon-calendar"
              onClick={navigateToCalendar} // Navighează în funcție de rol
              style={{ cursor: 'pointer' }}
            >
              <img src="/calendar.png" alt="Calendar" className="menu-icon" />
              <div className="menu-tooltip">Calendar</div>
            </div>
          </li>
        </ul>
      </div>

      {/* Main Content Section */}
      <div className="content-courses">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Caută..."
            className="search-input"
            value={searchTerm} // Asociază valoarea inputului cu starea
            onChange={(e) => setSearchTerm(e.target.value)} // Actualizează termenul de căutare
            onKeyDown={handleKeyDown}
          />
          <button className="search-button" onClick={fetchExams}>
            <img src="/search.png" alt="Search" className="search-icon" />
          </button>
        </div>

        {/* Placeholder Content */}
        <div className="placeholder-content">
          <div>
            {loading && <p>Se încarcă...</p>} {/* Mesaj de încărcare */}
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mesaj de eroare */}
          </div>
          <ul>
            {data.items?.map((exam) => (
              <li key={exam.id}>
                <strong>{exam.name}</strong> - {exam.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExamFetcher;
