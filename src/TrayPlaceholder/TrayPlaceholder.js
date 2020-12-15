import React from 'react';
import './TrayPlaceholder.css';

function TrayPlaceholder({children}) {
  return (
    <div className={'TrayPlaceholder'}>
      {children}
    </div>
  );
}

export default TrayPlaceholder;
