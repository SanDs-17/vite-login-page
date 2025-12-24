import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import styles from '../styles/styles';

export default function Signup({ goToLogin, goToDashboard }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.includes('@') || !email.includes('.')) {
      newErrors.email = 'Invalid email';
    }

    if (password.length < 6) {
      newErrors.password = 'Min 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      goToDashboard({ name, email });
    }
  }

  function handleGoogleSignup(response) {
    const userData = jwtDecode(response.credential);
    goToDashboard(userData);
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Create Account</h1>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <input
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
          </div>
          {errors.name && <p style={styles.error}>{errors.name}</p>}

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
          {errors.email && <p style={styles.error}>{errors.email}</p>}

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
          {errors.password && <p style={styles.error}>{errors.password}</p>}

          <button style={styles.submitButton}>Sign Up</button>
        </form>

        <p style={styles.divider}>OR</p>

        <div style={styles.googleWrapper}>
          <GoogleLogin onSuccess={handleGoogleSignup} />
        </div>

        <p style={styles.switchText}>
          Already have an account?{' '}
          <button onClick={goToLogin} style={styles.linkButton}>
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}
