/* eslint-disable no-undef */
const descendingOrder = require('./decendingOrder');

describe('Decending Order', () => {
  test('41245 should be 54421', () => {
    expect(descendingOrder(41245)).toBe(54421);
  });
  test('145263 should be 654321', () => {
    expect(descendingOrder(145263)).toBe(654321);
  });
  test('123456789 should be 987654321', () => {
    expect(descendingOrder(123456789)).toBe(987654321);
  });
});
