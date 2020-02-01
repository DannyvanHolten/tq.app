export default (query = '') => {
  if (typeof query !== 'string') {
    throw new TypeError('query is not of the type string');
  }

  if (!query) {
    return Promise.resolve([]);
  }

  return fetch(`http://localhost:3001/products?q=${query}`)
    .then(res => {
      try {
        return Promise.resolve(res.json());
      } catch {
        throw new Error('could not parse the result to JSON');
      }
    })
    .catch(err => {
      console.warn(err);
      return Promise.resolve([]);
    });
};
