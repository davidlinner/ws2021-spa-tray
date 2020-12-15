import React from 'react';
import './Modal.css';

function Modal({children}) {
  return (
    <div className={'Modal'}>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Modal;
