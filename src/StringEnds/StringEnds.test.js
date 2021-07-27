/* eslint-disable no-undef */
const stringEnds = require('./StringEnds');

describe('String Ends', () => {
  test('ABCDE, CDE should be true', () => {
    expect(stringEnds('abcde', 'cde')).toBe(true);
  });
  test('ABCDE, CDE should be true', () => {
    expect(stringEnds('abcde', 'abc')).toBe(false);
  });
});
