import React from 'react';

const ServiceSelection = ({ services, selectedService, handleServiceChange }) => {
  return (
    <div>
      <h2>Service Selection</h2>
      <select value={selectedService} onChange={(e) => handleServiceChange(e.target.value)}>
        {services.map((service) => (
          <option key={service.id} value={service.id}>
            {service.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ServiceSelection;
