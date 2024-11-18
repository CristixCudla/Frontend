'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import './login.css';

export default function LoginPage() {
  const router = useRouter(); // Initialize the router
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, password } = formData;

    // Check if fields are empty
    if (!username || !password) {
      setError('Toate câmpurile sunt obligatorii.');
      return;
    }

    // Check if password is correct
    if (password !== 'password1234') {
      setError('Parola este incorectă.');
      return;
    }

    // Check email format for student or professor
    if (username.endsWith('@usv.ro')) {
      if (username.startsWith('student')) {
        router.push('/dashboardstudent'); // Navigate to the student dashboard
      } else if (username.startsWith('profesor')) {
        router.push('/dashboardteacher'); // Navigate to the teacher dashboard
      } else {
        setError('Email invalid. Format permis: student@usv.ro sau profesor@usv.ro.');
      }
    } else {
      setError('Email invalid. Format permis: student@usv.ro sau profesor@usv.ro.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      {/* Login Form */}
      <div className="login-form">
        <h2>Login Now</h2>
        <form className="form-primary" onSubmit={handleSubmit}>
          <div className="text-box-form">
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
            {error && <p className="error-message">{error}</p>}
          </div>
          <div className="button-submit">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

      {/* Logo and Illustration */}
      <div className="illustration">
        <img src="/logo.png" alt="USV Logo" className="logo" />
        <div className="illustration-background">
          <div className="illustration-mini">
            <img src="/illustration.png" alt="Illustration" className="illustration-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
