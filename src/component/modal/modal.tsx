import React, { FC, ReactNode } from 'react';
type ModalProps = {
  popupData: null | { year: string; type: string; id: string };
  onClose: () => void;
};
import './modal.css';
const Modal: FC<ModalProps> = ({ popupData, onClose }) => {
  if (popupData === null) {
    return null;
  }

  return (
    <>
      <div className="modal" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>year: {popupData.year}</h2>
        <p>type: {popupData.type}</p>
        <p>id: {popupData.id}</p>
      </div>
    </>
  );
};

export default Modal;
