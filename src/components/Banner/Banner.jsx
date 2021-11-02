import React from 'react';
import './Banner.scss';

const Banner = ({ children, title }) => {
  return (
    <>
      <div className="banner">
        <h2>{title}</h2>

        {children}
      </div>
    </>
  );
};

export default Banner;
