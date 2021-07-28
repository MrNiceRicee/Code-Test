/* eslint-disable no-undef */
const evenNumberDigits = require('./evenNumberDigits');

describe('Even Number Digits', () => {
  test('Should return 2', () => {
    expect(evenNumberDigits([12, 345, 2, 6, 7896])).toBe(2);
  });
  test('Should return 1', () => {
    expect(evenNumberDigits([555, 901, 482, 1771])).toBe(1);
  });
});
