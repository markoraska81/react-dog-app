import React from 'react';
import './Modal.scss';

const Modal = ({ children, modal }) => {
  return (
    <>
      {!modal ? null : (
        <div className="modal">
          <div className="modal-overlay">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
