import React from 'react';
import './Spinner.scss';
import { spinner } from '../../services/Services';

const Spinner = () => {
  return (
    <>
      <div className="spinner">
        <img src={spinner} alt="" />
      </div>
    </>
  );
};

export default Spinner;
