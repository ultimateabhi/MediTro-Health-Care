import React from 'react';

const SlotSelection = ({ slots, selectedSlots, handleSlotToggle }) => {
  return (
    <div>
      <h2>Slot Selection</h2>
      {slots.map((slot) => (
        <label key={slot.id}>
          <input
            type="checkbox"
            value={slot.id}
            checked={selectedSlots.includes(slot.id)}
            onChange={() => handleSlotToggle(slot.id)}
          />
          {slot.time}
        </label>
      ))}
    </div>
  );
};

export default SlotSelection;
