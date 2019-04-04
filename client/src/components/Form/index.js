import React from 'react';
import './style.scss';

function Form({ userName, password, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className='form-row mb-2'>
        <div className='col-auto'>
          <input
            className='form-control'
            value={userName}
            name='userName'
            onChange={handleInputChange}
            type='text'
            placeholder='User Name'
          />
        </div>
      </div>
      <div className='form-row mb-2'>
        <div className='col-auto'>
          <input
            className='form-control'
            value={password}
            name='password'
            onChange={handleInputChange}
            type='text'
            placeholder='Password'
          />
        </div>
      </div>
      <button className='btn' onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
