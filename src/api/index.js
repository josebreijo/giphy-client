import buildRequest from './util';

const API_ROOT = 'http://api.giphy.com/v1/gifs';
const API_RANDOM = `${API_ROOT}/random`;

const getRandomGif = buildRequest(API_RANDOM);

export { getRandomGif };
