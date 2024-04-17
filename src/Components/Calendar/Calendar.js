import React from 'react';

const Calendar = ({ selectedDate, handleDateChange }) => {
  return (
    <div>
      <h2>Calendar</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => handleDateChange(e.target.value)}
      />
    </div>
  );
};

export default Calendar;
