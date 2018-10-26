import React from 'react';

const Gif = ({ info }) => {
  const title = info.data.title;
  const imageUrl = info.data.images.original.url;
  return <img src={imageUrl} alt={title} />;
};

export default Gif;
