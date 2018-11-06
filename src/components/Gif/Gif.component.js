import React from 'react';
import HeartFilled from './heart-filled.png';
import Heart from './heart.png';
import './Gif.css';

const Gif = ({ info, onFavourite, favouriteIds }) => {
  const title = info.title;
  const imageUrl = info.images.original.url;
  const isFavourite = favouriteIds.indexOf(info.id) > -1;
  return (
    <div className="image-section" onClick={() => onFavourite(info)}>
      <div className="favourite-icon">
        <img src={isFavourite ? HeartFilled : Heart} alt="Heart" />
      </div>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default Gif;
