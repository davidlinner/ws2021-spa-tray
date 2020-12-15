import React from 'react';
import './TrayNumber.css';

function TrayNumber({size = 'medium', children}) {
  return (
    <div className={`TrayNumber ${size}`}>
      {children}
    </div>
  );
}

export default TrayNumber;
