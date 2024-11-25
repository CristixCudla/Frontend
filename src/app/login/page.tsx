'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Importare hook pentru navigare
import './login.css';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  // Funcție pentru a afișa/ascunde parola
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Funcție de gestionare a trimiterii formularului
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, password } = formData;

    // Validare câmpuri
    if (!username || !password) {
      setError('Toate câmpurile sunt obligatorii.');
      return;
    }

    // Validare parolă (exemplu)
    if (password !== 'password1234') {
      setError('Parola este incorectă.');
      return;
    }

    // Validare email și redirecționare
    if (username.endsWith('@usv.ro')) {
      if (username.startsWith('student')) {
        document.cookie = 'isLoggedIn=true; path=/;';
        document.cookie = 'userRole=student; path=/;';
        handleNavigation('/dashboardstudent'); // Navigare cu router.push
      } else if (username.startsWith('profesor')) {
        document.cookie = 'isLoggedIn=true; path=/;';
        document.cookie = 'userRole=profesor; path=/;';
        handleNavigation('/dashboardteacher'); // Navigare cu router.push
      } else {
        setError('Email invalid. Format permis: student@usv.ro sau profesor@usv.ro.');
      }
    } else {
      setError('Email invalid. Format permis: student@usv.ro sau profesor@usv.ro.');
    }
  };

  // Verificare autentificare pe încărcarea paginii
  useEffect(() => {
    const checkAuthStatus = () => {
      const isLoggedIn = document.cookie.includes('isLoggedIn=true');
      const userRole = document.cookie.split('; ').find((row) => row.startsWith('userRole='));

      if (isLoggedIn && userRole) {
        const role = userRole.split('=')[1];
        if (role === 'student') {
          handleNavigation('/dashboardstudent'); // Navigare cu router.push
        } else if (role === 'profesor') {
          handleNavigation('/dashboardteacher'); // Navigare cu router.push
        }
      }
    };

    checkAuthStatus();
  }, [router]);

  // Gestionare schimbare în câmpurile de text
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login Now</h2>
        <form className="form-primary" onSubmit={handleSubmit}>
          <div className="text-box-form">
            {/* Input pentru email */}
            <div className="input-group">
              <img src="/user.png" alt="User Icon" className="icon" />
              <input
                type="text"
                name="username"
                placeholder="Email"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            {/* Input pentru parola */}
            <div className="input-group">
              <img src="/padlock.png" alt="Padlock Icon" className="icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <img
                src={showPassword ? '/show.png' : '/hide.png'}
                alt="Eyes Icon"
                className="icon-eyes"
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer' }}
              />
            </div>
            {/* Mesaj de eroare */}
            {error && <p className="error-message">{error}</p>}
          </div>
          {/* Buton de conectare */}
          <div className="button-submit">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      {/* Ilustrație pentru partea dreaptă */}
      <div className="illustration">
        <div className="illustration-logo">
        <img src="/logo.png" alt="USV Logo" className="logo" />
        </div>
        <div className="illustration-background">
          <div className="illustration-mini">
            <img src="/illustration.png" alt="Illustration" className="illustration-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
