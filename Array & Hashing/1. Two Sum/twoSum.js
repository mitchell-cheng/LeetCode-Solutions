/**
 * Time O(N) | Space O(N)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const hashmap = {};

  for (const [index, element] of nums.entries()) {
    const complement = target - element;
    if (complement in hashmap) {
      return [index, hashmap[complement]];
    }
    hashmap[element] = index;
  }
};