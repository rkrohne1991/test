describe('getProducts', () => {
  const products = require('../../../__mocks__/products.json');
  const SIMULATE_SLOW_REQUEST_TIMEOUT = 1200;

  test('Testing returning a promise', () => {
    const getTheProducts = () =>
      new Promise(resolve =>
        setTimeout(() => resolve(products), SIMULATE_SLOW_REQUEST_TIMEOUT),
      );
    return expect(getTheProducts()).resolves.toBe(products);
  });
});

export {};
