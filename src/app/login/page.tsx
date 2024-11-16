'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // To store error messages
  const router = useRouter();
  
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // If the login is successful, navigate to the dashboard page
    if (email === 'user@example.com' && password === 'password123') {
        // Successful login - Redirect to dashboard page
        setError(null); // Clear any previous errors
        router.push('/dashboard'); // Use router.push to navigate to the dashboard page
      } else {
        // Login failed - Show error message
        setError('Invalid email or password');
      }
  };

  const loginContainerStyle = {
    width: '70%',
    margin: '10 auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px',
   
  };

  const buttonStyle = {
    width: '100%',
    padding: '5px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const inputStyle = {
    border: '2px solid black',
    justifycontent: 'center',
  };

  const labelStyle ={
    padding: '2%',
  };

  return (
    <div style={loginContainerStyle}>
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="password" style={labelStyle}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>

      {/* After successful login, navigate to dashboard using Link */}
      <p>
      </p>

      {/* If login is successful, link to dashboard */}
      <Link href="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
    </div>
  );
};

export default LoginPage;
