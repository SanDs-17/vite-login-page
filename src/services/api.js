export function sendOTP(email) {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log('OTP sent to', email, ':', otp);
  localStorage.setItem('tempOTP', otp);
  
  return otp;
}

export function verifyOTP(userData, enteredOTP) {
  const storedOTP = localStorage.getItem('tempOTP');
  
  if (enteredOTP === storedOTP) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.removeItem('tempOTP');
    return true;
  }
  return false;
}

export function login(email, password) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  return user || null; 
}