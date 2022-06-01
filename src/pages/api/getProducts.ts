const products = require('../../../__mocks__/products.json');

export const SIMULATE_SLOW_REQUEST_TIMEOUT = 1200;

export const getProducts = <T>(): Promise<T> =>
  new Promise(resolve =>
    setTimeout(() => resolve(products), SIMULATE_SLOW_REQUEST_TIMEOUT),
  );
