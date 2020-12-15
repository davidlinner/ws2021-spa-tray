import React from 'react';
import './Tray.css';

function Tray({children, onClick, ...other}) {
  return (
    <div {...other} className={'Tray'} onClick={onClick}>
      {children}
    </div>
  );
}

export default Tray;
