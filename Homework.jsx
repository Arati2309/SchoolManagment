import React, { useState } from 'react';

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
      }
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
    <div className="p-5 bg-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center">
        <span className="text-2xl cursor-pointer">←</span>
        <h1 className="font-[cursive] font-black underline text-2xl">Home Work</h1>
        <span className="text-2xl cursor-pointer">⏳</span>
      </header>

      {/* Date Selector */}
      <div className="flex items-center justify-between bg-[rgba(238,205,133,0.626)] p-3 mt-3 rounded-md">
        {/* Centered date with arrows */}
        <div className="flex-1 flex justify-center items-center gap-6">
          <button onClick={handlePrev} className="text-xl font-bold px-3">{'<'}</button>
          <span className="font-bold text-lg">{currentWeek.range}</span>
          <button onClick={handleNext} className="text-xl font-bold px-3">{'>'}</button>
        </div>

        {/* Toggle buttons */}
        <div className="flex gap-2">
          <button className="bg-[#d59c65] text-white font-bold px-3 py-1 rounded">W</button>
          <button className="bg-[#d59c65] text-white font-bold px-3 py-1 rounded">M</button>
        </div>
      </div>

      {/* Cards */}
      {currentWeek.data.map((item, index) => (
        <div
          key={index}
          className={`mt-4 rounded-2xl flex items-stretch overflow-hidden ${
            item.status === 'Completed' ? 'bg-[#b8e3fe]' : 'bg-[#d6d6d6]'
          }`}
        >
          {/* Subject bar */}
          <div
            className={`w-2 rounded-l-2xl ${
              item.color === 'blue' ? 'bg-[#0074cc]' : 'bg-[#4a4a4a]'
            }`}
          ></div>

          {/* Card Content */}
          <div className="flex justify-between flex-1 p-4">
            {/* Left */}
            <div className="flex flex-col">
              <strong className="text-lg">{item.subject}</strong>
              <p className="mt-1">👤 {item.teacher}</p>
              <p className="mt-1 font-semibold">Status:- {item.status}</p>
              <p className="mt-2 italic text-[#484848] text-[17px]">
                <strong>Homework :- </strong>{item.message}
              </p>
            </div>

            {/* Right */}
            <div className="text-right text-sm font-medium">
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
