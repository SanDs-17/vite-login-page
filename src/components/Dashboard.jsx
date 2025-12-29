import React, { useState } from 'react';
import styles from '../styles/styles';

export default function Dashboard({ user, onLogout }) {
  const [logoutHover, setLogoutHover] = useState(false);
  const [cardHover, setCardHover] = useState({});
  
  const firstLetter = user.name?.charAt(0).toUpperCase() || 'U';

  return (
    <div style={styles.container}>
      <div style={styles.dashboardContainer}>
        <div style={styles.dashboardHeader}>
          <h1 style={styles.dashboardTitle}>Dashboard</h1>
          <button
            onClick={onLogout}
            style={{
              ...styles.logoutButton,
              ...(logoutHover ? styles.logoutButtonHover : {})
            }}
            onMouseEnter={() => setLogoutHover(true)}
            onMouseLeave={() => setLogoutHover(false)}
          >
            Logout
          </button>
        </div>

        <div style={styles.profileCard}>
          {user.picture ? (
            <img
              src={user.picture}
              alt={user.name}
              style={styles.profileImage}
            />
          ) : (
            <div style={styles.avatar}>{firstLetter}</div>
          )}

          <h2 style={styles.userName}>{user.name}</h2>
          <p style={styles.userEmail}>{user.email}</p>

          {user.provider && (
            <span style={styles.badge}>
              ✓ Connected via {user.provider}
            </span>
          )}
        </div>

        <div style={styles.infoGrid}>
          <div
            style={{
              ...styles.infoCard,
              ...(cardHover.status ? styles.infoCardHover : {})
            }}
            onMouseEnter={() => setCardHover({ ...cardHover, status: true })}
            onMouseLeave={() => setCardHover({ ...cardHover, status: false })}
          >
            <h3 style={styles.infoTitle}>Account Status</h3>
            <p style={styles.statusActive}>
              ✓ Active
            </p>
          </div>

          <div
            style={{
              ...styles.infoCard,
              ...(cardHover.member ? styles.infoCardHover : {})
            }}
            onMouseEnter={() => setCardHover({ ...cardHover, member: true })}
            onMouseLeave={() => setCardHover({ ...cardHover, member: false })}
          >
            <h3 style={styles.infoTitle}>Member Since</h3>
            <p style={styles.infoValue}>
              {new Date().toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric',
              })}
            </p>
          </div>

          <div
            style={{
              ...styles.infoCard,
              ...(cardHover.type ? styles.infoCardHover : {})
            }}
            onMouseEnter={() => setCardHover({ ...cardHover, type: true })}
            onMouseLeave={() => setCardHover({ ...cardHover, type: false })}
          >
            <h3 style={styles.infoTitle}>Account Type</h3>
            <p style={styles.infoValue}>
              {user.provider || 'Standard'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}