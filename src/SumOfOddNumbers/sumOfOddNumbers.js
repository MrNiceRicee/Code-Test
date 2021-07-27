/*
Given the triangle of consecutive odd numbers:
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

const sumOfOddNumbers = (row) => row ** 3;

module.exports = sumOfOddNumbers;
