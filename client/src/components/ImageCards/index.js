import React from 'react';
import './style.scss';

function ImageCard({ src, id, recentCaption }) {
  return (
    <a data-toggle='modal' href={'#addCaptionModal' + id}>
      <div className='col justify-content-center' id='card'>
        <div className='thumbnail'>
          <img src={src} alt={id} className='cardImage' />
        </div>

        <div className='card-body'>
          <p className='card-text most-recent-caption'>
            {recentCaption[recentCaption.length - 1].body}
          </p>
        </div>
      </div>
    </a>
  );
}

export default ImageCard;
