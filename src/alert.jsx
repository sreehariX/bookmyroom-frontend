// AlertMessage.js
import React from 'react';
import './AlertMessage.css'; // Add the corresponding styles here

const AlertMessage = ({ message }) => {
  return (
    <div className="alert-container">
      <p>{message}</p>
    </div>
  );
};

export default AlertMessage;
