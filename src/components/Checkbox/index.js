import React from 'react';

import './Checkbox.css';

const Checkbox = ({ value, onChange, index }) => {
  const handleCheckboxClick = () => {
    onChange(!value);
  };

  return (
    <div onClick={handleCheckboxClick} className="Checkbox">
      {value ? (
        <span className="Checkbox_active">{index !== undefined ? index + 1 : null}</span>
      ) : null}
    </div>
  );
};

export default Checkbox;
