/* eslint-disable no-undef */
const sumOfOddNumbers = require('./sumOfOddNumbers');

describe('Sum Of Odd Numbers', () => {
  test('1 should be 1', () => {
    expect(sumOfOddNumbers(1)).toBe(1);
  });
  test('2 should be 8', () => {
    expect(sumOfOddNumbers(2)).toBe(8);
  });
  test('42 should be 74088', () => {
    expect(sumOfOddNumbers(42)).toBe(74088);
  });
});
