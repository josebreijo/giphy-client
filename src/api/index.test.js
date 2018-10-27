import { getRandomGif } from './';

describe('Api facade', () => {
  fetch.mockResponse(JSON.stringify({ gif: 'keyboard cat' }));

  it('should export a function', () => {
    expect(typeof getRandomGif).toEqual('function');
  });

  it('should call to the giphy random endpoint', () => {
    getRandomGif();
    expect(fetch).toBeCalled();
    const randomGifEndpoint = 'http://api.giphy.com/v1/gifs/random';
    const fetchRequestEndpoint = fetch.mock.calls[0][0];
    expect(fetchRequestEndpoint.includes(randomGifEndpoint)).toEqual(true);
  });
});
