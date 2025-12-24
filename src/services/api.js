export function sendOTP(email) {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp;
}

export function verifyOTP(userData) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(userData);
  localStorage.setItem('users', JSON.stringify(users));
  return true;
}

export function login(email, password) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );
  return foundUser || null;
}
