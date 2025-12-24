import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import styles from '../styles/styles';

export default function Login({ goToSignup, goToDashboard }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleGoogleLogin(response) {
    const userData = jwtDecode(response.credential);
    goToDashboard(userData);
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Login to continue</p>

        <div style={styles.inputGroup}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            autoComplete="off"
            inputMode="email"
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button type="button" style={styles.iconButton}>✉️</button>
        </div>

        <div style={styles.inputGroup}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
          >
            👁️
          </button>
        </div>

        <button style={styles.submitButton}>Log In</button>

        <p style={styles.divider}>OR</p>

        <div style={styles.googleWrapper}>
          <GoogleLogin onSuccess={handleGoogleLogin} />
        </div>

        <p style={styles.switchText}>
          Don’t have an account?{' '}
          <button onClick={goToSignup} style={styles.linkButton}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
