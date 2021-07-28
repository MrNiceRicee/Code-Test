/* eslint-disable no-undef */
const maxConsecutiveOnes = require('./maxConsecutiveOnes');

describe('Max Consecutive Ones', () => {
  test('Should return 3', () => {
    expect(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3);
  });
  test('Should return 2', () => {
    expect(maxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2);
  });
});
