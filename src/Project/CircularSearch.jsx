import React from 'react';
import './CircularSearch.css';
import { FaUserAlt, FaCalendarAlt } from 'react-icons/fa';

const data = [
  {
    title: 'PTA Meeting',
    venue: "ClassRoom No.07 'C' building",
    date: '21/06/2025',
    bgColor: 'card-yellow',
    instructions: 'Parents are requested to arrive 10 minutes early and bring their ID cards.'
  },
  {
    title: 'Drawing Competition',
    venue: "Art Room 'B' building",
    date: '20/06/2025',
    bgColor: 'card-blue',
    instructions: 'Participants must bring their own drawing materials and be seated by 9:00 AM.'
  },
  {
    title: 'Inauguration',
    venue: "Main Auditorium 'B' building",
    date: '18/06/2025',
    bgColor: 'card-purple',
    instructions: 'All students must wear the school uniform and reach the venue by 8:30 AM sharp.'
  }
];

function CircularSearch() {
  return (
    <div className="container">
      <header className="header">
        <span className="back-arrow">←</span>
        <h1 className='title'>Circular Search</h1>
        <span className="filter-icon">🔽</span>
      </header>

      <div className="date-range">
        <span className='left'>{'<'}</span>
        <span className='datee'>18 Jun - 25 Jun</span>
        <span className='right'>{'>'}</span>
        <div className="toggle-buttons">
          <button>W</button>
          <button>M</button>
        </div>
      </div>

      <div className="card-list">
        {data.map((item, index) => (
          <div className={`card ${item.bgColor}`} key={index}>
            <div className="card-left">
              <h2><strong>{item.title}</strong></h2>
              <div className="author">
                <FaUserAlt className="icon" />
                <span>Mariya</span>
              </div>
              <p><strong>Venue :- </strong> {item.venue}</p>
              <p className="instructions"><strong>Note:</strong> {item.instructions}</p> {/* New instruction line */}
            </div>
            <div className="card-right">
              <FaCalendarAlt className="icon" />
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CircularSearch;
