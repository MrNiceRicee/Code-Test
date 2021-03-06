/* eslint-disable no-undef */
const squareOfArray = require('./squareOfArray');

describe('Square of Array', () => {
  test('Should return sorted squared Array', () => {
    expect(squareOfArray([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  });
  test('Should return sorted squared Array', () => {
    expect(squareOfArray([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  });
});
