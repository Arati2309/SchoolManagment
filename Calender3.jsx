import React from "react";
import "./Calender.css";

const Calendar3 = () => {
  // September = month 8 (0-based index)
  const startDay = new Date(2025, 8, 1).getDay(); // Monday → 1
  const totalDays = 30;

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
        <h3>September, 2025</h3>
        <button>{'>'}</button>
      </div>

      <div className="weekdays">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div key={index} className="day-header">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {/* Empty cells before 1st */}
        {[...Array(startDay)].map((_, i) => (
          <div key={"empty" + i} className="date-cell empty" />
        ))}

        {/* Render day cells 1–30 */}
        {Array.from({ length: totalDays }, (_, i) => {
          const day = i + 1;
          return (
            <div key={day} className="date-cell">
              {(day === 5 || day === 6) && <div className="event-dot" />}
              {day}
            </div>
          );
        })}
      </div>

      {/* Event Box for Eid-e-Milad */}
      <div className="event-section">
        <div className="event-date">
          <div className="event-day">5</div>
          <div className="event-month">sep</div>
        </div>
        <div className="event-details">Eid-e-Milad</div>
      </div>

      {/* Event Box for Anant Chaturdashi */}
      <div className="event-section">
        <div className="event-date">
          <div className="event-day">6</div>
          <div className="event-month">sep</div>
        </div>
        <div className="event-details">Anant Chaturdashi</div>
      </div>
    </div>
  );
};

export default Calendar3;
