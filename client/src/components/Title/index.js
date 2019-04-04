import React from 'react';
import './style.scss';
function Title({ children }) {
  return (
    <div className='col-md-5 mr-1' id='titleDescription'>
      {children}
    </div>
  );
}

export default Title;
