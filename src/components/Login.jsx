import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { login } from '../services/api';
import styles from '../styles/styles';

export default function Login({ goToSignup, goToDashboard }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  function validateForm() {
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return false;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }

    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    const user = login(email, password);

    if (user) {
      alert('Login successful!');
      goToDashboard(user);
    } else {
      setError('Invalid email or password. Please try again.');
    }
  }

  function handleGoogleSuccess(response) {
    try {
      const decoded = jwtDecode(response.credential);
      
      const googleUser = {
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
        provider: 'Google',
        id: decoded.sub
      };

      console.log('Google User:', googleUser);

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(u => u.email === googleUser.email);
      
      if (!existingUser) {
        users.push(googleUser);
        localStorage.setItem('users', JSON.stringify(users));
      }

      goToDashboard(googleUser);
    } catch (error) {
      console.error('Google login error:', error);
      setError('Google login failed. Please try again.');
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Login to continue</p>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <button type="button" style={styles.iconButton}>📧</button>
          </div>

          <div style={styles.inputGroup}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.eyeButton}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.submitButton}>
            Log In
          </button>
        </form>

        <p style={styles.divider}>OR</p>

        <div style={styles.googleWrapper}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setError('Google login failed')}
          />
        </div>

        <p style={styles.switchText}>
          Don't have an account?{' '}
          <button onClick={goToSignup} style={styles.linkButton}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}