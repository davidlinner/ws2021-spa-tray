import React from 'react';
import './TrayText.css';

function TrayText({children}) {
  return (
    <div className={'TrayText'}>
      {children}
    </div>
  );
}

export default TrayText;
