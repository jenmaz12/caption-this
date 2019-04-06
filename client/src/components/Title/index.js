import React from 'react';
import './style.scss';
import logo from '../NavBar/logo.png';

function Title({ children }) {
  return (
    <div className='col-md-5 mx-1 mt-2' id='titleDescription'>
      <div className='row'>
        <div className='col justify-content-center'>
          <img src={logo} alt='Caption This! Logo' id='titleLogo' />
          <h3 className='text-center'>
            Caption This! is a fun, interactive application in which users can
            express their creativity and create and share captions for photos.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Title;
