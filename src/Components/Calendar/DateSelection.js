import React from 'react';

const DateSelection = ({ availableDates, selectedDates, handleDateToggle }) => {
  return (
    <div>
      <h2>Date Selection</h2>
      {availableDates.map((date) => (
        <label key={date}>
          <input
            type="checkbox"
            value={date}
            checked={selectedDates.includes(date)}
            onChange={() => handleDateToggle(date)}
          />
          {date}
        </label>
      ))}
    </div>
  );
};

export default DateSelection;
