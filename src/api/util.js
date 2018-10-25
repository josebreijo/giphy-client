function buildQueryParams(params) {
  return Object.keys(params).reduce(
    (string, key) => string.concat(key, '=', params[key], '&'),
    '?'
  );
}

function buildRequest(endpoint) {
  return function request(urlMapping = {}) {
    const config = Object.assign(urlMapping, {
      api_key: process.env.REACT_APP_API_KEY,
    });
    const params = buildQueryParams(config);
    const query = endpoint.concat(params);
    return fetch(query).then(response => response.json());
  };
}

export default buildRequest;
