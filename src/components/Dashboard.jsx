import React from 'react';
import styles from '../styles/styles';

export default function Dashboard({ user, onLogout }) {
  const firstLetter = user.name.charAt(0).toUpperCase();

  return (
    <div style={styles.container}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <div style={styles.dashboardHeader}>
          <h1 style={{ color: 'white', fontSize: '32px' }}>Dashboard</h1>
          <button onClick={onLogout} style={styles.logoutButton}>
            Logout
          </button>
        </div>

        <div style={styles.profileCard}>
          {user.picture ? (
            <img
              src={user.picture}
              alt={user.name}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                margin: '0 auto 20px',
                border: '4px solid #667eea',
                display: 'block',
              }}
            />
          ) : (
            <div style={styles.avatar}>{firstLetter}</div>
          )}

          <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>
            {user.name}
          </h2>

          <p style={{ color: '#666', marginBottom: '15px' }}>
            {user.email}
          </p>

          {user.provider && (
            <span style={styles.badge}>
              Connected via {user.provider}
            </span>
          )}
        </div>

        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>Account Status</h3>
            <p style={{ fontSize: '20px', color: '#10b981', fontWeight: 'bold' }}>
              ✓ Active
            </p>
          </div>

          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>Member Since</h3>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {new Date().toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              })}
            </p>
          </div>

          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>Account Type</h3>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {user.provider || 'Standard'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
