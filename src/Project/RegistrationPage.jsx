import React, { useState } from 'react';
import './style.css'; // Optional for styling

function RegistrationPage({ onContinue }) {
  const [regNo, setRegNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (regNo.trim() !== '') {
      onContinue(); // Move to login page
    } else {
      alert('Please enter your Registration No.');
    }
  };

  return (
    <div className="container">
      <h2>School Name</h2>
      <div className="box yellow-box">
        <form onSubmit={handleSubmit}>
          <label>Registration No.</label>
          <input
            type="text"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            placeholder="Enter Registration No"
          />
          <button type="submit">Continue</button>
        </form>
        <p className="note">
          Don’t have Registration Number? Please consult with school authorities for credentials.
        </p>
      </div>
    </div>
  );
}

export default RegistrationPage;