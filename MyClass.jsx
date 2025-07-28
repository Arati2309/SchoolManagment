import React from "react";
import "./MyClass.css";
import a from "./OIP.jpeg";

const students = Array.from({ length: 25 }, (_, index) => ({
  name: `Student ${index + 1}`,
  roll: index + 1,
  color: getColor(index),
}));

function getColor(index) {
  const colors = [
    "#dcf3f6ff", "#f2f4e1ff", "#f6e0e8ff", "#fbefddff", "#f8e5fbff",
    "#e8f1e8ff", "#efecf5ff", "#fdf7e5ff", "#f5e6e2ff", "#ebf3e2ff",
  ];
  return colors[index % colors.length];
}

const MyClass = () => {
  return (
    <div className="class-container">
      <div className="header">
        <span className="back-arrow">←</span>
        <h2>My Class</h2>
      </div>

      <div className="student-list">
        {students.map((student, i) => (
          <div className="student-card" key={i} style={{ backgroundColor: student.color }}>
            <div className="student-photo">
              <img src={a} alt="Student" />
            </div>
            <div className="student-info">
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Roll no:</strong> {student.roll}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom-right search icon */}
      <div className="search-icon">🔍</div>
    </div>
  );
};

export default MyClass;
