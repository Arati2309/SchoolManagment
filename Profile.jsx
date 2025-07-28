import React from 'react';
import './style3.css';
import a from './qrcode.jpg'
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="top-bar">
        <span className="back-arrow">&#8592;</span>
        <h1>My Profile</h1>
      </div>

      <div className="profile-header">
        <div className="profile-pic"></div>
        <div className="student-info">
          <p><strong>Student Name</strong></p>
          <p>ID NO: 123455</p>
        </div>
        <div className="qr-code">
       <img src={a} alt="" />
        </div>
      </div>

      <div className="section">
        <h3>Organization Info</h3>
        <ul>
          <li><span role="img" aria-label="School">🏫</span> School Name</li>
          <li><span role="img" aria-label="Calendar">📅</span> 2025–26</li>
          <li><span role="img" aria-label="Tag">🏷</span> VII / D</li>
          <li><span>#</span> 46</li>
        </ul>
      </div>

      <div className="section">
        <h3>Personal Info</h3>
        <ul>
          <li><span role="img" aria-label="Gender">👥</span> Male/Female</li>
          <li><span role="img" aria-label="Birthday">🎂</span> Date of Birth</li>
        </ul>
      </div>

      <div className="section">
        <h3>Contact Info</h3>
        <ul>
          <li><span role="img" aria-label="Location">📍</span> Address</li>
          <li><span role="img" aria-label="Phone">📞</span> +91-1234545678</li>
          <li><span role="img" aria-label="Email">✉</span> abcd@gmail.com</li>
        </ul>
      </div>

   
    </div>
  );
};

export default Profile;
