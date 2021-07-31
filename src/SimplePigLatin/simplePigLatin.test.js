/* eslint-disable no-undef */
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const simplePigLatin = require('./simplePigLatin');

describe('Simple Pig Latin', () => {
  test('Pig latin is cool', () => {
    expect(simplePigLatin('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
  });
  test('Hello world !', () => {
    expect(simplePigLatin('Hello world !')).toBe('elloHay orldway !');
  });
});
