import React from "react";

import "./Calender.css";

const Calendar = () => {

  const startDay = new Date(2025, 5, 1).getDay(); 
  return (
    <div className="calendar-container">
      <div className="header">
        <button className="back-arrow">←</button>
        <h2>Calendar</h2>
      </div>

      <div className="tab-header">
        <span className="tab active">Calendar</span>
        <span className="tab" >Events</span>
      </div>

      <div className="month-nav">
        <button className="first">{'<'}</button>
        <h3>June, 2025</h3>
        <button className="second">{'>'}</button>
      </div>

      <div className="weekdays">
  {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
    <div key={index} className="day-header">{day}</div>
  ))}
</div>

<div className="calendar-grid">
  {/* Step 1: Get start day of month */}
  {[...Array(startDay)].map((_, i) => (
    <div key={"empty" + i} className="date-cell empty" />
  ))}

  {/* Step 2: Render the days */}
  {Array.from({ length: 30 }, (_, i) => {
    const day = i + 1;
    return (
      <div key={day} className="date-cell">
        {day === 19 && <div className="event-dot" />}
        {day}
      </div>
    );
  })}
</div>


      <div className="event-section">
        <div className="event-date">
          <div className="event-day">19</div>
          <div className="event-month">jun</div>
        </div>
        <div className="event-details">NID (Palkhi Procession)</div>
        
      </div>
    </div>
  );
};

export default Calendar;
