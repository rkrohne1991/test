describe('getUser', () => {
  const user = require('../../../__mocks__/user.json');
  const SIMULATE_SLOW_REQUEST_TIMEOUT = 1200;

  // @TODO Add test for NextJS API call
  test('Testing returning a promise', () => {
    const getTheUser = () =>
      new Promise(resolve =>
        setTimeout(() => resolve(user), SIMULATE_SLOW_REQUEST_TIMEOUT),
      );
    return expect(getTheUser()).resolves.toBe(user);
  });
});

export {};
