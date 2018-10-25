import React from 'react';

const Gif = ({ info }) => {
  const title = info.data.title;
  const imageUrl = info.data.images.original.url;
  return (
    <figure>
      <img src={imageUrl} alt={title} /> <figcaption>{title}</figcaption>
    </figure>
  );
};

export default Gif;
