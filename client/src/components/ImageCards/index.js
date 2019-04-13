import React from 'react';
import './style.scss';

function ImageCard({ src, id, recentCaption }) {
  return (
    <a data-toggle='modal' href={'#addCaptionModal' + id}>
      <div className='col justify-content-center' id='card'>
        <div className='thumbnail animated fadeInRight delay- 10s'>
          <img src={src} alt={id} className='cardImage' />
        </div>

        <div className='card-body thumbnail animated fadeInLeft delay- 10s'>
          <p className='card-text most-recent-caption'>
            {recentCaption[recentCaption.length - 1].body}
          </p>
        </div>
      </div>
    </a>
  );
}

export default ImageCard;
