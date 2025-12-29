import React, { useState, useEffect } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import OTPVerification from './components/OTPVerification';
import Dashboard from './components/Dashboard';

export default function App() {
  const [page, setPage] = useState('login');
  const [email, setEmail] = useState(''); 
  const [tempUser, setTempUser] = useState(null); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [currentUser, setCurrentUser] = useState(null); 

 
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []); 


  function goToSignup() {
    setPage('signup');
  }

  function goToLogin() {
    setPage('login'); 
  }

  function goToOTP(userData) {
    setTempUser(userData); 
    setEmail(userData.email); 
    setPage('otp'); 
  }

  function goToDashboard(user) {
    setCurrentUser(user); 
    setIsLoggedIn(true); 
    localStorage.setItem('currentUser', JSON.stringify(user)); 
  }

  function logout() {

    setIsLoggedIn(false);
    setCurrentUser(null); 
    localStorage.removeItem('currentUser');
    setPage('login'); 
  }

  if (isLoggedIn) {
    return <Dashboard user={currentUser} onLogout={logout} />;
  }

  if (page === 'signup') {
    return (
      <Signup
        goToLogin={goToLogin}
        goToOTP={goToOTP}
        goToDashboard={goToDashboard}
      />
    );
  }

  if (page === 'otp') {
    return (
      <OTPVerification
        email={email}
        userData={tempUser}
        goToLogin={goToLogin}
      />
    );
  }

  return <Login goToSignup={goToSignup} goToDashboard={goToDashboard} />;
}