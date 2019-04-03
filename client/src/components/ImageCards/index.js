import React from 'react';

function ImageCard({ src, id, recentCaption }) {
  return (
    <a data-toggle='modal' href={'#addCaptionModal' + id}>
      <div className='card'>
        <img src={src} className='card-img-top' alt={id} />
        <div className='card-body'>
          <p className='card-text most-recent-caption'>
            {recentCaption[0].body}
          </p>
        </div>
      </div>
    </a>
  );
}

export default ImageCard;
