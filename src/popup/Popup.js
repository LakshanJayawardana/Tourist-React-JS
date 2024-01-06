import React from 'react';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content card">
        <button className="close-button btn btn-link" onClick={onClose}>
          X
        </button>
        <div className="card-body">
          <h5 className="card-title">Popup Content</h5>
          <p className="card-text">This is the content of the popup.</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;