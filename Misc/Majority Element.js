/**
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(n) | Space: O(1)
function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}
