const user = require('../../../__mocks__/user.json');

export const SIMULATE_SLOW_REQUEST_TIMEOUT = 1200;

export const getUser = <T>(): Promise<T> =>
  new Promise(resolve =>
    setTimeout(() => resolve(user), SIMULATE_SLOW_REQUEST_TIMEOUT),
  );
