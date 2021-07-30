/* eslint-disable no-undef */
const oddOrEvenArray = require('./oddOrEvenArray');

describe('Odd or Even Array', () => {
  describe('Edge Cases', () => {
    test('should return even', () => {
      expect(oddOrEvenArray([0])).toBe('even');
    });
    test('should return even', () => {
      expect(oddOrEvenArray([1])).toBe('odd');
    });
    test('should return even', () => {
      expect(oddOrEvenArray([])).toBe('even');
    });
  });
  describe('Even Test', () => {
    test('should return even', () => {
      expect(oddOrEvenArray([0, -1, -5])).toBe('even');
    });
    test('should return even', () => {
      expect(oddOrEvenArray([0, -1, -3])).toBe('even');
    });
    test('should return even', () => {
      expect(oddOrEvenArray([1023, 1, 2])).toBe('even');
    });
  });
  describe('Odd Test', () => {
    test('should return odd', () => {
      expect(oddOrEvenArray([0, -1, 2])).toBe('odd');
    });
    test('should return odd', () => {
      expect(oddOrEvenArray([0, 1, -4])).toBe('odd');
    });
    test('should return odd', () => {
      expect(oddOrEvenArray([1023, 1, 3])).toBe('odd');
    });
  });
});
