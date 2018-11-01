import buildRequest from './util';

const API_ROOT = 'http://api.giphy.com/v1/gifs';
const API_RANDOM = `${API_ROOT}/random`;
const API_TRENDING = `${API_ROOT}/trending`;

const getRandomGif = buildRequest(API_RANDOM);
const getTrendingGifs = buildRequest(API_TRENDING);

export { getRandomGif, getTrendingGifs };
