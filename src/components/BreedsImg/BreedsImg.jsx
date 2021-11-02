import React from 'react';
import './BreedsImg.scss';

const BreedsImg = ({ id, img, openModal, handleModal }) => {
  return (
    <>
      <div className="breeds-img" onChange={() => handleModal(id)}>
        <img src={img} alt="Breed Img" onClick={() => openModal(id)} />
      </div>
    </>
  );
};

export default BreedsImg;
