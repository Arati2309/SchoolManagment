import React, { useState } from 'react';

function LoginPage({onLoginSuccess}) {
  const [org, setOrg] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // login logic here
    alert(`Logged in as ${username}`);
     if (username && password && org) {
      onLoginSuccess(); // Go to Home
    } else {
      alert('Please fill all fields');
    }

  };

  return (
    <div className="container">
      <h2>School Name</h2>
      <div className="box">
        <form onSubmit={handleLogin}>
          <label>Organization</label>
          <select value={org} onChange={(e) => setOrg(e.target.value)}>
            <option value="">Select your organization</option>
            <option value="school1">School 1</option>
            <option value="school2">School 2</option>
          </select>

          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />

          <p style={{ fontSize: '12px', marginTop: '4px' }}>
            Forgot Password?
          </p>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;