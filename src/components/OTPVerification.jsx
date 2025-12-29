import React, { useState } from 'react';
import { verifyOTP } from '../services/api';
import styles from '../styles/styles';

export default function OTPVerification({ email, userData, goToLogin }) {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  function handleVerify() {
    setError('');

    if (otp.length !== 6) {
      setError('Please enter a complete 6-digit OTP');
      return;
    }

    const isValid = verifyOTP(userData, otp);

    if (isValid) {
      alert('Account created successfully!');
      goToLogin();
    } else {
      setError('Invalid OTP. Please check the console for the correct OTP.');
    }
  }

  function handleResend() {
    const storedOTP = localStorage.getItem('tempOTP');
    alert(`OTP resent!\n\nCheck console for OTP: ${storedOTP}`);
    console.log('OTP:', storedOTP);
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Verify Your Email</h1>
        <p style={styles.subtitle}>
          Enter the 6-digit code sent to<br />
          <strong>{email}</strong>
        </p>

        <input
          type="text"
          placeholder="000000"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
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
          onClick={handleResend}
          style={{
            ...styles.linkButton,
            marginTop: '20px',
            display: 'block',
            textAlign: 'center',
          }}
        >
          Resend OTP
        </button>

        <button
          onClick={goToLogin}
          style={{
            ...styles.linkButton,
            marginTop: '10px',
            display: 'block',
            textAlign: 'center',
          }}
        >
          ← Back to Login
        </button>
      </div>
    </div>
  );
}