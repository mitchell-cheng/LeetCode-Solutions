/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Time: O(n) | Space: O(n)
function subarraySum(nums, k) {
  let sum = 0;
  let count = 0;
  const map = new Map([[0, 1]]);

  for (const num of nums) {
    sum += num;

    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) ?? 0) + 1);
  }

  return count;
}

console.log(subarraySum([1, 1, 1], 2)); // => 2
