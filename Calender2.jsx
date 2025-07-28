import React from "react";
import "./Calender.css";

const Calendar2 = () => {
  // August 2025 (Month = 7 in JS since January = 0)
  const startDay = new Date(2025, 7, 1).getDay(); // Friday → 5
  const totalDays = 31;

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
        <h3>August, 2025</h3>
        <button>{'>'}</button>
      </div>

      <div className="weekdays">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} className="day-header">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {/* Add empty cells for days before 1st (starts on Friday = index 5) */}
        {[...Array(startDay)].map((_, i) => (
          <div key={"empty" + i} className="date-cell empty" />
        ))}

        {/* Dates 1–31 */}
        {Array.from({ length: totalDays }, (_, i) => {
          const day = i + 1;
          return (
            <div key={day} className="date-cell">
              {day === 27 && <div className="event-dot" />}
              {day}
            </div>
          );
        })}
      </div>

      {/* Event section for Ganesh Chaturthi */}
      <div className="event-section">
        <div className="event-date">
          <div className="event-day">27</div>
          <div className="event-month">aug</div>
        </div>
        <div className="event-details">Ganesh Chaturthi</div>
       
      </div>
    </div>
  );
};

export default Calendar2;
