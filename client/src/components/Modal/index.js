import React from 'react';
import './style.scss';

function Modal({ src, imgID, onClick, onChange, value }) {
  return (
    <div
      className='modal fade bd-example-modal-lg'
      id={'addCaptionModal' + imgID}
      tabIndex='-1'
      role='dialog'
      aria-labelledby='myLargeModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content'>
          <img className='modalImage img-responsive' src={src} alt={imgID} />
          <form>
            <div className='form-group'>
              <label htmlFor='addCaption'>Add a Caption to this Image!</label>
              <textarea
                className='form-control'
                id='addCaption'
                rows='3'
                maxLength='280'
                name='newCaption'
                onChange={onChange}
              />
            </div>
            <button
              onClick={onClick}
              type='submit'
              className='btn btn-primary modalBtn'
              data-imgid={imgID}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
