import React from 'react';
import './Button.scss';

const Button = ({ children, type, onClick, display }) => {
  // BTN CLASS NAME
  const btnClasses = () => {
    if (type === 'load') {
      return 'load';
    }
  };

  return (
    <>
      <button
        className={`btn-${btnClasses()}`}
        onClick={onClick}
        style={{ display: display }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
