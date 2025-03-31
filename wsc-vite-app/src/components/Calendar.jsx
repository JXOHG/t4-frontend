import React, { useState } from 'react';
import { format } from 'date-fns';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = 
        new Date().getDate() === day && 
        new Date().getMonth() === currentDate.getMonth() &&
        new Date().getFullYear() === currentDate.getFullYear();

      days.push(
        <div 
          key={day} 
          className={`calendar-day ${isToday ? 'today' : ''}`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  // Navigate months
  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={previousMonth}>&lt;</button>
        <h2>{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-weekdays">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>
      <div className="calendar-days">
        {generateCalendarDays()}
      </div>
      <style>{`
        .calendar {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          font-family: Inter, sans-serif;
          background-color: white;
          border-radius: 8px;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: white;
          border-radius: 8px 8px 0 0;
          color: black;
        }

        .calendar-header button {
          padding: 0.5rem 1rem;
          border: none;
          background-color: white;
          cursor: pointer;
          border-radius: 8px;
          font-size: 1.5rem;
          color: black;
          font-weight: 700;
        }

        .calendar-header h2 {
          font-size: 1.5rem;
          color: black;
          font-family: Inter, sans-serif;
          font-weight: 700;
        }

        .calendar-weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          font-weight: bold;
          background-color: white;
          padding: 0.5rem 0;
          font-size: 1.2rem;
          color: #999999;
        }

        .calendar-weekdays > div {
          border-radius: 8px;
          margin: 2px;
          padding: 4px;
        }

        .calendar-days {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          background-color: white;
          padding: 4px;
          border-radius: 0 0 8px 8px;
        }

        .calendar-day {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          color: black;
          padding: 0.5rem;
          font-family: Inter, sans-serif;
          font-weight: bold;
          font-size: 1.3rem;
          border-radius: 50%;
        }

        .calendar-day.empty {
          background-color: white;
          border-radius: 50%;
        }
        
        .calendar-day.today {
          background-color: #7f42a9;
          font-weight: bold;
          color: white;
          border-radius: 50%;
        }

        .calendar-day:hover:not(.empty) {
          background-color: #e8e8e8;
          cursor: pointer;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Calendar;
