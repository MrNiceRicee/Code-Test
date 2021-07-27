/* eslint-disable no-undef */
const parityOutlier = require('./parityOutlier');
describe('Parity Outlier', () => {
  test('even array should return 11', () => {
    expect(parityOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
  });
  test('odd array should return 160', () => {
    expect(parityOutlier([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
  });
  test('even array should return 1', () => {
    expect(parityOutlier([0, 1, 2])).toBe(1);
  });
  test('odd array should return 2', () => {
    expect(parityOutlier([1, 2, 3])).toBe(2);
  });
});
