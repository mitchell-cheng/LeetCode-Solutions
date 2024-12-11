/**
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(n) | Space: O(n)
function longestConsecutive(nums) {
  const set = new Set(nums);
  let maxLen = 0;

  for (const num of nums) {
    if (!set.has(num - 1)) {
      let length = 0;
      while (set.has(num + length)) {
        length += 1;
      }
      maxLen = Math.max(maxLen, length);
    }
  }

  return maxLen;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // => 4
