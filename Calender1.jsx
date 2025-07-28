import React from "react";

import "./Calender.css";

const Calendar1 = () => {
  // July 2025: Month = 6 (because months are 0-based in JS)
  const startDay = new Date(2025, 6, 1).getDay(); // Tuesday → 2
  const totalDays = 31; // July has 31 days

  return (
    <div className="calendar-container">
      <div className="header">
        <button className="back-arrow">←</button>
        <h2>Calendar</h2>
      </div>

      <div className="tab-header">
        <span className="tab active">Calendar</span>
        <span className="tab">Events</span>
      </div>

      <div className="month-nav">
        <button>{'<'}</button>
        <h3>July, 2025</h3>
        <button>{'>'}</button>
      </div>

      <div className="weekdays">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} className="day-header">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {/* Empty cells before July 1st (Tuesday → 2 empty cells) */}
        {[...Array(startDay)].map((_, i) => (
          <div key={"empty" + i} className="date-cell empty" />
        ))}

        {/* July 1 to 31 */}
        {Array.from({ length: totalDays }, (_, i) => {
          const day = i + 1;
          return (
            <div key={day} className="date-cell">
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar1;
