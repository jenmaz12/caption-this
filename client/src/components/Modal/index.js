import React from 'react';

function Modal({ src, imgID }) {
  return (
    <div
      className='modal fade bd-example-modal-lg'
      id={'addCaptionModal' + imgID}
      tabindex='-1'
      role='dialog'
      aria-labelledby='myLargeModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-lg modal-dialog-centered'>
        <div className='modal-content'>
          <img src={src} alt={imgID} />
          <form>
            <div className='form-group'>
              <label for='addCaption'>Add a Caption to this Image!</label>
              <textarea
                class='form-control'
                id='addCaption'
                rows='3'
                maxLength='280'
              />
            </div>
            <button type='submit' class='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
