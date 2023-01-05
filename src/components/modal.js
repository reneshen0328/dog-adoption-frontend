/* eslint-disable react/prop-types */
import React from 'react';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-close'>
          <h2 onClick={props.onClose} >X</h2>
        </div>
        <div className='modal-header'>
          <h4 className='modal-title'>Modal title</h4>
        </div>
        <div className='modal-body'>
              This is a modal
        </div>
        <div className='modal-footer'></div>
      </div>
    </div>
  );
};

export default Modal;
