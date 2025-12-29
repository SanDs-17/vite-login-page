import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { sendOTP } from '../services/api';
import styles from '../styles/styles';

export default function Signup({ goToLogin, goToOTP, goToDashboard }) {
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
      newErrors.email = 'Invalid email address';
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      const otp = sendOTP(email);
      alert(`OTP sent to your email!\n\nCheck console for OTP: ${otp}`);
      goToOTP({ name, email, password });
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
      console.error('Google signup error:', error);
      setErrors({ submit: 'Google signup failed' });
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Create Account</h1>
        <p style={styles.subtitle}>Join us today</p>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <input
              type="text"
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
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <button type="button" style={styles.iconButton}>📧</button>
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
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          {errors.password && <p style={styles.error}>{errors.password}</p>}

          <button type="submit" style={styles.submitButton}>
            Sign Up
          </button>
        </form>

        <p style={styles.divider}>OR</p>

        <div style={styles.googleWrapper}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setErrors({ submit: 'Google signup failed' })}
          />
        </div>

        {errors.submit && <p style={styles.error}>{errors.submit}</p>}

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