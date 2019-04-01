import React from 'react';

function ImageCard({ src, id, recentCaption }) {
  return (
    <div className='card'>
      <img src={src} className='card-img-top' alt={id} />
      <div className='card-body'>
        <p className='card-text most-recent-caption'>{recentCaption}</p>
      </div>
    </div>
  );
}

export default ImageCard;
