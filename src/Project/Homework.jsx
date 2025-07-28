import React, { useState } from 'react';
import './Homework.css';

const allHomeworkWeeks = [
  {
    range: '18 Jun - 25 Jun',
    data: [
      {
        subject: 'English',
        teacher: 'Priya',
        status: 'Completed',
        assigned: '18/06/2025',
        submitted: '20/06/2025',
        color: 'blue',
        message: 'Revise grammar rules for active and passive voice.'
      },
      {
        subject: 'Maths',
        teacher: 'Manisha',
        status: 'Incompleted',
        assigned: '18/06/2025',
        submitted: '19/06/2025',
        color: 'gray',
        message: 'Practice algebra problems from textbook exercise 5.2.'
      },
      {
        subject: 'Hindi',
        teacher: 'Radhika',
        status: 'Completed',
        assigned: '19/06/2025',
        submitted: '21/06/2025',
        color: 'blue',
        message: 'Read poem “Jhansi ki Rani” and prepare notes.'
      },
      {
        subject: 'Science',
        teacher: 'Rashmi',
        status: 'Completed',
        assigned: '19/06/2025',
        submitted: '21/06/2025',
        color: 'gray',
        message: 'Go through chapter 4: The Human Digestive System.'
      }
    ]
  },
  {
    range: '26 Jun - 02 Jul',
    data: [
     
      {
        subject: 'English',
        teacher: 'Priya',
        status: 'Completed',
        assigned: '27/06/2025',
        submitted: '30/06/2025',
        color: 'gray',
        message: 'Write an essay on “My Favorite Animal”.'
      },
      {
        subject: 'Maths',
        teacher: 'Manisha',
        status: 'Incompleted',
        assigned: '28/06/2025',
        submitted: '01/07/2025',
        color: 'blue',
        message: 'Complete geometry worksheet on triangles.'
      },
      {
        subject: 'Science',
        teacher: 'Rashmi',
        status: 'Completed',
        assigned: '29/06/2025',
        submitted: '02/07/2025',
        color: 'gray',
        message: 'Draw and label parts of a plant cell.'
      }
    ]
  },
  {
    range: '03 Jul - 09 Jul',
    data: [
      {
        subject: 'Computer',
        teacher: 'Arun',
        status: 'Incompleted',
        assigned: '03/07/2025',
        submitted: '05/07/2025',
        color: 'blue',
        message: 'Prepare PowerPoint slides on Internet Safety.'
      },
      {
        subject: 'Hindi',
        teacher: 'Radhika',
        status: 'Completed',
        assigned: '04/07/2025',
        submitted: '06/07/2025',
        color: 'gray',
        message: 'Translate paragraph from Hindi to English.'
      },
      {
        subject: 'Maths',
        teacher: 'Manisha',
        status: 'Completed',
        assigned: '05/07/2025',
        submitted: '07/07/2025',
        color: 'blue',
        message: 'Solve word problems from exercise 6.1.'
      },
      
    ]
  }
];


function Homework() {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const currentWeek = allHomeworkWeeks[currentWeekIndex];

  const handlePrev = () => {
    if (currentWeekIndex > 0) setCurrentWeekIndex(currentWeekIndex - 1);
  };

  const handleNext = () => {
    if (currentWeekIndex < allHomeworkWeeks.length - 1) setCurrentWeekIndex(currentWeekIndex + 1);
  };

  return (
    <div className="homework-container">
      <header className="header">
        <span className="back-arrow">←</span>
        <h1 className='title'>Home Work</h1>
        <span className="filter-icon">⏳</span>
      </header>

      <div className="date-selector">
        <button className="arrow" onClick={handlePrev}>{'<'}</button>
        <span className='date'>{currentWeek.range}</span>
        <button className="arrow" onClick={handleNext}>{'>'}</button>
        <div className="toggle-buttons">
          <button>W</button>
          <button>M</button>
        </div>
      </div>

      {currentWeek.data.map((item, index) => (
        <div key={index} className={`card ${item.status === 'Completed' ? 'completed' : 'incompleted'}`}>
          <div className={`subject-bar ${item.color}`}></div>
          <div className="card-content">
            <div className="card-content-left">
              <strong>{item.subject}</strong>
              <p>👤 {item.teacher}</p>
              <p><strong>Status:- {item.status}</strong></p>
              <p className="study-message"><strong>Homework :- </strong>{item.message}</p> 
            </div>
            <div className="card-content-right">
              <p><strong>Assigned on :</strong> {item.assigned}</p>
              <p><strong>Submitted on :</strong> {item.submitted}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Homework;
