/*
Move the first letter of each word to the end of it,
then add "ay" to the end of the word. Leave punctuation marks untouched.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

const specialChars = (str) => (!/[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/g.test(str));

const simplePigLatin = (str) => str.split(' ').map((word) => (
  specialChars(word)
    ? `${word.slice(1) + word.charAt(0)}ay`
    : word
)).join(' ');

module.exports = simplePigLatin;
