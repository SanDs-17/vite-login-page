import React, { useState } from 'react';
import { verifyOTP } from '../services/api';
import styles from '../styles/styles';

export default function OTPVerification({ email, userData, goToLogin }) {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  function handleVerify() {
    if (otp.length !== 6) {
      setError('Please enter 6 digits');
      return;
    }

    verifyOTP(userData);
    alert('Account created successfully!');
    goToLogin();
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Verify Your Email</h1>

        <p style={styles.subtitle}>
          Enter the 6-digit code sent to <br />
          <strong>{email}</strong>
        </p>

        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value.slice(0, 6))}
          style={{
            ...styles.input,
            textAlign: 'center',
            fontSize: '24px',
            letterSpacing: '8px',
            marginTop: '20px',
          }}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button onClick={handleVerify} style={styles.submitButton}>
          Verify & Continue
        </button>

        <button
          onClick={goToLogin}
          style={{ ...styles.linkButton, marginTop: '20px', display: 'block' }}
        >
          ← Back to Login
        </button>
      </div>
    </div>
  );
}
