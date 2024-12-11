/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Time: O(n) | Space: O(n)
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // => [0, 1]
