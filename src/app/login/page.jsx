'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './login.css'; // Import the CSS file

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
      router.push('/'); // Redirect to home page if already logged in
    }
  }, [router]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic authentication logic (replace with your actual authentication)
    if (email === 'test@example.com' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      router.push('/'); // Redirect to home page after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  if (isLoggedIn) {
    return null; // Don't render login page if already logged in
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}