'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import "./login.css";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();
  // Functie pentru schimbarea vizibilității parolei
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handler pentru trimiterea formularului
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Toate câmpurile sunt obligatorii."); 
    } else if (formData.password.length < 6) {
      setError("Parola trebuie să aibă cel puțin 6 caractere."); 
    } else {
      setError(""); 
      alert("Formular trimis cu succes!"); // Înlocuiește cu logica ta
    }
  };

  // Handler pentru schimbarea valorii câmpurilor
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      {/* Formular de logare */}
      <div className="login-form">
        <h2>Login Now</h2>
        <form className="form-primary" onSubmit={handleSubmit}>
          <div className="text-box-form">
            <div className="input-group">
              <img src="/user.png" alt="User Icon" className="icon" />
              <input
                type="text"
                name="username"
                placeholder="Email or Username"
                value={formData.username}
                onChange={handleChange} // Actualizează datele introduse
              />
            </div>
            <div className="input-group">
              <img src="/padlock.png" alt="Padlock Icon" className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange} // Actualizează datele introduse
              />
              <img
                src={showPassword ? "/show.png" : "/hide.png"} // Schimbare imagine între "show" și "hide"
                alt="Eyes Icon"
                className="icon-eyes"
                onClick={togglePasswordVisibility} // Apelează handler-ul la click
                style={{ cursor: "pointer" }} // Adaugă un pointer pentru interacțiune
              />
            </div>
            {error && <p className="error-message">{error}</p>} {/* Afișează eroarea */}
          </div>
          <div className="button-submit">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

      {/* Secțiunea cu logo și ilustrație */}
      <div className="illustration">
        <img src="/logo.png" alt="USV Logo" className="logo" />
        <div className="illustration-background">
          <div className="illustration-mini">
            <img src="/illustration.png" alt="Illustration" className="illustration-image"/>
          </div>
        </div>
      </div>
    </div>
  );
}

