/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
The maximum number of consecutive 1s is 3.

Input: nums = [1,0,1,1,0,1]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxConsecutiveOnes = (nums) => {
  let max = 0;
  let current = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 1) {
      current += 1;
      max = Math.max(max, current);
    } else {
      current = 0;
    }
  }
  return max;
};

module.exports = maxConsecutiveOnes;
