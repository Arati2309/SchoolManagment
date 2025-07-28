import React from "react";
import "./Events.css"; // External CSS for styling


const events = [
  {
    month: "June,2025",
    entries: [
      { day: "19", shortMonth: "jun", name: "NID (Palkhi Procession)" }
    ]
  },
  {
    month: "August,2025",
    entries: [
      { day: "27", shortMonth: "aug", name: "Ganesh Chaturthi" }
    ]
  },
  {
    month: "September,2025",
    entries: [
      { day: "5", shortMonth: "sep", name: "Eid-e-Milad" },
      { day: "6", shortMonth: "sep", name: "Anant Chaturdashi" }
    ]
  }
];

const Events = () => {
 
  return (
    <div className="events-tab-container">
      <div className="top-bar">
        <button className="back-arrow">←</button>
        <h2>Calendar</h2>
      </div>

      <div className="tab-switcher">
        <span className="tab" >Calendar</span>
        <span className="tab active">Events</span>
      </div>

      <div className="filter-section">
        <select>
          <option>All</option>
        </select>
      </div>

      {events.map((monthEvent, idx) => (
        <div key={idx} className="month-section">
          <h3 className="month-label">{monthEvent.month}</h3>
          {monthEvent.entries.map((event, i) => (
            <div key={i} className="event-row">
              <div className="event-date-box">
                <div className="event-day">{event.day}</div>
                <div className="event-month">{event.shortMonth}</div>
              </div>
              <div className="event-name">{event.name}</div>
            </div>
          ))}
        </div>
      ))}

    
    </div>
  );
};

export default Events;
