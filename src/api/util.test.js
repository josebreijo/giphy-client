import buildRequest, { buildQueryParams } from './util';

describe('Api utils', () => {
  it('should export functions', () => {
    expect(typeof buildRequest).toEqual('function');
    expect(typeof buildQueryParams).toEqual('function');
  });

  it('`buildRequest` should return a function', () => {
    const request = buildRequest('endpoint');
    expect(typeof request).toEqual('function');
  });

  it('`buildQueryParams` should build query string properly', () => {
    const params = { search: 'cats', rating: 'g' };
    const queryString = buildQueryParams(params);
    expect(queryString).toEqual('?search=cats&rating=g');
  });
});
