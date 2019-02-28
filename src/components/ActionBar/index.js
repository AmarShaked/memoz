import React from 'react';
import './ActionBar.css';

const ActionBar = ({ onThemeChange, onDirectionChange }) => (
  <div className="ActionBar">
    <button onClick={onThemeChange} className="ActionBar_btn">
      <i className="material-icons">
        highlight
      </i>
    </button>
    <button onClick={onDirectionChange} className="ActionBar_btn">
      <i className="material-icons">
      swap_horiz
      </i>
    </button>
  </div>
);

export default ActionBar;
