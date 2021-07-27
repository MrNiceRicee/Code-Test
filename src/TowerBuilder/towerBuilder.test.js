/* eslint-disable no-undef */
const towerBuilder = require('./towerBuilder');

describe('Tower Builder', () => {
  test('tower 1', () => {
    expect(towerBuilder(1)).toStrictEqual(['*']);
  });
  test('tower 2', () => {
    expect(towerBuilder(2)).toStrictEqual([' * ', '***']);
  });
  test('tower 3', () => {
    expect(towerBuilder(3)).toStrictEqual(['  *  ', ' *** ', '*****']);
  });
});
