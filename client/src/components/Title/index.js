import React from 'react';
import './style.scss';
function Title({ children }) {
  return <div className='jumbotron mt-4'>{children}</div>;
}

export default Title;
