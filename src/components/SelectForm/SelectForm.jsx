import React from 'react';
import './SelectForm.scss';

const SelectForm = ({ selectList, selectedBreed, handleChange }) => {
  // RENDER BREEDS
  const renderBreeds = () => {
    return (
      <>
        {selectList.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="select-form">
        <h2>Select breeds:</h2>
        <select
          value={selectedBreed}
          className="breeds-select"
          onChange={handleChange}
        >
          {renderBreeds()}
        </select>
      </div>
    </>
  );
};

export default SelectForm;
