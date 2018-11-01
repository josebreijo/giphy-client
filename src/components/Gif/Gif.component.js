import React from 'react';

const Gif = ({ info }) => {
  const title = info.title;
  const imageUrl = info.images.original.url;
  return <img src={imageUrl} alt={title} />;
};

export default Gif;
