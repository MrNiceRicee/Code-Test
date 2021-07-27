/*
You are given an array (which will have a length of at least 3,
but could be very large) containing integers.
The array is either entirely comprised of odd integers or
entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.
*/

const parityOutlier = (integers) => {
  if (integers.length < 3);
  const evenCounter = [];
  const oddCounter = [];
  for (let i = 0; i < integers.length; i += 1) {
    if (integers[i] % 2 === 0) {
      evenCounter.push(integers[i]);
    } else {
      oddCounter.push(integers[i]);
    }
    if (oddCounter.length > 1 && evenCounter.length === 1) {
      return evenCounter[0];
    } if (evenCounter.length > 1 && oddCounter.length === 1) {
      return oddCounter[0];
    }
  }
  return null;
};

module.exports = parityOutlier;
